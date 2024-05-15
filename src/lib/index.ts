import HomeContent from '$lib/components/home/HomeContent.svelte';
import Hero from '$lib/components/home/Hero.svelte';
import Footer from '$lib/components/nav/Footer.svelte';
import Navbar from '$lib/components/nav/Navbar.svelte';
import LatestPost from '$lib/components/home/LatestPost.svelte';
import PostCard from '$lib/components/posts/PostCard.svelte';
import RelatedCard from '$lib/components/posts/RelatedCard.svelte';
import Drawernav from '$lib/components/nav/Drawernav.svelte';
import SectionHero from '$lib/components/section/Hero.svelte';
import Services from '$lib/components/section/Services.svelte';
import Top from '$lib/components/nav/Top.svelte';
import { AboutFeat, ServicesFeat, InsightsFeat } from '$lib/images';

export { 
    HomeContent, 
    Hero, 
    Footer, 
    Navbar, 
    LatestPost, 
    PostCard, 
    RelatedCard, 
    Drawernav,
    SectionHero,
    Services,
    Top
};

export const servicesPage = {
    "image": ServicesFeat,
    "badge":"What we do",
    "heading":"Our Services",
    "subheading":"Morningtide Consulting offers several unique services to assist schools. Each service pivots on the concept that strategy is your number one priority."
}

export const aboutPage ={
    "image": AboutFeat,
    "badge":"Who we are",
    "heading":"About Us",
    "subheading":"Morningtide Consulting brings a fresh approach for Principals and their leadership teams. We help create compelling strategy and then continue the journey through its implementation phase."
};

export const insightsPage ={
    "image": InsightsFeat,
    "badge":"How we think",
    "heading":"Insights",
    "subheading":"We regularly produce articles that we hope will inform, inspire, and provide insights into school strategy and leadership."
};
