import { ghost } from "$lib/ghost";
import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { subscribeSchema } from "$lib/schema";

export const load: LayoutServerLoad = async ({ setHeaders }) => {
	const subscribeForm = await superValidate(valibot(subscribeSchema));

	setHeaders({
		"cache-control": "public, max-age=300",
	});

	try {
		const [tags, privacyPolicy] = await Promise.all([ghost?.tags?.browse(), ghost?.pages?.read({ slug: "privacy-policy" })]);
		return { tags, privacyPolicy, subscribeForm };
	} catch (error) {
		console.error("Error loading layout data:", error);
		console.error("Error details:", {
			message: error instanceof Error ? error.message : "Unknown error",
			stack: error instanceof Error ? error.stack : undefined,
			timestamp: new Date().toISOString(),
		});

		return { tags: [], privacyPolicy: null, subscribeForm };
	}
};
