const { chromium } = require('playwright');

module.exports = {

    launchBrowser: async function() {
        if (process.env.NODE_PROFILE === "dev") {
            return await chromium.launch({ headless: false, slowMo: 1000 });
        } else {
            return await chromium.launch();
        }
    },

    newPage: async function(browser) {
        const page = await browser.newPage();
        await page.setViewportSize({ width: 1820, height: 980 });
        await page.goto('http://your-site-here.com');
        return page;
    }
};
