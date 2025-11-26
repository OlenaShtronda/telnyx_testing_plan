import { Homepage } from '../pageobjects/Homepage';

const homepage = new Homepage();

describe('Homepage tests', () => {
  beforeEach(() => {
    homepage.open();
  });

  it('should display hero title', () => {
    homepage.assertHeroTitleIsVisible();
  });

  it('switches to Text to speech', () => {
    homepage.clickTextToSpeech();
    homepage.assertEffortlessTextToSpeechTextIsVisible();
  });

  it('switches to Speech to text', () => {
    homepage.clickSpeechToText();
    homepage.assertRealTimeTranscriptionTextIsVisible();
  });

  it('switches to HD Voice AI', () => {
    homepage.clickTextToSpeech();
    homepage.clickHDVoiceAI();
    homepage.assertTrueHDVoiceE2ETextIsVisible();
  });
});
