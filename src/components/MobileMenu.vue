<script setup>
import { useDark, useToggle } from '@vueuse/core';

import { ref } from 'vue';

import TelegramIcon from "./icons/TelegramIcon.vue"
import InstagramIcon from "./icons/InstagramIcon.vue"
import TwitterIcon from "./icons/TwitterIcon.vue"
import YoutubeIcon from "./icons/YoutubeIcon.vue"
// Nav Icons
import HomeIcon from "./icons/HomeIcon.vue"
import VideoIcon from "./icons/VideoIcon.vue"
import ArticleIcon from "./icons/ArticleIcon.vue"
import PodcastIcon from "./icons/PodcastIcon.vue"
import MapIcon from "./icons/MapIcon.vue"

const isDark = useDark();
const toggleDark = useToggle(isDark);

const emit = defineEmits(['close'])
const darkModeIcon = ref(true)

const emitClose = () => {
    emit("close")
}
// Dark mode switch
const darkModeToggle = () => {
    toggleDark();
    darkModeIcon.value = !darkModeIcon.value;
}
</script>

<template>
    <section>
        <!-- Overlay -->
        <div @click="emitClose" class="w-full h-screen bg-black/20 backdrop-blur-sm absolute top-0 left-0"></div>
        <!-- Menu -->
        <section
            class="slide w-[75%] h-screen bg-white/95 dark:bg-zinc-800/50 absolute left-0 top-0 p-5 backdrop-blur-lg shadow-lg overflow-y-auto overflow-x-hidden">
            <div class="mb-4 flex flex-row-reverse justify-between ">
                <!-- Close Button -->
                <button class="text-sm" @click="emitClose">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                <!-- DarkMode Toggle Button -->
                <button @click="darkModeToggle">
                    <svg v-if="darkModeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            </div>
            <!-- Search Input -->
            <div>
                <div class="mb-4">
                    <input type="text"
                        class="w-full bg-zinc-100 dark:bg-zinc-900/50 p-3 placeholder:text-xs outline-none rounded-md placeholder:text-zinc-400/70 dark:placeholder:text-zinc-600"
                        placeholder="جست و جو">
                </div>
            </div>

            <!-- Nav -->
            <div>
                <nav class="flex flex-col gap-y-4 font-semibold">
                    <RouterLink @click="emitClose" to="/" class="flex items-center gap-x-2">
                        <span class="bg-blue-200/80 dark:bg-zinc-900/70 p-2 rounded-lg">
                            <!-- HomeIcon -->
                            <HomeIcon></HomeIcon>
                        </span>
                        خانه
                    </RouterLink>
                    <RouterLink @click="emitClose" to="/courses" class="flex items-center gap-x-2">
                        <span class="bg-red-200/80 dark:bg-zinc-900/70 p-2 rounded-lg">
                            <!-- VideoIcon -->
                            <VideoIcon></VideoIcon>
                        </span>
                        دوره ها
                    </RouterLink>
                    <RouterLink @click="emitClose" to="/articles" class="flex items-center gap-x-2">
                        <span class="bg-purple-200/80 dark:bg-zinc-900/70 p-2 rounded-lg">
                            <ArticleIcon></ArticleIcon>
                        </span>
                        مقالات
                    </RouterLink>
                    <RouterLink @click="emitClose" to="/podcasts" class="flex items-center gap-x-2">
                        <span class="bg-green-200/80 dark:bg-zinc-900/70 p-2 rounded-lg">
                            <!-- PodcastIcon -->
                            <PodcastIcon></PodcastIcon>
                        </span>
                        پادکست ها
                    </RouterLink>
                    <RouterLink @click="emitClose" to="/roadmap" class="flex items-center gap-x-2">
                        <span class="bg-orange-200/80 dark:bg-zinc-900/70 p-2 rounded-lg">
                            <!-- MapIcon -->
                            <MapIcon></MapIcon>
                        </span>
                        نقشه راه
                    </RouterLink>
                </nav>
            </div>

            <!-- Mobile Menu Footer -->
            <footer id="mobile-menu-footer" class=" w-full absolute bottom-5 pl-10">
                <div class="flex flex-col gap-y-1 text-zinc-500">
                    <p class="text-sm font-semibold dark:text-zinc-600">ایران یک دو سه</p>
                    <p class="text-xs dark:text-zinc-600">تلفن پشتیبانی: <span dir="ltr">021-77539482</span></p>
                </div>
                <div class="flex text-xs gap-x-3 scale-75 ">
                    <a href="#insta">
                        <InstagramIcon></InstagramIcon>
                    </a>
                    <a href="#telegram">
                        <TelegramIcon />
                    </a>
                    <a href="#twitter">
                        <TwitterIcon></TwitterIcon>
                    </a>
                    <a href="#youtube">
                        <YoutubeIcon></YoutubeIcon>
                    </a>
                </div>
            </footer>

        </section>
    </section>
</template>

<style scoped>
.slide {
    animation: slide .2s linear;
}

@keyframes slide {
    0% {
        transform: translateX(-600px);
    }

    100% {
        opacity: 1;
    }
}

#mobile-menu-footer {
    display: none;
}

@media only screen and (min-height: 450px) {
    #mobile-menu-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}
</style>