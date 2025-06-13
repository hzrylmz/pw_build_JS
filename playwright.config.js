// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
 dotenv.config({
   path: `./env/.env.${process.env.ENV }`,
  });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

// Assign process.env to env for easier reference
const env = process.env;

export default defineConfig({

  reporter: 'html',
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: env.baseURL || 'https://borusannext.com',

    headless: false,// Run tests in headless mode by default,
     // Slow down actions by 500ms to see the test execution more clearly
    

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Set the viewport size for all tests */
    // viewport: undefined, // Use the browser's default window size (windowed mode)
    /* Set the default timeout for actions */
    viewport: undefined, // Full HD for full page
    launchOptions: {
      slowMo: 500, // Slow down actions by 500ms to see the test execution more clearly
      //headless: false, // Run tests in headless mode by default
      // Start the browser maximized
      //args: ['--start-maximized'], // Start the browser maximized 
    },
    //actionTimeout: 10000,
    /* Set the default timeout for assertions */
    //timeout: 30000,
    /* Enable video recording for all tests */
  
    screenshot: 'only-on-failure',
    /* Set the locale for the browser */
   
 

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /* 
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

