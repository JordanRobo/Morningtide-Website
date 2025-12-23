import { pb } from "$lib/pb.server";
import { env } from "$env/dynamic/private";
import type { Handle } from "@sveltejs/kit";

pb.beforeSend = function (url, options) {
	options.headers = Object.assign({}, options.headers, {
		"x-api-key": env.PB_KEY,
	});

	return { url, options };
};

export const handle: Handle = async ({ event, resolve }) => {
	const originalFetch = event.fetch;

	event.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
		const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;

		if (url.includes("ghost:2368") || url.includes(env.PUBLIC_GHOST_URL || "")) {
			const modifiedInit: RequestInit = {
				...init,
				headers: {
					...init?.headers,
					"X-Forwarded-Proto": "https",
					"X-Forwarded-Host": "admin.morningtide.com.au",
					"X-Real-IP": "127.0.0.1",
				},
			};

			return originalFetch(input, modifiedInit);
		}

		return originalFetch(input, init);
	};

	return resolve(event);
};
