import { PricingPage } from "../pageobjects/PricingPage";
import { Homepage } from "../pageobjects/Homepage";

const pricingPage = new PricingPage();
const homepage = new Homepage();

describe('Pricing page tests', () => {
  it('should navigate to the "Pricing" page after clicking the "View all pricing" button', () => {
    homepage.open();
    homepage.clickPricingButton();
    homepage.clickViewAllPricingButton();
    pricingPage.assertOnPricingPage();
  });
});
