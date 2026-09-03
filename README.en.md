# Emerson Portfolio

This is a professional portfolio website.

## How the website was built

The project was built as a static page, without a backend or framework. The structure was developed with HTML5, the visual identity and responsive layout were created with CSS, and interactivity was implemented with JavaScript.

## Technologies and resources used

- HTML5 for the page structure.
- CSS3 for layout, responsiveness, colors, cards, transitions, and focus states.
- JavaScript for switching languages without reloading the page.
- Inline SVG for the LinkedIn and GitHub icons.
- Relative links for GitHub Pages compatibility.
- GitHub Pages for static hosting.

There is no build step or dependency installation. The published files are the same files versioned in the repository.

## Internationalization

The website has two content versions:

- Brazilian Portuguese.
- English.

The `EN` or `PT` button switches the language directly in the frontend. The texts are stored in the `translations` object in `scripts/main.js`. The language also automatically changes the downloadable resume file.

## Project structure

```text
├── index.html
├── scripts/
│   └── main.js
├── styles/
│   ├── main.css
│   ├── project.css
│   ├── reference.css
│   ├── final.css
│   └── ui-fixes.css
├── documents/
│   ├── Emerson_Bottega_Currículo.pdf
│   └── Emerson_Bottega_Resume.pdf
├── README.md
└── README.en.md
```

## Run locally

From the project root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. To stop the server, press `Ctrl + C` in the terminal.

The `index.html` file can also be opened directly, but the local server better represents how the paths used by GitHub Pages work.

## Compatibility

The project was prepared for static hosting. It does not use a database, server, environment variables, or mandatory external dependencies.
