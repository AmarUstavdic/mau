<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export let icon: HTMLElement | undefined = undefined;
	export let image: string | undefined = undefined; // New prop for image

</script>

<div
	class={cn(
		'group/bento row-span-1 flex flex-col justify-between space-y-0.1 rounded-xl border border-transparent bg-white p-2 shadow-input transition duration-200 hover:shadow-md dark:border-white/[0.2] dark:shadow-none max-h-40',
		className
	)}
>
<slot name="header" />
<div class="transition duration-200 group-hover/bento:translate-x-2">
  <slot name="image">
	<img src={image}/> <!-- Render image if provided -->
  </slot>

</div>
</div>