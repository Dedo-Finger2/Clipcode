import type { PageLoad } from './$types';

// Precisa se chamar load
export const load: PageLoad = () => {
	// Aqui você pode fazer chamadas de APIs para pegar dados e usar em outras partes do projeto!

	return {
		snippets: [
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
		]
	};
};
