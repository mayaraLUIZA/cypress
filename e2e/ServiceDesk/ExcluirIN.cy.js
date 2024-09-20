
import {LoginPage} from '../../support/LoginPageSD'
import logindata from '../../fixtures/dados.json'

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/account/login');
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
    });
    
    it('Excluir IN e tentar buscar por ela deve exibir que não encontrou IN', () => {
        //ao executar informar numIN existente toda vez
        cy.get('.ml-auto > #typeahead-profissional').type(' 24261004{enter}')
        cy.get('.btn-secondary').click()
        cy.get(':nth-child(5) > :nth-child(1) > .btn').click()
        cy.get('.ml-auto > #typeahead-profissional').type(' 24261004{enter}')
        cy.get('.ng-trigger').should('be.visible')
    })
})