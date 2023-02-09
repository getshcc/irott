<script setup>
import UserIcon from './icons/UserIcon.vue';
</script>
<template>
    <button
        class="flex items-center lg:gap-x-2 lg:px-4 lg:py-2 lg:border border-zinc-200 lg:hover:bg-zinc-200 lg:dark:hover:bg-zinc-700  dark:border-zinc-600 lg:rounded-md">
        <span>
            <UserIcon></UserIcon>
        </span>
        <span class="hidden lg:block">
            حساب کاربری
        </span>
    </button>
</template>