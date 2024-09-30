class ClientesDatilPage {
    get tipoInscricao() {
        return cy.get('#tpInscricao');
    }

    get cnpjInput() {
        return cy.get('#inscricaoFederal');
    }

    get inscricaoEstadualInput() {
        return cy.get('#inscricaoEstadual');
    }

    get razaoSocialInput() {
        return cy.get('#razaoSocial');
    }

    get fantasiaInput() {
        return cy.get('#fantasia');
    }

    get ativoCheckbox() {
        return cy.get('#ativo');
    }

    get informacoesAdicionaisTextarea() {
        return cy.get('[formcontrolname="informacoesAdicionais"]');
    }

    get telefoneInput() {
        return cy.get('<input _ngcontent-jrc-c185="" type="text" placeholder="" maxlength="60" class="form-control ng-pristine ng-valid ng-touched" id="8b4aef69-c57d-4701-8110-194134889efa">')
    }

    get emailInput() {
        return cy.get('input[id="a19af9fb-0cbd-4669-b24a-40d0e9beef3d"]').eq(0)
    }

    get cepInput() {
        return cy.get('#endereco_cep');
    }

    get logradouroInput() {
        return cy.get('#endereco_logradouro');
    }

    get numeroInput() {
        return cy.get('#endereco_numero');
    }

    get complementoInput() {
        return cy.get('#endereco_complemento');
    }

    get bairroInput() {
        return cy.get('#endereco_bairro');
    }

    get cidadeInput() {
        return cy.get('#endereco_cidade');
    }

    get estadoSelect() {
        return cy.get('#endereco_Estado select');
    }

    get vendedorInput() {
        return cy.get('#Colaborador');
    }

    get tabelaPrecoInput() {
        return cy.get('#tabelaPreco');
    }

    get naturezaOperacaoInput() {
        return cy.get('#naturezaOperacao');
    }

    get segmentoInput() {
        return cy.get('#segmento');
    }

    get valorMinimoPedidoInput() {
        return cy.get('#valorMinimoPedido');
    }

    get statusCreditoSelect() {
        return cy.get('#statusCredito');
    }

    get tipoFretePadraoSelect() {
        return cy.get('#tipoFretePadrao');
    }

    get excecaoFiscalInput() {
        return cy.get('#ExcecaoFiscal');
    }

    get submitButton() {
        return cy.get('#submit');
    }

    get cancelarButton() {
        return cy.get('.btn-secondary')
    }

    fillForm(cnpj, razaoSocial, fantasia, cep, logradouro, numero, bairro, cidade, estado) {
        this.tipoInscricao.select('2'); // Select "Física"
        this.cnpjInput.type(cnpj);
        this.razaoSocialInput.type(razaoSocial);
        this.fantasiaInput.type(fantasia);
       //this.telefoneInput.type(telefone);
        //this.emailInput.type(email);
        this.cepInput.type(cep);
        this.logradouroInput.type(logradouro);
        this.numeroInput.type(numero);
       // this.complementoInput.type(complemento);
        this.bairroInput.type(bairro);
        this.cidadeInput.type(cidade);
        this.estadoSelect.select(estado);
    }
}

export const clientesDetailPage = new ClientesDatilPage();
