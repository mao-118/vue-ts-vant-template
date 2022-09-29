<script lang="tsx">
import { Empty } from 'vant';
export default defineComponent({
  render() {
    const empty = h(Empty,
      { image: 'error', description: '没有找到该页面！！！' },
      { default: () => [h('div', { class: 'tip' }, '404 Not Found')] }
    );
    const content = h('div', { class: 'content-404' }, empty);
    return content;
  }
});
</script>
<style lang="scss" scoped>
.content-404 {
  width: 100%;
  height: 100vh;

  .tip {
    font-size: 24px;
    font-weight: bolder;
    line-height: 4em;
  }
}
</style>
