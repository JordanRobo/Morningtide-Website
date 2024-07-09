import { api } from '$lib/db';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const [post, related] = await Promise.all([
			api.posts.read({ slug: params.slug, include: 'tags,authors' }),
			api.posts.browse({ limit: 5, include: 'tags,authors' })
		]);

		if (!post) {
			throw error(404, 'Post not found');
		}

		return {
			post,
			related: related.filter(r => r.id !== post.id)
		};
	} catch (err) {
		console.error('Error loading post:', err);
		throw error(500, 'Error loading post');
	}
};