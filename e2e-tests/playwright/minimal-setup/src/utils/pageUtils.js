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
    readAll: async function(page) {
        await page.keyboard.press('Control+A');
        await page.evaluate(() => navigator.clipboard.writeText(""));
        await page.keyboard.press('Control+C');
        let chatText = await page.evaluate(() => navigator.clipboard.readText());
        await page.evaluate(() => navigator.clipboard.writeText(""));
        return chatText;
    },

    /** Each frame is different world, it's impossible to reach everything from main page */
    getFrame: async function(page, selector) {
        let element = await page.waitForSelector(selector);
        return await element.contentFrame();
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

    /** For debug purposes */
    sleep: async function(seconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000 * seconds);
        });
    }

};
