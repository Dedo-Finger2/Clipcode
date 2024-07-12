import { writable, get } from 'svelte/store';

// SnippetStore - Sacola de Code Snippets

// Code Snippet
// Tittle, Code, Language, Favorite (yes or no)
export const snippetStore = writable<CodeSnippet[]>([]);

// addSnippet
export function addSnippet({ title, language, code }: CodeSnippetInput) {
	// Pega os dados
	const snippets = get(snippetStore);

	// Atualiza o banco de dados local com os dados que já existiam e adicionado um novo valor no começo
	snippetStore.update(() => {
		return [{ title, language, code, favorite: false }, ...snippets];
	});
}

// deleteSnippet
export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);

	// Corta o array de dados a partir do index dado
	snippets.slice(index, 1);

	snippetStore.update(() => {
		return snippets;
	});
}

// toggleFavorite
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
