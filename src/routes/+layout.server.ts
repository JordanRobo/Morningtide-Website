import { admin } from '$lib/db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const tags = await admin.tags.browse();
	const { pathname } = url;
	return {
		tags,
		pathname
	};
};