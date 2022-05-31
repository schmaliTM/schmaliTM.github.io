<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import MainNavigation from "./components/header/MainNavigation.vue";
	import FooterBereich from "./components/FooterBereich.vue";
</script>

<template>
	<MainNavigation />
	<router-view />
	<FooterBereich />
</template>

<style lang="scss">
	@import "animate.css";
</style>
