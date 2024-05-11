<script lang="ts">
	import { onMount } from 'svelte';

	interface ConnectInfo {
		chainId: string;
	}

	const getMetaMaskPresent = () => window.ethereum.isMetaMask;

	let provider;

	const handleConnect = async () => {
		if (window.ethereum) {
			const res = await window.ethereum.request({ method: 'eth_requestAccounts' });

			console.log(res);
		}
	};

	const handleDisconnect = async () => {
		if (window.ethereum) {
			await window.ethereum.request({
				method: 'wallet_revokePermissions',
				params: [
					{
						eth_accounts: {}
					}
				]
			});
		}
	};

	onMount(() => {
		provider = window.ethereum;

		console.log(getMetaMaskPresent());
	});
</script>

<button on:click={handleConnect}>Connect</button>
<button on:click={handleDisconnect}>Disconnect</button>