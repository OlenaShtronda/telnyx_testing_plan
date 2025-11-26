import { ShopPage } from "../pageobjects/ShopPage";

const shopPage = new ShopPage();

describe('Shop page tests', () => {
  const currencyToSelect = 'USD';
  const currencySign = '$';
  
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

  it('should correctly change currency and verify prices', () => {
    shopPage.openCurrencySelector();
    shopPage.selectCurrency(currencyToSelect);
    shopPage.assertSelectedCurrency(currencyToSelect);
    shopPage.assertProductPricesInCorrectCurrency(currencySign);
  });
});
