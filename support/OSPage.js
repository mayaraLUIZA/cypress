class OSPage {
    get clientInput() {
        return cy.get('#typeahead-cliente');
    }

    get allocationCenterSelect() {
        return cy.get('#typeahead-centroalocacao');
    }

    get workCenterSelect() {
        return cy.get('#cCusto');
    }

    get classificationSelect() {
        return cy.get('#classificacaoOs');
    }

    get projectSelect() {
        return cy.get('app-multi-select-artefato ng-select');
    }

    get versionInput() {
        return cy.get('#txtVersao');
    }

    get clientPackSelect() {
        return cy.get('app-multi-select-pack ng-select');
    }
    get DescricaoOS(){
        return cy.get('#descricao');
    }
    get submitButton() {
        return cy.get('.bg-success');
    }

    
    typeClientName(name) {
        this.clientInput.type(name);
    }

    selectAllocationCenter(center) {
        this.allocationCenterSelect.eq(0).click('top');
    }

    selectWorkCenter(center) {
        this.workCenterSelect.select(center);
    }

    selectClassification(classification) {
        this.classificationSelect.select(classification);
    }

    selectProject(project) {
        this.projectSelect.type(project);
    }

    typeVersion(version) {
        this.versionInput.type(version);
    }

    selectClientPack(pack) {
        this.clientPackSelect.select(pack);
    }

    submitForm() {
        this.submitButton.click();
    }
    descreverOS(descricao){
    this.DescricaoOS.type(descricao)
    }
    
}export default {OSPage};
