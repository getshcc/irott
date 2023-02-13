<script setup>
import PodcastCard from './PodcastCard.vue';
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
        <template #default>
            <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
            </main>
        </template>
    </SplitSection>

</template>