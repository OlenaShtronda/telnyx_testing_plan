export class GlobalCoveragePage {
  globalCoverageText = /global coverage/i;
  searchCountryText = 'Search country';
  servicesText = 'Services';
  regionsText = /Regions/i;
  filterSelectedText = '1 filter selected';

  open() {
    cy.visit('/');
  }

  assertOnGlobalCoveragePage() {
    cy.url().should('include', '/global-coverage');
    cy.contains('h1', this.globalCoverageText).should('be.visible');
  }

  assertServicesTabIsSelected() {
    cy.contains('button', this.servicesText)
      .should('have.attr', 'aria-selected', 'true');
  }

  openSearchCountryDropdown() {
    cy.contains('button', this.searchCountryText).click();
  }

  assertSearchCountryDropdownIsExpanded() {
    cy.contains(this.regionsText).should('be.visible');

    cy.contains('button', this.searchCountryText)
      .should('have.attr', 'aria-expanded', 'true')
      .and('have.attr', 'data-state', 'open');
  }

  selectCountryCheckbox(country) {
    cy.get(`[name="${country}"]`).click();
  }

  closeSearchCountryDropdown() {
    cy.contains('button', this.filterSelectedText).click();
  }

  assertOnlySelectedCountryIsDisplayed(country) {
    cy.get('tbody tr')
      .should('have.length', 1)
      .and('contain', country);
  }
}
