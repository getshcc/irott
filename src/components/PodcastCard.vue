<script setup>
import PlayIconFillMini from './icons/PlayIconFillMini.vue';
</script>

<template>

    <article
        class="flex items-center p-3 gap-x-3 border border-zinc-100 dark:border-transparent dark:bg-zinc-900/40 rounded-md">
        <div class="p-4 bg-[#ff5656] hover:bg-[#fa3d3d] rounded-full">
            <PlayIconFillMini></PlayIconFillMini>
        </div>
        <div class="leading-2">
            <h4 class="text-sm font-bold">عنوان پادکست</h4>
            <a class="text-[10px] text-zinc-400" href="">گوینده</a>
        </div>
    </article>

</template>