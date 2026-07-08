@echo off
REM ============================================================
REM  World Cup Football 2026 — GitHub Pages Setup (Windows)
REM  Run ONCE from the soccer_2026 folder
REM  Requires: Git for Windows + GitHub CLI (gh)
REM  Install gh: winget install --id GitHub.cli
REM ============================================================

set REPO_NAME=world-cup-football-2026
set GITHUB_USER=thakurarindam

echo ======================================================
echo   World Cup Football 2026 — GitHub Pages Setup
echo ======================================================

echo [1/4] Initialising git...
git init
git add -A
git commit -m "Initial commit - World Cup Football 2026 Portal"

echo [2/4] Creating GitHub repository...
gh repo create %GITHUB_USER%/%REPO_NAME% --public --description "FIFA World Cup 2026 Fan Portal" --source=. --remote=origin --push

echo [3/4] Setting branch to main...
git branch -M main
git push -u origin main

echo [4/4] Enabling GitHub Pages...
gh api --method POST -H "Accept: application/vnd.github+json" /repos/%GITHUB_USER%/%REPO_NAME%/pages -f "source[branch]=main" -f "source[path]=/"

echo.
echo ======================================================
echo   Done! Your portal will be live at:
echo   https://%GITHUB_USER%.github.io/%REPO_NAME%/
echo   (Takes 1-3 minutes for GitHub Pages to deploy)
echo ======================================================
pause
