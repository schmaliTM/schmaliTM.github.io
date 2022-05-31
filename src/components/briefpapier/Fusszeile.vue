<script>
	export default {
		name: "FusszeileVue",
	};
</script>

<template>
	<footer>
		<div id="seiten">Seite 1 von 2</div>
		<address>Testadresse</address>
	</footer>
</template>

<style lang="scss">
	@media print {
		footer {
			margin-left: 25mm;
			margin-right: 20mm;
			#seiten {
				display: block;
				height: 4.23mm;
				background-color: hsla(19, 74%, 71%, 0.5);
				margin: 4.23mm 0;
				text-align: right;
			}
			address {
				background-color: hsla(19, 74%, 71%, 0.5);
				height: 16.92mm;
			}
		}
	}
</style>
