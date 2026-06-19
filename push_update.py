#!/usr/bin/env python3
"""
push_update.py — Push all portal changes to GitHub Pages
Run this once to publish the redesigned portal.

Usage:
    python "D:\Claude\soccer_2026\push_update.py" ghp_YOUR_TOKEN

Or set env variable:
    set GITHUB_TOKEN=ghp_xxx
    python "D:\Claude\soccer_2026\push_update.py"
"""
import os, sys, subprocess
from datetime import datetime

REPO_DIR = os.path.dirname(os.path.abspath(__file__))
GITHUB_USER = "thakurarindam"
REPO_NAME   = "world-cup-football-2026"

def run(cmd, check=True):
    result = subprocess.run(cmd, cwd=REPO_DIR, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if check and result.returncode != 0:
        if "nothing to commit" in (result.stdout+result.stderr): return result
        print(f"  WARN: {result.stderr.strip()[:200]}")
    return result

print("=" * 55)
print("  WC 2026 Portal — Pushing redesign to GitHub Pages")
print("=" * 55)

# Get token
token = None
if len(sys.argv) > 1:
    token = sys.argv[1].strip()
    print("  Using token from argument.")
elif os.environ.get("GITHUB_TOKEN"):
    token = os.environ["GITHUB_TOKEN"].strip()
    print("  Using GITHUB_TOKEN env variable.")
else:
    # Try to read from .env file
    env_file = os.path.join(REPO_DIR, ".env")
    if os.path.exists(env_file):
        for line in open(env_file).readlines():
            if line.startswith("GITHUB_TOKEN="):
                token = line.split("=",1)[1].strip()
                print("  Using token from .env file.")
                break

if not token:
    token = input("  Paste GitHub token (ghp_...): ").strip()

token = token.strip('"').strip("'")

# Configure git
run(["git", "config", "user.name", GITHUB_USER], check=False)
run(["git", "config", "user.email", f"{GITHUB_USER}@users.noreply.github.com"], check=False)

# Stage all changes
print("\n  Staging all changes...")
run(["git", "add", "-A"])

# Commit
now = datetime.now().strftime("%Y-%m-%d %H:%M")
msg = f"Redesign - Argentina blue theme, 13 improvements - {now}"
result = run(["git", "commit", "-m", msg], check=False)
if "nothing to commit" in (result.stdout + result.stderr):
    print("  Nothing new to commit.")
else:
    print(f"  Committed: {msg}")

# Set authenticated remote and push
auth_url = f"https://{GITHUB_USER}:{token}@github.com/{GITHUB_USER}/{REPO_NAME}.git"
run(["git", "remote", "set-url", "origin", auth_url], check=False)

print("  Pushing to GitHub...")
result = run(["git", "push", "origin", "main"])
if result.returncode == 0:
    print("  Push successful!")
else:
    run(["git", "push", "origin", "main", "--force"])
    print("  Force-pushed.")

# Restore clean URL (without token)
clean_url = f"https://github.com/{GITHUB_USER}/{REPO_NAME}.git"
run(["git", "remote", "set-url", "origin", clean_url], check=False)

print("\n" + "=" * 55)
print("  Done! Your portal will update in ~1 minute at:")
print(f"  https://{GITHUB_USER}.github.io/{REPO_NAME}/")
print("=" * 55)
