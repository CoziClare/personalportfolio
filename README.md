# Clare Zhang — Personal Portfolio

Premium, results-driven landing page for data strategy and AI consulting services.

## Pages

- `index.html` — Homepage with services and impact metrics
- `start-project.html` — 3-step project inquiry form with FormSubmit email delivery

## Local development

```bash
cp config.example.js config.js   # then edit with your real email and Zoom link
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Publishing to GitHub Pages

1. **Never commit `config.js`** — it is gitignored and contains your private Zoom link.
2. In your GitHub repo, go to **Settings → Secrets and variables → Actions** and add:
   - `OWNER_EMAIL` — e.g. `cielcc68@outlook.com`
   - `ZOOM_LINK` — your full permanent Zoom room URL
3. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. The workflow generates `config.js` from secrets at deploy time.

## FormSubmit

On first submission, FormSubmit emails the owner an **Activate Form** link. Click it once to enable inquiry delivery.
