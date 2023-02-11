<script setup>
import { ref } from "vue"
import SubMenu from './SubMenu.vue';
import ChevronupIcon from "./icons/ChevronupIcon.vue"
import ChevrondownIcon from "./icons/ChevrondownIcon.vue"
const subMenuViews = ref(false)
const toggleSubMvenuView = () => {
    subMenuViews.value = !subMenuViews.value
}
</script>
<template>
    <div class="hidden justify-end">
        <ul class="flex gap-x-3 lg:gap-x-5 text-sm text-zinc-700 dark:text-white">
            <li>
                <RouterLink @click="subMenuViews = false" active-class="text-zinc-900 dark:text-white font-extrabold"
                    to="/">خانه</RouterLink>
            </li>
            <li class="flex flex-col items-center">
                <button class="flex items-center gap-x-1" @click="subMenuViews = !subMenuViews">
                    دوره ها
                    <span>
                        <span v-if="subMenuViews">
                            <ChevronupIcon></ChevronupIcon>
                        </span>
                        <span v-else>
                            <ChevrondownIcon></ChevrondownIcon>
                        </span>
                    </span>
                </button>
                <section id="submenu" class="absolute mt-8">
                    <Transition name="custom" enter-active-class="animate__animated animate__fadeIn animate__fast"
                        leave-active-class="animate__animated animate__fadeOut animate__faster">
                        <SubMenu @close="toggleSubMvenuView" v-if="subMenuViews" />
                    </Transition>
                </section>
            </li>
            <li>
                <RouterLink @click="subMenuViews = false" active-class="text-zinc-900 dark:text-white font-bold"
                    to="/articles">مقالات</RouterLink>
            </li>
            <li>
                <RouterLink @click="subMenuViews = false" active-class="text-zinc-900 dark:text-white font-bold"
                    to="/podcasts">پادکست ها</RouterLink>
            </li>
            <li>
                <RouterLink @click="subMenuViews = false" active-class="text-zinc-900 dark:text-white font-bold"
                    to="/roadmap">نقشه راه</RouterLink>
            </li>
        </ul>
    </div>
</template>

<!-- <style scoped>
.sub-enter-active {
    animation: sub 0.5s;
}

.sub-leave-active {
    /* transition: opacity 0.5s ease; */
    animation: sub .5s reverse;
}

.sub-enter-from,
.sub-leave-to {
    opacity: 0;
}

@keyframes sub {
    0% {
        transform: scale(0.9);
    }

    100% {
        transform: scale(1);
    }
}
</style> -->