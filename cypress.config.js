const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 70000,
  taskTimeout: 18000,
  execTimeout: 18000,
  pageLoadTimeout: 18000,
  requestTimeout: 15000,
  responseTimeout: 90000,
  viewportWidth: 1500,
  viewportHeight: 1700,
  video: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:spec', (spec) =>{

        console.log('Running', spec.relative)

      })
      // implement node event listeners here
    },
    baseUrl: 'https://amices.testing.amicar.com/amices',
    experimentalRunAllSpecs:true,
  },
});
