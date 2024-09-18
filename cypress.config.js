const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'support/e2e.js',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    parseSpecialCharSequences: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
    
  },
});
