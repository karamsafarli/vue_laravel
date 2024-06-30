import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Layout from '../pages/Layout.vue';
import Login from '../pages/Login.vue';
import DigitalLeadPartners from '../pages/DigitalLeadPartners.vue';
import DebtCollectionAgencies from '../pages/DebtCollectionAgencies.vue';
import BusinessPart from '../pages/BusinessPart.vue';
import Grievance from '../pages/Grievance.vue';
import MediaCoverages from '../pages/MediaCoverages.vue';
import SecurityMoney from '../pages/SecurityMoney.vue';
import SmartPay from '../pages/SmartPay.vue';
import PersonalLoan from '../pages/PersonalLoan.vue';
import BusinessLoan from '../pages/BusinessLoan.vue';
import PrivacyPolicy from '../pages/PrivacyPolicy.vue';
import PersonalLoanCalculator from '../pages/PersonalLoanCalculator.vue';
import BusinessLoanCalculator from '../pages/BusinessLoanCalculator.vue';
import HomeLoanCalculator from '../pages/HomeLoanCalculator.vue';
import OtherDisclosures from '../pages/OtherDisclosures.vue';
import Careers from '../pages/Careers.vue'
import ContactUs from '../pages/ContactUs.vue';
import LoansFaq from '../pages/LoansFaq.vue';
import SiteMap from '../pages/SiteMap.vue';
import PersonalLoanDocuments from '../pages/PersonalLoanDocuments.vue';
import PersonalLoanIntRates from '../pages/PersonalLoanIntRates.vue';
import HowToApplyPersonalLoan from '../pages/HowToApplyPersonalLoan.vue';
import PersonalLoanEligCheck from '../pages/PersonalLoanEligCheck.vue';
import ErrorPage from '../pages/ErrorPage.vue';
import HomeLoanLogin from '../pages/HomeLoanLogin.vue';
import MotorInsuranceLogin from '../pages/MotorInsuranceLogin.vue';
import LapLogin from '../pages/LapLogin.vue';


const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/about-us',
                component: About,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/credit-score/login',
                component: Login,
                meta: {
                    title: 'Check CIBIL Score Free - Get Credit Score Report Instantly.',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'At Moneyview get your free monthly credit score report in just 20 seconds. Get detailed credit report and suggestions to improve your cibil score if it is low.'
                        },
                        {
                            property: 'og:title',
                            content: 'Check CIBIL Score Free - Get Credit Score Report Instantly.'
                        }
                    ]
                }
            },
            {
                path: '/digital-lead-partners',
                component: DigitalLeadPartners,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/debt-collection-agencies',
                component: DebtCollectionAgencies,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/business-partner',
                component: BusinessPart,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/grievance',
                component: Grievance,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/media-coverages',
                component: MediaCoverages,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/security-money-view-app',
                component: SecurityMoney,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/smart-pay',
                component: SmartPay,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/personal-loan',
                component: PersonalLoan,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/business-loan',
                component: BusinessLoan,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/privacy-policy-loans',
                component: PrivacyPolicy,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/emi-calculator/personal-loan-emi-calculator',
                component: PersonalLoanCalculator,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/emi-calculator/business-loan-emi-calculator',
                component: BusinessLoanCalculator,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/emi-calculator/home-loan-emi-calculator',
                component: HomeLoanCalculator,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/careers',
                component: Careers,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/contact-us',
                component: ContactUs,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/loans-faq-en',
                component: LoansFaq,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/sitemap',
                component: SiteMap,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/other-disclosures',
                component: OtherDisclosures,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/personal-loan-documents',
                component: PersonalLoanDocuments,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/personal-loan-interest-rates-and-charges',
                component: PersonalLoanIntRates,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/how-to-apply-for-personal-loan',
                component: HowToApplyPersonalLoan,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/personal-loan-eligibility-check',
                component: PersonalLoanEligCheck,
                meta: {
                    title: 'About Us - My Awesome App',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'This is the about us page of my awesome app.'
                        },
                        {
                            property: 'og:title',
                            content: 'About Us  - My Awesome App'
                        }
                    ]
                }
            },
            {
                path: '/:catchAll(.*)',
                component: ErrorPage,
                meta: {
                    title: '404 - Page Not Found',
                }
            },
            {
                path: '/products/home-loan/login',
                component: HomeLoanLogin,
                meta: {
                    title: 'Products - Home Loan Login',
                }
            },
            {
                path: '/products/motor-insurance/login',
                component: MotorInsuranceLogin,
                meta: {
                    title: 'Products - Motor Insurance Login',
                }
            },
            {
                path: '/products/lap/login',
                component: LapLogin,
                meta: {
                    title: 'Products - Lap Login',
                }
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
});


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Digitsathi';
    next();
});

// This will handle the meta tags
router.afterEach((to) => {
    // Remove any stale meta tags from the document using the key attribute we set below
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Turn the metaTags array into individual elements in the head.
    if (to.meta.metaTags) {
        to.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which elements we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        }).forEach(tag => document.head.appendChild(tag));
    }
});

export default router;