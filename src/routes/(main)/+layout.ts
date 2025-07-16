import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
	const bannerConfig = {
		insights: {
			image: "images/uploads/insights-1200w.webp",
			badge: "How we think",
			heading: "Insights",
			subheading: "We regularly produce articles that we hope will inform, inspire, and provide insights into school strategy and leadership.",
		},
		about: {
			image: "images/uploads/about-1200w.webp",
			badge: "Who we are",
			heading: "About Us",
			subheading: "Morningtide Consulting brings a fresh approach for Principals and their leadership teams. We help create compelling strategy and then continue the journey through its implementation phase.",
		},
		services: {
			image: "images/uploads/services-1200w.webp",
			badge: "What we do",
			heading: "Our Services",
			subheading: "Morningtide Consulting offers several unique services to assist schools. Each service pivots on the concept that strategy is your number one priority.",
		},
	};

	const matchedKey = Object.keys(bannerConfig).find(key => 
		url.toString().includes(key)
	);

	// @ts-ignore
	return matchedKey ? { banner: bannerConfig[matchedKey] } : {};
};