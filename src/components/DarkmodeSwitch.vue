<script setup>
import { watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import MoonIcon from "./icons/MoonIcon.vue"
import SunIcon from "./icons/SunIcon.vue"
const isDark = useDark();
const toggleDark = useToggle(isDark);

console.log(isDark.value)
// const darkModeIcon = ref(false)
const getColorSchema = localStorage.getItem("vueuse-color-scheme")

const darkModeToggle = () => {
    toggleDark();
}

</script>

<template>
    <button class="flex" @click="darkModeToggle">
        <SunIcon v-if="isDark"></SunIcon>
        <MoonIcon v-else></MoonIcon>
    </button>
</template>