<script setup>
	import { ref } from "vue";
	import { useStore } from "../stores";
	import { useElementBounding } from "@vueuse/core";

	const mainStore = useStore();

	const skillsElement = ref(null);
	mainStore.skillsElementBoundings = useElementBounding(skillsElement);
</script>

<template>
	<section id="fertigkeiten" class="px-4 pb-10 dark:bg-gray-700 dark:text-gray-300">
		<div class="container max-w-5xl mx-auto">
			<div class="grid grid-cols-[50px_auto] sm:grid-cols-[1.5fr_50px_5fr] pb-5">
				<h2
					ref="skillsElement"
					class="col-start-1 sm:col-start-2 col-span-3 pl-4 sm:pb-4 sm:pt-4 text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#cb218e] to-fuchsia-500"
				>
					Fertigkeiten
				</h2>
			</div>

			<div class="flex flex-wrap grow flex-1 flex-col xs:flex-row md:justify-center gap-5 max-w-5xl">
				<div class="fertigkeit software group">
					<ol class="flex flex-row gap-1.5 items-center px-2.5 py-1">
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<h3
							class="font-bold text-gray-600 text-sm pt-0.5 pl-4 transition-all duration-200 ease-in group-hover:text-gruen"
						>
							Softwarekenntnisse
						</h3>
					</ol>
					<hr class="border-slate-600" />
					<ul class="flex flex-col gap-y-1 text-sm p-4 pr-8">
						<span class="parentheses">{</span>
						<li class="pl-4"><span class="key">MS Office:</span><span class="value">'sehr gut',</span></li>
						<li class="pl-4"><span class="key">Visual Studio Code:</span><span class="value">'sehr gut',</span></li>
						<li class="pl-4"><span class="key">Adobe Photoshop:</span><span class="value">'gut',</span></li>
						<li class="pl-4"><span class="key">Adobe Illustrator:</span><span class="value">'sehr gut'</span>,</li>
						<li class="pl-4"><span class="key">Adobe InDesign:</span><span class="value">'gut',</span></li>
						<li class="pl-4"><span class="key">Sage 100:</span><span class="value">'Grundkenntnisse',</span></li>
						<span class="parentheses">}</span>
					</ul>
				</div>
				<div class="fertigkeit betriebssysteme group">
					<ol class="flex flex-row gap-1.5 items-center px-2.5 py-1">
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<h3
							class="font-bold text-gray-600 text-sm pt-0.5 pl-4 transition-all duration-200 ease-in group-hover:text-gruen"
						>
							Betriebssysteme
						</h3>
					</ol>
					<hr class="border-slate-600" />
					<ul class="flex flex-col gap-y-2 text-sm p-4">
						<span class="parentheses">{</span>
						<li class="pl-4"><span class="key">MacOS:</span><span class="value">'tiefgehende Kenntnisse',</span></li>
						<li class="pl-4"><span class="key">Windows:</span><span class="value">'tiefgehende Kenntnisse',</span></li>
						<li class="pl-4">
							<span class="key">Linux:</span
							><span class="value">
								<span class="parentheses">{</span>
								<br />
								<span class="pl-4"
									><span class="key">Grundkenntnisse:</span> <span class="token">[</span><br />
									<span class="pl-8">
										<span class="inline-block value">'Ubuntu',</span>
										<span class="inline-block value">'Manjaro',</span>
										<span class="inline-block value">'Knoppix'</span> </span
									><br /><span class="pl-4 token">]</span><br /><span class="parentheses">}</span></span
								></span
							>
						</li>
						<span class="parentheses">}</span>
					</ul>
				</div>
				<div class="fertigkeit programmiersprachen group">
					<ol class="flex flex-row gap-1.5 items-center px-2.5 py-1">
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<h3
							class="font-bold text-gray-600 text-sm pt-0.5 pl-4 transition-all duration-200 ease-in group-hover:text-gruen"
						>
							Programmiersprachen
						</h3>
					</ol>
					<hr class="border-slate-600" />
					<ul class="flex flex-col gap-y-1 text-sm p-4 pr-8">
						<span class="parentheses">{</span>
						<li class="pl-4"><span class="key">HTML5:</span><span class="value">'sehr gut',</span></li>
						<li class="pl-4"><span class="key">CSS3:</span><span class="value">'sehr gut',</span></li>
						<li class="pl-4"><span class="key">JavaScript:</span><span class="value">'befriedigend',</span></li>
						<li class="pl-4">
							<span class="key">Frameworks:</span
							><span class="value"
								><span class="token">[</span><br /><span class="pl-4 inline-block">
									<span class="inline-block">'Bootstrap',</span><span class="inline-block">'Tailwind',</span
									><span class="inline-block">'Vue.js 3'</span> </span
								><br /><span class="token inline-block">]</span></span
							>
						</li>
						<li class="pl-4">
							<span class="key">CMS:</span
							><span class="value"
								><span class="token">[</span><br /><span class="pl-4 inline-block">
									<span class="inline-block">'Contao',</span><span class="inline-block">'Joomla',</span
									><span class="inline-block">'Wordpress'</span> </span
								><br /><span class="token inline-block">]</span></span
							>
						</li>
						<span class="parentheses">}</span>
					</ul>
				</div>
				<div class="fertigkeit sprachen group">
					<ol class="flex flex-row gap-1.5 items-center px-2.5 py-1">
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<h3
							class="font-bold text-gray-600 text-sm pt-0.5 pl-4 transition-all duration-200 ease-in group-hover:text-gruen"
						>
							Sprachen
						</h3>
					</ol>
					<hr class="border-slate-600" />
					<ul class="flex flex-col gap-y-1 text-sm p-4 pr-8">
						<span class="parentheses">{</span>
						<li class="pl-4 grid grid-cols-[5.5rem_auto]">
							<span class="key">Deutsch:</span><span class="value">'Muttersprache',</span>
						</li>
						<li class="pl-4 grid grid-cols-[5.5rem_auto]">
							<span class="key">Englisch:</span><span class="value">'verhandlungsfähig',</span>
						</li>
						<span class="parentheses">}</span>
					</ul>
				</div>
				<div class="fertigkeit qualifikation group">
					<ol class="flex flex-row gap-1.5 items-center px-2.5 py-1">
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<li class="w-3 h-3 rounded-full bg-gray-600"></li>
						<h3
							class="font-bold text-gray-600 text-sm pt-0.5 pl-4 transition-all duration-200 ease-in group-hover:text-gruen"
						>
							Weitere Qualifikation
						</h3>
					</ol>
					<hr class="border-slate-600" />
					<ul class="flex flex-col gap-y-1 text-sm p-4 pr-8">
						<span class="parentheses">{</span>
						<li class="pl-4">// Betrieblicher Ersthelfer</li>
						<li class="pl-4"><span class="key">Führerschein:</span><span class="value">'Klasse B'</span></li>
						<span class="parentheses">}</span>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
	.key {
		color: #f16372;
		padding-right: 3px;
		font-weight: bold;
		display: inline-block;
	}
	.value {
		color: #8cc470;
	}
	.token {
		color: #ffd500;
	}
	.parentheses {
		color: #eb68db;
	}
</style>
