<template>
	<address class="not-italic flex flex-row gap-3 sm:gap-2 items-center sm:relative z-50">
		<section class="hidden">
			<span class="block text-xl font-bold">Adresse</span>
			<span class="">Bornsteiner Str. 17c<br />24214 Gettorf<br /></span>
		</section>

		<button
			class="w-10 h-10 text-xl drop-shadow-sm rounded-full bg-lime-200 hover:bg-gruen dark:hover:bg-lime-200 dark:bg-gruen text-gruen hover:text-white dark:hover:text-gruen dark:text-white"
		>
			<a href="mailto:fabianschmaljohann@posteo.de"><i class="fa-solid fa-envelope"></i></a>
		</button>

		<button
			class="w-10 h-10 text-xl drop-shadow-sm rounded-full bg-lime-200 hover:bg-gruen dark:hover:bg-lime-200 dark:bg-gruen text-gruen hover:text-white dark:hover:text-gruen dark:text-white"
		>
			<a href="tel:+4943463619807"><i class="fa-solid fa-phone"></i></a>
		</button>
		<ColorSchemeButton
			class="w-10 h-10 text-xl drop-shadow-sm rounded-full bg-gradient-to-tr from-[#2b4162] to-blue-900 dark:bg-gradient-tr dark:from-[#66a4e7] dark:to-[#a8d6f9] dark:text-yellow-200 dark:hover:text-white hover:text-white dark:shadow-sm text-yellow-200 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in"
		/>
	</address>
</template>

<script setup>
	import ColorSchemeButton from "../ColorSchemeButton.vue";
</script>

<style></style>
