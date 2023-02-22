export const useStore = defineStore('mainStore', {
    state: () => ({
        user: 'Mitsu Aza',
        isVisibleWindow: false,
    }),
    getters: {},
    actions: {
      toggleWindow() {
        this.isVisibleWindow = !this.isVisibleWindow;
      },
    },
});
