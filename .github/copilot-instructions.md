# Copilot Instructions for this repository ✅

## Quick summary
- Project: a small Create React App project in `day1/` (React 19, `react-scripts` 5). The rest of the workspace contains standalone learning/demo JS files that are not part of the CRA app.
- Primary entry points: `day1/package.json` (scripts), `day1/src/index.js`, `day1/src/App.js`.

---

## What an AI agent should know (practical, repo-specific) 🔧
- Build & dev workflow
  - Start dev server: `cd day1 && npm start` → opens http://localhost:3000 (CRA dev server). Do NOT run `node src/index.js` directly (source files are not runnable by Node without bundling).
  - Run tests: `cd day1 && npm test` (uses `@testing-library/react`, tests live in `src/*.test.js`). Example test: `src/App.test.js` uses `render(<App />)` and `screen.getByText()`.
  - Create production build: `cd day1 && npm run build` → output to `day1/build/`.

- Project structure & patterns
  - This is a typical CRA app structure: `public/` for static HTML/assets, `src/` for React code and tests.
  - Functional components only (see `src/App.js`). Use default exports for components as seen in `App.js` and `index.js` (`export default App`).
  - Assets are imported as modules (e.g., `import logo from './logo.svg'`) — follow this pattern for images and other static assets.
  - Tests are co-located with source files and use React Testing Library (see `src/App.test.js`). Keep test file suffix `.test.js`.
  - Performance helper: `src/reportWebVitals.js` uses dynamic import of `web-vitals`. If you need performance measurements, call `reportWebVitals(console.log)` from `src/index.js`.

- Linting & formatting
  - ESLint config is provided by CRA (`eslintConfig` in `day1/package.json` extends `react-app` rules). `react-scripts` runs linting during start/build.

- Common pitfalls for this workspace
  - There are many standalone JS demos in sibling folders (e.g., `Day-1 29jan/`, `Day-2 30jan/`). These are NOT part of the CRA app. Avoid editing them unless the user's goal is to update learning materials.
  - Do not assume running `node` on files in `src/` will work—use the CRA scripts.

---

## Example tasks and how to approach them 💡
- Add a new component
  1. Create `src/components/MyComp.js` with a default-exported functional component.
  2. Add CSS in `src/components/MyComp.css` and import it in the component.
  3. Add `src/components/MyComp.test.js` using `@testing-library/react` and run `npm test`.

- Add a dependency
  - From repo root: `cd day1 && npm install <pkg>`; update imports in `src/` and add tests that mock or verify behavior.

- Debugging the running app
  - Use browser DevTools + React DevTools while running `npm start`.
  - For build errors look at the terminal where `npm start` or `npm run build` was run — CRA prints helpful stack traces.

---

## Files to reference for patterns and examples 📁
- `day1/package.json` — scripts and dependency manifest
- `day1/src/index.js` — app bootstrapping (uses `ReactDOM.createRoot`)
- `day1/src/App.js` — canonical functional component example
- `day1/src/App.test.js` — testing pattern and assertions
- `day1/public/index.html` — HTML template / %PUBLIC_URL% notes
- `day1/src/reportWebVitals.js` — optional performance hook

---

## Constraints for AI edits ✅
- Prefer edits inside `day1/src/` for app changes; avoid modifying demo files in other day folders unless asked.
- When adding code, follow existing conventions: functional components, default exports, co-located tests.
- Keep changes small and testable. Run `npm test` after modifications and ensure `npm start` still serves without build-time errors.

---

If anything above is unclear, or you want more explicit examples (e.g., a starter component + test PR), tell me which area to expand and I’ll update this file. 👋