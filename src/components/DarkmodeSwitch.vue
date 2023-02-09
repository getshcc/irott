<script setup>
import { useDark, useToggle } from '@vueuse/core';
import MoonIcon from "./icons/MoonIcon.vue"
import SunIcon from "./icons/SunIcon.vue"
const isDark = useDark();
const toggleDark = useToggle(isDark);

const darkModeToggle = () => {
    toggleDark();
}

</script>

<template>
    <button class="flex transition-all duration-200 ease-linear" @click="darkModeToggle" >
        <SunIcon v-if="isDark"></SunIcon>
        <MoonIcon v-else></MoonIcon>
    </button>
</template>