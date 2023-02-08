import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CourseView from "../views/CourseView.vue";
import ArticleView from "../views/ArticleView.vue";
import PodcastsView from "../views/PodcastsView.vue";
import RoadmapView from "../views/RoadmapView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/courses",
            name: "courses",
            component: CourseView,
        },
        {
            path: "/articles",
            name: "articles",
            component: ArticleView,
        },
        {
            path: "/podcasts",
            name: "podcasts",
            component: PodcastsView,
        },
        {
            path: "/roadmap",
            name: "roadmap",
            component: RoadmapView,
        },
    ],
});

export default router;
