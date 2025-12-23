import { ghost } from "$lib/ghost";
import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { subscribeSchema } from "$lib/schema";

export const load: LayoutServerLoad = async ({ url }) => {
	const subscribeForm = await superValidate(valibot(subscribeSchema));

	try {
		const [tags, privacyPolicy] = await Promise.all([ghost?.tags?.browse(), ghost?.pages?.read({ slug: "privacy-policy" })]);
		return { tags, privacyPolicy, subscribeForm, pathname: url.pathname };
	} catch (error) {
		console.error("Error loading layout data:", error);
		console.error("Error details:", {
			message: error instanceof Error ? error.message : "Unknown error",
			stack: error instanceof Error ? error.stack : undefined,
			timestamp: new Date().toISOString(),
		});

		return { tags: [], privacyPolicy: null, subscribeForm, pathname: url.pathname };
	}
};
