import { writable } from 'svelte/store';

interface Service {
	name: string;
}

export const tagFilter = writable<string | null>('');
export const postsPage = writable(1);

function toggleDrawer() {
	const { subscribe, update, set } = writable(false);

	return {
		subscribe,
		toggle: () => update((n) => !n),
		open: () => set(true),
		close: () => set(false)
	};
}

export const drawer = toggleDrawer();

function toggleService(initialService: Service | null = null) {
	const { subscribe, set } = writable<Service | null>(initialService);

	return {
		subscribe,
		set,
		update: (service: Service) => set(service)
	};
}

export const activeService = toggleService();
