import {OSPage} from '../../support/OSPage'
import logindata from '../../fixtures/dados.json'
import {LoginPage} from '../../support/LoginPageSD'


describe('Form Submission Tests', () => {
    const osPage = new OSPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('http://172.16.1.21:6200/pt/helpdesk/ordem-servico/register/new');
        loginPage.fillLoginForm('mayara.moraes@dataplace.com.br','Qualidade100')
        cy.get('#Login').click()
        cy.get('#typeahead-profissional').type('244185{enter}')
        cy.get(':nth-child(5) > .nav-link').click()
    });


    it('Criado card com sucesso', () => {
   
        cy.contains('button', 'Novo Card').click();
        cy.get('body > ngb-modal-window > div > div > app-ordem-servico-projeto-planejamento-add > div.modal-body > form > div > div:nth-child(1) > div.form-group.col-md-5 > app-select-profissionais > ng-select > div > div > div.ng-input > input[type=text]')
        .type('mayara{enter}')
        cy.get('#dtPrevisao').type('2024-11-14')
        cy.get('#alocado').clear().type('1')
        cy.get('input[type="radio"').click()
        cy.get('#submit').click()
        .should('be.visible')


    })

    it.only('Ao encerrar OS, o card deve ser movido para DONE', () => {
    
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('#situacao').select(8) //10 //8
        cy.get('.bg-success').click({force:true})
        cy.get(':nth-child(5) > .nav-link').click()

        cy.get('div[id="done-container"] >app-projeto-planejamento-card').should('have.length', 10)//verifica qtd de card que esta em done
        //verifica se em to do ,doing, to test e testing não tem cards

        cy.get('div[id="do-do-container"] >app-projeto-planejamento-card').should('have.length', 0); 
        cy.get('div[id="doing-container"] >app-projeto-planejamento-card').should('have.length', 0); 
        cy.get('div[id="to-test-container"] >app-projeto-planejamento-card').should('have.length', 0); 
        cy.get('div[id="testing-container"] >app-projeto-planejamento-card').should('have.length', 0); 


    })
})