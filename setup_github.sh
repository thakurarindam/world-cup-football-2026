#!/bin/bash
# ============================================================
# setup_github.sh — One-time GitHub repo setup script
# Run this ONCE from the soccer_2026 folder to create the repo
# and deploy to GitHub Pages.
# ============================================================
# Requirements:
#   - Git installed and configured (git config --global user.email / user.name)
#   - GitHub CLI (gh) installed: https://cli.github.com/
#   - OR: Create the repo manually at github.com and use HTTPS

set -e

REPO_NAME="world-cup-football-2026"
GITHUB_USER="thakurarindam"

echo "======================================================"
echo "  World Cup Football 2026 — GitHub Pages Setup"
echo "======================================================"

# Step 1: Init git
echo "[1/5] Initialising git repository..."
git init
git add -A
git commit -m "🏆 Initial commit — World Cup Football 2026 Portal"

# Step 2: Create GitHub repo (using GitHub CLI)
echo "[2/5] Creating GitHub repository..."
gh repo create "$GITHUB_USER/$REPO_NAME" \
  --public \
  --description "FIFA World Cup 2026 Fan Portal — Live standings, fixtures, Argentina tracker & facts" \
  --source=. \
  --push

# Step 3: Set up GitHub Pages from main branch
echo "[3/5] Enabling GitHub Pages..."
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/$GITHUB_USER/$REPO_NAME/pages \
  -f source='{"branch":"main","path":"/"}' || echo "Pages may already be enabled or needs manual setup"

echo ""
echo "======================================================"
echo "  ✅ DONE! Your portal will be live at:"
echo "  🌐 https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "  GitHub Pages takes 1-3 minutes to deploy."
echo "  Check status at:"
echo "  https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo "======================================================"
