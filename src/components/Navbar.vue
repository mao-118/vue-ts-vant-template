<template>
  <van-nav-bar
    :title="title"
    :left-arrow="showLeft"
    :left-text="leftText"
    :border="false"
    class="nav-bar"
    :style="{ paddingTop: `${topHeight}px`, backgroundColor: 'transparent' }"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <!-- 右侧插槽 -->
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { topHeight } from '@/commData'
defineProps({
  // 标题
  title: {
    type: String,
    default: () => document.title,
  },
  // 左边按钮
  showLeft: {
    type: Boolean,
    default: true,
  },
  // 左边文字
  leftText: {
    type: String,
    default: '',
  },
})
const emit = defineEmits<{
  (e: 'clickLeft'): void
  (e: 'clickRight'): void
}>()
const onClickLeft = () => {
  // 调用父组件的事件
  emit('clickLeft')
}
const onClickRight = () => {
  // 调用父组件的事件
  emit('clickRight')
}
</script>
<style lang="scss" scoped>
$color: #fff;

.nav-bar {
  height: 46px;
  line-height: 46px;
}

:deep(.van-nav-bar__title),
:deep(.van-nav-bar__left i) {
  color: $color;
}

:deep(.van-nav-bar__left i),
:deep(.van-nav-bar__right i) {
  font-size: 22px;
}

:deep(.van-nav-bar__right i) {
  color: #383838;
}
</style>
