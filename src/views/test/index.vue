<template>
    <div>
        <show-value-child :text="text" />
        <change-value-child @updateText="updateText" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ChangeValueChild from "./components/ChangeValue.vue";
import ShowValueChild from "./components/ShowValue.vue";
const text = ref<string>("test");
const updateText = (v: string) => {
    text.value = v;
};
</script>