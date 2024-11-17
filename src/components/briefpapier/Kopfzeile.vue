<script>
	export default {
		name: "KopfzeileVue",
	};
</script>

<template>
	<div id="briefkopf"></div>
</template>

<style lang="scss">
	@media screen {
		#briefkopf {
			max-width: 1024px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			#logo {
				width: 200px;
			}
		}
	}

	@media print {
		#briefkopf {
			height: 45mm;
			background-color: grey;
		}
	}
</style>
