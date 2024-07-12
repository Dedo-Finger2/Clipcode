<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";
  import { deleteSnippet, toggleFavorite } from "$lib/stores/SnippetStore";

  export let snippet: CodeSnippet = {
    title: "",
    code: "",
    language: "",
    favorite: false
  }

  export let index: number;

</script>

<div class="card rounded-2xl">
  <header class="card-header">
    { snippet.title }
    <div class="float-right">
      <button
        type="button"
        class="btn btn-sm variant-filled-secondary rounded-md"
        on:click={() => toggleFavorite(index)}
      >
        { snippet.favorite ? "Unfavorite" : "Favorite" }
      </button>
      <button
        type="button"
        class="btn btn-sm variant-filled-error rounded-md"
        on:click={() => deleteSnippet(index)}
      >
        X
      </button>
    </div>
  </header>
  <section class="p-4">
    <CodeBlock language={ snippet.language } code={ snippet.code } />
  </section>
</div>