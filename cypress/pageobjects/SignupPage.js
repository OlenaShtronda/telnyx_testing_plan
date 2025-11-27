class SignUpPage {
  email = '#email';
  firstName = '#first_name';
  lastName = '#last_name';
  password = '#password';
  termsCheckbox = '#terms_and_conditions';
  subscriptionCheckbox = '#subscription_opt_in';
  promoCodeButtonText = 'Apply a promo code';
  promoCodeField = '#promo_code';
  promoCodeLabel = 'label[for="promo_code"]';
  promoCodeLabelText = 'Promo code';
  optionalLabelText = 'Optional';
  
  assertRequiredFieldsAndCheckboxesAreVisible() {
    const fields = [
      this.email,
      this.firstName,
      this.lastName,
      this.password,
      this.termsCheckbox,
      this.subscriptionCheckbox
    ];
    
    fields.forEach(selector => {
      cy.get(selector).should('be.visible');
    });
  }
  
  assertPromoCodeFieldIsInitiallyHidden() {
    cy.get(this.promoCodeField).should('not.exist');
  }
  
  clickApplyAPromoCodeButton() {
    cy.contains('button', this.promoCodeButtonText).click();
  }
  
  assertPromoCodeFieldIsVisible() {
    cy.get(this.promoCodeField).should('be.visible');
  }

  assertPromoCodeHasCorrectLabels() {
    cy.get(this.promoCodeLabel)
      .should('contain.text', this.promoCodeLabelText)
      .and('contain.text', this.optionalLabelText);
  }
}

export const signUpPage = new SignUpPage();
