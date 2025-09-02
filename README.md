# SZOP B.A.V. One-Page Site

- Static one-page (index.html) with EN/RU switch (localStorage remembers choice).
- Belarusian-style red/white ornament bars are used as decorative separators.
- Logos placed under `assets/logos/` (Rodríguez, Wyke Farms, Fiorucci, ElPozo). 
- Brand logo placeholder is `assets/logos/szop-logo.jpg` (replace with your final SZOP B.A.V. logo PNG/SVG if needed).

## Deploy on GitHub Pages
1. Create a new GitHub repo.
2. Upload all files from this folder to the repo root.
3. In repo Settings → Pages → Build and deployment → Source = "Deploy from a branch", Branch = "main", Folder = "/root".
4. Save — the site will be available at `https://<your-username>.github.io/<repo-name>/`.

---

## Quick deploy (this repo)
- Keep `main` branch.
- Push all files to the repo root.
- Ensure **Settings → Pages** has **Build and deployment: GitHub Actions** (or "Deploy from a branch" on `main`/root).
- This repo already contains:
  - `.nojekyll`
  - `.github/workflows/pages.yml`
They make Pages deploy automatically on each push.
