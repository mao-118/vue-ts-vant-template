<template>
  <div class="demo">demo</div>
  <van-cell-group inset>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success" @click="showTigger">成功按钮</van-button>
    <van-button type="default" @click="handleRequest">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-loading color="#1989fa" />
  </van-cell-group>

  <van-cell-group inset>
    <van-field v-model="text" label="防抖" placeholder="请输入内容" @update:model-value="debounce(hanldeChange)" />
  </van-cell-group>

  <van-cell-group inset>
    <van-button color="#7232dd" @click="throttled(handleDebounce, 'ok')">点我测试节流</van-button>
  </van-cell-group>
</template>
<script setup lang="ts">
import { Toast } from 'vant';
import { getListApi } from '@/api/demo';
import { debounce, throttled } from '@/utils/lodash';
const text = ref('');
const showTigger = (): void => {
  Toast.success('ok');
};
const handleRequest = async () => {
  await getListApi();
};
const hanldeChange = () => {
  console.log(text.value);
};
const handleDebounce = (e: string) => {
  console.log(e);
};
</script>
<style scoped>
.demo {
  font-size: 26px;
  display: flex;
}
</style>
