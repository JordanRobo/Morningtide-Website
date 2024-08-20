// Services Feature
import servicesWebp300 from './services-300w.webp';
import servicesWebp600 from './services-600w.webp';
import servicesWebp1200 from './services-1200w.webp';
import servicesAvif300 from './services-300w.avif';
import servicesAvif600 from './services-600w.avif';
import servicesAvif1200 from './services-1200w.avif';

// About Feature
import aboutWebp300 from './about-300w.webp';
import aboutWebp600 from './about-600w.webp';
import aboutWebp1200 from './about-1200w.webp';
import aboutAvif300 from './about-300w.avif';
import aboutAvif600 from './about-600w.avif';
import aboutAvif1200 from './about-1200w.avif';

// Insights Feature
import insightsWebp300 from './insights-300w.webp';
import insightsWebp600 from './insights-600w.webp';
import insightsWebp1200 from './insights-1200w.webp';
import insightsAvif300 from './insights-300w.avif';
import insightsAvif600 from './insights-600w.avif';
import insightsAvif1200 from './insights-1200w.avif';

// Team Image
import teamWebp300 from './business-team-collaborating_tiny-300w.webp';
import teamWebp600 from './business-team-collaborating_tiny-600w.webp';
import teamWebp1200 from './business-team-collaborating_tiny-1200w.webp';
import teamAvif300 from './business-team-collaborating_tiny-300w.avif';
import teamAvif600 from './business-team-collaborating_tiny-600w.avif';
import teamAvif1200 from './business-team-collaborating_tiny-1200w.avif';

// Team2 Image
import team2Webp300 from './strategy-planning-team_tiny-300w.webp';
import team2Webp600 from './strategy-planning-team_tiny-600w.webp';
import team2Webp1200 from './strategy-planning-team_tiny-1200w.webp';
import team2Avif300 from './strategy-planning-team_tiny-300w.avif';
import team2Avif600 from './strategy-planning-team_tiny-600w.avif';
import team2Avif1200 from './strategy-planning-team_tiny-1200w.avif';

// Newsletter
import newsletterWebp300 from './newsletter-300w.webp';
import newsletterWebp600 from './newsletter-600w.webp';
import newsletterWebp1200 from './newsletter-1200w.webp';
import newsletterAvif300 from './newsletter-300w.avif';
import newsletterAvif600 from './newsletter-600w.avif';
import newsletterAvif1200 from './newsletter-1200w.avif';

// Essence of Strategy
import essenceWebp300 from './Essence-of-Strategy_tiny-300w.webp';
import essenceWebp600 from './Essence-of-Strategy_tiny-600w.webp';
import essenceWebp1200 from './Essence-of-Strategy_tiny-1200w.webp';
import essenceAvif300 from './Essence-of-Strategy_tiny-300w.avif';
import essenceAvif600 from './Essence-of-Strategy_tiny-600w.avif';
import essenceAvif1200 from './Essence-of-Strategy_tiny-1200w.avif';

// Happy Team
import happyTeamWebp300 from './happy-team-300w.webp';
import happyTeamWebp600 from './happy-team-600w.webp';
import happyTeamWebp1200 from './happy-team-1200w.webp';
import happyTeamAvif300 from './happy-team-300w.avif';
import happyTeamAvif600 from './happy-team-600w.avif';
import happyTeamAvif1200 from './happy-team-1200w.avif';

// Portrait
import portraitWebp300 from './Portrait_gradient-300w.webp';
import portraitWebp600 from './Portrait_gradient-600w.webp';
import portraitWebp1200 from './Portrait_gradient-1200w.webp';
import portraitAvif300 from './Portrait_gradient-300w.avif';
import portraitAvif600 from './Portrait_gradient-600w.avif';
import portraitAvif1200 from './Portrait_gradient-1200w.avif';

export interface ImageSet {
  webp: {
    '300w': string;
    '600w': string;
    '1200w': string;
  };
  avif: {
    '300w': string;
    '600w': string;
    '1200w': string;
  };
}

export const ServicesFeat: ImageSet = {
  webp: { '300w': servicesWebp300, '600w': servicesWebp600, '1200w': servicesWebp1200 },
  avif: { '300w': servicesAvif300, '600w': servicesAvif600, '1200w': servicesAvif1200 }
};

export const AboutFeat: ImageSet = {
  webp: { '300w': aboutWebp300, '600w': aboutWebp600, '1200w': aboutWebp1200 },
  avif: { '300w': aboutAvif300, '600w': aboutAvif600, '1200w': aboutAvif1200 }
};

export const InsightsFeat: ImageSet = {
  webp: { '300w': insightsWebp300, '600w': insightsWebp600, '1200w': insightsWebp1200 },
  avif: { '300w': insightsAvif300, '600w': insightsAvif600, '1200w': insightsAvif1200 }
};

export const TeamImg: ImageSet = {
  webp: { '300w': teamWebp300, '600w': teamWebp600, '1200w': teamWebp1200 },
  avif: { '300w': teamAvif300, '600w': teamAvif600, '1200w': teamAvif1200 }
};

export const Team2Img: ImageSet = {
  webp: { '300w': team2Webp300, '600w': team2Webp600, '1200w': team2Webp1200 },
  avif: { '300w': team2Avif300, '600w': team2Avif600, '1200w': team2Avif1200 }
};

export const Newsletter: ImageSet = {
  webp: { '300w': newsletterWebp300, '600w': newsletterWebp600, '1200w': newsletterWebp1200 },
  avif: { '300w': newsletterAvif300, '600w': newsletterAvif600, '1200w': newsletterAvif1200 }
};

export const Essence: ImageSet = {
  webp: { '300w': essenceWebp300, '600w': essenceWebp600, '1200w': essenceWebp1200 },
  avif: { '300w': essenceAvif300, '600w': essenceAvif600, '1200w': essenceAvif1200 }
};

export const HappyTeam: ImageSet = {
  webp: { '300w': happyTeamWebp300, '600w': happyTeamWebp600, '1200w': happyTeamWebp1200 },
  avif: { '300w': happyTeamAvif300, '600w': happyTeamAvif600, '1200w': happyTeamAvif1200 }
};

export const Portrait: ImageSet = {
  webp: { '300w': portraitWebp300, '600w': portraitWebp600, '1200w': portraitWebp1200 },
  avif: { '300w': portraitAvif300, '600w': portraitAvif600, '1200w': portraitAvif1200 }
};