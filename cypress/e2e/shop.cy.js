describe('Shop page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should have at least 1 item in the cart after adding', () => {
    cy.get('#cart-icon-bubble').should('be.visible').click();
    cy.contains('Your cart is empty').should('be.visible');
    cy.get('button.drawer__close').first().click();
    
    cy.get('[aria-label="Slider"] li')
      .first()
      .contains('button', 'Add to cart')
      .click();
    
    cy.get('tr.cart-item').should('have.length.at.least', 1);
  });

  it('should show an empty cart after removing the last product', () => {
    cy.get('[aria-label="Slider"] li')
      .first()
      .contains('button', 'Add to cart')
      .click();
    
    cy.get('.cart-remove-button').first().click();
    cy.get('tr.cart-item').should('have.length', 0);
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should change currency to USD and verify prices', () => {
    cy.get('button.localization-form__select').click();

    cy.get('#FooterCountryList')
      .contains('span.localization-form__currency', 'USD')
      .click();

    cy.get('button.localization-form__select').should('contain.text', 'USD');
    cy.get('.product-grid li').first().should('contain.text', '$');
  });
});
