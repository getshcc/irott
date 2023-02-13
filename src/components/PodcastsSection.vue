<script setup>
import PodcastCard from './PodcastCard.vue';
import SplitSection from './SplitSection.vue';
import FillPodcasticon from './icons/FillPodcasticon.vue';
</script>

<template>

    <!-- Split: Podcasts -->
    <SplitSection>
        <template #icon>
            <FillPodcasticon></FillPodcasticon>
        </template>
        <template #title>
            پادکست ها
        </template>
        <template #default>
            <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
                <PodcastCard></PodcastCard>
            </main>
        </template>
    </SplitSection>

</template>