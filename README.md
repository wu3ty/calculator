# Stefan's Calculator Demo

A tiny Vue 3 + Vite project you can use to demonstrate CI/CD with GitHub Actions.  
It includes unit tests (Vitest + Vue Test Utils) and a workflow that runs on every push and pull request.

## Quick start (local)

```bash
make install
make dev
```

Open http://localhost:5173

Run tests:

```bash
make test
# or CI-style one-off:
make test-ci
```

Run linting:

```bash
make lint
```

## GitHub Actions

This repo contains a workflow at `.github/workflows/node.js.yml` that:

- Checks out your code
- Uses Node 20
- Installs dependencies with `make install`
- Builds the app
- Runs the tests

The job triggers on every push and pull request.

## What to show in your lecture

- Open a PR that changes `src/utils/math.js` (e.g., break addition) and watch the CI fail.
- Fix the code or tests and push again to see CI go green.
- Add a second job (optional) for deploy to GitHub Pages to extend the demo.
