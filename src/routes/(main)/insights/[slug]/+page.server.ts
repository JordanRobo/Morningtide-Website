import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";

export const load: PageServerLoad = async ({ params, setHeaders, fetch }) => {
	try {
		const post_req = await fetch(`${env.PUBLIC_GHOST_URL}/ghost/api/content/posts/slug/${params.slug}/?key=${env.PUBLIC_GHOST_KEY}&include=authors,tags`, {
			method: "GET",
			headers: {
				"Accept-Version": "v6.0",
				"X-Forwarded-Proto": "https",
				"X-Forwarded-Host": "admin.morningtide.com.au",
				"X-Real-IP": "127.0.0.1",
			},
		});

		const postData = await post_req.json();

		const tag = postData.posts[0].tags[0].slug;

		const related_req = await fetch(`${env.PUBLIC_GHOST_URL}/ghost/api/content/posts/?key=${env.PUBLIC_GHOST_KEY}&include=tags&limit=5&filter=tag:${tag}`, {
			method: "GET",
			headers: {
				"Accept-Version": "v6.0",
				"X-Forwarded-Proto": "https",
				"X-Forwarded-Host": "admin.morningtide.com.au",
				"X-Real-IP": "127.0.0.1",
			},
		});

		const relatedData = await related_req.json();

		if (!postData.posts[0]) {
			throw error(404, "Post not found");
		}

		setHeaders({
			"Cache-Control": "public, max-age=7200, s-maxage=86400, stale-while-revalidate=604800",
			Vary: "Accept-Encoding",
		});

		return {
			post: postData.posts[0],
			related: relatedData.posts,
		};
	} catch (err) {
		console.error("Error loading post:", err);
		return {
			post: null,
			related: null,
		};
	}
};
