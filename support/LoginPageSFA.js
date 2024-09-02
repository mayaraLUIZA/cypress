class LoginPage {
    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#senha');
    }

    get showPasswordCheckbox() {
        return cy.get('#verSenha');
    }

    get loginButton() {
        return cy.get('#Login');
    }

    get forgotPasswordLink() {
        return cy.get('.link-custom');
    }

    enterEmail(email) {
        this.emailInput.type(email);
    }

    enterPassword(password) {
        this.passwordInput.type(password);
    }

    toggleShowPassword() {
        this.showPasswordCheckbox.click();
    }

    submitLogin() {
        this.loginButton.click();
    }

    clickForgotPassword() {
        this.forgotPasswordLink.click();
    }
   
}
export default {LoginPage};