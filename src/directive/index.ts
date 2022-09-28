export const vLoading = {
  created(el: HTMLElement) {
    Array.from(el.children).forEach((item) => (item as HTMLElement).classList.add('hiddenChild'));
    const loading = document.createElement('div');
    loading.setAttribute('class', 'vLoading');
    el.appendChild(loading);
  },
  updated(el: HTMLElement) {
    const loading = el.querySelector('.vLoading');
    if (loading) el.removeChild(loading);
    Array.from(el.children).forEach((item) => (item as HTMLElement).classList.remove('hiddenChild'));
  }
};