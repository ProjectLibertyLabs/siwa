<script lang="ts">
	import Form from '../components/Form.svelte';
	import Results from '../components/Results.svelte';

	let encodedRequest = '';
	let requestJson = '';
	let error = '';
</script>

<h1>Signed Request Generator</h1>

<p>Fill out the form and the signed request will be generated at the bottom</p>

<div class="mb-4">
	<Form bind:encodedRequest bind:requestJson bind:error />
</div>

{#if error}
	<h2 class="text-red">Error</h2>
	<p class="text-sm">{error}</p>
{:else}
	<Results {encodedRequest} {requestJson} />
{/if}
