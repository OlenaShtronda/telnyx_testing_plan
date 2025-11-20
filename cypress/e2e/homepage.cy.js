describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display a hero section title variant', () => {
    cy.contains(/Conversational AI|Text To Speech|Speech To Text/i).should('be.visible');
  });

  it('should switch to the "Text to Speech" tab', () => {
    cy.get('button[aria-label="Text to speech"]').click();

    cy.contains(/Effortless text-to-speech/i).should('be.visible');
  });

  it('should switch to the "Speech to Text" tab', () => {
    cy.get('button[aria-label="Speech to text"]').click();

    cy.contains(/Real-time transcription/i).should('be.visible');
  });
  
  it('should switch to the "HD Voice AI" tab', () => {
    cy.get('button[aria-label="HD Voice AI"]').click();

    cy.contains(/True HD voice, end-to-end/i).should('be.visible'); 
  });
});
