// src/lib/db.ts

// @ts-expect-error - required for loading
import GhostContentAPI from '@tryghost/content-api';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';

const pb = new PocketBase(env.PB_URL);

const api = GhostContentAPI({
	url: env.GHOST_URL,
	key: env.GHOST_KEY,
	version: "v5.81"
});

// Export the instance
export { api, pb };
