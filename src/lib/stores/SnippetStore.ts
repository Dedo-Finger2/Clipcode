import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet({ title, description, language, code }: CodeSnippetInput) {
	const snippets = get(snippetStore);

	if (title.length === 0) title = 'No Title.';
	if (description?.length === 0) description = 'No Description.';
	if (code.length === 0) code = 'No Code.';

	snippetStore.update(() => {
		return [{ title, description, language, code, favorite: false }, ...snippets];
	});
}

export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);

	const updatedSnippets = snippets.filter((snippet, snippetIndex) => {
		if (snippetIndex !== index) return snippet;
	});

	snippetStore.update(() => updatedSnippets);
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
