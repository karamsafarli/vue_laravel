<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(window.innerWidth >= 991 ? true : false);
const isCalcOpen = ref(false);

window.addEventListener("resize", () => isMenuOpen.value = window.innerWidth >= 991);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const toggleCalc = () => {
    isCalcOpen.value = !isCalcOpen.value;
}

const isScrolled = ref(false);

const handleScroll = (newVal) => {
    isScrolled.value = newVal; 
};


</script>


<template>
    <div class="menu_bar" :class="{'scrolled': isScrolled}">
    <div class="container">
        <div class="menu_bar_in">
            <a href="/">
                <img v-if="isScrolled" src="../../assets/image/mv-green-logo-v3Compressed.svg" class="logo" alt="Logo">
                <img v-else src="../../assets/image/logo.svg" class="logo" alt="Logo"> 
            </a>
            <div class="menu_bar_right">
                <button type="buttons" class="open_menu_btn" @click="toggleMenu">
                    <img v-if="isScrolled" src="../../assets/image/burger_green.svg" alt="icon">
                    <img v-else src="../../assets/image/hamburgerIcon-v3.svg" alt="hamburgerIcon-v3.svg">
                </button>
                <div class="menu_ul_wrapper" v-if="isMenuOpen">
                    <ul class="menu_ul">
                        <li>
                            <a href="#" :class="{'scrolled_text': isScrolled}">
                                <img src="../../assets/image/ic-personal-loan-product.webp" alt="ic-personal-loan-product.webp">
                                Personal Loan
                            </a>
                        </li>
                        <li>
                            <a href="#" :class="{'scrolled_text': isScrolled}">
                                <img src="../../assets/image/CT_ProductIconDesktop.webp" alt="image/CT_ProductIconDesktop.webp">
                                Credit Tracker
                            </a>
                        </li>
                        <li class="drop_li" id="loan_li">
                            <a href="javascript:void(0)" :class="{'scrolled_text': isScrolled}" @click="toggleCalc">Calculators <i class="fas fa-angle-down"></i></a>
                            <div class="menu_drop" id="loan_drop" v-if="isCalcOpen">
                                <ul>
                                    <li><a href="#">Personal Loan</a></li>
                                    <li><a href="#">Educational Loan</a></li>
                                    <li><a href="#">Bike Loan</a></li>
                                    <li><a href="#">Car Loan</a></li>
                                    <li><a href="#">Business Loan</a></li>
                                    <li><a href="#">Home Loan</a></li>
                                    <li><a href="#">Mortgage Loan</a></li>
                                    <li><a href="#">Gold Loan</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#" :class="{'scrolled_text': isScrolled}">Contact Us</a></li>
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


    <footer>
        <section class="footer">
            <div class="container">
                <div class="footer_in">
                    <div class="footer_item">
                        <h4>THE COMPANY</h4>
                        <ul>
                            <li><a href="#">About</a></li>

                            <li><a href="#">Security</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <h4>PRODUCTS</h4>
                        <ul>
                            <li><a href="#">Personal loan</a></li>
                            <li><a href="#">Credit Tracker</a></li>
                            <li><a href="#">EMI Calculator</a></li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <h4>PARTNERS</h4>
                        <ul>

                            <li><a href="#">Banking Partners</a></li>
                            <li><a href="#">Business Partners</a></li>
                            <li><a href="#">Digital Lead Partners</a></li>
                            <li><a href="#">Collection Agencies</a></li>
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
                            <li><a href="#">Media Coverage</a></li>
                        </ul>
                    </div>
                    <div class="footer_item grievance_info">
                        <h4>GRIEVANCE REDRESSAL</h4>
                        <ul>
                            <li><a href="#">Loan Grievance Redressal</a></li>
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
                        <a href="#">Sitemap</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Other Disclosures</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer_quote">
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
.scrolled {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.scrolled_text {
    color: rgb(20, 72, 53) !important;
}
</style>