<template>
  <van-button type="primary" @click="handleToast">toast</van-button>
</template>
<script setup lang="ts">
import { Toast } from 'vant'
const handleToast = () => {
  Toast('hello')
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  background: #000;
  box-sizing: border-box;
}
.box {
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
}
.van-button {
  width: 60px;
  height: 25px;
  font-size: 10px;
}
</style>
