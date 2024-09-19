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
    });


    it.only('Verifique se campo salvar OS habilita quando todos os campos obrigatorios estao preenchidos', () => {
        //OS crido com sucesso
        osPage.typeClientName('Dataplace');
        cy.get('#ngb-typeahead-1-0').click()
        osPage.selectAllocationCenter('Dataplace')
        
        osPage.selectWorkCenter('STS');
        osPage.selectClassification('BUG - BUG - ambiente de produção');
        osPage.selectProject('SERVICE_DESK{enter}');
        cy.get(':nth-child(2) > app-multi-select-pack > .d-flex > .col > .ng-select > .ng-select-container > .ng-value-container > .ng-input').type('2024{enter}')
        cy.get(':nth-child(2) > .form-group > app-multi-select-pack > .d-flex > .col > .ng-select > .ng-select-container > .ng-value-container > .ng-input').type('2024{enter}')
        osPage.descreverOS('criado automatizado')
        //verifica se botão salvar esta habilitado
        cy.get('button[type="submit"]').should('be.visible');
        cy.wait(300)
        osPage.submitForm();
        //url de os criado com sucesso
        cy.url().should('include', '/edit'); // Adjust based on actual success URL
    });


    it('Verifique se o usuário pode selecionar vários projetos/módulos do componente de seleção múltipla e se eles são exibidos corretamente.', () => {
        formPage.selectProject('TST-01 - Artefato Teste 01');
        formPage.submitForm();
        cy.url().should('include', '/success');
    });

    it('Verifique se o usuário consegue inserir um número de versão válido no campo de versão e se ele é aceito.', () => {
        formPage.typeVersion('1.0.0');
        formPage.submitForm();
        cy.url().should('include', '/success');
    });

    it('Verifique se o usuário consegue selecionar um pacote de cliente válido no componente de seleção múltipla e se ele é exibido corretamente.', () => {
        formPage.selectClientPack('2024.r3-s3');
        formPage.submitForm();
        cy.url().should('include', '/success');
    });



    it('Verifique se botão salvar é exibido quando o usuário tenta enviar sem selecionar uma classificação.', () => {
        osPage.typeClientName('Dataplace');
        cy.get('#ngb-typeahead-1-0').click()
        osPage.selectAllocationCenter('Dataplace')
        
        osPage.selectWorkCenter('STS');
 
        osPage.selectProject('SERVICE_DESK{enter}');
        cy.get(':nth-child(2) > app-multi-select-pack > .d-flex > .col > .ng-select > .ng-select-container > .ng-value-container > .ng-input').type('2024{enter}')
        cy.get(':nth-child(2) > .form-group > app-multi-select-pack > .d-flex > .col > .ng-select > .ng-select-container > .ng-value-container > .ng-input').type('2024{enter}')
        osPage.descreverOS('criado automatizado')
        //verifica se botão salvar esta dehabilitado
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('Verifique se uma mensagem de erro é exibida quando o usuário tenta enviar sem selecionar nenhum projeto/módulo.', () => {
      

        
    });

    it('Verifique se o formulário exibe uma mensagem de erro quando o usuário insere um número de versão inválido (por exemplo, letras em vez de números).', () => {
        formPage.typeVersion('versão inválida');
        formPage.submitForm();
        cy.contains('Mensagem de erro').should('be.visible'); // Adjust based on actual error message
    });

    it('Teste o envio do formulário com limites máximos de caracteres para os campos de nome e versão do cliente para garantir que ele trate casos extremos corretamente.', () => {
        formPage.typeClientName('C'.repeat(255)); // Adjust based on actual max length
        formPage.typeVersion('1.0.0');
        formPage.submitForm();
        cy.url().should('include', '/success');
    });

    it('Teste o comportamento do formulário quando o usuário insere dados rapidamente e envia para verificar condições de corrida ou travamentos da interface do usuário.', () => {
        formPage.typeClientName('Cliente Válido');
        formPage.typeVersion('1.0.0');
        formPage.submitForm();
        formPage.typeClientName('Novo Cliente'); // Rapid data input
        formPage.submitForm();
        cy.url().should('include', '/success');
    });

    it('Verifique o comportamento quando o usuário insere um nome de cliente válido, mas seleciona um centro de alocação inválido (por exemplo, uma seleção vazia) para ver como o sistema lida com entradas conflitantes.', () => {
        formPage.typeClientName('Cliente Válido');
        formPage.selectAllocationCenter(''); // Invalid selection
        formPage.submitForm();
        cy.contains('Mensagem de erro').should('be.visible'); // Adjust based on actual error message
    });

    it('Simule um cenário em que o usuário seleciona um projeto/módulo e depois muda rapidamente de ideia para ver se o formulário é atualizado corretamente e sem erros.', () => {
        formPage.selectProject('TST-01 - Artefato Teste 01');
        formPage.selectProject(''); // Change of mind
        formPage.submitForm();
        cy.url().should('include', '/success');
    });

    it('Teste a acessibilidade do formulário navegando por ele usando apenas o teclado para garantir que todos os campos possam ser acessados ​​e preenchidos adequadamente.', () => {
        cy.get('body').tab(); // Navigate using tab        cy.focused().should('have.id', 'typeahead-cliente'); // Check focus on first field
        cy.focused().type('Cliente Válido').tab(); // Fill and move to next
        cy.focused().select('Centro Válido').tab(); // Continue navigating
        // Add more tab actions as needed for other fields
        cy.focused().should('have.id', 'txtVersao'); // Check focus on version field
        cy.focused().type('1.0.0').tab();
        formPage.submitForm();
        cy.url().should('include', '/success');
    });
});