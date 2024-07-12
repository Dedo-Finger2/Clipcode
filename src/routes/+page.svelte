<script lang="ts">
	import CodeSnippetCard from "../components/CodeSnippetCard.svelte";
	import { addSnippet, snippetStore } from "../SnippetStore";
	import type { PageData } from "./$types";
	export let data: PageData;

	let formData: CodeSnippetInput = {
		title: "",
		code: "",
		language: "html"
	}

	snippetStore.set(data.snippets)
</script>

<div class="flex justify-center p-5">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6 text-3xl">✨ Create a <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Code Snippet </span> ✨</h3>
		<div class="card p-4 w-full text-token space-y-4 rounded-2xl shadow-md">

			<label class="label">
				<span>Snippet Title</span>
				<input
					class="input rounded-lg"
					type="text"
					placeholder="Enter the tittle her..."
					bind:value={formData.title}
				>
			</label>

			<label class="label">
				<span>Programming Language</span>
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
				<span>Code Snippet</span>
				<textarea
					class="textarea rounded-lg"
					rows="4"
					placeholder="Paste your code here..."
					bind:value={formData.code}
				></textarea>
			</label>

			<button
				class="btn btn-sm variant-filled-primary w-full rounded-md"
				on:click={() => addSnippet(formData)}>
				Create Snippet
			</button>

		</div>

		<hr>
		<div class="pt-4">
			<h2 class="text-2xl">My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard snippet={snippet} index={index} />
		{/each}
	</div>
</div>