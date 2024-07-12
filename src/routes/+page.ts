import type { PageLoad } from './$types';

const snippets = [
	{
		title: 'Hello World in HTML',
		favorite: false,
		language: 'html',
		code: '<h1>Hello World!</h1>'
	},
	{
		title: 'Hello World in TypeScript',
		favorite: false,
		language: 'typescript',
		code: 'console.log("Hello World!")'
	}
];

export const load: PageLoad = () => {
	return {
		snippets
	};
};
