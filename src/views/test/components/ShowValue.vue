<template>
    <van-cell title="父传子" :value="text" />
</template>
<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: ""
    }
});
</script>