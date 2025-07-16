import { superValidate } from "sveltekit-superforms";
import type { PageServerLoad } from "./$types";
import { valibot } from "sveltekit-superforms/adapters";
import { enquirySchema } from "$lib/schema";

export const load: PageServerLoad = async () => {
    const enquiryForm = await superValidate(valibot(enquirySchema))

    return { enquiryForm };
}