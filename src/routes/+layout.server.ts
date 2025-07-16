import { api } from "$lib/db";
import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { subscribeSchema } from "$lib/schema";

export const load: LayoutServerLoad = async ({ url }) => {
	const subscribeForm = await superValidate(valibot(subscribeSchema));

	try {
		const [tags, highlight_posts, privacyPolicy] = await Promise.all([api.tags.browse(), api.posts.browse({ limit: 3 }), api.pages.read({ slug: "privacy-policy" })]);

		const { pathname } = url;
		return { tags, highlight_posts, pathname, privacyPolicy, subscribeForm };
	} catch (error) {
		console.error("Error loading layout data:", error);
		return { tags: [], highlight_posts: [], pathname: url.pathname, privacyPolicy: null, subscribeForm };
	}
};
