<!-- .github/copilot-instructions.md
     Generated guidance for AI coding agents to be productive in this repo.
     NOTE: workspace appears empty when this was created; assumptions are called out below.
--> 

# Copilot instructions — Playwright UI test project (assumptions)

- Repo name detected: `Playwright_UI_Test`. At the time of generation the workspace had no source files. This file documents discoverable and inferred patterns commonly used in Playwright UI test projects and lists the exact filenames an agent should inspect if they exist.

## Quick contract

- Inputs: the codebase files (look for `package.json`, `playwright.config.(ts|js)`, `tests/`, `src/` or `pages/`).
- Outputs: add or modify tests, page-objects, CI workflow files, or small utilities; update `package.json` scripts when adding commands.
- Error modes: if target files are missing, create minimal scaffold and add a clear TODO comment referencing maintainers.

## Big-picture architecture to look for

- Test runner: Playwright — expect a `playwright.config.ts` (or `.js`) at repository root. This controls browsers, projects, timeouts, retries and reporters.
- Tests: usually under `tests/` or `specs/` with files named `*.spec.ts` / `*.test.ts`.
- Reusable helpers: `src/` or `tests/helpers/` often contain fixtures, utilities, or `page objects` (e.g. `pages/LoginPage.ts`).
- Data/config: look for `package.json` scripts, `.env` or an `env`/`config` file. CI secrets map to `process.env` values.

## Project-specific workflows (what an agent should run/edit)

- Install and bootstrap:
  - Node >=16/18 is expected. Typical commands (Windows PowerShell):
    - `npm ci` (install dependencies from lockfile)
    - `npx playwright install` (install browser binaries)
- Run tests locally:
  - `npx playwright test` — default CI-friendly run
  - `npx playwright test --headed --project=chromium` — debug single project
  - `npx playwright show-report` — view latest HTML report
- Useful package.json script names to prefer/expect: `test`, `test:headed`, `test:report`, `lint`.

## Conventions and patterns to follow (only documentable items)

- Tests: use `test()` / `test.describe()` from `@playwright/test`. Files end with `.spec.ts`.
- Fixtures: prefer Playwright fixtures (in `tests/fixtures.ts` or `src/fixtures/`) over ad-hoc global state. If a `global-setup` exists, inspect `playwright.config` for its location.
- Page objects: name classes like `LoginPage`, `DashboardPage` under `src/pages/` or `tests/pages/`. Methods should return meaningful actions (e.g., `login(username, password)`), not raw selectors.
- Selectors: prefer `data-test` or `data-testid` attributes. If repository uses CSS/XPath, mirror that style.

## Integration points and external dependencies

- Browsers: Playwright manages browser binaries; CI must call `npx playwright install --with-deps` if using system images.
- Environment/config: look for `process.env.BASE_URL`, `API_TOKEN`, or `TEST_USER_*`. Use `.env` locally; CI injects secrets.
- CI: expect a GitHub Actions workflow at `.github/workflows/ci.yml` (if present). If not present, create `ci.yml` that runs `npm ci`, `npx playwright install`, and `npx playwright test --reporter=github`.

## How to modify safely (merge guidance)

- If `.github/copilot-instructions.md` already exists, preserve any project-specific examples and keep the "assumptions" block updated. Add a short changelog line at the bottom when you modify the file.
- When creating new tests or pages: add one failing test first (red -> green) and push a short PR with test name, reason, and how to run it locally in the PR description.

## Files to check (in priority order)

1. `package.json` — scripts and dependencies
2. `playwright.config.ts` or `playwright.config.js` — runner options and projects
3. `tests/` or `specs/` — test suites
4. `src/pages/` or `tests/pages/` — page objects
5. `.github/workflows/ci.yml` — CI pipeline
6. `README.md` — any project notes or run instructions

## Helpful examples (what to look for)

- Example script in `package.json` to prefer:

  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:report": "playwright show-report"
  }

- Example Playwright conventions to recognize:
  - test files: `tests/login.spec.ts`
  - page object: `src/pages/LoginPage.ts` with `async login(user, pass)`
  - fixtures: `tests/fixtures.ts` that exports `test` with custom fixtures

---
_If you want, I can update this with exact examples pulled from the repository once you open the project files or grant access to the source. Reply with any preferred local commands, Node versions, or CI constraints and I'll iterate._
