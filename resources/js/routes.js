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
import PersonalLoanCalculator from './components/PersonalLoanCalculator.vue';
import BusinessLoanCalculator from './components/BusinessLoanCalculator.vue';
import HomeLoanCalculator from './components/HomeLoanCalculator.vue';
import OtherDisclosures from './components/OtherDisclosures.vue';
import Careers from './components/Careers.vue'
import ContactUs from './components/ContactUs.vue';
import LoansFaq from './components/LoansFaq.vue';
import SiteMap from './components/SiteMap.vue';
import PersonalLoanDocuments from './components/PersonalLoanDocuments.vue';
import PersonalLoanIntRates from './components/PersonalLoanIntRates.vue';
import HowToApplyPersonalLoan from './components/HowToApplyPersonalLoan.vue';
import PersonalLoanEligCheck from './components/PersonalLoanEligCheck.vue';


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
            {
                path: '/emi-calculator/personal-loan-emi-calculator',
                component: PersonalLoanCalculator
            },
            {
                path: '/emi-calculator/business-loan-emi-calculator',
                component: BusinessLoanCalculator
            },
            {
                path: '/emi-calculator/home-loan-emi-calculator',
                component: HomeLoanCalculator
            },
            {
                path: '/careers',
                component: Careers
            },
            {
                path: '/contact-us',
                component: ContactUs
            },
            {
                path: '/loans-faq-en',
                component: LoansFaq
            },
            {
                path: '/sitemap',
                component: SiteMap
            },
            {
                path: '/personal-loan-documents',
                component: PersonalLoanDocuments
            },
            {
                path: '/personal-loan-interest-rates-and-charges',
                component: PersonalLoanIntRates
            },
            {
                path: '/how-to-apply-for-personal-loan',
                component: HowToApplyPersonalLoan
            },
            {
                path: '/personal-loan-eligibility-check',
                component: PersonalLoanEligCheck
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