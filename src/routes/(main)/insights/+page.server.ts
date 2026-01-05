import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/public";

export const load: PageServerLoad = async ({ url, setHeaders, fetch }) => {
	const page = Number(url.searchParams.get("page")) || 1;
	const filter = url.searchParams.get("filter") || "";

	try {
		const posts_req = await fetch(`${env.PUBLIC_GHOST_URL}/ghost/api/content/posts/?key=${env.PUBLIC_GHOST_KEY}&limit=9&page=${page}&include=tags&filter=${filter}`, {
			method: "GET",
			headers: {
				"Accept-Version": "v6.0",
				"X-Forwarded-Proto": "https",
				"X-Forwarded-Host": "admin.morningtide.com.au",
				"X-Real-IP": "127.0.0.1",
			},
		});

		const postsData = await posts_req.json();

		setHeaders({
			"Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
			Vary: "Accept-Encoding",
		});

		return {
			posts: postsData.posts,
			meta: postsData.meta,
		};
	} catch (error) {
		console.error("Error loading insights data:", error);

		setHeaders({
			"Cache-Control": "public, max-age=60, s-maxage=300",
		});

		return {
			posts: { posts: [], meta: { pagination: {} } },
		};
	}
};
