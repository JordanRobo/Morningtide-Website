export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

export function newPost(date: string, thresholdDays: number = 7): boolean {
    const postDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference < thresholdDays;
}

export function tagLink(tag: string): string {
	return `/insights?tag=${tag}`;
};

export function showModal(id: string): void {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    modal?.showModal() ?? console.error('Modal element not found');
}
