import { superValidate, message } from "sveltekit-superforms";
import { valibot } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { enquirySchema, subscribeSchema } from "$lib/schema";
import { pb } from "$lib/pb.server";
import { ghost } from "$lib/ghost";

export const load: PageServerLoad = async ({ url }) => {
	try {
		const [highlight_posts] = await ghost?.posts?.browse({ limit: 3 });

		return { highlight_posts, pathname: url.pathname };
	} catch (error) {
		console.error("Error loading pagedata", error);
		console.error("Error details:", {
			message: error instanceof Error ? error.message : "Unknown error",
			stack: error instanceof Error ? error.stack : undefined,
			timestamp: new Date().toISOString(),
		});

		return { highlight_posts: [], pathname: url.pathname };
	}
};

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const form = await superValidate(request, valibot(subscribeSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await pb.collection("form_submissions").create(form.data);
			return message(form, "Thank you for subscribing!");
		} catch (err) {
			return message(form, "An error occurred during subscription", {
				status: 500,
			});
		}
	},

	enquire: async ({ request }) => {
		const form = await superValidate(request, valibot(enquirySchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await pb.collection("form_submissions").create(form.data);
			return message(form, "Thank you for your enquiry!");
		} catch (error) {
			return message(form, "An error occurred during subscription", {
				status: 500,
			});
		}
	},
};
