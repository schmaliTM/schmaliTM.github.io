<template>
	<button @click="toggleDark()">
		<i v-if="isDark" class="fa-solid fa-lightbulb"></i>
		<i v-else class="fa-solid fa-moon"></i>
	</button>
</template>

<script setup>
	import { useDark, useToggle } from "@vueuse/core";

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<style></style>
