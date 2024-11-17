<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import KnoeppeVue from "./components/Briefpapier/Knoeppe.vue";
	import KopfzeileVue from "./components/Briefpapier/Kopfzeile.vue";
	import AdressfeldVue from "./components/Briefpapier/Adressfeld.vue";
	import TextFeldVue from "./components/Briefpapier/TextFeld.vue";
	import MarkenVue from "./components/Briefpapier/Marken.vue";
	import FusszeileVue from "./components/Briefpapier/Fusszeile.vue";
</script>

<script>
	export default {
		name: "BriefpapierVue",
		data() {
			return {
				vorlageIsActive: true,
			};
		},
	};
</script>

<template>
	<div id="dina4" :class="{ vorlage: vorlageIsActive }">
		<KopfzeileVue />
		<AdressfeldVue />
		<MarkenVue />
		<TextFeldVue msg="Bewerbungsunterlagen" />
		<FusszeileVue />
	</div>
	<KnoeppeVue :vorlage-state="vorlageIsActive" @vorlage-wechseln="vorlageIsActive = !vorlageIsActive" />
</template>

<style lang="scss">
	@import "styles/kommandozentrale.scss";
	//   Ansicht als Papier DIN A4
	@media screen {
		#app {
			background-color: hsla(0, 0%, 92.5%, 1);
			padding-top: 40px;
			margin: 0;
			border: 0;
			#dina4 {
				background-size: 210mm 297mm;
				margin: 0 auto;
				width: $paper-width;
				height: $paper-height;
				position: relative;
				background-color: hsla(0, 0%, 100%, 1);
				box-shadow: 0px 2px 4px 1px hsla(0, 0%, 0%, 0.2);
			}
			.vorlage {
				background: url("../assets/DIN_5008_Form_B.svg") left top no-repeat;
			}
		}
	}

	@media print {
		* {
			color: #000;
			margin: 0;
			background-color: #ffffff;
			box-shadow: none;
			text-shadow: none;
		}
		#app {
			#dina4 {
				margin: 0;
				top: 0;
			}
		}
	}
	@page {
		size: A4;
		margin: 0;
	}
</style>
