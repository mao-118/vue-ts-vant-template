<template>
  <van-button type="primary" @click="handleToast">toast</van-button>
</template>
<script setup lang="ts">
import { Toast } from 'vant'
const handleToast = () => {
  Toast('hello')
}
</script>
