import { globalCoveragePage } from "../pageobjects/GlobalCoveragePage";
import { homepage } from "../pageobjects/Homepage";

describe('Global Coverage page tests', () => {
  let testData;

  before(() => {
    cy.fixture('globalCoverageTestData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    homepage.open();
    homepage.clickGlobalCoverageLink();
  });


  it('should display "Global Coverage" page', () => {    
    globalCoveragePage.assertOnGlobalCoveragePage();
  });

  it('"Services" tab should be selected by default', () => {  
    globalCoveragePage.assertServicesTabIsSelected();
  });

  it('should expand the "Search country" dropdown menu after clicking', () => { 
    globalCoveragePage.openSearchCountryDropdown();
    globalCoveragePage.assertSearchCountryDropdownIsExpanded();
  });

  it('should correctly filter services by country', () => { 
    testData.countries.forEach((country) => {
      cy.log(`Testing country ${country}`);

      homepage.open();
      homepage.clickGlobalCoverageLink();
      globalCoveragePage.openSearchCountryDropdown();
      globalCoveragePage.selectCountryCheckbox(country);
      globalCoveragePage.closeSearchCountryDropdown();
      globalCoveragePage.assertOnlySelectedCountryIsDisplayed(country);
    })
  });
});
