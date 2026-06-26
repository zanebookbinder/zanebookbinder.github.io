# CLAUDE.md

Personal portfolio website for Zane Bookbinder, hosted at https://zanebookbinder.github.io.

## Structure

The repo root is mostly a shell — the actual app lives in `personal-website/`, a
Create React App project.

- `personal-website/` — the React app (run all npm commands from here)
  - `src/components/` — one folder per page/feature
    - `App.js` — top-level routing (uses `HashRouter`)
    - `HomePage/`, `ExperiencePage/`, `AboutMePage/`, `ResumePage/`, `BCRPage/` — page components
    - `NavBar/`, `PageNotFound.js` — shared UI
    - `CustomAccordion.js`, `HighlightBlock.js` — reusable components
  - `src/images/` — image assets (page + project images)
  - `public/` — static assets and `index.html`
  - `build/` — production build output (generated; do not edit by hand)

Routes are defined in `src/components/App.js`: `/`, `/experience`, `/aboutme`,
`/resume`, `/bcr`, and a `*` 404. Routing uses `HashRouter`, so live URLs look
like `zanebookbinder.github.io/#/aboutme`.

Stack: React 18, React Router 6, Material UI (MUI), React Bootstrap,
FontAwesome / react-icons.

## Development

```bash
cd personal-website
npm install     # first time only
npm start       # dev server at http://localhost:3000
npm test        # interactive test runner
npm run build   # production build into build/
```

## Deployment

Deployed to GitHub Pages from the `gh-pages` branch using the `gh-pages` package.

```bash
cd personal-website
npm run deploy  # runs predeploy (build) then pushes build/ to the gh-pages branch
```

Source code lives on `main`; the published site is served from the `gh-pages`
branch. Commit source changes to `main` as usual, then run `npm run deploy` to
publish.
