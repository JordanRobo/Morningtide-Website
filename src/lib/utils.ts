export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

export function newPost(date: string) {
	const postDate = new Date(date);
	const currentDate = new Date();
	const timeDifference = currentDate.getTime() - postDate.getTime();
	const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
	return daysDifference < 7;
};

export function tagLink( tag: string ) {
	return `/insights?tag=${tag}`;
};