import type { Post } from "$lib/data/types";
import { ghost } from "$lib/ghost";
import type { RequestHandler } from "./$types";

const BASE_URL = "https://morningtide.com.au";

export const GET: RequestHandler = async () => {
	try {
		const posts: Post[] = await ghost.posts.browse({ limit: "all" });
		const pages = ["", "/about", "/services", "/insights"];

		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
				.map(
					(page) => `
                <url>
                <loc>${BASE_URL}${page}</loc>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
                </url>
            `,
				)
				.join("")}
            ${posts
				.map(
					(post) => `
                <url>
                <loc>${BASE_URL}/insights/${post.slug}</loc>
                <lastmod>${new Date(post.updated_at).toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.5</priority>
                </url>
            `,
				)
				.join("")}
        </urlset>`;

		return new Response(sitemap, {
			headers: {
				"Content-Type": "application/xml",
			},
		});
	} catch (error) {
		console.error("Error generating sitemap:", error);
		return new Response("Error generating sitemap", { status: 500 });
	}
};
