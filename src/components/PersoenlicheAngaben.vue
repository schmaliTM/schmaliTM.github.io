<script setup>
	import { ref } from "vue";
	import { useStore } from "../stores";
	import { useElementBounding } from "@vueuse/core";

	const mainStore = useStore();

	const personalElement = ref(null);
	mainStore.personalElementBoundings = useElementBounding(personalElement);
</script>

<template>
	<section
		id="persoenliches"
		ref="personalElement"
		class="bg-gradient-to-r from-sky-500 dark:from-sky-100 to-sky-300 dark:to-blue-100 border border-slate-300 dark:border-0 px-4 md:py-20 md:px-20"
	>
		<div class="container mx-auto xl:px-40">
			<!-- <h2 class="pt-6 pb-6 pl-4 text-sky-400 text-3xl font-bold">Fertigkeiten</h2> -->

			<h2 class="pt-12 pb-6 pl-4 text-white dark:text-sky-600 sm:text-6xl text-3xl font-extrabold">Persönliches</h2>

			<blockquote
				class="text-xl text-slate-200 dark:text-grau leading-relaxed font-light px-5 pb-12 flex flex-col gap-y-4"
			>
				<p>
					&#187; Ich bin ein <em>technologieaffiner</em> Mensch, immer auf der Suche nach neuen Erfahrungen und
					Möglichkeiten, meinen <em>Horizont zu erweitern</em>.
				</p>
				<p>Ich stelle mich gerne neuen Herausforderungen und lasse ungern ein <em>Rätsel</em> ungelöst.</p>
				<p>
					Für meine <em>Familie und Freunde</em> zu <em>kochen</em>, erfüllt mich. Am liebsten bereite ich dabei die
					Lebensmittel zu, die ich selbst in unserem <em>Garten</em> angebaut und geerntet habe. &#171;
				</p>
			</blockquote>
		</div>
	</section>
</template>

<style scoped lang="scss">
	// h2 {
	// 	background-color: rgba(0, 0, 0, 0.5);
	// 	color: transparent;
	// 	text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.9);

	// 	background-clip: text;
	// }
</style>
