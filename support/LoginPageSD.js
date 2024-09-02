
class LoginPage {
    get userNameField() {
        return cy.get('#userName');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('#Login');
    }

    get forgotPasswordLink() {
        return cy.contains('Esqueci minha senha');
    }

    verifyLoginFormDisplayed() {
        this.userNameField.should('be.visible');
        this.passwordField.should('be.visible');
        this.loginButton.should('be.visible');
    }

    fillLoginForm(userName, password) {
        this.userNameField.type(userName);
        this.passwordField.type(password);
    }

    isLoginButtonEnabled() {
        this.loginButton.should('not.be.disabled');
    }
}
export default {LoginPage};