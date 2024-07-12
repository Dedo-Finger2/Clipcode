import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet({ title, description, language, code }: CodeSnippetInput) {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		return [{ title, description, language, code, favorite: false }, ...snippets];
	});
}

export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);

	snippets.slice(index, 1);

	snippetStore.update(() => {
		return snippets;
	});
}

export function toggleFavorite(index: number) {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favorite: !snippet.favorite };
			}

			return snippet;
		});
	});
}
