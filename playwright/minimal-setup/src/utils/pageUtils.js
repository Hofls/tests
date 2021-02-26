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

    /** For debug purposes */
    sleep: async function(seconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000 * seconds);
        });
    }

};
