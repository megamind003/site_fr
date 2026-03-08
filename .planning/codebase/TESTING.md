# Testing Patterns

## Current Testing Stack

- The repository has no integrated test runner configured in `package.json` scripts (no `test`, `test:unit`, `test:e2e`).
- A standalone Playwright smoke script exists at `test-playwright.js` using `require('playwright')` and direct Chromium control.
- `.eslintrc.json` and TypeScript config do not include testing-specific rule/plugins or test type globals.
- `package-lock.json` references `@playwright/test`, but the project does not currently expose a Playwright test config or test suite layout using that runner.

## Test File Structure in This Codebase

- No `*.test.*` / `*.spec.*` files were found under `src`.
- Testing is currently script-based rather than framework-based:
  - Single executable script: `test-playwright.js`.
  - No `tests/`, `e2e/`, or `__tests__/` folder conventions established yet.

## Existing E2E/Smoke Test Behavior

The script in `test-playwright.js` performs an ad-hoc end-to-end smoke check:

- Launches headless Chromium and opens `http://localhost:3000/it`.
- Captures and prints:
  - console warnings/errors,
  - page errors,
  - failed network requests,
  - page title, first H1, and nav link text.
- Saves a full-page screenshot to `/tmp/home-it.png`.
- Checks for broken images by reading `naturalWidth`.
- Reads loaded stylesheet metadata and font availability.
- Clicks one navigation link and reports resulting URL.

This is diagnostic-oriented and log-heavy; it is not assertion-driven test automation.

## Assertion and Failure Model

- No formal `expect(...)` assertions are used.
- Failures are primarily implicit via thrown Playwright errors (timeouts, navigation failures) or manual review of console output.
- No JUnit/JSON reporter output, snapshots, retries, or CI-oriented reporting is configured.

## Mocking and Test Doubles

- There is currently no mocking framework usage (`jest`, `vitest`, `sinon`, etc.).
- The current smoke script does not mock network, browser APIs, or module boundaries.
- Test data is production-like runtime content from the live app instance.

## Coverage and Quality Gates

- No coverage tooling is configured (no Istanbul/c8/Vitest/Jest coverage integration).
- No test-based quality gate is wired into scripts or lint/build flow.
- Current quality gate is effectively `next lint` + manual smoke script execution when used.

## Practical Testing Conventions to Follow (Based on Current State)

- Keep quick manual verification scripts under repository root only if they are clearly diagnostic.
- Prefer migration toward framework-backed tests with deterministic assertions:
  - E2E: Playwright Test with `playwright.config.*` and `tests/e2e/*.spec.ts`.
  - Component/unit: Vitest/Jest for isolated logic and component behavior.
- Add explicit test npm scripts (`test`, `test:e2e`, `test:unit`) before scaling test footprint.
- Introduce stable fixtures and mocking patterns once API/data dependencies are added.
- Track coverage only after a baseline test suite exists to avoid misleading metrics.

## Observed Gaps (Important for Future Contributors)

- No automated regression suite is currently present.
- No standardized mocking strategy exists yet.
- No coverage threshold or test execution in CI is defined.
- The single Playwright script is useful for local smoke diagnostics but not sufficient as a long-term testing standard.
