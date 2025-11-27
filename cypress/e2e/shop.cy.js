import { shopPage } from "../pageobjects/ShopPage";

describe('Shop page tests', () => {
  let testData;

  before(() => {
    cy.fixture('shopTestData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    shopPage.open();
  });

  it('should have at least 1 item in the cart after adding', () => {
    shopPage.openCart();
    shopPage.assertCartIsEmpty();
    shopPage.closeCart();
    shopPage.addFirstProductToCart();
    shopPage.assertCartHasAtLeastOneItem();
  });

  it('should show an empty cart after removing the last product', () => {
    shopPage.addFirstProductToCart();
    shopPage.removeFirstProduct();
    shopPage.assertCartIsCompletelyEmpty();
  });

  it('should correctly change currencies and verify prices', () => {
    testData.currencies.forEach((currency) => {
      cy.log(`Testing currency: code: ${currency.code} symbol: ${currency.symbol}`);

      shopPage.openCurrencySelector();
      shopPage.selectCurrency(currency.code);
      shopPage.assertSelectedCurrency(currency.code);
      shopPage.assertProductPricesInCorrectCurrency(currency.symbol);
    });
  });
});
