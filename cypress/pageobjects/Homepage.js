class Homepage {
  heroTitle = /Conversational AI|Text To Speech|Speech To Text/i;
  effortlessTextToSpeechText = 'Effortless text-to-speech';
  realTimeTranscriptionText = 'Real-time transcription';
  trueHDVoiceE2EText = 'True HD voice, end-to-end';
  textToSpeechTab = 'button[aria-label="Text to speech"]';
  speechToTextTab = 'button[aria-label="Speech to text"]';
  hdVoiceAITab = 'button[aria-label="HD Voice AI"]';
  globalCoverageLink = 'footer [href="/global-coverage"]';
  mainMenu = '#main-menu-content';
  pricingText = 'Pricing';
  pricingLink = '[href="/pricing"]';
  viewAllPricingText = 'View all pricing';
  signUpLink = '[data-content="Sign up"]';

  open() {
    cy.visit('/');
  }

  assertHeroTitleIsVisible() {
    cy.contains(this.heroTitle).should('be.visible');
  }

  clickTextToSpeech() {
    cy.get(this.textToSpeechTab).click();
  }

  assertEffortlessTextToSpeechTextIsVisible() {
    cy.contains(this.effortlessTextToSpeechText).should('be.visible');
  }

  clickSpeechToText() {
    cy.get(this.speechToTextTab).click();
  }

  assertRealTimeTranscriptionTextIsVisible() {
    cy.contains(this.realTimeTranscriptionText).should('be.visible');
  }

  clickHDVoiceAI() {
    cy.get(this.hdVoiceAITab).click();
  }

  assertTrueHDVoiceE2ETextIsVisible() {
    cy.contains(this.trueHDVoiceE2EText).should('be.visible');
  }

  clickGlobalCoverageLink() {
    cy.get(this.globalCoverageLink).click();
  }

  clickPricingButton() {
    cy.get(this.mainMenu).contains('button', this.pricingText).click();
  }

  clickViewAllPricingButton() {
    cy.get(this.pricingLink).contains('span', this.viewAllPricingText).click();
  }

  clickSignUpLink() {
    cy.get(this.signUpLink).click();
  }
}

export const homepage = new Homepage();
