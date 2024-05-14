// @ts-expect-error - required for loading
import GhostContentAPI from '@tryghost/content-api';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://jordanrobo.xyz/db');

const api = GhostContentAPI({
	url: import.meta.env.VITE_GHOST_URL,
	key: import.meta.env.VITE_GHOST_KEY,
	version: "v5.81"
});

// Export the instance
export { api, pb };
