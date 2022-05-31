<script setup>
	import LebenslaufTimeline from "./LebenslaufTimeline.vue";
	import FertigkeitenBereich from "./FertigkeitenBereich.vue";
	import ReferenzBereich from "./ReferenzBereich.vue";
	import PersoenlicheAngaben from "./PersoenlicheAngaben.vue";
	import ScrollToTop from "./ScrollToTop.vue";
	import ColorSchemeButton from "./ColorSchemeButton.vue";

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
			<ScrollToTop />
		</transition>
		<transition
			name="colorSchemeButton"
			enter-active-class="animate__animated animate__bounceInRight"
			leave-active-class="animate__animated animate__bounceOutRight"
		>
			<ColorSchemeButton v-if="!mainStore.headerElement.inViewport" class="fixed bottom-10 right-10" />
		</transition>
	</main>
</template>

<style></style>
