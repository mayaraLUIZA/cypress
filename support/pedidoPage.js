class PedidosPage {
    get gerarPedidoButton() { return cy.get('button:contains("Gerar Pedido")'); }
    get visualizarButton() { return cy.get('button:contains("Visualizar")'); }
    get enviarEmailButton() { return cy.get('button:contains("Enviar por e-mail")'); }
    get cancelarButton() { return cy.get('button:contains("Cancelar")'); }
    get copiarButton() { return cy.get('button:contains("Copiar")'); }
    get anexosButton() { return cy.get('button:contains("Anexos")'); }
    get clienteInfo() { return cy.get('div:contains("Cliente")'); }
    get submitButton() { return cy.get('#submit'); }
    get errorMessage() { return cy.get('.error-message'); } // Assuming error message has this class
    get dialogConfirm() { return cy.get('.dialog-confirm'); } // Assuming confirmation dialog has this class
    get inputFields() { return cy.get('input'); } // Assuming all input fields can be selected this way
    
    fillFormWithValidData() {
        // Fill in all required fields with valid data
        this.inputFields.each(($el) => {
            cy.wrap($el).type('2024/09/04'); // Replace with actual valid data
        });
    }
    
    clickGerarPedido() {
        this.gerarPedidoButton.click();
    }
    
    clickVisualizar() {
        this.visualizarButton.click();
    }
    
    clickEnviarEmail() {
        this.enviarEmailButton.click();
    }
    
    clickCancelar() {
        this.cancelarButton.click();
    }
    
    clickCopiar() {
        this.copiarButton.click();
    }
    
    clickAnexos() {
        this.anexosButton.click();
    }
}
export default {PedidosPage};