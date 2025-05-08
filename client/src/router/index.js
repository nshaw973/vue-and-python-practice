import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview/Homeview.vue";
import Login from "@/views/Login/Login.vue";
import About from "@/views/About/About.vue";
import Dev from "@/views/Dev/Dev.vue";
import NotFound from "@/views/Not-Found/Not-Found.vue";
import Results from "@/views/Results/Results.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homeview
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dev',
            name: 'Dev',
            component: Dev
        },
        {
            path: '/search/results',
            name: 'Search',
            component: Results
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound

        }
    ]
})

export default router