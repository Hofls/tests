### Description
Node.js library to automate Chromium/Firefox/WebKit
* Headless/Headful execution
* Auto-wait for elements to be ready before executing actions (e.g. click, fill)
* Emulate mobile devices, geolocation, permissions
* Support for web components via shadow-piercing selectors
* Parallelization with browser contexts (one browser instance, multiple environments)
* Resilient element selectors (user-facing strings)

### Assertions
* Standard Node.js assertions
```
    const assert = require('assert');
    const userName = await page.innerText('.user-name');
    assert.strictEqual(userName, 'Hofls');
```

