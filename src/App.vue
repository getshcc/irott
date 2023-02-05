<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <section>
    <header>
      <nav style="display: flex; flex-direction: column;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <RouterView></RouterView>
  </section>
</template>

<style scoped>

</style>
