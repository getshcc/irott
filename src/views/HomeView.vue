<script setup>
import { ref } from "vue"
import courses from '../data/courses.json';
import HeroSection from '../components/HeroSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import PodcastsSection from "../components/PodcastsSection.vue";
import ArticlesSection from "../components/ArticlesSection.vue";
import HelpSection from "../components/icons/HelpSection.vue"

const c = ref(courses)
</script>

<template>
  <HeroSection />

  <!-- Courses Section -->
  <CoursesSection :courses="c" />

  <!-- Podcasts Section -->
  <PodcastsSection />

  <!-- Articles Section -->
  <ArticlesSection />


  <HelpSection></HelpSection>

</template>

<style scoped>

</style>