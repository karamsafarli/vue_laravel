import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Layout from './components/Layout.vue';
import Login from './components/Login.vue';
import DigitalLeadPartners from './components/DigitalLeadPartners.vue';
import DebtCollectionAgencies from './components/DebtCollectionAgencies.vue';
import BusinessPart from './components/BusinessPart.vue';
import Grievance from './components/Grievance.vue';
import MediaCoverages from './components/MediaCoverages.vue';


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
                path: '/about-us',
                component: About
            },
            {
                path: '/credit-score/login',
                component: Login
            },
            {
                path: '/digital-lead-partners',
                component: DigitalLeadPartners
            },
            {
                path: '/debt-collection-agencies',
                component: DebtCollectionAgencies
            },
            {
                path: '/business-partner',
                component: BusinessPart
            },
            {
                path: '/grievance',
                component: Grievance
            },
            {
                path: '/media-coverages',
                component: MediaCoverages
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;