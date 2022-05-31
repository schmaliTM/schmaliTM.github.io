<template class="relative">
	<button
		v-if="!mainStore.headerElement.inViewport"
		class="w-10 h-10 text-xl fixed bottom-24 right-10 drop-shadow-sm rounded-full bg-lime-200 hover:bg-gruen dark:hover:bg-lime-200 dark:bg-gruen text-gruen hover:text-white dark:hover:text-gruen dark:text-white"
		@click="scrollToTop()"
	>
		<i class="fa-regular fa-hand-point-up pt-1.5"></i>
	</button>
</template>

<script setup>
	import { useStore } from "../stores";
	const mainStore = useStore();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

<style></style>
