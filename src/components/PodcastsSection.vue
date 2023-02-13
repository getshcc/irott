<script setup>
import SplitSection from './SplitSection.vue';
import PodcastIcon from './icons/PodcastIcon.vue';
</script>

<template>

    <!-- Split: Podcasts -->
    <SplitSection>
        <template #icon>
            <PodcastIcon></PodcastIcon>
        </template>
        <template #title>
            پادکست ها
        </template>
    </SplitSection>

</template>

<style scoped>

</style>