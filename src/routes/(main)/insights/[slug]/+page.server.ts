import { ghost } from "$lib/ghost";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	try {
		const post = await ghost.posts.read({ slug: params.slug, include: "tags,authors" });
		const related = await ghost.posts.browse({ limit: 5, include: "tags", filter: `tag:${post.tags[0].slug}+id:-${post.id}` });

		if (!post) {
			throw error(404, "Post not found");
		}

		setHeaders({
			"Cache-Control": "public, max-age=7200, s-maxage=86400, stale-while-revalidate=604800",
			Vary: "Accept-Encoding",
		});

		return {
			post,
			related,
		};
	} catch (err) {
		console.error("Error loading post:", err);
		return {
			post: null,
			related: null,
		};
	}
};
