const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
      baseUrl: "https://demo.productionready.io/#/register",
    watchForFileChanges: false
  },
  
});
