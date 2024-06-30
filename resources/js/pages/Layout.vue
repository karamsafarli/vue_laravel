<script setup>
import { ref, computed, onMounted, onBeforeUnmount  } from 'vue';
import { useRoute } from 'vue-router'

const isMenuOpen = ref(window.innerWidth >= 991 ? true : false);
const isCalcOpen = ref(false);

window.addEventListener("resize", () => isMenuOpen.value = window.innerWidth >= 991);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleCalc = () => {
    isCalcOpen.value = !isCalcOpen.value;
}



const handleClickOutside = (event) => {
  // const menu = document.querySelector('.menu_ul_wrapper');
  const calcDrop = document.querySelector('.drop_li');
  // if (isMenuOpen.value && menu && !menu.contains(event.target)) {
  //   isMenuOpen.value = false;
  // }
  if (isCalcOpen.value && calcDrop && !calcDrop.contains(event.target)) {
    isCalcOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});


const isScrolled = ref(false);

const handleScroll = (newVal) => {
    isScrolled.value = newVal; 
};


const route = useRoute();
console.log(route.path)

const headerBgClass = computed(() => {
  switch (route.path) {
    case '/about-us':
      return 'about_nav';
    case '/credit-score/login':
      return 'about_nav';
    case '/digital-lead-partners':
      return 'about_nav';
    case '/debt-collection-agencies':
      return 'about_nav';
    case '/business-partner':
      return 'about_nav';
    case '/grievance':
      return 'about_nav';
    case '/media-coverages':
      return 'about_nav';
    case '/security-money-view-app':
      return 'about_nav';
    case '/smart-pay':
      return 'about_nav';
    case '/personal-loan':
      return 'about_nav';
    case '/business-loan':
      return 'about_nav';
    case '/privacy-policy-loans':
      return 'about_nav';
    case '/emi-calculator/personal-loan-emi-calculator':
      return 'about_nav';
    case '/emi-calculator/business-loan-emi-calculator':
      return 'about_nav';
    case '/emi-calculator/home-loan-emi-calculator':
      return 'about_nav';
    case '/other-disclosures':
      return 'about_nav';
    case '/careers':
      return 'about_nav';
    case '/contact-us':
      return 'about_nav';
    case '/loans-faq-en':
      return 'about_nav';
    case '/sitemap':
      return 'about_nav';
    case '/personal-loan-documents':
      return 'about_nav';
    case '/personal-loan-interest-rates-and-charges':
      return 'about_nav';
    case '/how-to-apply-for-personal-loan':
      return 'about_nav';
    case '/personal-loan-eligibility-check':
      return 'about_nav';
    default:
      return;
  }
});
const textWhite = computed(() => {
  switch (route.path) {
    case '/about-us':
      return 'scrolled_text';
    case '/credit-score/login':
      return 'scrolled_text';
    case '/digital-lead-partners':
      return 'scrolled_text';
    case '/debt-collection-agencies':
      return 'scrolled_text';
    case '/business-partner':
      return 'scrolled_text';
    case '/grievance':
      return 'scrolled_text';
    case '/media-coverages':
      return 'scrolled_text';
    case '/security-money-view-app':
      return 'scrolled_text';
    case '/smart-pay':
      return 'scrolled_text';
    case '/personal-loan':
      return 'scrolled_text';
    case '/business-loan':
      return 'scrolled_text';
    case '/privacy-policy-loans':
      return 'scrolled_text';
    case '/emi-calculator/personal-loan-emi-calculator':
      return 'scrolled_text';
    case '/emi-calculator/business-loan-emi-calculator':
      return 'scrolled_text';
    case '/emi-calculator/home-loan-emi-calculator':
      return 'scrolled_text';
    case '/other-disclosures':
      return 'scrolled_text';
    case '/careers':
      return 'scrolled_text';
    case '/contact-us':
      return 'scrolled_text';
    case '/loans-faq-en':
      return 'scrolled_text';
    case '/sitemap':
      return 'scrolled_text';
    case '/personal-loan-documents':
      return 'scrolled_text';
    case '/personal-loan-interest-rates-and-charges':
      return 'scrolled_text';
    case '/how-to-apply-for-personal-loan':
      return 'scrolled_text';
    case '/personal-loan-eligibility-check':
      return 'scrolled_text';
    default:
      return;
  }
});

const whiteNavList = [
    '/about-us',
     '/credit-score/login', 
     '/digital-lead-partners',
     '/debt-collection-agencies',
     '/business-partner',
     '/grievance',
     '/media-coverages',
     '/security-money-view-app',
     '/smart-pay',
     '/personal-loan',
     '/business-loan',
     '/privacy-policy-loans',
     '/emi-calculator/personal-loan-emi-calculator',
     '/emi-calculator/business-loan-emi-calculator',
     '/emi-calculator/home-loan-emi-calculator',
     '/other-disclosures',
     '/careers',
     '/contact-us',
     '/loans-faq-en',
     '/sitemap',
     '/personal-loan-documents',
     '/personal-loan-interest-rates-and-charges',
     '/how-to-apply-for-personal-loan',
     '/personal-loan-eligibility-check',
]


const withoutLayoutList = [
  '/products/home-loan/login',
  '/products/motor-insurance/login',
  '/products/lap/login',
];

</script>


