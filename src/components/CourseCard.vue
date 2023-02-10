<script setup>
const { course } = defineProps(["course"])
</script>

<template>
    <article class="w-full p-1 dark:bg-zinc-900/70 dark:p-1 dark:rounded-lg">
        <img class="rounded-md w-full" src="../assets/imgs/Courses-Cover/01-Raspberry_Pi.jpg" alt="">
        <header class="flex flex-col gap-y-1 p-2">
            <div class="flex justify-between items-center">
                <h4 class="font-extrabold">{{ course.title }}</h4>
                <span class="text-xs font-extrabold text-green-500">
                    <span>{{ course.price }}</span>
                    تومان
                </span>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <a class="text-xs font-semibold text-zinc-500 dark:text-zinc-400" href="">
                        {{ course.teacher }}
                    </a>
                </div>
                <div>
                    <button class="text-xs font-bold">شرکت در دوره</button>
                </div>
            </div>
        </header>
    </article>
</template>