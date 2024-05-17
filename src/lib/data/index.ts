import { AboutFeat, ServicesFeat, InsightsFeat } from '$lib/images/uploads';
import { Strategy, Analysis, Customer, Financial } from "$lib/images/icons";
import type { About, Insights, Services } from "./types";

export const services: Services = {
    "image": ServicesFeat,
    "badge":"What we do",
    "heading":"Our Services",
    "subheading":"Morningtide Consulting offers several unique services to assist schools. Each service pivots on the concept that strategy is your number one priority.",
    "service" : [
        {
            title: 'Strategy Planning', 
            url: '/services',
            icon: Strategy,
            description: "The world is changing at a rapidly, dynamic pace and it's more complex than ever. So, strategy planning has to become more fluid and continuous to keep up."
        },
        {
            title: 'Competitor Analysis', 
            url: '/services',
            icon: Analysis,
            description: "Conducting analysis into your competitor schools sometimes illuminates opportunities often overlooked. Morningtide Consulting offers research capabilities that provide insight into where your school fits in the current demographic environment."
        },
        {
            title: 'Financial Forecast Review', 
            url: '/services',
            icon: Financial,
            description: "Your 3-5 year financial forecast is the pinnacle document to execute your strategy. It dictates which resources will be prioritised. Morningtide Consulting can review the assumptions and calculations to ensure that it mirrors your strategic intent.",
        },
        {
            title: 'Customer Experience Audit', 
            url: '/services',
            icon: Customer,
            description: "Word of mouth is your best marketing tool, closely followed by customer service. Every employee has a part to play. Morningtide Consulting can audit your stakeholder engagement to identify customer experience (CX) opportunities.",
        }
    ]
}

export const about: About ={
    "image": AboutFeat,
    "badge":"Who we are",
    "heading":"About Us",
    "subheading":"Morningtide Consulting brings a fresh approach for Principals and their leadership teams. We help create compelling strategy and then continue the journey through its implementation phase."
};

export const insights: Insights ={
    "image": InsightsFeat,
    "badge":"How we think",
    "heading":"Insights",
    "subheading":"We regularly produce articles that we hope will inform, inspire, and provide insights into school strategy and leadership."
};