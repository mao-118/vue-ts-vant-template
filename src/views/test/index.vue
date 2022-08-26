<template>
    <Navbar />
    <div>
        <show-value-child :text="text" />
        <change-value-child @updateText="updateText" />
        <van-button type="primary" @click="changeColor">change color</van-button>
        <div class="textColor">text</div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store';
import Navbar from '@/components/Navbar.vue';
import ChangeValueChild from './components/ChangeValue.vue';
import ShowValueChild from './components/ShowValue.vue';
import { getHrefParams } from '@/utils';
const topHeight = getHrefParams('topHeight');
const store = useStore();
store.setTopHeight(parseInt(topHeight));
const text = ref<string>('test');
const updateText = (v: string) => {
    text.value = v;
};
const color = ref('red');
const changeColor = () => {
    color.value = color.value === 'red' ? 'green' : 'red';
};
</script>
<style scoped>
.textColor {
    color: v-bind(color);
}
</style>