<!-- Usando typescript como linguagem -->
<script lang="ts">
  import { CodeBlock } from "@skeletonlabs/skeleton";
</script>

<div class="card rounded-2xl">
  <header class="card-header">
    Title
    <div class="float-right">
      <button type="button" class="btn btn-sm variant-filled-secondary rounded-md">
        Favorite
      </button>
      <button type="button" class="btn btn-sm variant-filled-error rounded-md">
        X
      </button>
    </div>
  </header>
  <section class="p-4">
    <CodeBlock language={"HTML"} code={"<h1>Hello World!</h1>"} />
  </section>
</div>