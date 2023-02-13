<script setup>
import { ref } from "vue"
import courses from '../data/courses.json';
import HeroSection from '../components/HeroSection.vue';
import CoursesSection from '../components/CoursesSection.vue';
import PostCard from "../components/PostCard.vue";

const c = ref(courses)
</script>

<template>
  <HeroSection />
  <CoursesSection :courses="c" />

  <section class="pt-10">
    <header class="pb-5">
      <h3 class="font-extrabold">پادکست ها</h3>
    </header>
    <main class="grid grid-cols-4 gap-5">
      <div class="w-full bg-zinc-100 dark:bg-zinc-900/40 rounded-md p-4 flex flex-col gap-y-2">
        <header class="flex justify-between items-center">
          <a href="" class="text-xs dark:text-zinc-400">گوینده</a>
          <ul class="flex flex-row-reverse text-xs gap-x-2">
            <li><span class="text-xs font-bold">32:19</span></li>
            <li><span>1202</span></li>
          </ul>
        </header>
        <main class="flex justify-between">
          <h4 class="text-sm font-bold">لینوکس یا ویندوز</h4>
          <button class="text-xs text-[#ff8888]">گوش بده</button>
        </main>
      </div>
      <div class="h-20 w-full bg-zinc-100 dark:bg-zinc-900/40 rounded-md p-3">
        <h4 class="text-sm font-bold">لینوکس یا ویندوز</h4>
      </div>
      <div class="h-20 w-full bg-zinc-100 dark:bg-zinc-900/40 rounded-md p-3">
        <h4 class="text-sm font-bold">لینوکس یا ویندوز</h4>
      </div>
      <div class="h-20 w-full bg-zinc-100 dark:bg-zinc-900/40 rounded-md p-3">
        <h4 class="text-sm font-bold">لینوکس یا ویندوز</h4>
      </div>
    </main>
  </section>

  <section class="pt-10">
    <header class="pb-5">
      <h3 class="font-extrabold">مقالات</h3>
    </header>
    <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </main>
  </section>
</template>

<style scoped>

</style>