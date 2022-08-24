<template>
    <Navbar />
    <div>
        <show-value-child :text="text" />
        <change-value-child @updateText="updateText" />
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'
import Navbar from '@/components/Navbar.vue'
import ChangeValueChild from './components/ChangeValue.vue';
import ShowValueChild from './components/ShowValue.vue';
import { getHrefParams } from '@/utils'
const topHeight = getHrefParams('topHeight');
const store = useStore()
store.setTopHeight(parseInt(topHeight))
const text = ref<string>('test');
const updateText = (v: string) => {
    text.value = v;
};
</script>