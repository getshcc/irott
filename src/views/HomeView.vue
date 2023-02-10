<script setup>
import { ref } from "vue"
import courses from '../data/courses.json';
import HeroSection from '../components/HeroSection.vue';
import CoursesSection from '../components/CoursesSection.vue';

const c = ref(courses)
</script>

<template>
  <HeroSection />
  <CoursesSection :courses="c" />
</template>

<style scoped>

</style>