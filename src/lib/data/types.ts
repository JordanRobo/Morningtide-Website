import type { ImageSet } from '$lib/images/uploads'; 

export type Post = {
    title: string,
	custom_excerpt: string,
	feature_image: string,
	slug: string,
	tags: { id: number, name: string, slug: string }[]
};

export type Service = {
    id: string,
    title: string,
    url: string,
    icon: string,
    description: string
};

export type Services = {
    image: ImageSet,
    badge: string,
    heading: string,
    subheading: string,
    service: Service[]
};

export type About = {
    image: ImageSet,
    badge: string,
    heading: string,
    subheading: string
};

export type Insights = {
    image: ImageSet,
    badge: string,
    heading: string,
    subheading: string
};