// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	function gtag(command: "config" | "event" | "js" | "set", targetId: string, config?: Record<string, any>): void;

	var privacy_policy: {
		showModal(): void;
		close(): void;
	};

	var subscribe_form: {
		showModal(): void;
		close(): void;
	};
    
    declare interface Window {
        dataLayer: Array<any>;
    };

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
