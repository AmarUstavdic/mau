<script lang="ts">
	import { onMount } from 'svelte';
	import { provider, addressList, initialize, connect, disconnect } from '../lib/metamask';

	export let data;


	onMount(() => {
		initialize
	
	
		console.log(data);
	
	});

	$: {
		console.log(provider);
		console.log(addressList);
	}



</script>

<button on:click={connect}>Connect</button>
<button on:click={disconnect}>Disconnect</button>

{#if addressList}
	{#each $addressList as walletAddress }
		<p>{walletAddress}</p>
	{/each}
{:else}
	<p>Not connected</p>
{/if}
