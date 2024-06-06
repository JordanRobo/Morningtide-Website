export type Post = {
    title: string,
	custom_excerpt: string,
	feature_image: string,
	slug: string,
	tags: { id: number, name: string }[]
};

export type Service = {
    id: string,
    title: string,
    url: string,
    icon: string,
    description: string
};

export type Services = {
    image: string,
    badge: string,
    heading: string,
    subheading: string,
    service: Service[]
};

export type About = {
    image: string,
    badge: string,
    heading: string,
    subheading: string
};

export type Insights = {
    image: string,
    badge: string,
    heading: string,
    subheading: string
};