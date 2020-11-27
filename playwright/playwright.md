### Description
Node.js library to automate Chromium/Firefox/WebKit
* Headless/Headful execution
* Auto-wait for elements to be ready before executing actions (e.g. click, fill)
* Emulate mobile devices, geolocation, permissions
* Support for web components via shadow-piercing selectors
* Parallelization with browser contexts (one browser instance, multiple environments)
* Resilient element selectors (user-facing strings)

### Selectors
* Text
    * `await page.waitForSelector('text="Successfully updated"')`
        * `<p>Successfully updated</p>`
    * `await page.click('text=/2020.11.24/');`
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
    * `await page.fill('css=.lu-modal-body [placeholder="dd.mm.yyyy"]', '20.11.2020');`
        *  ```
            <div class="lu-modal-body">
              <div>
                <input placeholder="dd.mm.yyyy"/>
              </div>
            </div>
            ```
* [Xpath](https://devhints.io/xpath)
    * 