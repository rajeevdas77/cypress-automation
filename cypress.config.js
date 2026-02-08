const { defineConfig } = require("cypress");
const allureWriter = require("allure-cypress/reporter");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    allowCypressEnv: true,
     env: {
      loginUrl: "/web/index.php/auth/login"
    },
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
