
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from '@/views/HomePage.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: { title: 'user-ui-service' }
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
