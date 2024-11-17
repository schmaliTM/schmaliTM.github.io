<script setup>
	defineProps({
		msg: {
			type: String,
			default: "",
		},
	});
</script>

<template>
	<div id="textfeld">
		<h1>{{ msg }}</h1>
	</div>
</template>

<style lang="scss">
	@media print {
		#textfeld {
			height: 162mm;
			margin: 8.46mm 20mm 0 25mm;
			background-color: rgba(236, 161, 126, 0.5);
		}
	}
</style>
