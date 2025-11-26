# Telnyx Testing Plan

This project contains an automated E2E test suite for the **Telnyx** website,
built using **Cypress** with a clean and scalable **Page Object Model (POM)** structure.  

The project covers three Telnyx platforms:
- **Main website** — https://telnyx.com  
- **Developer documentation** — https://developers.telnyx.com  
- **Shop** — https://shop.telnyx.com

It also includes separate Cypress configurations for each platform and a full CI pipeline via GitHub Actions.

The test suite uses the Page Object Model (POM) design pattern for better maintainability and reusability.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── docs.cy.js
│   │   ├── global_coverage.cy.js
│   │   ├── homepage.cy.js
│   │   ├── pricing.cy.js
│   │   ├── shop.cy.js
│   │   └── signup.cy.js
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   ├── pageobjects/
│   │   ├── DevDocsPage.js
│   │   ├── GlobalCoveragePage.js
│   │   ├── Homepage.js
│   │   ├── PricingPage.js
│   │   ├── ShopPage.js
│   │   └── SignupPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── README.md
├── cypress.config.js
├── cypress.docs.config.js
├── cypress.shop.config.js
├── package-lock.json
└── package.json
```

## Configuration Files

The project uses three separate Cypress configurations:

- `cypress.config.js` - Main site tests (excludes shop and docs)
- `cypress.docs.config.js` - Developer documentation tests
- `cypress.shop.config.js` - Shop tests

All configurations use:
- Viewport: 1280x720
- Default command timeout: 10000ms
- Video recording enabled
- Screenshot on failure enabled

## Running Tests

### Interactive Mode (Cypress UI)

```bash
# Main site tests
npx cypress open

# Shop tests
npm run cy:open:shop

# Docs tests
npm run cy:open:docs
```

### Headless Mode

```bash
# Main site tests
npx cypress run

# Shop tests
npm run cy:run:shop

# Docs tests
npm run cy:run:docs
```

### With Cypress Dashboard Recording

```bash
# Shop tests with recording
npm run cy:run:shop:record

# Docs tests with recording
npm run cy:run:docs:record
```

## Test Coverage

### Homepage Tests
- Hero title visibility
- Text-to-speech tab switching
- Speech-to-text tab switching
- HD Voice AI tab switching

### Developer Docs Tests
- Search functionality
- Search results filtering

### Global Coverage Tests
- Page navigation and display
- Services tab selection
- Country search dropdown
- Country filtering

### Pricing Tests
- Navigation to pricing page

### Sign-up Tests
- Required form fields visibility
- Promo code field toggle and labels

### Shop Tests
- Cart management (add/remove items)
- Currency selection
- Price display validation

## CI/CD Integration

The project includes a GitHub Actions workflow that runs all test suites sequentially:

1. Main site tests
2. Shop tests (runs after main tests)
3. Docs tests (runs after shop tests)

The workflow is triggered on every push and uses Cypress Dashboard for test recording.

### Required Secrets

Configure these secrets in your GitHub repository:
- `CYPRESS_RECORD_KEY` - Your Cypress Dashboard record key
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

## Page Object Model

Each page has a dedicated class with:
- **Selectors**: Element locators stored as class properties
- **Actions**: Methods to interact with page elements
- **Assertions**: Methods to verify page state

Example:
```javascript
class Homepage {
  heroTitle = /Conversational AI|Text To Speech|Speech To Text/i;
  
  open() {
    cy.visit('/');
  }
  
  assertHeroTitleIsVisible() {
    cy.contains(this.heroTitle).should('be.visible');
  }
}
```

## Best Practices

- Tests are independent and can run in any order
- Page objects are exported as singleton instances
- Assertions are separated from actions for clarity
- `beforeEach` hooks ensure clean test state

## Contributing

When adding new tests:
1. Create or update the relevant page object in `cypress/pageobjects/`
2. Add test specs in `cypress/e2e/`
3. Update the appropriate config file if needed
4. Ensure tests follow the existing POM pattern

## License

ISC

## Repository

https://github.com/OlenaShtronda/telnyx_testing_plan
