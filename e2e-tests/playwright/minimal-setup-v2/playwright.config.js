const { devices } = require('@playwright/test');

// require('dotenv').config();

const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  retries: 2,
  workers: 1,
  reporter: [ ['html', { open: 'never' }] ],
  use: {
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],
};

module.exports = config;