<template>
    <div class="menu_bar" :class="[headerBgClass, { 'scrolled': isScrolled }, {'dnone': withoutLayoutList.includes(route.path)}]"
    >
    <div class="container">
        <div class="menu_bar_in">
            <router-link to="/">
                <img v-if="isScrolled || whiteNavList.includes(route.path)" src="../../assets/image/logo.svg" class="logo" alt="Logo">
                <img v-else src="../../assets/image/white-logo.svg" class="logo" alt="Logo"> 
            </router-link>
            <div class="menu_bar_right">
                <button type="buttons" class="open_menu_btn" @click="toggleMenu">
                    <img v-if="isScrolled || whiteNavList.includes(route.path)" src="../../assets/image/burger_green.svg" alt="icon">
                    <img v-else src="../../assets/image/hamburgerIcon-v3.svg" alt="hamburgerIcon-v3.svg">
                </button>
                <div class="menu_ul_wrapper" v-if="isMenuOpen">
                    <ul class="menu_ul">
                        <li>
                            <router-link to="/personal-loan" :class="[textWhite, { 'scrolled_text': isScrolled }]">
                                <img src="../../assets/image/ic-personal-loan-product.webp" alt="ic-personal-loan-product.webp">
                                Personal Loan
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/credit-score/login" :class="[textWhite, { 'scrolled_text': isScrolled }]">
                                <img src="../../assets/image/CT_ProductIconDesktop.webp" alt="image/CT_ProductIconDesktop.webp">
                                Credit Tracker
                            </router-link>
                        </li>
                        <li class="drop_li" id="loan_li">
                            <a href="javascript:void(0)" :class="[textWhite, { 'scrolled_text': isScrolled }]" @click="toggleCalc">Calculators <i class="fas fa-angle-down"></i></a>
                            <div class="menu_drop" id="loan_drop" v-if="isCalcOpen">
                                <ul>
                                    <li @click="toggleCalc"><router-link to="/emi-calculator/personal-loan-emi-calculator">Personal Loan</router-link></li>
                                    <li @click="toggleCalc"><a href="#">Educational Loan</a></li>
                                    <li @click="toggleCalc"><a href="#">Bike Loan</a></li>
                                    <li @click="toggleCalc"><a href="#">Car Loan</a></li>
                                    <li @click="toggleCalc"><router-link to="/emi-calculator/business-loan-emi-calculator">Business Loan</router-link></li>
                                    <li @click="toggleCalc"><router-link to="/emi-calculator/home-loan-emi-calculator">Home Loan</router-link></li>
                                    <li @click="toggleCalc"><a href="#">Mortgage Loan</a></li>
                                    <li @click="toggleCalc"><a href="#">Gold Loan</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><router-link to="/contact-us" :class="[textWhite, { 'scrolled_text': isScrolled }]">Contact Us</router-link></li>
                        <button class="close_menu_btn" type="button" @click="toggleMenu">
                            <img src="../../assets/image/blackCloseIcon.svg" alt="blackCloseIcon.svg">
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>



    <main>
        <router-view @updateScrolled="handleScroll"/>
    </main>


    <footer :class="{'dnone': withoutLayoutList.includes(route.path)}">
        <section class="footer">
            <div class="container">
                <div class="footer_in">
                    <div class="footer_item">
                        <h4>THE COMPANY</h4>
                        <ul>
                            <li><router-link to="/about-us">About</router-link></li>

                            <li><router-link to="/security-money-view-app">Security</router-link></li>
                            <li><router-link to="/careers">Careers</router-link></li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <h4>PRODUCTS</h4>
                        <ul>
                            <li><router-link to="/personal-loan">Personal loan</router-link></li>
                            <li><router-link to="/smart-pay">Smart Pay</router-link></li>
                            <li><router-link to="/credit-score/login">Credit Tracker</router-link></li>
                            <li><router-link to="/business-loan">Business Loan</router-link></li>
                            <li><a href="#">EMI Calculator</a></li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <h4>PARTNERS</h4>
                        <ul>

                            <li><a href="#">Banking Partners</a></li>
                            <li><router-link to="/business-partner">Business Partners</router-link></li>
                            <li><router-link to="/digital-lead-partners">Digital Lead Partners</router-link></li>
                            <li><router-link to="/debt-collection-agencies">Collection Agencies</router-link></li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <h4>CONTACT US</h4>
                        <ul>
                            <li><a href="mailto:care@digitsathi.com">care@digitsathi.com</a></li>
                            <li><a href="tel:858 5883 226">858 5883 226</a></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div class="footer_item resource_info">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><router-link to="/media-coverages">Media Coverage</router-link></li>
                        </ul>
                    </div>
                    <div class="footer_item grievance_info">
                        <h4>GRIEVANCE REDRESSAL</h4>
                        <ul>
                            <li><router-link to="/grievance">Loan Grievance Redressal</router-link></li>
                            <li><a href="#">Banking Grievance Redressal</a></li>

                        </ul>
                    </div>
                </div>
                <div class="footer_social">
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div class="footer_copyright">
                    <p>© 2024 Ladia Credit (P) Ltd </p>
                    <div class="privacy_link">
                        <router-link to="/sitemap">Sitemap</router-link>
                        <a href="#">Privacy Policy</a>
                        <router-link to="/other-disclosures">Other Disclosures</router-link>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer_quote" v-if="route.path === '/'">
            <div class="container">
                <h4>DigitSathi: Personalized Finance Plans for Every Need </h4>
                <p><span>Personal Loans:</span> DigitSathi, your digital lending partner, offers hassle-free personal
                    loans without collateral, minimal documentation, and no limitations on usage, ensuring quick access
                    to funds for all your requirements.</p>
                <p><span>Credit Tracker:</span> Track your credit score and behavior with our credit tracker and stay on
                    top of your finances around the clock!</p>
            </div>
        </section>
    </footer>
</template>

<style scoped>

.dnone {
  display: none !important;
}

.scrolled {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}


.about_nav {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.scrolled_text {
    color: rgb(20, 72, 53) !important;
}
</style>