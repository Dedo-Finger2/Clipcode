<script lang="ts">
	import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
  import { Fa } from "svelte-fa"

  export let link: string = "";
  export let name: string = "";
  export let icon: IconDefinition;
</script>

<a class="logo-item variant-filled-surface" href={link} target="_blank">
  <Fa icon={icon} class="text-2xl" />
  <span>{name}</span>
</a>
