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
	return resolve(event);
};
