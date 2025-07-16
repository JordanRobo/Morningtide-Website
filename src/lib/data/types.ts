export interface Post {
	title: string;
	custom_excerpt: string;
	feature_image: string;
	slug: string;
	tags: { id: number; name: string; slug: string }[];
	updated_at: string;
}

export interface Service {
	title: string;
	id: string;
	price: string | null;
	description: string;
	image: string;
	badge: string;
	accordion: Array<{
		title: string;
		content: string;
	}>;
}
