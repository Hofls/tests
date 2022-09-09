### Info
* Project was generated via `npm init playwright`

### Run locally
* `npm install`
* `npx playwright test --project=chromium --headed`

### Run on server
* `docker build --tag minimal-setup:2.0 .`
* `docker run minimal-setup:2.0`

### Run on schedule in gitlab
* `Project` -> `CI/CD` -> `Schedules` -> `New schedule`
