import { AboutFeat, ServicesFeat, InsightsFeat } from '$lib/images/uploads';
import { Strategy, Analysis, Customer, Financial, Respectful, BestPractice, Innovative, Inquisitive, Practical } from "$lib/images/icons";
import type { About, Insights, Services } from "./types";

export const services: Services = {
    "image": ServicesFeat,
    "badge":"What we do",
    "heading":"Our Services",
    "subheading":"Morningtide Consulting offers several unique services to assist schools. Each service pivots on the concept that strategy is your number one priority.",
    "service" : [
        {
            id: '1',
            title: 'Strategy Planning', 
            url: 'strategy-planning',
            icon: Strategy,
            description: "The world is changing at a rapidly, dynamic pace and it's more complex than ever. So, strategy planning has to become more fluid and continuous to keep up."
        },
        {
            id: '2',
            title: 'Competitor Analysis', 
            url: 'competitor-analysis',
            icon: Analysis,
            description: "Conducting analysis into your competitor schools sometimes illuminates opportunities often overlooked. Morningtide Consulting offers research capabilities that provide insight into where your school fits in the current demographic environment."
        },
        {
            id: '3',
            title: 'Financial Forecast Review', 
            url: 'financial-forecast-review',
            icon: Financial,
            description: "Your 3-5 year financial forecast is the pinnacle document to execute your strategy. It dictates which resources will be prioritised. Morningtide Consulting can review the assumptions and calculations to ensure that it mirrors your strategic intent.",
        },
        {
            id: '4',
            title: 'Customer Experience Audit', 
            url: 'customer-experience-audit',
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

export const values = [
    {
        "id": "1",
        "title": "Respectful",
        "icon": Respectful,
        "body":"We believe in the genius of others and that we each have a part to play."
    },
    {
        "id": "2",
        "title": "Inquisitive",
        "icon": Inquisitive,
        "body":"We believe that the status quo should be continually probed and challenged."
    },
    {
        "id": "3",
        "title": "Best-practice",
        "icon": BestPractice,
        "body":"We believe that change should always be informed by data, and continual assessment."
    },
    {
        "id": "4",
        "title": "Innovative",
        "icon": Innovative,
        "body":"We believe that today's solutions become tomorrow's problems. We need to remain acutely aware of our environment as we innovate."
    },
    {
        "id": "5",
        "title": "Practical",
        "icon": Practical,
        "body":"We believe that solutions must be practical.  Every problem requires the right tool for its solution."
    },
]