import { writable } from 'svelte/store';
import { snippetStore } from './SnippetStore';

export interface SearchStoreModel {
	data: CodeSnippetWithFilteredTerms[];
	filtered: CodeSnippetWithFilteredTerms[];
	search: string;
}

type CodeSnippetWithFilteredTerms = CodeSnippet & { searchTerms: string };

export const createSearchStore = (data: CodeSnippetWithFilteredTerms[]) => {
	const { subscribe, set, update } = writable<SearchStoreModel>({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store: SearchStoreModel) => {
	const searchTerm = store.search.toLowerCase() || '';

	store.filtered = store.data.filter((codeSnippet) => {
		return codeSnippet.searchTerms.toLowerCase().includes(searchTerm);
	});

	snippetStore.update(() => store.filtered);
};
