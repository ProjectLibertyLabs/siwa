<script lang="ts">
	import * as siwa from '@projectlibertylabs/siwa';
	export let encodedRequest = '';
	export let requestJson = '';

	$: mainnet = siwa.generateRedirectUrl(encodedRequest, '', { endpoint: 'production' });
	$: testnet = siwa.generateRedirectUrl(encodedRequest, '', { endpoint: 'staging' });
</script>

<h2>Result</h2>
<dl>
	<dt>Mainnet/Production URL</dt>
	<dd><pre style="overflow:scroll; width: 100%;">{mainnet}</pre></dd>
	<dt>Testnet/Staging URL</dt>
	<dd><pre style="overflow:scroll; width: 100%;">{testnet}</pre></dd>
	<dt>Encoded Request</dt>
	<dd><pre style="overflow:scroll; width: 100%;">{encodedRequest}</pre></dd>
	<dt>Signed Request (JSON)</dt>
	<dd>
		<details>
			<summary style="cursor: pointer;">Expand</summary>
			<pre style="overflow:scroll; width: 100%;">{requestJson}</pre>
		</details>
	</dd>
</dl>
