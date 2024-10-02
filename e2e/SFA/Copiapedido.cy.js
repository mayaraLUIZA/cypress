import {PedidosPage} from '../../support/pedidoPage'
import logindata from '../../fixtures/dados.json'


describe('Testes de Pedidos', () => {
    const pedidosPage = new PedidosPage();

    beforeEach(() => {
       
        cy.visit('https://sfa-homolog.dataplace.app/pedidos/3e7445e2-796c-4bf7-bfcd-29751e7c2d6c/detalhar');
        cy.get('#email').type('raul.mariano@dataplace.com.br');
        cy.get('#senha').type('Qualidade##1',{ log: false });
        cy.get('#Login').click();
       
    });

    it('Realizar copia de pedido com sucesso".', () => {
        cy.contains('button', 'Copiar').click();
        cy.get(':nth-child(5) > :nth-child(1) > .btn').click()
        cy.wait(100)
        cy.get('.ng-trigger').should('contain','Pedido copiado com sucesso!')

    })
})