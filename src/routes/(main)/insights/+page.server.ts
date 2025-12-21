import { ghost } from "$lib/ghost";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, setHeaders }) => {
	const page = Number(url.searchParams.get("page")) || 1;
	const filter = url.searchParams.get("filter") || "";

	async function fetchPosts(page: number = 1, filter: string) {
		const data = await ghost.posts.browse({
			limit: 9,
			page,
			include: "tags",
			...(filter && { filter }),
		});
		return data;
	}

	try {
		const posts = await fetchPosts(page, filter);

		setHeaders({
			"Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
			Vary: "Accept-Encoding",
		});

		return {
			posts: posts,
			meta: posts.meta,
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
