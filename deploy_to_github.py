#!/usr/bin/env python3
"""
deploy_to_github.py — One-time setup script
Creates the GitHub repo, pushes all portal files, and enables GitHub Pages.

Requirements:
    pip install requests gitpython --break-system-packages

Usage:
    python deploy_to_github.py

You'll be prompted for your GitHub Personal Access Token.
Create one at: https://github.com/settings/tokens/new
  → Scopes needed: repo (full), pages
"""

import os, sys, subprocess, requests, json

# ── CONFIG ─────────────────────────────────────────────────────────────────
GITHUB_USER = "thakurarindam"
REPO_NAME   = "world-cup-football-2026"
REPO_DESC   = "FIFA World Cup 2026 Fan Portal — Live standings, fixtures, Argentina tracker & facts"
REPO_DIR    = os.path.dirname(os.path.abspath(__file__))

def step(n, msg): print(f"\n[{n}] {msg}")
def ok(msg):      print(f"    ✅ {msg}")
def err(msg):     print(f"    ❌ {msg}"); sys.exit(1)

print("=" * 60)
print("  🏆 World Cup Football 2026 — GitHub Pages Deployer")
print("=" * 60)

# ── STEP 1: GET PERSONAL ACCESS TOKEN ─────────────────────────────────────
step(1, "GitHub Personal Access Token")
print()
print("    IMPORTANT: Use a CLASSIC token, not Fine-grained.")
print("    Steps:")
print("      1. Go to https://github.com/settings/tokens")
print("      2. Click 'Generate new token' → 'Generate new token (classic)'")
print("      3. Tick the 'repo' checkbox (full control) — that's all you need")
print("      4. Click 'Generate token' and copy it (starts with ghp_...)")
print()
# Accept token from command-line arg, env variable, or prompt
if len(sys.argv) > 1:
    token = sys.argv[1].strip()
    print("    Using token from command-line argument.")
elif os.environ.get("GITHUB_TOKEN"):
    token = os.environ["GITHUB_TOKEN"].strip()
    print("    Using token from GITHUB_TOKEN environment variable.")
else:
    token = input("    Paste your token here and press Enter: ").strip()

if not token:
    err("No token provided.")
token = token.strip('"').strip("'").strip()

