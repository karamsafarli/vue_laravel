<script setup>
import '@dotlottie/player-component';
import { ref,onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const speed = ref(5);
const direction = ref(1);
const playMode = ref('bounce');

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

const handleScroll = () => {
    const sectionBottom = heroSection.value.clientHeight
    console.log(sectionBottom);
  isScrolled.value = window.scrollY > sectionBottom; 
};

const heroSection = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>


<template>
<!-- ======== menu bar ============-->
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
<!-- ======== /menu bar ============-->
<!-- ========== hero ============ -->
<section class="hero" ref="heroSection">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-md-6">
                <div class="hero_left">

                    <h1>Fast Approval <br> <span>Instant Loan</span></h1>
                    <p>We assist you in managing your finances with our personalized financial offerings</p>
                    <a href="#" class="cmn_btn">Apply Now</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="hero_right">
                    <img src="../../assets/image/home-page-header-banner-desktop.webp" alt="home-page-header-banner-desktop.webp">
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ========== hero ============ -->
<!-- ========== our product ============-->
<section class="our_product">
    <div class="container">
        <h5>DIGITSATHI PRODUCTS</h5>
        <div class="row">
            <div class="col-lg-6">
                <a href="#" class="product_item green">
                    <div class="product_item_top">
                        <div class="product_item_title">
                            <h1>Personal <br> Loan</h1>
                            <img src="../../assets/image/plProductCardRsIcon.webp" alt="plProductCardRsIcon.webp">
                        </div>
                        <div class="product_info">
                            <div>
                                <p>Get up to</p>
                                <h4><span class="green">₹10L in 10 mins</span></h4>
                            </div>
                            <img src="../../assets/image/ic-rightArrowHomePage.svg" alt="ic-rightArrowHomePage.svg">
                        </div>
                    </div>
                    <div class="product_item_btm green">
                        <p>
                            <img src="../../assets/image/ic-productSection-pl-prop1.svg" alt="ic-productSection-pl-prop1.svg">
                            <span>Zero paperwork</span>
                        </p>
                        <p>
                            <img src="../../assets/image/ic-productSection-pl-prop2.svg" alt="ic-productSection-pl-prop2.svg">
                            <span>Affordable EMIs</span>
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-lg-6">
                <a href="#" class="product_item redis">
                    <div class="product_item_top">
                        <div class="product_item_title">
                            <h1>Credit <br> Tracker</h1>
                            <img src="../../assets/image/CT_ProductIconDesktop.webp" alt="">
                        </div>
                        <div class="product_info">
                            <div>
                                <p>Get a free credit report with</p>
                                <h4><span class="redis">personalized tips</span></h4>
                            </div>
                            <img src="../../assets/image/ic-rightArrowHomePage.svg" alt="ic-rightArrowHomePage.svg">
                        </div>
                    </div>
                    <div class="product_item_btm redis">
                        <p>
                            <img src="../../assets/image/ic-productSection-ct-prop1.svg" alt="ic-productSection-ct-prop1.svg">
                            <span>Detailed report</span>
                        </p>
                        <p>
                            <img src="../../assets/image/ic-productSection-ct-prop2.svg" alt="ic-productSection-ct-prop2.svg">
                            <span>Insights for a better score</span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<!-- ========== our product ============-->
<!-- ========== why better ============-->
<section class="why_better">
    <div class="container">
        <h1>We're better in every sense!</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="why_better_feature">
                    <img src="../../assets/image/ic-trust-factors-fully-personalised-v2.svg" alt="ic-trust-factors-fully-personalised-v2.svg">
                    <div>
                        <h4>Fully personalized</h4>
                        <p>products for your needs</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="why_better_feature">
                    <img src="../../assets/image/ic-trust-factors-zero-paperwork-v2.svg" alt="ic-trust-factors-zero-paperwork-v2.svg">
                    <div>
                        <h4>Zero paperwork</h4>
                        <p>makes it easy & faster</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="why_better_feature">
                    <img src="../../assets/image/ic-trust-factors-transparent-v2.svg" alt="ic-trust-factors-transparent-v2.svg">
                    <div>
                        <h4>100% transparent,</h4>
                        <p>100% peace of mind</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="distribute_preview">
            <div class="distribute_prev_item">
                <img src="../../assets/image/ic-trustFactor-users.svg" alt="ic-trustFactor-users.svg">
                <div>
                    <p>Join</p>
                    <h2>2</h2>
                    <h5>lakh users</h5>
                </div>
            </div>
            <div class="distribute_prev_item">
                <img src="../../assets/image/ic-trustFactor-rating.svg" alt="ic-trustFactor-rating.svg">
                <div>
                    <p>Rated</p>
                    <h2>4.7</h2>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- ========== /why better ============-->
<!-- ========== home personal loan ============-->
<section class="h_personal_loan">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="h_personal_loan_left">
                    <dotlottie-player src="../../assets/image/account setup.json" background="transparent" :speed.attr="1.5" :loop.attr="true" :autoplay.attr="true" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="h_personal_loan_right">
                    <h1>Personal Loan</h1>
                    <p>Say goodbye to cash issues with instant & affordable loans</p>
                    <div class="h_personal_loan_right_btm">
                        <a href="#" class="cmn_btn">Learn More</a>
                        <a href="#" class="calculate_emi_btn">Calculate your loan EMI <img src="../../assets/image/ic-right-arrow.svg" alt="ic-right-arrow.svg"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ========== /home personal loan ============-->
<!-- ========== credit tracker ============-->
<section class="credit_tracker">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="credit_tracker_left">
                    <h1>Credit Tracker</h1>
                    <p>Improve your credit score with in-depth insights & personalized tips - all 100% FREE!</p>
                    <div class="credit_tracker_feature">
                        <div class="credit_tracker_feature_item">
                            <img src="../../assets/image/ic-ct-free-reports-V3.svg" alt="ic-ct-free-reports-V3.svg">
                            <p>Free monthly report</p>
                        </div>
                        <div class="credit_tracker_feature_item">
                            <img src="../../assets/image/ic-ct-card-offers-V3.svg" alt="ic-ct-card-offers-V3.svg">
                            <p>Exclusive loan & card offers</p>
                        </div>
                    </div>
                    <div class="h_personal_loan_right_btm">
                        <a href="#" class="cmn_btn">Learn More</a>
                        <a href="#" class="calculate_emi_btn">Importance of credit score <img src="../../assets/image/ic-right-arrow.svg" alt="ic-right-arrow.svg"></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="credit_tracker_right">
                    <dotlottie-player src="../../assets/image/credit_tracker.json" background="transparent" :speed.attr="1" :loop.attr="true" :autoplay.attr="true" />
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ========== /credit tracker ============ -->
<!-- ========== web review ============ -->
<section class="web_review">
    <div class="container">
        <h1>The most loved <br>
            financial app
        </h1>
        <picture>
            <source media="(max-width: 768px)" srcset="../../assets/image/customer-review-section-mobile.webp">
            <img alt="Customer Review" loading="lazy" src="../../assets/image/customer-review-section-desktop.webp" width="100%" height="auto">
        </picture>
    </div>
</section>
<!-- ========== /web review ============ -->
<!-- ========== testimonial ============ -->
<section class="testimonial">
    <div class="container">
            <Swiper :slides-per-view="2" :space-between="30" :grab-cursor="true" :loop="true" :modules="[Pagination]"
            :pagination="{ clickable: true }"
            :breakpoints="{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }"
            >
                <SwiperSlide>
                    <div class="item">
                        <div class="testimonial_item">
                            <div class="testimonial_profile">
                                <img src="../../assets/image/customer1.webp" alt="customer1.webp">
                                <div>
                                    <h4>Shantanu Gupta</h4>
                                    <p>Feb 26, 2023</p>
                                </div>
                            </div>
                            <div class="testimonial_rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="testi_review">
                                <p>
                                    Thank you so much for the service! Your app claim fast loan approval. Got the
                                    amount
                                    in minutes.
                                </p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div class="item">
                        <div class="testimonial_item">
                            <div class="testimonial_profile">
                                <img src="../../assets/image/customer2.webp" alt="customer2.webp">
                                <div>
                                    <h4>Vikram Sher</h4>
                                    <p>Feb 26, 2023</p>
                                </div>
                            </div>
                            <div class="testimonial_rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="testi_review">
                                <p>
                                    Had a great experience regarding credit. They just provide you instant credit in
                                    times of need. Thanks a lot 😊 for helping me.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="item">
                        <div class="testimonial_item">
                            <div class="testimonial_profile">
                                <img src="../../assets/image/customer2.webp" alt="customer2.webp">
                                <div>
                                    <h4>Vikram Sher</h4>
                                    <p>Feb 26, 2023</p>
                                </div>
                            </div>
                            <div class="testimonial_rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="testi_review">
                                <p>
                                    Had a great experience regarding credit. They just provide you instant credit in
                                    times of need. Thanks a lot 😊 for helping me.
                                </p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <!-- <template #addons>
                    <Navigation />
                    <Pagination />
                </template> -->

            </Swiper>
    </div>
</section>


<!-- ========== /testimonial ============-->
<!-- ========== faq ============-->
<section class="faq">
    <div class="container">
        <h1>Frequently Asked Questions</h1>
        <div class="faq_in">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is DigitSathi?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is a digital platform providing accessible financial services to
                                    all. It leverages technology to provide customised personal loans to
                                    borrowers, enables users to track their credit behaviour, and provides a
                                    curated savings tool that offers high returns through pro-saver accounts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Is DigitSathi RBI approved?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is a digital platform licensed by the Reserve Bank of India (RBI)
                                    that offers personal loans and other financial products. The loan
                                    application process is fully digital, and the app is 100% secure to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Is it safe to use the DigitSathi?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is ISO 27001:2022 Certified for Information Security Management
                                    Systems and uses 256-bit data encryption for data management. The
                                    information a user provides is secured against data threats, making the
                                    DigitSathi website one of the safest loan portal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How does the DigitSathi work?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>The DigitSathi website is simple and easy to use. Visit the website and log
                                    in using your mobile number. Once logged in, you can access a host of
                                    personal finance products.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            What are the products offered on the DigitSathi platform?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is a digital platform that offers the following services.</p>
                                <ul>
                                    <li>Instant personal loans</li>
                                    <li>Credit Tracker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Is DigitSathi a fintech or NBFC?
                        </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is a digital platform amongst a few Indian Fintech companies that
                                    partner with banks and NBFCs that comply with RBI lending policies and are
                                    ISO 27001:2022 Certified for Information Security Management Systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            What are the DigitSathi loan features & benefits?
                        </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>DigitSathi is one of the most trusted online lenders in India. It offers the
                                    following features & benefits to customers-</p>
                                <ul>
                                    <li>
                                        <b>Flexible Terms -</b>
                                        Instant collateral-free and online loans from Rs. 50,000 to Rs.
                                        10,00,000 with flexible repayment options that can extend up to 5 years.
                                    </li>
                                    <li>
                                        <b>Affordable Rates -</b>
                                        Economical interest rates that are easy on your pocket starting at just
                                        1.33% per month(16% Annually*).
                                    </li>
                                    <li>
                                        <b>Quick Eligibility Check - </b>
                                        Skip the long queues and check your loan eligibility with us in just 2
                                        minutes.
                                    </li>
                                    <li>
                                        <b>Hassle-free Loans - </b>
                                        From eligibility check and document verification to loan disbursement,
                                        the entire process is online, enabling you to apply for loans from the
                                        comfort of your home.
                                    </li>
                                    <li>
                                        <b>Unique credit model - </b>
                                        Our credit model allows us to customize the loan offers based on your
                                        eligibility and individual requirements.
                                    </li>
                                    <li>
                                        <b>Quick Disbursement -</b>
                                        The need for a loan arises at any time. To ensure your needs are met
                                        immediately, the loan amount is credited to your account within a few
                                        minutes.
                                    </li>
                                    <li>
                                        <b>Minimal Documentation -</b>
                                        Our documentation requirements involve your PAN, a clear selfie, and a
                                        mobile number linked to your Aadhaar. Additionally, depending on your
                                        profile we may sometimes request other documents.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            How Do I contact DigitSathi if I face any issues with the DigitSathi website?
                        </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="faq_body">
                                <p>For any service-related queries or feedback, please contact our customer
                                    support at care@digitsathi.com or . Our support is available Monday to
                                    Saturday, from 9 AM to 6 PM, except on public holidays.
                                </p>
                                <p>Customers wanting to file a complaint or report an issue can do so through
                                    the DigitSathi website. You will receive a response within 24 - 48 working
                                    hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button">
                            For More FAQs - <a href="frequently-asked-questions">Click here</a>
                        </button>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ========== /faq ============-->

<!-- ========== apply now  ============-->
<section class="app_download" v-if="isScrolled">
    <div class="app_download_in">
        <p>Take control of your finances <a href="#" class="cmn_btn">Apply Now</a></p>
    </div>
</section>
<!-- ========== /apply now ============-->
<!-- ========== footer ============-->
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

<!-- ========== /footer ============-->
<!-- ========== /footer quote ============-->
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
<!-- ========== /footer quote ============-->

<!-- <section class="app_download">
    <div class="container-fluid bottom-sheet hideStickyFooterWithClass" style="display: flex;"> 
              
              <div class="homePageFooter">
                <span class="homePageFooterText">Take control of your finances</span>
                <a class="homePageFooterAnchor home_page_footer_download_app_cta" href="https://mvlm.onelink.me/XvhQ/rvqkhtay" target="_blank"> <button class="homePageFooterBtn">Download app</button> </a>
              </div>
            </div>
</section> -->

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> -->
</template>






<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.scrolled {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
}

.scrolled_text {
    color: rgb(20, 72, 53) !important;
}


.slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.testimonial .container {
    height: 100%;
}

.swiper-wrapper {
    height: 100% !important;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 400px;
    width: 100%;
}


.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .slide {
    width: 50px;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .slide-thumb-active {
    opacity: 1;
}

.slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.swiper {
    height: 100% !important;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
    background: #144835 !important;
}

/* 
.swiper-pagination {
    bottom: 30px !important;
} */
</style>