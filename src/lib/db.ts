// @ts-expect-error - required for loading
import GhostContentAPI from "@tryghost/content-api";
import PocketBase from "pocketbase";
import { PUBLIC_PB_URL, PUBLIC_GHOST_URL, PUBLIC_GHOST_KEY } from "$env/static/public";

const pb = new PocketBase(PUBLIC_PB_URL);

const api = GhostContentAPI({
	url: PUBLIC_GHOST_URL,
	key: PUBLIC_GHOST_KEY,
	version: "v5.81",
});

// Export the instance
export { api, pb };
