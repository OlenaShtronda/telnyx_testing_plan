class DevDocsPage {
  searchButton = '#search-bar-entry';
  searchField = '#search-input';
  searchResult = 'div[role="option"]';

  open() {
    cy.visit('/');
  }

  clickSearchButton() {
    cy.get(this.searchButton).click();
  }

  assertSearchFieldIsVisibleAndEmpty() {
    cy.get(this.searchField)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search...')
      .and('be.empty');
  }

  typeSearchItem(item) {
    cy.get(this.searchField).type(item);
  }

  assertSearchFieldHasSearchItem(item) {
    cy.get(this.searchField).should('have.value', item);
  }

  assertFirstSearchResultHasSearchItem(item) {
    cy.get(this.searchResult).first().contains(item, {matchCase: false});
  }
}

export const devDocsPage = new DevDocsPage();
