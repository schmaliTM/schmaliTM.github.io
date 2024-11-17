<template>
	<div class="veggie-burger-packaging">
		<label id="veggie-burger" for="veggie-burger-checkbox" class="group block relative bg-transparent w-6 h-6">
			<input
				id="veggie-burger-checkbox"
				ref="veggieBurgerCheckbox"
				type="checkbox"
				:checked="isChecked"
				name="veggie-burger-checkbox"
				class="hidden"
				@click="mainStore.toggleNavigationVisibility()"
			/>
			<div class="layers">
				<span
					class="layer-top transition-all duration-50 ease-in bg-gruen group-hover:bg-grau dark:bg-grau dark:group-hover:bg-gruen h-1/6 w-[90%] absolute top-0 right-0 rounded-xl"
				></span>
				<span
					class="layer-mid-top transition-all duration-50 delay-50 ease-in bg-gruen group-hover:bg-grau dark:bg-grau dark:group-hover:bg-gruen h-1/6 w-[80%] absolute rounded-xl top-1/2 right-0 -translate-y-1/2"
				></span>
				<span
					class="layer-mid-bottom transition-all duration-50 delay-50 ease-in bg-gruen group-hover:bg-grau dark:bg-grau dark:group-hover:bg-gruen h-1/6 w-[80%] absolute rounded-xl top-1/2 right-0 -translate-y-1/2"
				></span>
				<span
					class="layer-bottom transition-all duration-50 ease-in bg-gruen group-hover:bg-grau dark:bg-grau dark:group-hover:bg-gruen h-1/6 w-full absolute bottom-0 right-0 rounded-xl"
				></span>
			</div>
		</label>
	</div>
</template>

<script setup>
	import { ref, watchEffect } from "vue";
	import { useStore } from "../../stores";
	const mainStore = useStore();

	const veggieBurgerCheckbox = ref("veggieBurgerCheckbox");
	const isChecked = ref(null);

	watchEffect(async () => {
		isChecked.value = await mainStore.navbarVisibility;
	});
</script>

<style lang="scss" scoped>
	input[type="checkbox"]:hover ~ .layers > .layer-mid-bottom {
		width: 100%;
	}
	input[type="checkbox"]:hover ~ .layers > .layer-bottom {
		width: 70%;
	}
	input[type="checkbox"]:hover ~ .layers > .layer-top {
		width: 80%;
	}

	input[type="checkbox"]:checked:hover ~ .layers > .layer-mid-top {
		transform: rotate(135deg);
	}
	input[type="checkbox"]:checked:hover ~ .layers > .layer-mid-bottom {
		transform: rotate(45deg);
	}

	input[type="checkbox"]:checked ~ .layers > .layer-top {
		top: 50%;
		transform: translateY(-50%);
		opacity: 0;
	}
	input[type="checkbox"]:checked ~ .layers > .layer-mid-top {
		transform: rotate(225deg);
		top: 43%;
		width: 100%;
	}
	input[type="checkbox"]:checked ~ .layers > .layer-mid-bottom {
		transform: rotate(-225deg);
		top: 43%;
		width: 100%;
	}
	input[type="checkbox"]:checked ~ .layers > .layer-bottom {
		bottom: 50%;
		transform: translateY(50%);
		opacity: 0;
	}
</style>
