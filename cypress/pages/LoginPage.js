import LoginLocators from "../locators/loginLocators";

class LoginPage {

  locators = new LoginLocators();

  enterUsername(username) {
    cy.get(this.locators.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(this.locators.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.locators.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyDashboard() {
    cy.get(this.locators.dashboardHeader)
      .should("contain.text", "Dashboard");
  }
}

export default LoginPage;
