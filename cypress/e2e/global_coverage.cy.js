import { GlobalCoveragePage } from "../pageobjects/GlobalCoveragePage";
import { Homepage } from "../pageobjects/Homepage";

const homepage = new Homepage();
const globalCoveragePage = new GlobalCoveragePage();

describe('Global Coverage page tests', () => {
  const countryToSelect = 'Ukraine';
  
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
    globalCoveragePage.openSearchCountryDropdown();
    globalCoveragePage.selectCountryCheckbox(countryToSelect);
    globalCoveragePage.closeSearchCountryDropdown();
    globalCoveragePage.assertOnlySelectedCountryIsDisplayed(countryToSelect);
  });
});
