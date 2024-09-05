import { clientesDetailPage } from '../../support/ClientesDatilPage';

describe('Clientes Detail Form Tests', () => {
    beforeEach(() => {
        cy.visit('https://sfa-homolog.dataplace.app/clientes/new');
        cy.get('#email').type('mayara.moraes@dataplace.com.br')
        cy.get('#senha').type('Morais@06')
        cy.get('#Login').click()

    });

    it('Verifique se o formulário pode ser enviado com sucesso com todos os campos obrigatórios preenchidos corretamente.', () => {
        clientesDetailPage.fillForm(
            '86063671099', // CNPJ válido
            'Razão Social Teste',
            'Nome Fantasia Teste',
           // '(11) 91234-5678',
            //'teste@exemplo.com',
            '17400052',
            'Rua Teste',
            '545',
            'Bairro Teste',
            'Cidade Teste',
            'SP'
        );

        clientesDetailPage.submitButton.click();
        cy.wait(200)
        // Adicione uma assertiva para verificar a mensagem de sucesso
        cy.get('.ng-trigger').should('contain', 'Cliente registrado');
    });

    it('Quando cnpj invalido, o Sistema não deve salvar o cliente', () => {
        clientesDetailPage.fillForm(
            '11', // CNPJ inválido
            'Razão Social Teste',
            'Nome Fantasia Teste',
           // '(11) 91234-5678',
            //'teste@exemplo.com',
            '17400052',
            'Rua Teste',
            '545',
            'Bairro Teste',
            'Cidade Teste',
            'SP'
        );

        clientesDetailPage.submitButton.click();
        cy.wait(200)
        // Adicione uma assertiva para verificar que não há mensagens de erro
        cy.get('.ng-trigger').should('contain', 'é inválido');
    });


    it.only('Certifique-se de que o botão "Cancelar" redirecione o usuário de volta para a página ou formulário anterior sem salvar as alterações.', () => {
        clientesDetailPage.cancelarButton.click();

        // Adicione uma assertiva para verificar se o usuário foi redirecionado
        cy.url().should('eq', 'https://sfa-homolog.dataplace.app/home');
    });
});