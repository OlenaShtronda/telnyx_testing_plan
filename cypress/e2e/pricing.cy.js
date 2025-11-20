describe('Pricing page', () => {
  context('desktop resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
    })

    it('should navigate to the "Pricing" page after clicking the "View all pricing" button', () => {
      cy.get('#main-menu-content').contains('button', 'Pricing').click();
      cy.get('[href="/pricing"]').contains('span', 'View all pricing').click();
      cy.url().should('include', '/pricing');
      cy.contains(/Flexible, transparent pricing with discounts as you scale./i).should('be.visible');
    });
  });
});
