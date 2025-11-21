const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'j8mfyg',
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
