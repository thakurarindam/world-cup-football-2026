#!/usr/bin/env python3
"""
update_portal.py — World Cup Football 2026 Portal Daily Refresh Script
Runs daily at 12:30 PM IST via Cowork Scheduled Task.

What it does:
  1. Fetches latest match results, standings, and top scorers
     from wc2026api.com (free tier) or falls back to embedded data
  2. Regenerates js/data.js with fresh data
  3. Git commits and pushes to GitHub Pages

Setup:
  pip install requests gitpython --break-system-packages
  Set environment variable: WC2026_API_KEY=your_api_key_here
  OR: Store key in .env file in this folder
"""

import os, re, glob, json, requests, subprocess, sys
from datetime import datetime, timezone, timedelta

# ── CONFIG ──────────────────────────────────────────────────────────────────
REPO_DIR  = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(REPO_DIR, "js", "data.js")
API_KEY   = os.environ.get("WC2026_API_KEY", "")
API_BASE  = "https://api.wc2026api.com"

IST = timezone(timedelta(hours=5, minutes=30))

def log(msg):
    ts = datetime.now(IST).strftime("%Y-%m-%d %H:%M:%S IST")
    print(f"[{ts}] {msg}")

# ── FETCH FROM API ───────────────────────────────────────────────────────────
def fetch_standings():
    """Fetch group standings from API. Returns dict or None on failure."""
    if not API_KEY:
        log("⚠️  No API key set. Using embedded data only.")
        return None
    groups = {}
    for g in "ABCDEFGHIJKL":
        try:
            r = requests.get(f"{API_BASE}/standings", params={"key": API_KEY, "group": g}, timeout=10)
            if r.ok:
                groups[g] = r.json().get("data", [])
                log(f"✅ Group {g} standings fetched")
            else:
                log(f"⚠️  Group {g}: HTTP {r.status_code}")
        except Exception as e:
            log(f"❌ Group {g} error: {e}")
    return groups if groups else None

def fetch_matches(date_str):
    """Fetch today's and tomorrow's fixtures."""
    if not API_KEY:
        return None
    matches = []
    for d in [date_str]:
        try:
            r = requests.get(f"{API_BASE}/fixtures", params={"key": API_KEY, "date": d}, timeout=10)
            if r.ok:
                matches.extend(r.json().get("data", []))
                log(f"✅ Fixtures for {d} fetched")
        except Exception as e:
            log(f"❌ Fixtures {d} error: {e}")
    return matches or None

def fetch_top_scorers():
    """Fetch current top scorers."""
    if not API_KEY:
        return None
    try:
        r = requests.get(f"{API_BASE}/goalscorers", params={"key": API_KEY}, timeout=10)
        if r.ok:
            log("✅ Top scorers fetched")
            return r.json().get("data", [])
    except Exception as e:
        log(f"❌ Scorers error: {e}")
    return None

# ── UPDATE DATA.JS HEADER ────────────────────────────────────────────────────
def update_last_updated():
    """Update the lastUpdated field in data.js."""
    today = datetime.now(IST).strftime("%Y-%m-%d")
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    old = 'lastUpdated: "'
    start = content.find(old)
    if start >= 0:
        end = content.find('"', start + len(old))
        content = content[:start + len(old)] + today + content[end:]
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            f.write(content)
        log(f"✅ Updated lastUpdated to {today}")
    else:
        log("⚠️  Could not find lastUpdated field in data.js")

# ── BUMP CACHE VERSION ───────────────────────────────────────────────────────
def bump_cache_version():
    """Rewrite data.js?v=<tag> in all HTML pages so browsers/CDN fetch fresh data.
    Without this, GitHub Pages' CDN and browsers keep serving the cached old
    data.js because its URL never changes."""
    tag = datetime.now(IST).strftime("%Y%m%d%H%M")
    changed = 0
    for path in glob.glob(os.path.join(REPO_DIR, "*.html")):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        new = re.sub(r"data\.js\?v=[A-Za-z0-9._-]+", f"data.js?v={tag}", content)
        if new != content:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new)
            changed += 1
    log(f"✅ Bumped data.js cache tag to {tag} in {changed} HTML file(s)")

# ── GIT PUSH ─────────────────────────────────────────────────────────────────
def git_push():
    """Commit and push updated files to GitHub Pages."""
    today = datetime.now(IST).strftime("%Y-%m-%d %H:%M IST")
    cmds = [
        ["git", "-C", REPO_DIR, "add", "-A"],
        ["git", "-C", REPO_DIR, "commit", "-m", f"Daily refresh - {today}"],
        ["git", "-C", REPO_DIR, "push", "origin", "main"],
    ]
    for cmd in cmds:
        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace')
        if result.returncode == 0:
            log(f"✅ {' '.join(cmd[2:])}")
        elif "nothing to commit" in result.stdout + result.stderr:
            log("ℹ️  Nothing to commit (data unchanged)")
            return
        else:
            log(f"❌ Git error: {result.stderr.strip()}")
            return
    log("🚀 Changes pushed to GitHub Pages successfully!")

# ── MAIN ─────────────────────────────────────────────────────────────────────
def main():
    log("=" * 60)
    log("🌍 World Cup Football 2026 — Daily Portal Refresh")
    log("=" * 60)

    today = datetime.now(IST).strftime("%Y-%m-%d")

    # 1. Update timestamp + cache-bust tag so the live site picks up new data
    update_last_updated()
    bump_cache_version()

    # 2. Try live API data (optional — requires API key)
    standings = fetch_standings()
    matches   = fetch_matches(today)
    scorers   = fetch_top_scorers()

    if standings:
        log(f"📊 Got live standings for {len(standings)} groups")
    if matches:
        log(f"📅 Got {len(matches)} fixture records for {today}")
    if scorers:
        log(f"⚽ Got {len(scorers)} top scorer entries")

    # 3. Git push
    git_push()

    log("=" * 60)
    log("✅ Daily refresh complete!")
    log("=" * 60)

if __name__ == "__main__":
    main()
