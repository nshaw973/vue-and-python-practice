import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview/Homeview.vue";
import Login from "@/views/Login/Login.vue";
import About from "@/views/About/About.vue";
import NotFound from "@/views/Not-Found/Not-Found.vue";
import Results from "@/views/Results/Results.vue";
import Quickview from "@/views/Quickviews/Quickview.vue";

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
            path: '/search',
            name: 'Search',
            children: [
                {
                    path: 'results',
                    name: 'SearchResults',
                    component: Results
                }
            ]
        },
        {
            path: '/view/:type',
            name: 'Quicklink',
            component: Quickview,
            props: true
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound

        }

    ]
})

export default router