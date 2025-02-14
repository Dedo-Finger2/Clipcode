<script lang="ts">
	import CodeSnippetCard from "../components/CodeSnippetCard.svelte";
	import { addSnippet, snippetStore } from "$lib/stores/SnippetStore";
	import type { PageData } from "./$types";
	import Footer from "../components/Footer.svelte";
	import { createSearchStore, searchHandler } from "$lib/stores/Search";
	import { onDestroy } from "svelte";

	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: "",
		code: "",
		description: "",
		language: "html"
	}

	const searchSnippets = data.snippets.map((codeSnippet) => ({
		...codeSnippet,
		searchTerms: `${codeSnippet.title} ${codeSnippet.language}`
	}));

	const searchStore = createSearchStore(searchSnippets);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
	
	onDestroy(() => {
		unsubscribe();
	});

	snippetStore.set(data.snippets);
	
</script>

<div class="flex justify-center p-5">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6 text-3xl">✨ Create a <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Code Snippet </span> ✨</h3>
		<div class="card p-4 w-full text-token space-y-4 rounded-2xl shadow-md">

			<label class="label">
				<span>Snippet Title*</span>
				<input
					class="input rounded-lg"
					type="text"
					placeholder="Enter the tittle here..."
					bind:value={formData.title}
				>
			</label>

			<label class="label">
				<span>Programming Language*</span>
				<select
					class="select rounded-lg"
					bind:value={formData.language}
				>
					<option value="html">HTML</option>
					<option value="php">PHP</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>

			<label class="label">
				<span>Code Snippet*</span>
				<textarea
					class="textarea rounded-lg"
					rows="4"
					placeholder="Paste your code here..."
					bind:value={formData.code}
				></textarea>
			</label>

			<label class="label">
				<span>Code Description</span>
				<textarea
					class="textarea rounded-lg"
					rows="4"
					placeholder="Write about the code here..."
					bind:value={formData.description}
				></textarea>
			</label>

			<button
				class="btn btn-sm variant-filled-primary w-full rounded-md"
				on:click={() => addSnippet(formData)}>
				Create Snippet
			</button>

		</div>

		<hr>
		<div class="pt-4 flex flex-col gap-4 pb-4">
			<h2 class="text-2xl">My Code Snippets</h2>
			<input
				class="input rounded-xl"
				type="text"
				placeholder="Search for snippets..."
				bind:value={$searchStore.search}
			>
		</div>
		{#if data.snippets.length === 0}
			<p>There is no snippets here ☹️.</p>
		{:else}
			{#each $snippetStore as snippet, index}
				<CodeSnippetCard snippet={snippet} index={index} />
			{/each}
		{/if}

		<Footer />
	</div>
</div>