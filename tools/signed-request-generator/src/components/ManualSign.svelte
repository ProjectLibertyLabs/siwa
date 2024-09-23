<script lang="ts">
	import { generateRequestSigningData } from '@projectlibertylabs/siwa';

	export let callbackUri = '';
	export let permissions: number[] = [];
	export let signature = '';
	export let signerPublicKey = '';

	let generatedSigningData = '';

	// Generate signing data on mount and when the input changes
	$: generatedSigningData = generateRequestSigningData(callbackUri, permissions);
</script>

<div>
	<label for="signingData">Generated Signing Data to Sign</label>
	<input type="text" id="signingData" readonly bind:value={generatedSigningData} />
</div>

<div>
	<label for="signerPublicKey">Signer Public Key</label>
	<input type="text" id="signerPublicKey" bind:value={signerPublicKey} />
</div>

<div>
	<label for="signature">Signature</label>
	<input type="text" id="signature" bind:value={signature} />
</div>
