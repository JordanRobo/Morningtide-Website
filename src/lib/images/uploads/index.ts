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

const createImageSet = (baseName: string): ImageSet => ({
    webp: {
        '300w': `/src/lib/images/uploads/${baseName}-300w.webp`,
        '600w': `/src/lib/images/uploads/${baseName}-600w.webp`,
        '1200w': `/src/lib/images/uploads/${baseName}-1200w.webp`,
    },
    avif: {
        '300w': `/src/lib/images/uploads/${baseName}-300w.avif`,
        '600w': `/src/lib/images/uploads/${baseName}-600w.avif`,
        '1200w': `/src/lib/images/uploads/${baseName}-1200w.avif`,
    },
});

export const ServicesFeat = createImageSet('services');
export const AboutFeat = createImageSet('about');
export const InsightsFeat = createImageSet('insights');
export const TeamImg = createImageSet('business-team-collaborating_tiny');
export const Team2Img = createImageSet('strategy-planning-team_tiny');
export const Newsletter = createImageSet('newsletter');
export const Essence = createImageSet('Essence-of-Strategy_tiny');
export const HappyTeam = createImageSet('happy-team');
export const Portrait = createImageSet('Portrait_gradient');