module.exports = {

    /** Minimal test example */
    run: async function(page) {
        await page.click('text="Continue"');
        await page.click('text="Quit"');
    }
};
