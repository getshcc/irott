<script setup>
import CourseCard from './CourseCard.vue';
import VideoIcon from './icons/VideoIcon.vue';
const { courses } = defineProps(['courses'])
</script>

<template>

    <!-- Courses -->
    <section>
        <header class="pb-8">
            <h3 class="text-lg font-extrabold flex gap-x-2 items-center">
                <span>
                    <VideoIcon />
                </span>
                <span>دوره ها</span>
            </h3>
        </header>
        <main class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <CourseCard v-for="course in courses" :key="course.id" :course="course"></CourseCard>
        </main>
    </section>

</template>

<style scoped>

</style>