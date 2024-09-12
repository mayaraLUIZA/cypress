class ProductPage {
    get addToCartButton() {
        return  'div[class="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid"]';
    }

    get quantityField() {
        return '.quantity-field';
    }

    get addToCartSuccessMessage() {
        return '.swal2-popup'; // Adjust this selector based on the actual success message element
    }

    
    get emailInput() {
        return cy.get('#log-in-email');
    }

    get passwordInput() {
        return cy.get('#log-in-password');
    }

    addToCart() {
        cy.get(this.addToCartButton).click().click().click()
        ;
    }

    setQuantity(quantity) {
        cy.get(this.quantityField).type(quantity);
    }

    assertSuccessMessage(message) {
        cy.get(this.addToCartSuccessMessage).should('contain.text', message);
    }

    fillLoginForm(userName, password) {
        this.emailInput.type(userName);
        this.passwordInput.type(password);

    }
}export default {ProductPage};
