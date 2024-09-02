import {LoginPage} from '../../support/LoginPageSFA'
import logindata from '../../fixtures/dados.json'

// <reference types="cypress" />
// Teste Talita 


describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

 
    beforeEach(() => {
        cy.visit('https://sfa-homolog.dataplace.app/account/login');
    });
    

    it.only('Verify that the user can successfully log in with valid credentials', () => {
       // cy.fixture('dados.json').as('logindata')
        loginPage.enterEmail(logindata.emailValid);
        loginPage.enterPassword('Qualidade##1',{ log: false });
        loginPage.submitLogin();
        cy.wait(500)
        cy.get('.ng-trigger').should('contain', 'sucesso'); // Adjust selector based on the welcome message
        cy.url().should('include', '/pedidos?pageIndex=1'); // Adjust the URL based on successful login
      
        
    });

    it('Check that the "Ver senha" checkbox reveals the password when checked and hides it when unchecked', () => {
        loginPage.enterPassword('passwordToReveal');
        loginPage.toggleShowPassword();
        loginPage.passwordInput.should('have.attr', 'type', 'text');
        loginPage.toggleShowPassword();
        loginPage.passwordInput.should('have.attr', 'type', 'password');
    });

    it('Ensure that the "Esqueci minha senha" link redirects the user to the password recovery page', () => {
        loginPage.clickForgotPassword();
        cy.url().should('include', '/password-recovery'); // Adjust based on the actual password recovery URL
    });
});