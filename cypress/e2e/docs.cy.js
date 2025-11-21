describe('Dev Docs page tests', () => {
  it('allows user to type a search query and clear it in the Dev Docs search modal', () => {
    cy.visit('/');
    cy.get('button[aria-label="Search"]').click();

    const newItem = 'keyboard';

    cy.get('#docsearch-input')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search docs')
      .and('be.empty');

    cy.get('#docsearch-input').type(newItem);
    cy.get('#docsearch-input').should('have.value', newItem);

    cy.get('button[aria-label="Clear the query"]').click();
    cy.get('#docsearch-input').should('be.empty');
  });
});
