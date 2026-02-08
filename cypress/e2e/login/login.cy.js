import LoginPage from "../../pages/LoginPage";


describe("OrangeHRM Login Test", () => {

  const loginPage = new LoginPage();
beforeEach(() => {
  cy.visit(Cypress.env("loginUrl"));
});


//   beforeEach(() => {
//     cy.visit("https://opensource-demo.orangehrmlive.com");
//   });

  it("Login with valid credentials", () => {

    cy.fixture("loginData").then((data) => {
      loginPage.login(data.username, data.password);
      loginPage.verifyDashboard();
    });

  });

});
