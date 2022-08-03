<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Loading />
</template>
<script setup lang="ts">
import Loading from "./components/Loading.vue";
console.log(import.meta.env);
console.log(import.meta.env.VITE_BASE_URL);
</script>
<style lang="scss" scoped>
</style>
