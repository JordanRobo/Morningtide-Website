export interface Author {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
}

export interface Tag {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: string;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
}

export interface Post {
    slug: string;
    id: string;
    uuid: string;
    title: string;
    html: string;
    comment_id: string;
    feature_image: string | null;
    feature_image_alt: string | null;
    feature_image_caption: string | null;
    featured: boolean;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
    published_at: string;
    custom_excerpt: string | null;
    codeinjection_head: string | null;
    codeinjection_foot: string | null;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    custom_template: string | null;
    canonical_url: string | null;
    authors: Author[];
    tags: Tag[];
    primary_author: Author;
    primary_tag: Tag | null;
    url: string;
    excerpt: string;
    reading_time: string;
}

export interface PostsResponse {
    posts: Post[];
}

export interface Service {
    title: string;
    id: string;
    description: string;
    image: string;
    badge: string;
    accordion: Array<{
        title: string;
        content: string;
    }>;
}
