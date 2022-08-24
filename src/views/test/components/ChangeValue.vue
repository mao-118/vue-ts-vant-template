<template>
    <van-cell-group inset>
        <van-field v-model="text" label="改变父组件值" placeholder="请输入改变父组件值" @update:model-value="changeNewValue" />
    </van-cell-group>
</template>
<script setup lang="ts">
const emit = defineEmits<{
    (e: 'updateText', v: string): void
}>();
const text = ref<string>('');
const changeNewValue = (v: string) => {
    emit('updateText', v);
};
</script>