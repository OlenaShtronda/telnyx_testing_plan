const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    projectId: 'j8mfyg',
    video: true,
    screenshotOnRunFailure: true,
    specPattern: [
      "cypress/e2e/*cy.js",
      "!cypress/e2e/shop.cy.js",
      "!cypress/e2e/docs.cy.js"
    ]
  },
});
