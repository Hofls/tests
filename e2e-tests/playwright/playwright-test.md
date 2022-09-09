### npx playwright
* Generate new project - `npm init playwright`
* Run test generator - `npx playwright codegen playwright.dev`
* Run all tests:
    * `npm install`
    * `npx playwright test --project=chromium --headed`
* Run specific test - `npx playwright test --project=chromium --headed tests/todo-page.spec.ts`
* Show report (after running a test)
    * Look at `playwright-report/index.html`, or execute `npx playwright show-report`
* Debug - `npx playwright test --project=chromium --headed --debug`

### 
* Assertions:
    * `await expect(page.locator('text="Task done!"')).toBeVisible();`
    * `await expect(page.locator('.status')).not.toContainText('error');`
    * `await expect(page).toHaveScreenshot('expected-map.png');`
    * `await expect(page.locator('list > .component')).toHaveCount(3)`;