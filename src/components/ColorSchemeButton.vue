<template class="relative">
	<transition
		name="ColorSchemeButton"
		enter-active-class="animate__animated animate__bounceInRight"
		leave-active-class="animate__animated animate__bounceOutRight"
	>
		<button
			class="w-10 h-10 text-xl drop-shadow-sm rounded-full bg-gradient-to-tr from-[#2b4162] to-blue-900 dark:bg-gradient-tr dark:from-[#66a4e7] dark:to-[#a8d6f9] dark:text-yellow-200 dark:hover:text-white text-white dark:shadow-sm hover:text-yellow-200 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in"
			@click="toggleDark()"
		>
			<i v-if="!isDark" class="fa-solid fa-moon pt-1.5"></i>
			<i v-else class="fa-solid fa-lightbulb pt-1.5"></i>
		</button>
	</transition>
</template>

<script setup>
	import { useDark, useToggle } from "@vueuse/core";
	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<style></style>
