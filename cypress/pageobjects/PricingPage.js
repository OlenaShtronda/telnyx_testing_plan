export class PricingPage {
  flexibleTransparentPricingText = /Flexible, transparent pricing with discounts as you scale./i;

  assertOnPricingPage() {
    cy.url().should('include', '/pricing');
    cy.contains(this.flexibleTransparentPricingText).should('be.visible');
  }
}