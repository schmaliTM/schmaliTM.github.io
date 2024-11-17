<template class="relative">
	<button @click="scrollToTop()">
		<i class="fa-regular fa-hand-point-up pt-1.5"></i>
	</button>
</template>

<script setup>
	import { useStore } from "../stores";
	const mainStore = useStore();

	const scrollToTop = () => {
		mainStore.navbarVisibility = false;
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

<style></style>
