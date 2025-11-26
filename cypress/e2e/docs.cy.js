import { DevDocsPage } from '../pageobjects/DevDocsPage';

const devDocsPage = new DevDocsPage();

describe('Dev Docs page tests', () => {
  it('displays matching results when a user types a search item in the Dev Docs search modal', () => {
    devDocsPage.open();
    devDocsPage.clickSearchButton();

    const newItem = 'key';

    devDocsPage.assertSearchFieldIsVisibleAndEmpty();
    devDocsPage.typeSearchItem(newItem);
    devDocsPage.assertSearchFieldHasSearchItem(newItem);
    devDocsPage.assertFirstSearchResultHasSearchItem(newItem);
  });
});
