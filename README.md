# Portfolio — Nikita Sidarovich

Personal portfolio website. A clean, responsive, single-page site built with plain
HTML, CSS and JavaScript (no build step) and deployed via GitHub Pages at
[nikitasidarovich.site](https://nikitasidarovich.site/).

## Structure

```
Portfolio/
├── index.html       # All page content
├── css/
│   └── style.css    # Light, professional theme
├── js/
│   └── script.js    # Mobile nav, scroll reveal, scrollspy
├── images/          # Profile photo and project screenshots
├── documents/       # CV / resume downloads (optional)
├── CNAME            # Custom domain for GitHub Pages
└── README.md
```

## Sections

1. **Hero** — name, focus, and quick links
2. **About** — short bio and quick facts
3. **Education** — MSc at Linköping University, Erasmus+ exchange at Università di Genova, and key courses
4. **Skills** — grouped skill tags
5. **Projects** — featured academic and personal work
6. **Contact** — email, LinkedIn, GitHub

## Editing

- **Content:** edit `index.html` directly.
- **Colors / spacing:** adjust the CSS custom properties in the `:root` block of `css/style.css`.
- **Projects:** duplicate a `.project-card` block and add the screenshot to `images/`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
