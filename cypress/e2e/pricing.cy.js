import { pricingPage } from "../pageobjects/PricingPage";
import { homepage } from "../pageobjects/Homepage";

describe('Pricing page tests', () => {
  it('should navigate to the "Pricing" page after clicking the "View all pricing" button', () => {
    homepage.open();
    homepage.clickPricingButton();
    homepage.clickViewAllPricingButton();
    pricingPage.assertOnPricingPage();
  });
});
