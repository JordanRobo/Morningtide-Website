import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { subscribeSchema } from "$lib/schema";
import { env } from "$env/dynamic/public";

export const load: LayoutServerLoad = async ({ fetch, url }) => {
	const subscribeForm = await superValidate(valibot(subscribeSchema));

	try {
		const tag_req = await fetch(`${env.PUBLIC_GHOST_URL}/ghost/api/content/tags/?key=${env.PUBLIC_GHOST_KEY}`, {
			method: "GET",
			headers: {
				"Accept-Version": "v6.0",
				"X-Forwarded-Proto": "https",
				"X-Forwarded-Host": "admin.morningtide.com.au",
				"X-Real-IP": "127.0.0.1",
			},
		});

		const privacyPolicy_req = await fetch(`${env.PUBLIC_GHOST_URL}/ghost/api/content/pages/slug/privacy-policy/?key=${env.PUBLIC_GHOST_KEY}&slug=privacy-policy`, {
			method: "GET",
			headers: {
				"Accept-Version": "v6.0",
				"X-Forwarded-Proto": "https",
				"X-Forwarded-Host": "admin.morningtide.com.au",
				"X-Real-IP": "127.0.0.1",
			},
		});

		const tagsData = await tag_req.json();
		const privacyPolicyData = await privacyPolicy_req.json();

		return {
			tags: tagsData.tags,
			privacyPolicy: privacyPolicyData.pages[0],
			subscribeForm,
			pathname: url.pathname,
		};
	} catch (error) {
		console.error("Error loading layout data:", error);
		console.error("Error details:", {
			message: error instanceof Error ? error.message : "Unknown error",
			stack: error instanceof Error ? error.stack : undefined,
			timestamp: new Date().toISOString(),
		});

		return {
			tags: [],
			privacyPolicy: null,
			subscribeForm,
			pathname: url.pathname,
		};
	}
};
