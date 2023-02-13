<script setup>
import { ref } from "vue"
import courses from '../data/courses.json';
import HeroSection from '../components/HeroSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import PodcastsSection from "../components/PodcastsSection.vue";
import ArticlesSection from "../components/ArticlesSection.vue";

const c = ref(courses)
</script>

<template>
  <HeroSection />

  <!-- Courses Section -->
  <CoursesSection :courses="c" />

  <!-- Podcasts Section -->
  <PodcastsSection></PodcastsSection>

  <!-- Articles Section -->
  <ArticlesSection></ArticlesSection>

</template>

<style scoped>

</style>