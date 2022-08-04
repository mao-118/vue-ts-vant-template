<template>
    <van-cell-group inset>
        <van-field @update:model-value="changeNewValue" v-model="text" label="改变父组件值" placeholder="请输入改变父组件值" />
    </van-cell-group>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['updateText']);
const text = ref<string>('');
const changeNewValue = (v: string) => {
    emit('updateText', v);
};
</script>