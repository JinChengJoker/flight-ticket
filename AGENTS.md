# Repository Guidelines

## Project Structure & Module Organization

This repository is a static, browser-run Vue application with no package manager or compilation step.

- `index.html` contains the input form and opens the appropriate ticket view.
- `flight-ticket.html` renders the standard itinerary; `flight-ticket-iata.html` renders the passport/IATA variant.
- `data.js` defines individual flight segments, `routes.js` combines them into selectable routes, and `ticket.js` calculates dated itineraries across time zones.
- `static/` contains vendored JavaScript, Element Plus assets, Day.js plugins, and the IATA logo. Keep third-party files versioned and do not edit minified assets directly.

Load-order matters: ticket pages must load `data.js`, then `routes.js`, then `ticket.js`.

## Build, Test, and Development Commands

No build or dependency-install command is required. Serve the repository over HTTP so relative assets and pop-up pages behave consistently:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Use `git diff --check` before committing to catch whitespace errors. There is currently no automated test or lint command.

## Coding Style & Naming Conventions

Use two-space indentation in HTML and JavaScript. Follow the quote and semicolon style of the surrounding file; avoid unrelated formatting churn. Prefer `const` and `let`, camelCase for functions and local variables (`quickSelect90Days`), PascalCase for classes (`Ticket`), and uppercase identifiers for flight records (`JNB_DXB_EK764`). Route values use lowercase airport codes separated by underscores, such as `jnb_cmb`. Keep user-facing copy in Simplified Chinese and airline/airport data in its established source format.

## Testing Guidelines

Manually test changes in a modern browser. Cover one-way and round-trip submissions, routes with single and multiple legs, cross-day/time-zone arrivals, and both outputs (with and without a passport number). Verify the generated page renders, dates and durations are plausible, print layout is intact, and the browser console has no errors. Data changes should exercise every affected route in both directions.

## Commit & Pull Request Guidelines

Recent history favors short Conventional Commit subjects such as `feat: ...`, `fix: ...`, and `refactor: ...`; use an imperative, narrowly scoped subject. Pull requests should explain the user-visible change, list routes and date cases tested, and link any relevant issue. Include screenshots for form, ticket, or print-layout changes. Never commit real passenger names, passport numbers, or other personal data.
