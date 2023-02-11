<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <section>
    <MainHeader></MainHeader>
    <RouterView></RouterView>
    <MainFooter></MainFooter>
  </section>
</template>

<style scoped>

</style>
