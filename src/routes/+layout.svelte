<script lang="ts">
	import '../app.postcss';

	import logo from "$lib/images/logo-no-bg.png";

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	// Languages
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Skeleton UI
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<!-- Navbar -->
	<svelte:fragment slot="header">
		<AppBar>
			<div class="flex flex-row items-center gap-4">
				<img class="size-6" src={logo} alt="">
				<h3 class="text-left">ClipCode</h3>
			</div>
		</AppBar>
	</svelte:fragment>
	<!-- App -->
	<slot />
</AppShell>

