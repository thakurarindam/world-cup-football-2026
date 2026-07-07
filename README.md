# 🏆 FIFA World Cup 2026 — Fan Portal

A live, data-driven fan portal for the 2026 FIFA World Cup hosted across the USA, Canada & Mexico.

🔗 **Live site:** https://thakurarindam.github.io/world-cup-football-2026/

---

## Features

- **Home** — Today's matches in IST, upcoming fixtures, star matches to watch, and Golden Boot race
- **Groups & Schedules** — All 12 groups with live standings, results, and full fixture list (all times in IST)
- **Teams** — All 48 countries with FIFA 3-letter codes, FIFA rankings, group standings, country info, and key squads
- **Argentina** — Dedicated page for the defending champions with Group J standings, fixtures, path to the final, player fitness tracker, news, and full 26-man squad with Wikipedia player photos
- **Facts & Records** — Tournament records, notable moments, and history

---

## Tech Stack

- Pure HTML / CSS / JavaScript — no frameworks, no build step
- Single `data.js` file drives all dynamic content across every page
- Hosted on **GitHub Pages** (free static hosting)
- Player photos fetched live from the **Wikipedia API** (no CDN dependency)
- All match times stored in UTC and converted to **IST (UTC+5:30)** in the browser

---

## Project Structure

```
soccer_2026/
├── index.html          # Home page — today's matches, standings summary, star matches
├── groups.html         # Groups & Schedules — all 12 groups, fixtures, standings
├── teams.html          # All 48 teams — cards with FIFA rank, squads, country info
├── argentina.html      # Argentina dedicated page
├── facts.html          # Facts & Records page
├── css/
│   └── style.css       # Global dark-theme stylesheet
├── js/
│   └── data.js         # Single source of truth — all match data, standings, squads
├── push_update.py      # Deploy script — commits and pushes to GitHub Pages
└── .env                # GitHub token (not committed — local only)
```

---

## Updating Match Data

All data lives in `js/data.js`. To update after a matchday:

**1. Update group standings** — edit the `groups` object:
```js
{ id:"ARG", P:2, W:2, D:0, L:0, GF:6, GA:0, GD:6, Pts:6, form:["W","W"] }
```

**2. Update fixture status and scores** — change `status` from `"UP"` to `"FT"` and add score:
```js
{ ..., status:"FT", score:{h:3, a:0}, events:[...] }
```

**3. Deploy** — run the push script from the project folder:
```bash
python push_update.py
```
The script reads the GitHub token from `.env` automatically. The live site updates within ~1 minute.

---

## IST Time Conversion

All fixture times in `data.js` are stored as **UTC strings** (without the `Z` suffix). The JS appends `Z` before parsing:

```
IST = UTC + 5:30
EDT = UTC − 4:00  (all group stage matches are in EDT venues)
So: IST = EDT + 9:30
```

Example: A match at 3:00 PM ET = 19:00 UTC → 00:30 AM IST (next day).

---

## Scheduled Auto-Refresh

A daily scheduled task runs at **12:30 PM IST** to keep the data current. The task is managed via the Claude Cowork scheduled tasks system.

---

## Deployment

```bash
# First time — set up your GitHub token in .env
echo GITHUB_TOKEN=ghp_your_token_here > .env

# Deploy any time after editing files
python push_update.py
```

GitHub Pages serves the site from the `main` branch at:
`https://thakurarindam.github.io/world-cup-football-2026/`

---

## Data Sources

- Match schedule & results: [FIFA.com](https://www.fifa.com) / [WorldCupWiki](https://worldcupwiki.com)
- FIFA World Rankings: FIFA.com (as of June 11, 2026)
- Argentina squad: Official FIFA 26-man submission (June 3, 2026)
- Player photos: [Wikipedia Commons API](https://en.wikipedia.org/w/api.php) (fetched live, no storage)
- Fitness & news: goal.com / AFA official / Sky Sports / ESPN

---

*Built with Claude · Deployed on GitHub Pages · Last data update: June 19, 2026*
