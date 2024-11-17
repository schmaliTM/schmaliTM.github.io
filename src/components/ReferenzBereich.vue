<script setup>
	import { ref } from "vue";
	import { useStore } from "../stores";
	import { useElementBounding } from "@vueuse/core";

	const mainStore = useStore();

	const referencesElement = ref(null);
	mainStore.referencesElementBoundings = useElementBounding(referencesElement);
</script>

<template>
	<section
		id="referenzen"
		ref="referencesElement"
		class="min-h-screen md:pb-40 pb-10 px-4 dark:bg-gray-700 dark:text-gray-300"
	>
		<h2
			ref="skillsElement"
			class="container mx-auto max-w-5xl referenz-heading-color col-start-1 sm:col-start-2 row-start-1 pl-4 py-8 sm:py-10 sm:pl-10 text-3xl sm:text-5xl font-bold text-yellow-500"
		>
			Referenzen
		</h2>

		<section class="container mx-auto max-w-5xl">
			<div class="flex flex-col xs:flex-row xs:flex-wrap gap-10">
				<div class="referenz-wrapper group xs:min-w-fit">
					<picture class="referenz-logo xs:py-8 p-6 bg-[#B41826]">
						<img
							src="../assets/referenzen/logos/wiese.svg"
							class="px-5 xs:p-0"
							alt="Logo der Firma Wiese Umweltservice GmbH & Co. KG"
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Wiese Umweltservice GmbH & Co. KG</h3>
					<article class="referenz-text">
						<ul class="list-disc">
							<li>Bildung eines Corporate Design / Corporate Identity</li>
							<li>Design und Pflege Website auf Contao-Basis</li>
							<li>Fotoshooting für Website</li>
							<li>Visitenkarten</li>
							<li>Flyer</li>
							<li>
								Design und Herstellung von jeglichen Geschäftspapieren, In-House-Grafiken, Außenwerbung und
								Fahrzeugbeschriftung
							</li>
						</ul>
					</article>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img
							src="../assets/referenzen/logos/pakebusch.svg"
							class="xs:px-4 px-10"
							alt="Logo der Physiotherapeutin Jana Pakebusch "
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Jana Pakebusch Physiotherapeutin</h3>
					<article class="referenz-text">
						<ul class="list-disc">
							<li>Logo Entwicklung</li>
							<li>Bildung eines Corporate Design</li>
							<li>
								<a
									href="https://janapakebusch2010.netlify.app"
									target="_blank"
									class="underline underline-offset-2 hover:no-underline"
									title="Rebuild (tailwindcss, vuejs und vite) meiner Version von 2010"
									>Design und Pflege Website auf Contao-Basis</a
								>
							</li>
							<li>Fotoshooting für Website</li>
							<li>Visitenkarten</li>
							<li>Flyer</li>
							<li>Design und Herstellung von Außenwerbung</li>
						</ul>
					</article>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img
							src="../assets/referenzen/logos/timo-und-tanja.svg"
							class="xs:px-4 px-10"
							alt="Logo zur Hochzeit von Timo und Tanja Schöder Brandt "
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Hochzeit Timo & Tanja Schöder-Brandt</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Logo Entwicklung</li>
							<li>Safe-the-date Karten</li>
							<li>Druck Menükarten</li>
							<li>Aufkleberdesign und Herstellung</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture
						class="referenz-logo flex !justify-end bg-[url('/src/assets/referenzen/images/bhan_background.jpg')] bg-50% bg-no-repeat"
					>
						<img
							src="../assets/referenzen/logos/bhan.svg"
							class="w-6/12 h-20 pr-2"
							alt="Logo der Firma beauty, hands and nails"
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">beauty, hands & nails</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Logo ReDesign</li>
							<li>Redesign und Pflege Website auf Contao-Basis</li>
							<li>Design und Herstellung von Außenwerbung</li>
							<li>Treuekarten</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo xs:py-8 bg-gradient-to-tr from-black to-gray-700">
						<img src="../assets/referenzen/logos/highclimbers.svg" class="xs:px-4" alt="Logo der Firma highclimbers" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">highclimbers</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Rebuild und Pflege Website auf Contao-Basis</li>
							<li>Design und Herstellung von Autobeschriftung</li>
							<li>Flyer</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img
							src="../assets/referenzen/logos/hoenig.svg"
							class="h-24 xs:h-fit xs:p-4"
							alt="Logo der Dipl. Psych. Christini Hönig "
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Dipl. Psych. Christini Hönig</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Briefpapier</li>
							<li>Flyer</li>
							<li>Visitenkarten</li>
							<li>Anzeigenwerbung</li>
							<li>Design und Herstellung Ladenbeschriftung</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo xs:py-8 bg-[#AA0829]">
						<img src="../assets/referenzen/logos/artofbeauty.svg" class="px-5" alt="Logo der Firma ART OF BEAUTY" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">ART OF BEAUTY</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Redesign und Pflege Website auf Contao-Basis</li>
							<li>Design und Herstellung Ladenbeschriftung</li>
							<li>Visitenkarten</li>
							<li>Treuekarten</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img
							src="../assets/referenzen/logos/friseur-huebner.svg"
							class="xs:px-4"
							alt="Logo der Firma Friseur Hübner"
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Friseur Salon Hübner</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Redesign und Pflege Website auf Contao-Basis</li>
							<li>Erstellung von verschiedensten Druckprodukten</li>
							<li>Treuekarten</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img
							src="../assets/referenzen/logos/notka.svg"
							class="xs:px-4"
							alt="Logo der Firma Immobilien Nadine Notka-Schnack"
						/>
					</picture>
					<h3 class="referenz-heading referenz-heading-color">
						Immobilien <br />
						Nadine Notka-Schnack
					</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Logo ReDesign</li>
							<li>Redesign Website auf Contao Basis</li>
							<li>Gestaltung von Werbeanzeigen</li>
							<li>Visitenkarten</li>
							<li>Design und Herstellung Anhängerwerbung</li>
							<li>Herstellung von Firmenschilder zur Außenwerbung</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img src="../assets/referenzen/logos/pro-sh.svg" class="xs:px-4" alt="Logo der Firma Pro-SH Immobilien" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Pro-SH Immobilien</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Logo Entwicklung</li>
							<li>Visitenkarten</li>
							<li>Herstellung von Firmenschilder zur Außenwerbung</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo">
						<img src="../assets/referenzen/logos/pvclean.svg" class="xs:px-4" alt="Logo der Firma PVclean" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">PVclean</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Logo Entwicklung</li>
							<li>Bildung eines Corporate Design</li>
							<li>Design und Pflege Website auf Contao-Basis</li>
							<li>Visitenkarten</li>
							<li>Flyer</li>
						</ul>
					</div>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo xs:py-8 bg-gradient-to-tl from-[#005825] to-[#001300]">
						<img src="../assets/referenzen/logos/newrickscafe.svg" class="xs:px-4" alt="Logo des New Rick's Cafe" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">New Rick's Cafe</h3>
					<article class="referenz-text">
						<ul class="list-disc">
							<li>Logo ReDesign</li>
							<li>
								<a
									href="https://newrickscafe2011.netlify.app/"
									target="_blank"
									class="underline underline-offset-2 hover:no-underline"
									title="Rebuild (tailwindcss, vuejs und vite) meiner Version von 2011"
									>Design Website auf Contao-Basis</a
								>
							</li>
							<li>Fotoshooting für Website</li>
						</ul>
					</article>
				</div>
				<div class="referenz-wrapper group">
					<picture class="referenz-logo xs:py-8 bg-gradient-to-r from-sky-900 to-sky-800">
						<img src="../assets/referenzen/logos/alsterwacht.svg" class="xs:px-4" alt="Logo der Firma Alsterwacht" />
					</picture>
					<h3 class="referenz-heading referenz-heading-color">Alsterwacht Security</h3>
					<div class="referenz-text">
						<ul class="list-disc">
							<li>Erstellung Flyer für Firmenfeier</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<style scoped lang="scss">
	.referenz-text {
		ul {
			padding-left: 1.5rem;
		}
	}

	.referenz-heading-color {
		background-image: linear-gradient(-45deg, hsl(52, 100%, 50%), hsl(37, 96%, 59%));
		background-clip: text;
		color: transparent;
	}
	.kleinwechter {
		background: repeating-linear-gradient(135deg, #ffcc00, #ffcc00 20px, #000 20px, #000 40px);
	}
</style>
