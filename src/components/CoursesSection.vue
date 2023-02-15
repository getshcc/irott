<script setup>
import CourseCard from './CourseCard.vue';
import FillVideoIcon from './icons/FillVideoicon.vue';
import SplitSection from './SplitSection.vue';
const { courses } = defineProps(['courses'])
</script>

<template>

    <SplitSection>
        <template #icon>
            <FillVideoIcon></FillVideoIcon>
        </template>
        <template #title>
            دوره ها
        </template>
        <template #default>
            <main class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <CourseCard v-for="course in courses" :key="course.id" :course="course"></CourseCard>
            </main>
        </template>
    </SplitSection>

</template>

<style scoped>

</style>