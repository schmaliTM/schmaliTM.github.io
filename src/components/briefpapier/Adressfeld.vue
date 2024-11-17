<script>
	export default {
		name: "AdressfeldVue",
	};
</script>

<template>
	<div id="kommunikation">
		<div id="anschriftsfeld">
			<address class="absender">Fabian Schmaljohann, Bornsteiner Str. 17c, 24214 Gettorf</address>
			<address class="empfaenger">
				<span id="firma">Wiese Umweltservice GmbH & Co. KG</span>
				<span id="straße">Noerer Straße 60</span>
				<span id="ort">24251 Osdorf</span>
			</address>
		</div>
		<div id="informationsblock">
			<address>Text</address>
		</div>
	</div>
</template>

<style lang="scss">
	@media print {
		#kommunikation {
			display: flex;
			flex-direction: row;
			#anschriftsfeld {
				margin-left: 20mm;
				background-color: rgba(236, 161, 126, 0.5);
				height: 45mm;
				width: 85mm;
				padding-left: 5mm;
				text-align: left;
				.absender {
					font-size: 0.7rem;
					line-height: 4.23mm;
					display: inline-block;
					height: 17.7mm;
					width: 80mm;
					background-color: rgba(236, 161, 126, 0.5);
					margin: 0;
					padding-top: 12mm;
				}
				.empfaenger {
					span {
						display: block;
						line-height: 1rem;
					}
				}
			}
			#informationsblock {
				height: 40mm;
				width: 75mm;
				margin-top: 5mm;
				margin-left: 20mm;
				background-color: rgba(236, 161, 126, 0.5);
			}
		}
	}
</style>
