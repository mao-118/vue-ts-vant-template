<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Loading />
</template>
<script setup lang="ts">
import Loading from "./components/Loading.vue";
</script>
<style lang="scss" scoped>
</style>
