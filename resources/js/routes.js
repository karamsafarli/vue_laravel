import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Test from './components/Test.vue';
import Layout from './components/Layout.vue';


const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/test',
                component: Test
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;