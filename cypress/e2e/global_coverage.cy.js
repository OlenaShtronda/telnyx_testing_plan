describe('Global Coverage page tests', () => {
  context('desktop resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');   
    });

    it('should display "Global Coverage" page', () => {    
      cy.get('footer [href="/global-coverage"]').click(); 
      cy.url().should('include', '/global-coverage');
      cy.contains('h1', /global coverage/i).should('be.visible');
    });

    it('"Services" tab should be selected by default', () => {  
      cy.get('footer [href="/global-coverage"]').click();   
      cy.contains('button', 'Services').should('have.attr', 'aria-selected', 'true');
    });

    it('should expand the "Search country" dropdown menu after clicking', () => { 
      cy.get('footer [href="/global-coverage"]').click();    
      cy.contains('button', 'Search country').click();
      cy.contains(/Regions/i).should('be.visible');

      cy.contains('button', 'Search country')
        .should('have.attr', 'aria-expanded', 'true')
        .and('have.attr', 'data-state', 'open');
    });

    it('should correctly filter services by country', () => { 
      cy.get('footer [href="/global-coverage"]').click();    
      cy.contains('button', 'Search country').click();
      cy.get('[name="Ukraine"]').click();
      cy.contains('button', '1 filter selected').click();

      cy.get('tbody tr')
        .should('have.length', 1)
        .and('contain', 'Ukraine');
    });
  });
});