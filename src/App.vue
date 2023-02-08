<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <section>
    <MainHeader></MainHeader>
    <RouterView></RouterView>
  </section>
</template>

<style scoped>

</style>
