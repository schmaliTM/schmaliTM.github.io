<script>
	export default {
		name: "MarkenVue",
	};
</script>

<template>
	<div id="faltmarke1" class="faltmarke"></div>
	<div id="lochmarke"></div>
	<div id="faltmarke2" class="faltmarke"></div>
</template>

<style lang="scss">
	@media print {
		.faltmarke {
			width: 10mm;
			height: 1px;
			position: absolute;
			display: block;
			background-color: black !important;
			color: white;
		}
		#faltmarke1 {
			top: 105mm;
		}
		#lochmarke {
			width: 15mm;
			top: 148.5mm;
			height: 1px;
			position: absolute;
			display: block;
			background-color: black !important;
		}
		#faltmarke2 {
			top: 210mm;
		}
	}
</style>
