<template>
	<a name="top"></a>

	<header ref="headerElement" class="py-4 px-3 z-40 w-full bg-white dark:bg-gray-700 flex-none font-serif">
		<div
			class="max-w-5xl mx-auto pl-4 pr-2 smallish:pr-0 flex flex-row-reverse smallish:flex-row gap-3 justify-between items-center relative"
		>
			<div class="flex flex-row justify-top gap-x-3">
				<div class="smallish:pt-4">
					<component :is="logoState"></component>
				</div>
				<div class="pt-1 smallish:hidden">
					<!-- <TheHamburgerVue height="28px" /> -->
					<TheVeggiBurger />
				</div>
			</div>

			<div
				ref="mainMenuElement"
				class="overflow-hidden transition-all duration-300 ease-in flex flex-col smallish:pl-2 smallish:pr-2.5 gap-4 smallish:!max-h-fit w-full"
				:style="maxHeight"
			>
				<nav class="flex flex-col sm:flex-row py-4 text-lg gap-4 relative smallish:items-center smallish:justify-end">
					<KontaktMenu />

					<div
						class="flex flex-col gap-4 smallish:flex-row smallish:justify-between smallish:text-base text-2xl gap-x-3 pl-2"
					>
						<a
							class="underline-hover-effect cursor-pointer w-fit font-black text-[#6CB7FB] bg-gradient-to-r to-[#6CB7FB] from-[#6CB7FB]"
							href="#lebenslauf"
							@click="scrollToVita()"
							@click.prevent
							>Lebenslauf</a
						>
						<a
							class="underline-hover-effect cursor-pointer w-fit font-black text-fuchsia-500 bg-gradient-to-r to-fuchsia-500 from-fuchsia-500"
							href="#fertigkeiten"
							@click="scrollToSkills()"
							@click.prevent
							>Fertigkeiten</a
						>
						<a
							class="underline-hover-effect cursor-pointer w-fit font-black text-yellow-500 bg-gradient-to-r to-yellow-500 from-yellow-500"
							href="#referenzen"
							@click="scrollToReferences()"
							@click.prevent
							>Referenzen</a
						>
						<a
							class="underline-hover-effect cursor-pointer w-fit font-black text-black dark:text-white bg-gradient-to-r to-black dark:to-white from-black dark:from-white"
							href="#persoenliches"
							@click="scrollToPersonal()"
							@click.prevent
							>Persönliches</a
						>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
	import KontaktMenu from "./KontaktMenu.vue";
	// import TheHamburgerVue from "./TheHamburger.vue";
	import TheVeggiBurger from "./TheVeggiBurger.vue";

	import TheFavicon from "./TheFavicon.vue";
	import TheLogo from "./TheLogo.vue";

	import { ref, watchEffect } from "vue";
	import { computed } from "@vue/reactivity";
	import { useStore } from "../../stores";
	import { useElementBounding, useElementVisibility } from "@vueuse/core";

	const mainStore = useStore();

	const headerElement = ref(null);
	mainStore.headerElement = {
		boundings: useElementBounding(headerElement),
		inViewport: useElementVisibility(headerElement),
	};

	const mainMenuElement = ref("mainMenuElement");
	const menuHeight = ref(0);
	const maxHeight = computed(() => {
		return { "max-height": `${menuHeight.value}px` };
	});

	const logoState = computed(() => (mainStore.windowWidth >= 840 ? TheLogo : TheFavicon));

	const scrollToVita = () => {
		mainStore.toggleNavigationVisibility();
		window.scrollTo({ top: mainStore.getVitaElementPositionRelativeToDOMWindow, behavior: "smooth" });
	};
	const scrollToSkills = () => {
		mainStore.toggleNavigationVisibility();
		window.scrollTo({ top: mainStore.getSkillsElementPositionRelativeToDOMWindow, behavior: "smooth" });
	};
	const scrollToReferences = () => {
		mainStore.toggleNavigationVisibility();
		window.scrollTo({ top: mainStore.getReferencesElementPositionRelativeToDOMWindow, behavior: "smooth" });
	};
	const scrollToPersonal = () => {
		mainStore.toggleNavigationVisibility();
		window.scrollTo({ top: mainStore.getPersonalElementPositionRelativeToDOMWindow, behavior: "smooth" });
	};

	watchEffect(async () => {
		mainStore.getNavbarVisibility
			? (menuHeight.value = await mainMenuElement.value.scrollHeight)
			: (menuHeight.value = 0);
	});
</script>

<style lang="scss" scoped>
	.underline-hover-effect {
		background-size: 0% 3px;
		background-repeat: no-repeat;
		background-position: left bottom;
		transition: all;
		transition-duration: 180ms;
		transition-timing-function: ease-in;
		&:hover {
			background-size: 100% 5px;
		}
	}

	@media (min-width: 640px) {
		.underline-hover-effect {
			background-size: 0% 2px !important ;
			&:hover {
				background-size: 100% 2px !important;
			}
		}
	}
</style>
