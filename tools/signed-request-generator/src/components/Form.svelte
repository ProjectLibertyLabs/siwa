<script lang="ts">
	import Permissions from './Permissions.svelte';
	import ManualSign from './ManualSign.svelte';
	import WalletSign from './WalletSign.svelte';
	import Credentials from './Credentials.svelte';
	import {
		buildSignedRequest,
		encodeSignedRequest,
		type SiwaCredential
	} from '@projectlibertylabs/siwa';

	export let encodedRequest = '';
	export let requestJson = '';
	export let error = '';

	let form: HTMLFormElement;
	let callbackUri = '';
	let signerPublicKey = '';
	let signature = '';
	let isManualSign = false;
	let permissions: number[] = [];
	let credentials: SiwaCredential[] = [];
	let isRequiredComplete = false;

	// Toggle between manual sign and Polkadot.js
	function toggleSignMethod(method: string) {
		isManualSign = method === 'manual';
	}

	$: {
		isRequiredComplete = !!form?.checkValidity();
		try {
			if (!form.checkValidity()) {
				throw new Error('Invalid form. Check required fields.');
			}
			const signedRequest = buildSignedRequest(
				signature,
				signerPublicKey,
				callbackUri,
				permissions,
				credentials
			);
			encodedRequest = encodeSignedRequest(signedRequest);
			requestJson = JSON.stringify(signedRequest, null, 2);
			error = '';
		} catch (e: unknown) {
			error = (e as Error).message || 'Unknown error';
		}
	}
</script>

<form bind:this={form}>
	<div class="mb-4">
		<label for="callbackUri">Callback URI *</label>
		<input
			type="url"
			id="callbackUri"
			bind:value={callbackUri}
			required
			placeholder="https://localhost:3000/login"
		/>
	</div>

	<div class="mb-4">
		<Permissions bind:permissions />
	</div>
	<div class="mb-4">
		<Credentials bind:credentials />
	</div>
	{#if isRequiredComplete}
		<div class="mb-4">
			<fieldset>
				<legend>Choose Signing Method *</legend>
				<div class="checkboxes">
					<label for="signMethod-polkadot">
						<input
							id="signMethod-polkadot"
							checked
							type="radio"
							name="signMethod"
							value="polkadot"
							on:change={() => toggleSignMethod('polkadot')}
						/>
						Use Polkadot.js Extension to Sign
					</label>
					<label for="signMethod-manual">
						<input
							id="signMethod-manual"
							type="radio"
							name="signMethod"
							value="manual"
							on:change={() => toggleSignMethod('manual')}
						/>
						Generate Data and Input Signature Manually
					</label>
					{#if isManualSign}
						<ManualSign {callbackUri} {permissions} bind:signature bind:signerPublicKey />
					{:else}
						<WalletSign {callbackUri} {permissions} bind:signature bind:signerPublicKey />
					{/if}
				</div>
			</fieldset>
		</div>
	{/if}
</form>
