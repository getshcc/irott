<template>
    <div class="hidden justify-end">
        <ul class="flex gap-x-3 lg:gap-x-5 text-sm text-zinc-700 dark:text-white">
            <li>
                <RouterLink active-class="text-zinc-900 dark:text-white font-extrabold" to="/">خانه</RouterLink>
            </li>
            <li>
                <RouterLink active-class="text-zinc-900 dark:text-white font-bold" to="/courses">دوره ها</RouterLink>
            </li>
            <li>
                <RouterLink active-class="text-zinc-900 dark:text-white font-bold" to="/articles">مقالات</RouterLink>
            </li>
            <li>
                <RouterLink active-class="text-zinc-900 dark:text-white font-bold" to="/podcasts">پادکست ها</RouterLink>
            </li>
            <li>
                <RouterLink active-class="text-zinc-900 dark:text-white font-bold" to="/roadmap">نقشه راه</RouterLink>
            </li>
        </ul>
    </div>
</template>