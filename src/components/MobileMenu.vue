<script setup>

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
import DarkmodeSwitch from './DarkmodeSwitch.vue';


const emit = defineEmits(['close'])

const emitClose = () => {
    emit("close")
}
// Dark mode switch

</script>

<template>
    <section class="md:hidden">
        <!-- Overlay -->
        <div @click="emitClose" class="w-full h-screen bg-black/20 backdrop-blur-sm absolute top-0 left-0 z-[2]"></div>
        <!-- Menu -->
        <section
            class="slide w-[75%] h-screen bg-white/95 dark:bg-zinc-800/95 fixed left-0 top-0 p-5 backdrop-blur-lg shadow-lg overflow-y-auto overflow-x-hidden z-[3]">
            <div class="mb-4 flex flex-row-reverse justify-between py-3">
                <!-- Close Button -->
                <button class="text-sm" @click="emitClose">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                <!-- DarkMode Toggle Button -->
                <DarkmodeSwitch />
            </div>
            <!-- Search Input -->
            <div>
                <div class="mb-4">
                    <input type="text"
                        class="w-full text-sm bg-zinc-100 dark:bg-zinc-900/50 p-3 placeholder:text-xs outline-none rounded-md placeholder:text-zinc-400/70 dark:placeholder:text-zinc-600"
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
                            <MapIcon />
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