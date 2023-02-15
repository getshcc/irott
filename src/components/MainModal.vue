<script setup>
import CloseIcon from './icons/CloseIcon.vue';
</script>

<template>

    <section
        class="w-full h-screen bg-zinc-900/40 absolute top-0 left-0 backdrop-blur-md z-50 flex justify-center items-center">
        <button class="absolute bottom-10 left-10 md:hidden bg-zinc-900/20 dark:bg-zinc-900/50 hover p-2 md:p-3">
            <CloseIcon class="text-white"></CloseIcon>
        </button>
        <button class="hidden absolute top-10 right-10 md:block bg-zinc-900/20 dark:bg-zinc-900/50 hover p-2 md:p-3">
            <CloseIcon class="text-white"></CloseIcon>
        </button>
        <slot></slot>
    </section>

</template>

<style scoped>

</style>