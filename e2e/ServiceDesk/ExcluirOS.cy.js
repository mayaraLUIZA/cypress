
import {LoginPage} from '../../support/LoginPageSD'
import logindata from '../../fixtures/dados.json'

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/account/login');
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
    });
    
    it('Excluir OS e tentar buscar por ela deve exibir que não encontrou os', () => {
        //ao executar informar numOS existente toda vez
        cy.get('.ml-auto > #typeahead-profissional').type('244165{enter}')
        cy.get('#delete').click()
        cy.get(':nth-child(5) > :nth-child(1) > .btn').click()
        cy.get('.ml-auto > #typeahead-profissional').type('244165{enter}')
        cy.get('.toast-info').should('be.visible')
    })
})