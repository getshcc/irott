<script setup>
import SplitSection from './SplitSection.vue';
import ArticleIcon from './icons/ArticleIcon.vue';
import PostCard from './PostCard.vue';
</script>

<template>
    <!-- Split: Articles -->
    <SplitSection>
        <template #icon>
            <ArticleIcon></ArticleIcon>
        </template>
        <template #title>
            مقالات
        </template>
        <template #default>
            <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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