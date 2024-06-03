import { writable } from "svelte/store";

function toggleDrawer() {
    const { subscribe, update, set } = writable(false);

    return {
        subscribe,
        toggle: () => update((n) => !n),
        open: () => set(true),
        close: () => set(false),
    };
}

export const drawer = toggleDrawer();

function toggleService(service = '') {
    const { subscribe, update, set } = writable(service);

    return {
        subscribe,
        set,
        update: () => update(() => service)
    };
}

export const activeService = toggleService();