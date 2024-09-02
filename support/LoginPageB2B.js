class LoginPage {
    get title() {
        return 'h1.mb-1.h2.fw-bold';
    }

    get prompt() {
        return 'p';
    }

    get emailInput() {
        return '#log-in-email';
    }

    get passwordInput() {
        return '#log-in-password';
    }

    get submitButton() {
        return 'button.btn.btn-primary';
    }

    get forgotPasswordLink() {
        return 'a[href="auth/forgot-password"]';
    }

    enterEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    isSubmitButtonEnabled() {
        return cy.get(this.submitButton).should('not.be.disabled');
    }
}
export default {LoginPage};