// @ts-expect-error - required for loading
import GhostContentAPI from "@tryghost/content-api";
import { env } from "$env/dynamic/public";

const ghost = GhostContentAPI({
	url: env.PUBLIC_GHOST_URL || "https://example.com",
	key: env.PUBLIC_GHOST_KEY || "4f7a3e9c2b8d1a6f5e4c3b2a1d",
	version: "v6.0",
});

// Export the instance
export { ghost };
