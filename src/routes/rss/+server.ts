import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { env } from "$env/dynamic/public";

export const GET: RequestHandler = async () => {
	throw redirect(301, env.PUBLIC_GHOST_RSS || "https://morningtide.com.au/error");
};
