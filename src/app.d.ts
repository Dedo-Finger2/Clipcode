declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface CodeSnippetInput {
	title: string;
	description?: string;
	language: string;
	code: string;
}

interface CodeSnippet {
	title: string;
	description?: string;
	language: string;
	code: string;
	favorite: boolean;
}
