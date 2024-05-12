<script lang="ts">
	import { TypewriterEffectSmooth } from '$lib/components/ui/TypewriterEffect/index';
	import { BentoGrid, BentoGridItem } from '$lib/components/ui/BentoGrid/index';
	import { ClipboardCopy, File, FileSignature, Table, Waves, Box, Boxes } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	const handleLaunchApp = () => {
		goto('/dashboard');
	};

	const words = [
		{
			text: 'Build'
		},
		{
			text: 'awesome'
		},
		{
			text: 'apps'
		},
		{
			text: 'with'
		},
		{
			text: 'Aceternity.',
			className: 'text-blue-500 dark:text-blue-500'
		}
	];

	let isSkeleton = true;

	const items = [
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			icon: ClipboardCopy
		},
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			icon: ClipboardCopy
		},
		{
			title: 'The Dawn of Innovation',
			description: 'Explore the birth of groundbreaking ideas and inventions.',
			icon: ClipboardCopy
		},
		{
			title: 'The Digital Revolution',
			description: 'Dive into the transformative power of technology.',
			icon: File
		},
		{
			title: 'The Power of Communication',
			description: 'Understand the impact of effective communication in our lives.',
			icon: Table
		},
		{
			title: 'The Pursuit of Knowledge',
			description: 'Join the quest for understanding and enlightenment.',
			icon: Waves
		},
		{
			title: 'The Joy of Creation',
			description: 'Experience the thrill of bringing ideas to life.',
			icon: Box
		},
		{
			title: 'The Spirit of Adventure',
			description: 'Embark on exciting journeys and thrilling discoveries.',
			icon: Boxes
		}
	];
</script>

<div class="bg-white-900 relative">
	<!-- Added relative class to make positioning easier -->
	<p class="absolute top-4 left-4 text-blue-500 text-4xl font-bold">MauPay</p>
	<!-- Added text "MauPay" in the top left corner -->
	<button
		on:click={handleLaunchApp}
		class="absolute top-4 right-4 h-10 w-40 rounded-xl border border-transparent bg-blue-500 text-sm text-white dark:border-white"
	>
		Launch app
	</button>
	<section class="flex h-[40rem] flex-col items-center justify-center mb-[-12rem]">
		<!-- <TypewriterEffectSmooth {words} /> -->
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 mt-[-8rem]">
			<!-- Increased text size for different screen sizes and added font-bold -->
			Shop with <span class="text-blue-500 px-2 py-1 rounded-md">Crypto,</span> Skip the Fees:
		</h1>

		<p class="text-xl mb-5 text-blue-500 dark:text-blue-500 mt-10">
			Seamlessly Spend Your Digital Assets Anywhere, Anytime
		</p>
		<div class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			<button
				class="h-10 w-40 rounded-xl border border-transparent bg-blue-500 text-sm text-white dark:border-white"
			>
				Join now
			</button>
			<button class="h-10 w-40 rounded-xl border border-black bg-white text-sm text-black">
				Signup
			</button>
		</div>
	</section>

	<section class="mt-[-2rem]">
		<BentoGrid className="max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<!-- Increased max-width and added gap between items -->
			{#each items as item, i (i)}
				<BentoGridItem
					title={item.title}
					description={item.description}
					className={i === 3 || i === 6 ? 'md:col-span-2 lg:col-span-1' : 'lg:col-span-1'}
				>
					<div
						slot="header"
						class="flex h-full min-h-[10rem] w-full flex-1 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100 dark:from-neutral-800 dark:to-neutral-800"
					></div>
					<!-- Increased height of header -->
					<svelte:component this={item.icon} slot="icon" class="h-8 w-8 text-neutral-500" />
					<!-- Increased icon size -->
				</BentoGridItem>
			{/each}
		</BentoGrid>
	</section>
</div>
