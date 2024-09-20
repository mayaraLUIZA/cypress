
import {LoginPage} from '../../support/LoginPageSD'
import logindata from '../../fixtures/dados.json'

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/account/login');
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
    });
    
    it('Ao preencher os campos obgigatorios, o botao salvar dever estar habilitado e salvo com sucesso', () => {
        cy.get('[href="/pt/helpdesk/incidente/register/new"]').click()
        cy.get('#typeahead-cliente').type('Dataplace')
        cy.get('#ngb-typeahead-6-0').click()
        cy.get('#typeahead-contato').type('Mayara')
        cy.get('#ngb-typeahead-8-0').click()
        cy.get('#urgencia').select('2');
        cy.get('#impacto').select('2');
        cy.get('#nivel').type('2')
        cy.get('#multiSelectCategorizacaoComponent').type('{enter}')
        cy.get('#typeahead-grupo').type('Dúvida');
        cy.get('#ngb-typeahead-9-0').click()
        cy.get('#descricao').type('test qa')
        
        //verifica se botão salvar esta habilitado na tela
        cy.get('.bg-success').should('be.visible')

        //ao clicar em salvar, verifica se url direciona para novo IN
        cy.get('.bg-success').click()
        cy.url().should('include', '/edit');


    })

    it.only('Quando houver campos obrigatorios não informados, o botao salvar dever estar desabilitado ', () => {
        cy.get('[href="/pt/helpdesk/incidente/register/new"]').click()
        cy.get('app-incidente-edit.ng-star-inserted').should('include.text','obrigatório').should('be.visible')
        cy.get('.bg-success').should('not.exist')
    })
})