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

    it('Verifique se o botão "Gerar Pedido" está habilitado quando todos os campos obrigatórios estiverem preenchidos corretamente.', () => {
        pedidosPage.fillFormWithValidData();
        pedidosPage.gerarPedidoButton.should('not.be.disabled');
    });

    it('Verifique se clicar no botão "Visualizar" exibe os detalhes corretos do pedido em uma nova visualização ou modal.', () => {
        pedidosPage.clickVisualizar();
        cy.get('#pedido_main > div > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(1)').should('include.text','NATALIA CRISTIE DO PRADO')
        // Add assertion to check if the modal or new view is displayed
    });

    it('Certifique-se de que o botão "Enviar por email" envie um email com os detalhes corretos do pedido para o endereço de email especificado.', () => {
        pedidosPage.clickEnviarEmail();
        // Add assertion to check if the email was sent correctly
    });

    it('Confirme se clicar no botão "Cancelar" exibe uma caixa de diálogo de confirmação antes de cancelar o pedido.', () => {
        pedidosPage.clickCancelar();
        pedidosPage.dialogConfirm.should('be.visible');
    });

    it('Valide se o botão "Copiar" duplica os detalhes do pedido corretamente na área de transferência.', () => {
        pedidosPage.clickCopiar();
        // Add assertion to check if the details are copied to clipboard
    });

    it.only('Certifique-se de que o botão "Anexos" permite que os usuários carreguem e visualizem anexos relacionados ao pedido.', () => {
        pedidosPage.clickAnexos();
        //sem arquivo anexado deve dar erro de arquivo não encontrado
        cy.get('tr.ng-star-inserted > :nth-child(2) > .nav-link').click()

        // Add assertion to check if file upload functionality works
    });

    it('Verifique se as informações do cliente exibidas são precisas e correspondem ao cliente selecionado.', () => {
        pedidosPage.clienteInfo.should('contain', 'NATALIA CRISTIE DO PRADO'); // Adjust as needed
    });

    it('Clique no botão "Gerar Pedido" enquanto o formulário estiver em estado inválido e verifique se a ação não foi executada.', () => {
        pedidosPage.clickGerarPedido();
        pedidosPage.submitButton.should('be.disabled');
    });

    it('Simule um cenário em que um usuário preenche todos os campos corretamente, clica em "Gerar Pedido" e, em seguida, clica rapidamente em "Cancelar".', () => {
        pedidosPage.fillFormWithValidData();
        pedidosPage.clickGerarPedido();
        pedidosPage.clickCancelar();
        // Add assertion to check if the order was not processed
    });

    it('Teste a experiência do usuário quando um usuário tenta enviar um arquivo maior que o limite permitido por meio do botão "Anexos".', () => {
        pedidosPage.clickAnexos();
        // Simulate file upload with a large file
        // Add assertion to check if an error message is displayed
        pedidosPage.errorMessage.should('contain', 'File size exceeds limit');
    });
});