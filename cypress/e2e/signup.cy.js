describe('Sign-up form content tests', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  it('should display all required form fields and checkboxes', () => {
    const selectors = [
      '#email',
      '#first_name',
      '#last_name',
      '#password',
      '#terms_and_conditions',
      '#subscription_opt_in'
    ];

    selectors.forEach(selector => {
      cy.get(selector).should('be.visible');
    });
  });

  it('should reveal promo code field with correct labels when clicking "Apply a promo code"', () => {
    cy.get('#promo_code').should('not.exist');

    cy.contains('button', 'Apply a promo code')
      .should('be.visible')
      .click();

    cy.get('#promo_code').should('be.visible');

    cy.get('label[for="promo_code"]')
      .should('contain.text', 'Promo code')
      .and('contain.text', 'Optional');
  });
});