<template>
  <Teleport to="body">
    <van-overlay :show="loading">
      <div class="wrapper" @click.stop>
        <van-loading vertical color="#fff">请稍等...</van-loading>
      </div>
    </van-overlay>
  </Teleport>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useStore();
const { loading } = storeToRefs(store);
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
