
module.exports = async function waitForLogs() {
    console.log("Without waiting - container instantly stops after tests, with empty report")
    await sleep(1000);
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}