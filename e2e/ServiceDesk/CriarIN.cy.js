
import {LoginPage} from '../../support/LoginPageSD'
import logindata from '../../fixtures/dados.json'

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/account/login');
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
    });
    
    it('Ao preencher os campos obg botão de salvar deve ficar habilitado e salvo com sucesso', () => {
        cy.get('[href="/pt/helpdesk/incidente/register/new"]').click()
    })
})