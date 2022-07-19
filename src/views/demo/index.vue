<template>
  <div class="demo">demo</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success" @click="showTigger">成功按钮</van-button>
  <van-button type="default" @click="handleRequest">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-loading color="#1989fa" />
</template>
<script setup lang="ts">
import { Toast } from "vant";
import "vant/es/toast/style";
import { getListApi } from "@/api/demo";
const showTigger = (): void => {
  Toast.success("ok");
};
const handleRequest = async () => {
  await getListApi();
};
</script>
<style scoped>
.demo {
  font-size: 26px;
}
</style>
