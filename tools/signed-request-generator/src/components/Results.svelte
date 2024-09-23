<script lang="ts">
	import { generateRedirectUrl } from '@projectlibertylabs/siwa';
	export let encodedRequest = '';
	export let requestJson = '';

	$: mainnet = generateRedirectUrl(encodedRequest, '', { endpoint: 'production' });
	$: testnet = generateRedirectUrl(encodedRequest, '', { endpoint: 'staging' });
</script>

<h2>Result</h2>
<dl>
	<dt>Encoded Request</dt>
	<dd>
		<textarea readonly style="width: 100%; height: 6em; font-size: 1.5rem;"
			>{encodedRequest}</textarea
		>
	</dd>
	<dt>Mainnet/Production URL</dt>
	<dd>
		<input
			style="font-size: 1.5rem;"
			type="text"
			id="mainnet_generated_url"
			readonly
			value={mainnet}
		/>
	</dd>
	<dt>Testnet/Staging URL</dt>
	<dd>
		<input
			style="font-size: 1.5rem;"
			type="text"
			id="testnet_generated_url"
			readonly
			value={testnet}
		/>
	</dd>
	<dt>Signed Request (JSON)</dt>
	<dd>
		<details>
			<summary style="cursor: pointer;">Expand</summary>
			<pre style="overflow:scroll; width: 100%; padding-bottom: 1.5rem;">{requestJson}</pre>
		</details>
	</dd>
</dl>
