import {LoginPage} from '../../support/LoginPageB2B'
import logindata from '../../fixtures/dados.json'




//teste
describe('Login Form Tests', () => {
    const loginPage= new LoginPage();

    beforeEach(() => {
        cy.visit('https://b2bs.dataplace.app/auth/sign-in');
        loginPage.enterEmail('teste@teste.com.br');
        loginPage.enterPassword('duZb68h@6R');
        cy.get('.d-grid > .btn').click()
    });

    it('Quando mudar a cotacao o valor de carrinho precisa ser recalculado p devido valor".', () => {
        cy.get('#dropdownBasic1 > .form-check-label > div > .img-fluid').click()

       //mudando para br
       cy.get(':nth-child(2) > :nth-child(1) > .form-check-label > div > small').click()
            
        cy.get('.text-muted > .feather').click()
        cy.get('span[class="row fw-bold justify-content-end"]').each(($el, index) => {
            const valorTexto = $el.text().replace(/[^0-9,]/g, '').replace(',', '.');
         cy.log(valorTexto)
           
        // .each(($el, index) =>{

        //   const precotexto= $el.text().replace(/[^0-9,]/g, '').replace(',', '.');  
        //   const preco = parseFloat(precotexto);
        //   cy.log(preco)

           
       
       //.invoke('text').invoke('replaceAll', 'R$', '',',').then(($value_4) => {
          //  cy.log($value_4)
           
        
        cy.get('.offcanvas-header > .btn-close').click()
        cy.get('#dropdownBasic1 > .form-check-label > div > .img-fluid').click()
        cy.get(':nth-child(2) > .form-check-label > div > small').invoke('text').invoke('replaceAll',"MXN", "").invoke('replace', ":", "").invoke('replace', "R$", "").then(($value_1) => {
            cy.log($value_1)
           
        
            
        //pegando os valores de campos
        cy.get('input[id="3"]').click()
        cy.get('.text-muted > .feather').click()
        cy.get('span[class="row fw-bold justify-content-end"]').each(($el, index) => {
        const valorBr = $el.text().replace(/[^0-9,]/g, '').replace(',', '.')
       cy.log(valorBr)
        
        //.invoke('text').invoke('replaceAll', '$', '',',').then(($value_2) => {
       // cy.log($value_2)
        cy.get('input[class="quantity-field form-control-sm form-input"]').then($elements => {
            const lastFiveElements = $elements.toArray().slice(-4);  
            lastFiveElements.forEach((element) => {
                cy.wrap(element).invoke('val').then((qtd) => {
                  cy.log(qtd); // Loga o texto do elemento

         cy.get('.col-2 > .fw-bold').invoke('text').invoke('replaceAll',"$", "")
         .then((TOTALCONVERTIDO) => {
            cy.log(TOTALCONVERTIDO)
           


             const valorreal= parseFloat(valorTexto);
             //const valorprd = parseInt(valorTexto)
               // const valormxn = parseFloat($value_1);
                cy.log($value_1)
                //const valorcar = parseInt($value_2)
                 const calcdiv=  (valorreal/ 0.28).toFixed(2)
                
                 cy.log(calcdiv)
                              
              //expect(valorBr[index]).to.equal(calcdiv)
                })
            })
               
            })
        })
    })
})
    })
   
})
        
        
        
    })



