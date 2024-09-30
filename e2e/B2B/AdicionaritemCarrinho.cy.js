import {LoginPage} from '../../support/LoginPageB2B'
import {ProductPage} from '../../support/itemcarrinho'


describe('Product Tests', () => {
    const productPage = new ProductPage();
   // const loginPage= new LoginPage();



    beforeEach(() => {
        cy.visit('https://b2bs.dataplace.app/auth/sign-in');
        productPage.fillLoginForm('teste@teste.com.br','duZb68h@6R');
        cy.get('.d-grid > .btn').click()
        cy.scrollTo('bottom')
    });

    it('Valide se item adicionado', () => {
        cy.scrollTo('top')
        //productPage.setQuantity(1);
        //adicionado 1 quantidade de item 1000014 ao carrinho
        cy.get('[href="/product-detail/2bd1b2b8-d972-4683-8e8d-dea73fe024b2"] > .mb-3').click({force:true})
        productPage.addToCart();
        productPage.assertSuccessMessage("Item adicionado ao carrinho!"); // Adjust the message based on actual implementation
    });

    it.only('Tente adicionar um produto ao carrinho com uma quantidade inválida', () => {
        cy.scrollTo('top');
        cy.get('[href="/product-detail/2bd1b2b8-d972-4683-8e8d-dea73fe024b2"] > .mb-3').click({force:true})
        cy.get('.quantity-field').clear()
        //cy.get('.quantity-field').type('5');
        cy.get('.quantity-field').type('-1');//verificado que esta decrementado a qtd em carrinho, aberto OS para ajuste
        productPage.addToCart();
  
       // cy.get('.error-message').should('contain.text', 'Quantidade inválida'); // Adjust the selector and message based on actual implementation
       //digita letras
        //productPage.setQuantity('abc');
        //productPage.addToCart();
       // cy.get('.error-message').should('contain.text', 'Quantidade inválida'); // Adjust the selector and message based on actual implementation
    });
    it('Tente adicionar um produto ao carrinho e verifica se consta em carrinho', () => {
        cy.scrollTo('top');
        cy.get('[href="/product-detail/2bd1b2b8-d972-4683-8e8d-dea73fe024b2"] > .mb-3').click({force:true})
        cy.get('.quantity-field').clear()
        //cy.get('.quantity-field').type('5');
        cy.get('.quantity-field').type('1');//verificado que esta decrementado a qtd em carrinho, aberto OS para ajuste
        productPage.addToCart();
        cy.get('h1[class="mb-1"]').invoke('text').then(($value) => {
            cy.log($value)
            cy.get('svg[class="feather feather-shopping-bag"]').click()
            cy.get('.offcanvas-body').wait(200).contains($value)
          })
    })
});