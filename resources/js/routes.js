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
import SecurityMoney from './components/SecurityMoney.vue';
import SmartPay from './components/SmartPay.vue';
import PersonalLoan from './components/PersonalLoan.vue';
import BusinessLoan from './components/BusinessLoan.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import OtherDisclosures from './components/OtherDisclosures.vue'

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
                path: '/other-disclosures',
                component: OtherDisclosures
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
            {
                path: '/security-money-view-app',
                component: SecurityMoney
            },
            {
                path: '/smart-pay',
                component: SmartPay
            },
            {
                path: '/personal-loan',
                component: PersonalLoan
            },
            {
                path: '/business-loan',
                component: BusinessLoan
            },
            {
                path: '/privacy-policy-loans',
                component: PrivacyPolicy
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
})

export default router;