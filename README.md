# Amulya's Birthday Surprise (`birthdaysurprizee`) — Interactive Multimedia Memory Tree

> Dependency-free HTML5, CSS3, and vanilla JavaScript celebration website featuring a Memory Tree visualizer (`memoryTree.html`, `memoryTree.js`), typewriter messages (`js/typewriter.js`), photo timelines (`photos/` & `assets/today/`), background audio (`assets/Audio File.mp3`), and tribute video playback.

[![HTML5](https://img.shields.io/badge/HTML5-Static%20Site-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Executive Overview

**`birthdaysurprizee`** is a static multimedia celebration experience featuring animated greetings (`js/app.js`, `js/typewriter.js`, `js/memories.js`), an interactive memory tree view (`memoryTree.html`, `memoryTree.js`), background audio/video playback, QR sharing asset (`assets/qr-code.png`), and categorized photo folders (`photos/today/`, `photos/degree/`, `photos/people/`, `photos/puc/`, `assets/today/`).

> **Quality & CI Status (`main` vs. Open Draft PR #2 — `maintenance/repository-quality-improvements`):**
> - **PR #2** adds `.gitignore`, automated static HTML/JavaScript/asset verification (`tests/verify_site.mjs`), and `.github/workflows/quality.yml` (verified passing in CI).

---

## Project Structure & Verification

```text
birthdaysurprizee/
├── .github/workflows/quality.yml   # Node verification CI (PR #2)
├── assets/                         # Audio File.mp3, MP4 video, qr-code.png, assets/today/
├── css/                            # Stylesheets
├── js/                             # app.js, memories.js, typewriter.js
├── photos/                         # today/, degree/, people/, puc/
├── tests/verify_site.mjs           # HTML, JS syntax & local link check (PR #2)
├── index.html                      # Main celebration page
├── memoryTree.html                 # Interactive memory tree view
└── memoryTree.js                   # Memory tree interaction logic
```

```bash
# Serve locally to ensure audio/media/paths load cleanly:
python -m http.server 8000

# Run verification script (PR #2):
node tests/verify_site.mjs
```

---

## Contributor Attribution

- **Creator:** Chethan Kumar B S (`StratagemVX`)
- **GitHub:** [https://github.com/StratagemVX](https://github.com/StratagemVX)
- **Portfolio:** [https://chethan-kumar-portfolio.vercel.app/](https://chethan-kumar-portfolio.vercel.app/)
