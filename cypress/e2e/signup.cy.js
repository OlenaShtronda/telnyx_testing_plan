import { signUpPage } from "../pageobjects/SignupPage";
import { homepage } from "../pageobjects/Homepage";

describe('Sign-up form content tests', () => {
  beforeEach(() => {
    homepage.open();
    homepage.clickSignUpLink();
  });

  it('should display all required form fields and checkboxes', () => {
    signUpPage.assertRequiredFieldsAndCheckboxesAreVisible();
  });

  it('should reveal promo code field with correct labels after clicking "Apply a promo code"', () => {
    signUpPage.assertPromoCodeFieldIsInitiallyHidden();
    signUpPage.clickApplyAPromoCodeButton();
    signUpPage.assertPromoCodeFieldIsVisible();
    signUpPage.assertPromoCodeHasCorrectLabels();
  });
});
