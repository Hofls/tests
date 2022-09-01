### Info
* `Playwright` - Node.js library for browser automation

### npx playwright
* Generated new project - `npm init playwright`
* Run test generator - `npx playwright codegen playwright.dev`
* Run all tests:
    * `npm install`
    * `npx playwright test --project=chromium --headed`
* Run specific test - `npx playwright test --project=chromium --headed tests/todo-page.spec.ts`
* Show report (after running a test) - `npx playwright show-report`
* Debug - `npx playwright test --project=chromium --headed --debug`

### Selector types
* Text
    * `await page.waitForSelector('text="Successfully"')` (for really strict search look at xpath)
        * `<p>Successfully updated</p>`
    * `await page.click('text=/2020.11.24/');` (regex)
        * `<span>Last visit - 2020.11.24, at 16:43</span>`
* [Css](https://appletree.or.kr/quick_reference_cards/CSS/CSS%20selectors%20cheatsheet.pdf)
    * `await page.fill('css=[placeholder="Enter name"]', 'John');`
        * `<input placeholder="Enter name"/>`
    * `await page.click('css=span.login-area :nth-child(2)');`
        * ```
          <span class="login-area">
            <button/>
            <button/>
          </span>
          ```
    * `await page.fill('css=.lu-modal-body input[placeholder="dd.mm.yyyy"]', '20.11.2020');`
        *  ```
            <div class="lu-modal-body">
              <div>
                <input placeholder="dd.mm.yyyy"/>
              </div>
            </div>
            ```
* [Xpath](https://devhints.io/xpath)
    * `'xpath=//div[text()="Password"]/ancestor::foo'`
        * ```
            <foo>
              <div>Password</div>
            </foo>
          ```
    * `sdFrame.click('xpath=//a[starts-with(text(),"Info about")]');`
        * ```
            <foo>
              <a>Info about product</div>
            </foo>
          ```
* Combining different selector types:
    * `await page.click('xpath=//div >> css=button');`
        * ```
            <button/>
            <div>
                <button/>
            <div>
          ```

### Recipes
##### Read focused element:
* Get selected text
    * `await page.evaluate(() => document.getSelection().toString());`
* Get focused element inner text:
    * `await page.evaluate(() => document.activeElement.innerText);`
* Get focused input value:
    * `await page.evaluate(() => document.activeElement.value);`
    
##### Search elements
* Strict:
    * Matches with "Hello", ignores "Hello World"
    * `await page.click('text="Hello"');`
    * `await page.click(`xpath=//div[text()="Hello"]`);`
* Relaxed:
    * Matches with "Hello", "Hmm Hello World"
    * `await page.click('text=Hello');`
    * `await page.click('text=/Hello/');`
* Regex:
    * `await page.click('text=/He??o/');`
* Find array of elements:
    ```
    let links = await tableFrame.$$(`xpath=//a[starts-with(text(),"SD")]`);
    for (let link of links) {}
    ```
* Click on third "Cancel order" element
    * `await page.click('css=:nth-match(:text("Cancel order"), 3)');`
* Find without waiting for an element to appear
    * `let saveButton = await page.$('text="Save"');`

##### Buttons
* Default click:
    * `await page.click('text="Save button"');`
* Alternative click:
    ```
    let saveButton = await page.waitForSelector('text="Save button"');
    await saveButton.dispatchEvent('click');
    ```

##### iFrames
* Click on button inside iFrame:
    ```
    let element = await page.waitForSelector('css=[title="Frame with buttons"]');
    let frame = await element.contentFrame();
    await frame.click('text="Button in frame"');
    ```

##### Keyboard
* Write text:
    * `await page.keyboard.insertText('SD15880789');`
    * `await page.keyboard.type('SD15880789');`
* Move around the page:
    * `await page.keyboard.press('Tab')`
* Press Enter:
    * `await page.keyboard.press('Enter')`
* Copy text:
    * `await page.keyboard.press('Control+C');`
    