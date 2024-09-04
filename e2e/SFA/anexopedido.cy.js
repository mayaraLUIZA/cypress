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

    it('Teste a experiência do usuário quando um usuário tenta enviar um arquivo maior que o limite permitido por meio do botão "Anexos".', () => {
        pedidosPage.clickAnexos();
        // Simulate file upload with a large file
    
        cy.get("input[type='file']").eq(1).selectFile('OneDriveSetup.exe', {force:true})
        cy.wait(200)
        // Add assertion to check if an error message is displayed
        cy.get('.ng-trigger').should('contain', 'Arquivo excedeu o tamanho máximo de 50 MB');
    });
    it('Inseri arquivo já existe em pedido, deve exibir mensagem".', () => {
        pedidosPage.clickAnexos();
        // Simulate file upload with a large file
        cy.get("input[type='file']").eq(1).selectFile('ver.png', {force:true})
        cy.get('.ng-trigger').should('contain', 'Já existe um arquivo com o nome informado: ver.png!');
    })

});