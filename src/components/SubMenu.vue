<script setup>
import { RouterLink } from 'vue-router';
import BanknotesIcon from './icons/BanknotesIcon.vue';
import HandtumbupIcon from './icons/HandtumbupIcon.vue';
import AcademiccapIcon from './icons/AcademiccapIcon.vue';
const emit = defineEmits(["close"])
const emitClose = () => {
    emit("close")
}
</script>

<template>
    <div
        class="text-xs font-bold grid grid-cols-1 p-3 gap-2 rounded-xl border dark:border-none bg-white dark:bg-zinc-900/80 backdrop-blur-2xl shadow-2xl shadow-zinc-800/20  dark:shadow-zinc-900/40 w-64">
        <RouterLink to="/courses" @click="emitClose"
            class=" hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-lg flex items-center gap-x-2 z-10">
            <span class="bg-green-100 p-2 rounded-lg">
                <AcademiccapIcon class="dark:text-black" />
            </span>
            <div class="flex flex-col gap-y-1">
                <span>همه دوره ها</span>
                <span class="text-[10px] font-extralight">19 دوره</span>
            </div>
        </RouterLink>
        <div @click="emitClose"
            class="hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-md flex items-center gap-x-2 z-10">
            <span class="bg-red-100 p-2 rounded-lg">
                <BanknotesIcon class="dark:text-black" />
            </span>
            دوره های تخصصی
        </div>
        <div @click="emitClose"
            class=" hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 rounded-md flex items-center gap-x-2 z-10">
            <span class="bg-orange-100 p-2 rounded-lg">
                <HandtumbupIcon class="dark:text-black" />
            </span>
            دوره های رایگان
        </div>
    </div>
</template>

<style scoped>

</style>