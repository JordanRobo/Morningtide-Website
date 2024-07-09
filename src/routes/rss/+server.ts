import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    throw redirect(301, 'https://admin.morningtide.com.au/f8baa3db67d88a17f3cc1378ddfc87/rss/');
};