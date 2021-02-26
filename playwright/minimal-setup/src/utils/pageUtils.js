module.exports = {

    fillByLabel: async function(page, labelSelector, text) {
        await page.click(labelSelector);
        await page.keyboard.press('Tab')
        await page.keyboard.insertText(text);
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

    /**
     * When 'document.getSelection()' is not enough
     * Prerequisite: await context.grantPermissions(["clipboard-read", "clipboard-write"]);
     */
    readSelection: async function(page) {
        await page.evaluate(() => navigator.clipboard.writeText(""));
        await page.keyboard.press('Control+C');
        let chatText = await page.evaluate(() => navigator.clipboard.readText());
        await page.evaluate(() => navigator.clipboard.writeText(""));
        return chatText;
    },

    /** For debug purposes */
    sleep: async function(seconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000 * seconds);
        });
    }

};
