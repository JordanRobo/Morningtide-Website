import * as Swetrix from "swetrix";

export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
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
}

export function showPopup(trigger: string): void {
	const popUpShownDate = localStorage.getItem("popUpShownDate");
	const currentDate = new Date().getTime();
	if (!popUpShownDate || currentDate - new Date(popUpShownDate).getTime() > 14 * 24 * 60 * 60 * 1000) {
		subscribe_form.showModal();
		localStorage.setItem("popUpShownDate", currentDate.toString());

		Swetrix.track({
			ev: "email_popup_shown",
			meta: {
				form_location: "popup",
				trigger_type: trigger,
			},
		});
	}
}
