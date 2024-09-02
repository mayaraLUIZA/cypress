
import {LoginPage} from '../../support/LoginPageSD'
import logindata from '../../fixtures/dados.json'

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/account/login');
    });

    it('Verifique se o formulário de login é exibido corretamente com todos os campos obrigatórios', () => {
        loginPage.verifyLoginFormDisplayed();
    });

    it('Verifique se o botão "Login" está habilitado quando os campos de nome de usuário e senha estão preenchidos corretamente', () => {
        loginPage.fillLoginForm('testUser', 'testPassword');
        loginPage.isLoginButtonEnabled();
    });

    it('Teste se clicar no link "Esqueci minha senha" redireciona o usuário para a página de recuperação de senha', () => {
        loginPage.forgotPasswordLink.click();
        cy.url().should('include', '/forgot-password'); // Adjust the URL based on the actual recovery page URL
    });

    it('Login de sucesso', () => {
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
    });
});