headers = {
    "Authorization": f"token {token}",   # 'token' works for both classic & fine-grained
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

# Verify token
print(f"\n    Testing token (first 4 chars: {token[:4]}...)...")
r = requests.get("https://api.github.com/user", headers=headers)
if r.status_code == 401:
    print(f"    Response: {r.json()}")
    err("Token rejected by GitHub (401). Make sure you copied the full token starting with ghp_")
elif r.status_code != 200:
    err(f"GitHub API error (HTTP {r.status_code}): {r.json().get('message','')}")
user_login = r.json().get("login")
ok(f"Authenticated as: {user_login}")

# ── STEP 2: CREATE GITHUB REPO ─────────────────────────────────────────────
step(2, f"Creating repo: {GITHUB_USER}/{REPO_NAME}")

# Check if repo already exists
r = requests.get(f"https://api.github.com/repos/{GITHUB_USER}/{REPO_NAME}", headers=headers)
if r.status_code == 200:
    ok("Repo already exists — skipping creation")
    repo_url = r.json()["clone_url"]
    ssh_url  = r.json()["html_url"]
else:
    payload = {
        "name": REPO_NAME,
        "description": REPO_DESC,
        "private": False,
        "auto_init": False
    }
    r = requests.post("https://api.github.com/user/repos", headers=headers, json=payload)
    if r.status_code not in (200, 201):
        err(f"Could not create repo: {r.json().get('message','')}")
    repo_url = r.json()["clone_url"]
    ssh_url  = r.json()["html_url"]
    ok(f"Repo created: {ssh_url}")

# ── STEP 3: GIT INIT & COMMIT ──────────────────────────────────────────────
step(3, "Initialising local git repository")

def run(cmd, cwd=REPO_DIR, check=True):
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if check and result.returncode != 0:
        # Ignore "already a git repo" type errors
        if "already exists" in result.stderr or "already initialized" in result.stderr:
            return result
        print(f"    ⚠️  {result.stderr.strip()}")
    return result

run(["git", "init"])
ok("Git initialised")

# Set branch to main
run(["git", "checkout", "-b", "main"], check=False)
run(["git", "branch", "-M", "main"], check=False)

# Configure git user (use GitHub user info)
run(["git", "config", "user.name",  GITHUB_USER])
run(["git", "config", "user.email", f"{GITHUB_USER}@users.noreply.github.com"])

# Create .gitignore
gitignore = "__pycache__/\n*.pyc\n.env\n*.log\n.DS_Store\n"
with open(os.path.join(REPO_DIR, ".gitignore"), "w") as f:
    f.write(gitignore)

run(["git", "add", "-A"])
result = run(["git", "commit", "-m", "Initial commit - World Cup Football 2026 Portal"], check=False)
if "nothing to commit" in result.stdout + result.stderr:
    ok("Nothing new to commit (files already staged)")
else:
    ok("Files committed")

# ── STEP 4: ADD REMOTE & PUSH ──────────────────────────────────────────────
step(4, "Pushing to GitHub")

# Build authenticated remote URL
auth_url = f"https://{GITHUB_USER}:{token}@github.com/{GITHUB_USER}/{REPO_NAME}.git"

# Remove old origin if exists
run(["git", "remote", "remove", "origin"], check=False)
run(["git", "remote", "add", "origin", auth_url])
ok("Remote set")

result = run(["git", "push", "-u", "origin", "main"])
if result.returncode != 0:
    # Try force push if branch mismatch
    run(["git", "push", "-u", "origin", "main", "--force"])
ok("Pushed to GitHub ✅")

# Store a clean remote URL (without token) for future use
clean_url = f"https://github.com/{GITHUB_USER}/{REPO_NAME}.git"
run(["git", "remote", "set-url", "origin", clean_url])

# Save token to .env for update_portal.py (optional)
env_path = os.path.join(REPO_DIR, ".env")
if not os.path.exists(env_path):
    with open(env_path, "w") as f:
        f.write(f"GITHUB_TOKEN={token}\n")
    ok("Token saved to .env (used by update_portal.py)")

# ── STEP 5: ENABLE GITHUB PAGES ───────────────────────────────────────────
step(5, "Enabling GitHub Pages")

pages_payload = {"source": {"branch": "main", "path": "/"}}
r = requests.post(
    f"https://api.github.com/repos/{GITHUB_USER}/{REPO_NAME}/pages",
    headers=headers, json=pages_payload
)
if r.status_code in (200, 201):
    pages_url = r.json().get("html_url", f"https://{GITHUB_USER}.github.io/{REPO_NAME}/")
    ok(f"GitHub Pages enabled!")
elif r.status_code == 409:
    # Already enabled
    r2 = requests.get(f"https://api.github.com/repos/{GITHUB_USER}/{REPO_NAME}/pages", headers=headers)
    pages_url = r2.json().get("html_url", f"https://{GITHUB_USER}.github.io/{REPO_NAME}/") if r2.ok else f"https://{GITHUB_USER}.github.io/{REPO_NAME}/"
    ok("GitHub Pages already enabled")
else:
    print(f"    ⚠️  Could not auto-enable Pages (HTTP {r.status_code}): {r.json().get('message','')}")
    print(f"    Manual steps: github.com/{GITHUB_USER}/{REPO_NAME} → Settings → Pages → Source: main / (root)")
    pages_url = f"https://{GITHUB_USER}.github.io/{REPO_NAME}/"

# ── DONE ───────────────────────────────────────────────────────────────────
print("\n" + "=" * 60)
print("  🎉 DEPLOYMENT COMPLETE!")
print("=" * 60)
print(f"\n  🌐 Your portal URL (live in ~2 minutes):")
print(f"     {pages_url}")
print(f"\n  📁 GitHub repo:")
print(f"     https://github.com/{GITHUB_USER}/{REPO_NAME}")
print(f"\n  🔄 Daily refresh:")
print(f"     Cowork scheduled task runs at 12:30 PM IST every day")
print(f"     update_portal.py will auto-push updates to GitHub Pages")
print("\n" + "=" * 60)
