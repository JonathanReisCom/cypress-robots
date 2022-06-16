const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",

  // testFiles: "**/*.{feature,features}",
  // e2e: {
  //   // We've imported your old cypress plugins here.
  //   // You may want to clean this up later by importing these.
  //   setupNodeEvents(on, config) {
  //     return require('./cypress/plugins/index.js')(on, config)
  //   },
  // },
  reporterOptions: {
    mochaFile: "cypress/results/output.xml",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
