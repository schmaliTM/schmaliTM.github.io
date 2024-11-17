<script setup>
	import LebenslaufTimeline from "./LebenslaufTimeline.vue";
	import FertigkeitenBereich from "./FertigkeitenBereich.vue";
	import ReferenzBereich from "./ReferenzBereich.vue";
	import PersoenlicheAngaben from "./PersoenlicheAngaben.vue";
	import ScrollToTop from "./ScrollToTop.vue";

	import { useStore } from "../stores";

	const mainStore = useStore();
	const onResize = () => {
		mainStore.windowWidth = window.innerWidth;
	};
	window.addEventListener("resize", onResize);
</script>

<template>
	<main>
		<LebenslaufTimeline />
		<FertigkeitenBereich />
		<ReferenzBereich />
		<PersoenlicheAngaben />
		<transition
			name="scrollToTop"
			enter-active-class="animate__animated animate__bounceInRight"
			leave-active-class="animate__animated animate__bounceOutRight"
		>
			<ScrollToTop
				v-if="!mainStore.headerElement.inViewport"
				class="w-10 h-10 text-xl fixed bottom-6 right-6 drop-shadow-sm rounded-full bg-lime-200 hover:bg-gruen dark:hover:bg-lime-200 dark:bg-gruen text-gruen hover:text-white dark:hover:text-gruen dark:text-white"
			/>
		</transition>
	</main>
</template>

<style></style>
