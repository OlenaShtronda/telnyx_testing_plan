class ShopPage {
  cartIcon = '#cart-icon-bubble';
  emptyCartText = 'Your cart is empty';
  closeCartButton = 'button.drawer__close';
  productSliderItems = '[aria-label="Slider"] li';
  addToCartButtonText = 'Add to cart';
  cartItemRows = 'tr.cart-item';
  removeItemButton = '.cart-remove-button';
  currencySelectorButton = 'button.localization-form__select';
  currencyList = '#FooterCountryList';
  productPriceItems = '.product-grid li';

  open() {
    cy.visit('/');
  }

  openCart() {
    cy.get(this.cartIcon).should('be.visible').click();
  }

  assertCartIsEmpty() {
    cy.contains(this.emptyCartText).should('be.visible');
  }

  closeCart() {
    cy.get(this.closeCartButton).first().click();
  }

  addFirstProductToCart() {
    cy.get(this.productSliderItems)
      .first()
      .contains('button', this.addToCartButtonText)
      .click();
  }

  assertCartHasAtLeastOneItem() {
    cy.get(this.cartItemRows).should('have.length.at.least', 1);
  }

  removeFirstProduct() {
    cy.get(this.removeItemButton).first().click();
  }

  assertCartIsCompletelyEmpty() {
    cy.get(this.cartItemRows).should('have.length', 0);
    this.assertCartIsEmpty();
  }

  openCurrencySelector() {
    cy.get(this.currencySelectorButton).click();
  }

  selectCurrency(currency) {
    cy.get(this.currencyList)
      .contains('span.localization-form__currency', currency)
      .click();
  }

  assertSelectedCurrency(currency) {
    cy.get(this.currencySelectorButton).should('contain.text', currency);
  }

  assertProductPricesInCorrectCurrency(currencySign) {
    cy.get(this.productPriceItems).first().should('contain.text', currencySign);
  }
}

export const shopPage = new ShopPage();
