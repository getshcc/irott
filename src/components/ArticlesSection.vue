<script setup>
import SplitSection from './SplitSection.vue';
import PostCard from './PostCard.vue';
import FillArticleIcon from './icons/FillArticleicon.vue';
</script>

<template>
    <!-- Split: Articles -->
    <SplitSection>
        <template #icon>
            <FillArticleIcon></FillArticleIcon>
        </template>
        <template #title>
            مقالات
        </template>
        <template #default>
            <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <div
                    class="w-full border border-zinc-100 dark:border-none dark:bg-zinc-900/40 rounded-md p-2 hidden md:flex lg:hidden justify-center items-center">
                    <p class="text-sm">
                        <span class="font-bold">
                            27
                        </span>
                        مقاله دیگر...
                    </p>
                </div>
            </main>
        </template>
    </SplitSection>
</template>

<style scoped>

</style>