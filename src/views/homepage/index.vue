<template>
  <van-button type="primary" @click="handleToast">toast</van-button>
</template>
<script setup lang="ts">
import { Toast } from 'vant'
import { getListApi } from '@/api/demo'
const handleToast = async () => {
  Toast('hello')
  const { data } = await getListApi({})
}
</script>
