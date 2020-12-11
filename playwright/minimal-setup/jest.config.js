module.exports = {
    testTimeout: 10 * 60 * 1000,
    globalTeardown: '<rootDir>/src/utils/waitForLogs.js'
}