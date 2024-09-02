
import {LoginPage} from '../../support/LoginPageB2B'
import logindata from '../../fixtures/dados.json'


//teste
describe('Login Form Tests', () => {
    const loginPage= new LoginPage();

    beforeEach(() => {
        cy.visit('https://b2bs.dataplace.app/auth/sign-in');
    });

    it('Verifique se o formulário de login é exibido corretamente com o título "Login".', () => {
        cy.get(loginPage.title).should('contain.text', 'Login');
    });

    it('Certifique-se de que o prompt "Entre com seu email e senha!" esteja visível e fácil de ler.', () => {
        cy.get(loginPage.prompt).should('be.visible').and('contain.text', 'Entre com seu e-mail e senha!');
    });

    it('Verifique se o campo de entrada de e-mail aceita formatos de e-mail válidos.', () => {
        const validEmail = 'usuario@exemplo.com';
        loginPage.enterEmail(validEmail);
        cy.get(loginPage.emailInput).should('have.value', validEmail);
    });

    it('Valide se o campo de entrada de senha aceita no mínimo 8 caracteres.', () => {
        const validPassword = 'senha123';
        loginPage.enterPassword(validPassword);
        cy.get(loginPage.passwordInput).should('have.value', validPassword);
    });

    it('Confirme se o botão "Entrar" está habilitado quando um e-mail e uma senha válidos são inseridos.', () => {
        loginPage.enterEmail('usuario@exemplo.com');
        loginPage.enterPassword('senha123');
        loginPage.isSubmitButtonEnabled();


    });

    it('Login com sucesso', () => {
        loginPage.enterEmail('teste@teste.com.br');
        loginPage.enterPassword('duZb68h@6R');
        cy.get('.d-grid > .btn').click()
    });
});