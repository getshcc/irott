<script setup>
import UserIcon from './icons/UserIcon.vue';
</script>
<template>
    <button
        class="flex items-center lg:gap-x-2 lg:px-4 lg:py-2 border lg:hover:bg-zinc-200 lg:dark:bg-zinc-900/50 lg:dark:hover:bg-zinc-900 dark:border-transparent  lg:rounded-md">
        <span>
            <UserIcon></UserIcon>
        </span>
        <span class="hidden lg:block text-xs font-semibold">
            حساب کاربری
        </span>
    </button>
</template>