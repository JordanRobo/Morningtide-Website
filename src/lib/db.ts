// @ts-expect-error - required for loading
import GhostContentAPI from "@tryghost/content-api";
import PocketBase from "pocketbase";
import { env } from "$env/dynamic/public";

const pb = new PocketBase(env.PUBLIC_PB_URL);

const api = GhostContentAPI({
	url: env.PUBLIC_GHOST_URL,
	key: env.PUBLIC_GHOST_KEY,
	version: "v5.81",
});

// Export the instance
export { api, pb };
