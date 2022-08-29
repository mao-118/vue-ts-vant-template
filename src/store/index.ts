import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    loading: false,
    topHeight: 0
  }),
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    setTopHeight(top: number) {
      this.topHeight = top;
    }
  }
});
