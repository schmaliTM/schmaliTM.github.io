<template>
	<button @click="mainStore.toggleColorScheme()">
		<i v-if="colorScheme === 'dark'" class="fa-solid fa-lightbulb"></i>
		<i v-if="colorScheme === 'light'" class="fa-solid fa-moon"></i>
	</button>
</template>

<script setup>
	import { ref, watchEffect, onMounted } from "vue";
	import { useStore } from "../stores";
	const mainStore = useStore();
	const colorScheme = ref("");

	const getPrefersColorScheme = () => {
		return window.matchMedia("(prefers-color-scheme: light").matches ? "light" : "dark";
	};
	const prefersColorScheme = getPrefersColorScheme();

	onMounted(() => {
		if (localStorage.getItem("user-color-scheme") === null || localStorage.getItem("user-color-scheme") === "auto") {
			console.log("localStorage: user-color-scheme is null or auto", localStorage.getItem("user-color-scheme"));
			console.log("🚀 ~ file: ColorSchemeButton.vue ~ line 19 ~ prefersColorScheme", prefersColorScheme);
			mainStore.colorScheme = prefersColorScheme;
		}
		colorScheme.value = mainStore.colorScheme;
	});

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
		const newColorScheme = event.matches ? "dark" : "light";
		console.log("🚀 ~ file: ColorSchemeButton.vue ~ line 30 ~ window.matchMedia ~ newColorScheme", newColorScheme);
	});

	watchEffect(async () => {
		colorScheme.value = await mainStore.colorScheme;

		if (colorScheme.value !== "dark") {
			window.document.getElementsByTagName("html")[0].classList.remove("dark");
		}
		if (colorScheme.value !== "light") {
			window.document.getElementsByTagName("html")[0].classList.add("dark");
		}
	});
</script>

<style></style>
