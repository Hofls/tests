module.exports = {

    /**
     * Does not emit the keydown, keyup or keypress events. If you need them - use typeByLabel
      */
    fillByLabel: async function(page, labelSelector, text) {
        await page.click(labelSelector);
        await page.keyboard.press('Tab')
        await page.keyboard.insertText(text);
    },

    typeByLabel: async function(page, labelSelector, text) {
        await page.click(labelSelector);
        await page.keyboard.press('Tab')
        await page.keyboard.type(text);
        await page.keyboard.press('Enter')
    },

    enterByLabel: async function(page, labelSelector) {
        await page.click(labelSelector);
        await page.keyboard.press('Tab')
        await page.keyboard.press('Enter')
    },

    /** Alternative to page.click() */
    click: async function(page, selector) {
        let element = await page.waitForSelector(selector);
        await element.dispatchEvent('click');
    },

    /** Doesn't wait for selector to appear, returns instantly */
    findInstant: async function(page, selector) {
        await page.waitForLoadState();
        return await page.$(selector);
    },

    clickInvisible: async function(page, selector) {
        let element = await page.$(selector);
        await element.dispatchEvent('click');
    },

    //  await pageUtils.hold(page, 'PageDown');
    hold: async function(page, button) {
        for (let i = 0; i < 20; i++) {
            await page.keyboard.press(button);
        }
    },

    clickOnLast: async function(page, selector) {
        await page.waitForSelector(selector);
        let responses = await page.$$(selector);
        await responses[responses.length - 1].click();
    },

    /**
     * When 'document.getSelection()' is not enough
     * Prerequisites:
     * 1. await context.grantPermissions(["clipboard-read", "clipboard-write"]);
     * 2. Page with https
     */
    readSelection: async function(page) {
        await page.evaluate(() => navigator.clipboard.writeText(""));
        await page.keyboard.press('Control+C');
        let chatText = await page.evaluate(() => navigator.clipboard.readText());
        await page.evaluate(() => navigator.clipboard.writeText(""));
        return chatText;
    },

    // expect(pageText.includes('ID - 281737')).toBeTruthy();
    getPageText: async function(page) {
        return await page.evaluate(() => document.body.innerText);
    },

    /** Each frame is different world, it's impossible to reach everything from main page */
    getFrame: async function(page, selector) {
        let element = await page.waitForSelector(selector);
        return await element.contentFrame();
    },

    replaceText: async function(page, text) {
        await page.keyboard.press('Control+A');
        await page.keyboard.press('Delete');
        await page.keyboard.insertText(text);
    },

    /**
     * Prerequisites:
     * let context = await browser.newContext({ acceptDownloads: true });
     */
    waitForDownload: async function(page) {
        let download = await page.waitForEvent('download');
        return await download.path();
    },

    waitForLoader: async function(page) {
        await this.sleep(2);
        let waitingLimit = 25;
        for (let seconds = 0; seconds < waitingLimit; seconds++) {
            let loader = await page.$(`xpath=//div[text()="Loading..."]`);
            if (!loader) {
                return ;
            }
            await this.sleep(1);
        }
    },

    /** Search by dom node property */
    findInputByValue: async function(page, value) {
        await this.sleep(2);
        let inputs = await page.$$('css=input');
        for (let input of inputs) {
            let inputValue = await this.getProperty(input, "value");
            if (inputValue === value) {
                return input;
            }
        }
    },

    readTable: async function(page) {
        let rows = await page.$$("table.x-grid3-row-table");
        let results = [];
        for (let row of rows) {
            let columns = await row.$$('td');
            let result = {
                code: await columns[0].innerText(),
                category: await columns[1].innerText(),
                status: await columns[2].innerText()
            }
            results.push(result);
        }
        return results;
    },

    // await action.clickRightOf(page, 1200, 'text="Select a slot')
    clickRightOf: async function(page, offset, selector) {
        let element = await page.$(selector);
        let box = await element.boundingBox();
        await page.mouse.click(box.x + offset, box.y);
    },

    getProperty: async function(element, property) {
        return await (await element.getProperty(property)).jsonValue();
    },

    sleep: async function(seconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000 * seconds);
        });
    }

};
