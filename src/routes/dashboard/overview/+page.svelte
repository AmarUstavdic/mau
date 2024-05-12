<script lang="ts">
	import SpendingLast7Days from '$lib/components/extra/SpendingLast7Days.svelte';
	import SpendingChart from '$lib/components/extra/SpendingChart.svelte';
	import RecentSpendings from '$lib/components/extra/RecentSpendings.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
	

    <div class="col-span-4 row-span-1 h-60">
        
    </div>

	<div class="col-span-2">
		<SpendingChart />
	</div>

	<div class="col-span-1">
		<RecentSpendings />
	</div>
</div>
