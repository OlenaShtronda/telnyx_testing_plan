class PricingPage {
  flexibleTransparentPricingText = 'Flexible, transparent pricing with discounts as you scale.';

  assertOnPricingPage() {
    cy.url().should('include', '/pricing');
    cy.contains(this.flexibleTransparentPricingText).should('be.visible');
  }
}

export const pricingPage = new PricingPage();