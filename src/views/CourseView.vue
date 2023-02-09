<script setup>
import courses from "../data/courses.json"
</script>

<template>
    <section>
        <h1>Course View</h1>
        <!-- {{ courses }} -->

        <div v-for="course in courses">
            {{ course.title }}
        </div>
    </section>
</template>

<style scoped>

</style>