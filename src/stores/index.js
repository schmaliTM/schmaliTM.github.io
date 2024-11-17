import { defineStore } from "pinia";

export const useStore = defineStore("mainStore", {
	state: () => ({
		navbarVisibility: false,
		windowWidth: window.innerWidth,
		headerElement: { boundings: {}, inViewport: true },
		vitaElementBoundings: {},
		skillsElementBoundings: {},
		referencesElementBoundings: {},
		personalElementBoundings: {},
		colorScheme: "light",
	}),

	actions: {
		toggleNavigationVisibility() {
			this.navbarVisibility = !this.navbarVisibility;
		},
		showModal() {
			this.isModalOpen = true;
		},
		closeModal() {
			this.isModalOpen = false;
		},
		hideNavIfActive() {
			if (this.navbarVisibility === true) {
				this.navbarVisibility = false;
			}
		},
		showNav() {
			this.navbarVisibility = true;
		},
		toggleColorScheme() {
			this.colorScheme === "light" ? (this.colorScheme = "dark") : (this.colorScheme = "light");
		},
	},
	getters: {
		getNavbarVisibility: (state) => state.navbarVisibility,
		getModalVisibility: (state) => state.isModalOpen,
		getVitaElementPositionRelativeToDOMWindow: (state) =>
			Math.abs(Math.abs(state.headerElement.boundings.top) - Math.abs(state.vitaElementBoundings.top)),
		getSkillsElementPositionRelativeToDOMWindow: (state) =>
			Math.abs(Math.abs(state.headerElement.boundings.top) - Math.abs(state.skillsElementBoundings.top)),
		getReferencesElementPositionRelativeToDOMWindow: (state) =>
			Math.abs(Math.abs(state.headerElement.boundings.top) - Math.abs(state.referencesElementBoundings.top)),
		getPersonalElementPositionRelativeToDOMWindow: (state) =>
			Math.abs(Math.abs(state.headerElement.boundings.top) - Math.abs(state.personalElementBoundings.top)),
	},
});
