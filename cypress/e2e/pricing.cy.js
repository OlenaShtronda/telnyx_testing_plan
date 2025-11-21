describe('Pricing page', () => {
  it('should navigate to the "Pricing" page after clicking the "View all pricing" button', () => {
    cy.visit('/');
    cy.get('#main-menu-content').contains('button', 'Pricing').click();
    cy.get('[href="/pricing"]').contains('span', 'View all pricing').click();
    cy.url().should('include', '/pricing');
    cy.contains(/Flexible, transparent pricing with discounts as you scale./i).should('be.visible');
  });
});
