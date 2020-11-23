// npm run start
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 250 });
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 }); // Typical laptop
    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `example.png` });
    await browser.close();
})();