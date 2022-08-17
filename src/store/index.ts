import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading;
    }
  }
});
