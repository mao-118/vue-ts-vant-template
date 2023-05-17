<template>
  <van-button @click="handleClick">open</van-button>
</template>
<script lang="ts" setup>
import { getListApi } from '@/api/demo'
const handleClick = async () => {
  await getListApi({})
}
</script>
