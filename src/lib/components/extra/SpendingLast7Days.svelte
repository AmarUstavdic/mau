<script context="module">
	import Chart from 'chart.js/auto';
</script>

<script>
	import { onMount, onDestroy } from 'svelte';

	let chart;

	onMount(() => {
		const ctx = document.querySelector('.chart-container canvas').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
				datasets: [
					{
						label: 'Spending',
						data: [50, 30, 60, 40, 70, 50, 80], // Sample spending data for last 7 days
						backgroundColor: 'rgba(75, 192, 192, 0.5)', // Teal color
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});

	// Cleanup chart on component destruction
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<div class="chart-container rounded-lg border-2 border-slate-100">
	<canvas></canvas>
</div>


<style>
    .chart-container {
        width: 100%;
        height: 100%;
    }
</style>
