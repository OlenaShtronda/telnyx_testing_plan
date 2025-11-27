import { devDocsPage } from '../pageobjects/DevDocsPage';

describe('Dev Docs page tests', () => {
  let testData;

  before(() => {
    cy.fixture('docsTestData').then((data) => {
      testData = data;
    });
  });

  it('displays matching results when a user types a search item in the Dev Docs search modal', () => {
    testData.searchTerms.forEach((searchTerm) => {
      cy.log(`Testing search term: ${searchTerm}`);
      
      devDocsPage.open();
      devDocsPage.clickSearchButton();
      devDocsPage.assertSearchFieldIsVisibleAndEmpty();
      devDocsPage.typeSearchItem(searchTerm);
      devDocsPage.assertSearchFieldHasSearchItem(searchTerm);
      devDocsPage.assertFirstSearchResultHasSearchItem(searchTerm);
    })
  });
});
