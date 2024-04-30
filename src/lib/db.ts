// @ts-expect-error - required for loading
import GhostContentAPI from '@tryghost/content-api';
// @ts-expect-error - required for loading
import GhostAdminAPI from '@tryghost/admin-api';

const api = GhostContentAPI({
	url: import.meta.env.VITE_GHOST_URL,
	key: import.meta.env.VITE_GHOST_KEY,
	version: import.meta.env.VITE_GHOST_VERSION
});

// Create an instance of GhostContentAPI
const admin = GhostAdminAPI({
	url: import.meta.env.VITE_GHOST_URL,
	key: import.meta.env.VITE_GHOST_KEY_ADMIN,
	version: import.meta.env.VITE_GHOST_VERSION
});

// Export the instance
export { api, admin };
