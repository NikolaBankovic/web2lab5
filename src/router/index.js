import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/views/HomePage.vue');
const AboutPage = () => import('@/views/AboutPage.vue');
const NotFoundPage = () => import('@/views/NotFoundPage.vue');

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/about', name: 'AboutPage', component: AboutPage },
    { path: '/:catchAll(.*)', name: 'NotFoundPage', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
