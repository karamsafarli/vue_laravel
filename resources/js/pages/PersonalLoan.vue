<template>
<div id="personal_loan_page">
    <section class="header_banner firstSection">
    <img src="https://moneyview.in/images/PL-header-pattern-desktop.svg" class="banner_bg_pattern" alt="background pattern">
    <div class="mainContainer header_section_container marginTop0">
        <div class="navMenu fullRowClass">
            <router-link class="navLink personal-loan-page-personal-loan-interest-rates-and-charges-header-navbar" to="/personal-loan-interest-rates-and-charges">Interest rates</router-link>
            <router-link class="navLink personal-loan-page-personal-loan-eligibility-check-header-navbar" to="/personal-loan-eligibility-check">Eligibility criteria</router-link>
            <router-link class="navLink personal-loan-page-personal-loan-documents-header-navbar" to="/personal-loan-documents">Documents required</router-link>
            <router-link class="navLink personal-loan-page-how-to-apply-for-personal-loan-header-navbar" to="/how-to-apply-for-personal-loan">How to apply</router-link>
        </div>
        <div class="header_banner_lead_card header_banner_text_span">
            <h1 class="header_banner_title">Get up to ₹10 lakhs<br> in 10 mins!</h1>
            <h3 class="header_banner_heading">Personal loans made just for you</h3>
            <div class="header_apply_online_container">
                <div class="lead_gen_form isModal displayNone PLloginForm" id="loginForm" style="display: grid;">
                    <div v-if="showPhoneInput" id="generateOtpWrap" class="lead_gen_section generate_otp_container lead_gen_container">
                        <div class="header_generate_otp_container">
                            <div class="header_generate_otp_input_container">
                                <div class="country_code"><span>+91</span></div>
                                <div class="header_generate_otp_input_wrap">
                                    <input maxlength="10" type="text" v-model="phoneNumber" class="header_generate_otp_input generate_otp_input" :class="{ 'input-error': phoneError }" placeholder="Enter Mobile Number" />
                                    
                                    <p v-if="phoneError" id="header_generate_otp_message" class="header_generaate_otp_message generate_otp_message input_error_text" style="display: grid; color: rgb(214, 39, 60);">Please enter valid mobile number</p>
                                    <p v-else id="header_generate_otp_message" class="header_generate_otp_message generate_otp_message">
                                        An OTP will be sent for verification
                                    </p>
                                </div>
                            </div>
                            <button type="button" class="header_generate_otp_apply_loan_btn apply_now_lead_gen_btn" id="sendOtp" @click="applyNow" :disabled="!isCheckboxChecked">
                                <span class="btn_loader spinner-border spinner-border-sm" role="status" aria-hidden="true" style="display: none;"></span>
                                Apply now
                            </button>
                        </div>
                        <div class="header_consent_wrapper">
                            <div class="header_generate_otp_consent_container consent_checkbox_wrap loginConsent">
                                <input class="form-check-input header_generate_otp_consent generate_otp_consent" type="checkbox"  v-model="consentChecked" id="header_generate_otp_consent" />
                                <label class="form-check-label header_generate_otp_consent_text loginConsentText" for="header_generate_otp_consent">
                                    By proceeding, you agree to our
                                    <a class="header_generate_otp_consent_text" target="_blank" href="/terms-conditions-loans-app" rel="noopener">
                                        Terms &amp; Conditions
                                    </a>
                                    &nbsp;&amp;&nbsp;
                                    <a class="header_generate_otp_consent_text" target="_blank" href="/privacy-policy-loans" rel="noopener">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                            <div class="header_generate_otp_consent_container consent_checkbox_wrap whatsAppConsent">
                                <input class="form-check-input header_generate_otp_consent" type="checkbox" v-model="whatsAppChecked" id="whatsAppCheckBox" />
                                <label class="form-check-label header_generate_otp_consent_text whatsAppConsentText" for="whatsAppCheckBox">
                                    I agree to receive updates on WhatsApp
                                </label>
                            </div>
                        </div>
                    </div>

                    <div v-else id="verifyotpWrap" class="verify_otp_wrap_container verify_otp_container header_verify_otp">
                        <div>
                            <div style="position: relative;">
                                <input maxlength="5" type="text" v-model="otp" id="verify_otp_lead_gen_input" class="verify_otp_lead_gen_input verify_otp_input" placeholder="Enter OTP" />
                                <button id="resend_otp" type="button" class="text-button-link resend_otp header_resend_otp">Resend OTP</button>
                            </div>
                            <div class="verify_otp_message_container verify_otp_container">
                                <p v-if="otpError" id="otp_error_message" class="otp_error_message" style="margin-bottom: 0px;">{{ otpError }}</p>
                                <div class="verify_otp_mobile_number_container alignItemsEnd flex-grow-1">
                                    <span id="mobile2" class="edit_mobile_number_text">{{ phoneNumber }}</span>
                                    <button @click="editNumber" class="edit_mobile_number text-button-link">Edit</button>
                                </div>
                            </div>
                        </div>
                        <button id="verifyNow" type="button" class="verify_otp_lead_gen_btn pl_page_header_verify_otp_cta">Verify OTP</button>
                    </div>
                </div>
            </div>
            <div class="continuePLApplication displayNone" style="display: none;">
                <p class="welcomeBackText">Welcome back!</p>
                <button class="PLButton w100 continueAppButton pl_page_continue_loan_application_header_cta">Continue loan application</button>
            </div>

        </div>
        <div class="header_banner_image_span">
            <div class="d-flex justify-content-center align-items-end" style="width: 100%;">
                <img loading="eager" id="banner_image" srcset="https://moneyview.in/images/PL-Rk-Banner2xDesktop.webp 1536w, https://moneyview.in/images/PL-Rk-Banner1xMobile.webp 240w" sizes="(min-width: 768px) 768px, 120px" src="https://moneyview.in/images/PL-Rk-Banner1xMobile.webp" alt="Personal Loan RK Banner Image">
            </div>
        </div>
    </div>
</section>

<section class="get_started_section">
    <div class="mainContainer">
        <!-- <dotlottie-player class="get_started_lottie get-started-lottie" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player> -->
        <dotlottie-player class="get_started_lottie get-started-lottie" src="../../assets/image/account setup.json" background="transparent" :speed.attr="1.5" :loop.attr="true" :autoplay.attr="true" />
        <div class="get_started_text">
            <div class="get_started_text_div">
                <p class="get_started_title">Get started <br>instantly</p>
                <p class="get_started_subtitle">Apply for a personal loan from anywhere. <br>It only takes a few minutes!</p>
            </div>
        </div>
    </div>
</section>

<section class="what_makes_us_better ">
    <div class="mainContainer section-animation">
        <div class="fullRowClass">
            <div class="what_makes_moneyview_better_title">
                <p class="">What makes</p>
                <p class="">us better</p>
            </div>
        </div>
        <div class="colspan-xl-1-6 colspan-xs-1-6 betterCard card1Margin">
            <div class="paddingDiv">
                <p class="cardTitle removeBr">Highest <br>loan amount</p>
                <p class="cardDescription">Our credit model generates the best personalized offer for you.</p>
            </div>
            <div class="cardAnimation">
                <!-- <dotlottie-player class="cardAnimationLottie1" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player> -->
                <!-- <dotlottie-player class="cardAnimationLottie1" src="../../assets/animations/account-setup.lottie" background="transparent" :speed.attr="1.5" :loop.attr="true" :autoplay.attr="true" /> -->
            </div>
        </div>
        <div class="colspan-xl-7-12 colspan-xs-1-6 colspan betterCard cardMarginTop cardMarginTopDesktop">
            <div class="paddingDiv">
                <p class="cardTitle removeBr">Most affordable <br>offers</p>
                <p class="cardDescription">Enjoy flexible loan tenures from 3 months to 60 months; choose a plan you like!</p>
            </div>
            <div class="cardAnimation">
                <dotlottie-player class="cardAnimationLottie2" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
            </div>
        </div>
        <div class="colspan-xl-1-6 colspan-xs-1-6 betterCard cardMarginTop">
            <div class="paddingDiv">
                <p class="cardTitle">No surprises, <br>100% transparent</p>
                <p class="cardDescription">Check interest rate, total repayment &amp; terms beforehand - leave no room for doubt
                    or surprises!</p>
            </div>
            <div class="cardAnimation">
                <dotlottie-player class="cardAnimationLottie3" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
            </div>
        </div>
        <div class="colspan-xl-7-12 colspan-xs-1-6 betterCard cardMarginTop">
            <div class="paddingDiv">
                <p class="cardTitle">Hassle-free, <br>easy to use</p>
                <p class="cardDescription">The power of human experience &amp; technology - all packed into our app to simplify
                    lengthy processes just with a tap</p>
            </div>
            <div class="cardAnimation">
                <dotlottie-player class="cardAnimationLottie4" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
            </div>
        </div>
    </div>
</section>

<section class="trustMarker">
    <div class="mainContainer marginTop0">
        <div class="trust-marker-col-1 trust-marker-1">
            <div class="trustclass">
                <p class="trust-marker-heading trustRowClass">Trusted by millions</p>
                <p class="trust-marker-subheading trustRowClass">We're present across the nook &amp; corner of the country,
                    making loans accessible, and simple!</p>
                <div class="colspan-xl-1-2 colspan-sm-1-2 colspan-xs-1-3 display-flex trustMarkerMargin">
                    <div class="trust-marker-image"><img src="https://moneyview.in/images/ic-trustMarker-Users.svg" class="trust-marker-image" alt="Trusted By Users" loading="lazy"></div>
                    <div class="trust-marker-container">
                        <p class="trust-marker-title text-1" data_target="60">35</p>
                        <p class="trust-marker-content">Happy<br>Users</p>
                    </div>
                </div>
                <div class="colspan-xl-3-4 colspan-sm-3-4 colspan-xs-4-6 display-flex trustMarkerMargin">
                    <div class="trust-marker-image"><img src="https://moneyview.in/images/ic-trustMarker-wallet.svg" class="trust-marker-image" alt="TrustMarker Wallet" loading="lazy"></div>
                    <div class="trust-marker-container">
                        <p class="trust-marker-title text-2" data_target="12000">10000</p>
                        <p class="trust-marker-content">Loan<br>Disbursed</p>
                    </div>
                </div>
                <div class="colspan-xl-5-6 colspan-sm-5-6 colspan-xs-1-3 display-flex trustMarkerMargin">
                    <div class="trust-marker-image"><img src="https://moneyview.in/images/ic-trustMarker-maps.svg" class="trust-marker-image" alt="TrustMarker Map" loading="lazy"></div>
                    <div class="trust-marker-container">
                        <p class="trust-marker-title text-3" data_target="19000">16000</p>
                        <p class="trust-marker-content">Locations<br>Served</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="trust-marker-col-2 trust-marker-2 positionRelative">
            <img srcset="https://moneyview.in/images/trustMarkerBannerLessbgShadow.webp 1536w, https://moneyview.in/images/personalLoanTrustMarkerBannerMobile.webp 240w" sizes="(min-width: 768px) 768px, 120px" src="https://moneyview.in/images/trustMarkerBannerLessbgShadow.webp" class="trust_marker_model_image" alt="TrustMarker RK Banner" loading="lazy"></div>
    </div>
</section>

<section class="section-animation customerReviewSection">
    <div class="mainContainer">
        <div class="reviewSection fullRowClass">
            <h2 class="customerReviewTitle">The most loved<br>financial app</h2>
            <picture>
                <source media="(max-width: 768px)" srcset="https://moneyview.in/images/customer-review-section-mobile.webp">
                <img loading="lazy" alt="Customer Reviews" src="https://moneyview.in/images/customer-review-section-desktop.webp" width="100%" height="auto">
            </picture>
        </div>

        <!-- <div class="reviewCard colspan-xl-1-6 colspan-xs-1-6">
            <div class="customer-details"><img loading="lazy" src="https://moneyview.in/images/ShantanuGupta.webp" alt="avatar" class="customer-image" width="auto" height="auto">
                <div class="customer-class">
                    <p class="customer-name">Shantanu Gupta</p>
                    <p class="review-details">Feb 26, 2023</p>
                </div>
            </div>
            <div class="customerRating"><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span></div>
            <p class="review-content">Thank you so much for the service! Your app claim fast loan approval. Got the amount in
                minutes.</p>
        </div>
        <div class="reviewCard-2 reviewCard reviewCardMargin colspan-xl-7-12 colspan-xs-1-6">
            <div class="customer-details"><img loading="lazy" src="https://moneyview.in/images/VikramSher.webp" alt="avatar" class="customer-image">
                <div class="customer-class">
                    <p class="customer-name">Vikram Sher</p>
                    <p class="review-details">Feb 26, 2023</p>
                </div>
            </div>
            <div class="customerRating"><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span></div>
            <p class="review-content">Had a great experience regarding credit. They just provide you instant credit in times
                of need. Thanks a lot 😊 for helping me.</p>
        </div> -->
    </div>
</section>

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

            </Swiper>
    </div>
</section>

<section class="section-animation emiCalcualtorSection">
    <div class="mainContainer emiCalculator">
        <div class="fullRowClass heart_lottie_div">
            <dotlottie-player class="heart_lottie" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
        </div>
        <div class="colspan-xl-1-4 colspan-xs-1-3 colspan-sm-1-3"><img loading="lazy" src="https://moneyview.in/images/PL-emiCalculator-desktop.svg" width="100%" height="auto" class="emi-calculator-image display-desktop"> <img loading="lazy" src="https://moneyview.in/images/PL-emiCalculator-mobile.svg" width="100%" height="auto" class="emi-calculator-image display-mobile"></div>
        <div class="colspan-xl-5-12 colspan-xs-1-6 colspan-sm-4-6 emiCalculatorMargin">
            <p class="heading">Our EMI calculator<br>makes it easier</p>
            <p class="subHeading">Use our easy EMI calculator to plan your loan's EMI, interest &amp; repayment schedule</p>
            <div class="calculateEmiButton"><a class="calculateEmi pl_page_loancalculator_cta" href="/emi-calculator/personal-loan-emi-calculator?utm_source=pl_page_leads&amp;utm_medium=organic&amp;utm_campaign=pl_page_loancalculator_cta" target="_blank" rel="noopener">Calculate your EMI<img loading="lazy" class="rightArrow" src="https://moneyview.in/images/ic-PL-rightArrow.svg" width="auto" height="auto"></a></div>
        </div>
    </div>
</section>

<section class="video_section section-animation">
    <div class="mainContainer">
        <div class="fullRowClass">
            <p class="video_section_title">Mann hai <br>toh money hai</p>
            <p class="video_section_subtitle">Watch our latest campaign here <span class="hashtag">#MannHaiTohMoneyHai</span>
            </p>
        </div>
        <div class="video_section_carousel">
            <div class="videocard videocard--1 videoBorder">
                <div class="videocard__img"></div>
                <img class="videocard__img--hover" src="https://moneyview.in/images/VideoCardRkImage1.webp" loading="lazy" alt="First Video Card">
                <div class="videocardPlayButton1"><img loading="lazy" alt="PlayButton" src="https://moneyview.in/images/play-button.svg" width="auto" height="auto"></div>
            </div>
            <div class="videocard videocard--2">
                <div class="videocard__img"></div>
                <img class="videocard__img--hover" src="https://moneyview.in/images/VideoCardRkImage2.webp" loading="lazy" alt="Second Video Card">
                <div class="videocardPlayButton2"><img loading="lazy" alt="PlayButton" src="https://moneyview.in/images/play-button.svg" width="auto" height="auto"></div>
            </div>
        </div>
        <div id="iframeOverlay" class="iframeOverlay"></div>
        <div id="iframePopup" class="iframePopup"><iframe loading="lazy" src="https://www.youtube.com/embed/FoHv80kXAaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen" id="iframePlayer" class="iframePlayer"></iframe></div>
    </div>
</section>

<section class="bottomBannerSection section-animation">
    <div class="mainContainer bottomBannerContainer">
        <div class="colspan-xl-1-5 colspan-xs-1-6 bottomBannerTextPadding">
            <p class="bottomBannerTitle">Get an instant personal loan from Moneyview</p>
            <p class="bottomBannerSubTitle">Download the app now from Google Play</p>
            <div class="playstoreButton"><a href="https://mvl.onelink.me/504844896/bhiwu3ee" target="_blank" class="pl_page_playstore_footer_banner_cta">
                    <button class="downloadBtn">
                        Download app
                    </button>
                </a></div>
        </div>
        <div class="colspan-xl-6-12 colspan-xs-1-6 positionRelative">
            <picture>
                <source media="(max-width: 767px)" srcset="https://moneyview.in/images/bannerBottomPSScreen.svg">
                <img src="https://moneyview.in/images/bottomBannerDownload.svg" class="bottomBannerImage" alt="Loans Bottom Banner" loading="lazy">
            </picture>
        </div>
    </div>

    <div class="mainContainer bottom-banner-backdrop" style="cursor: pointer; position: absolute;"><a href="https://mvlm.onelink.me/XvhQ/l5smm587" target="_blank" class="backdropBtn pl_page_playstore_footer_banner_cta">&nbsp;</a></div>
</section>

<personal-loan-faq/>



<div class="modal fade popupModal" id="popupModal" role="dialog" aria-labelledby="popupModal" aria-hidden="true" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog popupModalDialog modal-dialog-centered" role="document">
        <div class="modal-content" style="border-radius: 24px;">
            <div class="campaignPopup">
                <a class="CT_popup_banner_dec23 web-ct-popup" href="https://moneyview.in/credit-score/ctl/login?utm_source=website_CT_popup_ctl&amp;utm_medium=/personal-loan&amp;utm_campaign=personal-loan-page">
                    <img class="popupBanner displayDesktop" src="https://moneyview.in/images/ic-ipl-popup-banner-desktop.jpg" alt="modal_image">
                    <img class="popupBanner displayMobile" src="https://moneyview.in/images/ic-ipl-popup-banner-mobile.jpg" alt="modal_image">
                </a>
                <button id="popupCloseButton" type="button" class="close closeButton closePopup" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
            </div>
        </div>
    </div>
</div>

<button v-if="isScrolled" id="scrollToTopBtn" class="scrollToTopBtn" @click="scrollToTop">
    <img src="https://moneyview.in/images/ic-scroll-up.svg" width="24" height="24">
</button>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@dotlottie/player-component';
import '../../css/personal_loan.css';
import PersonalLoanFaq from '../components/PersonalLoanFaq.vue'

const isScrolled = ref(false);

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const handleScroll = () => {
    if (window.scrollY > 900) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const phoneNumber = ref('');
const phoneError = ref(false);
const otp = ref('');
const otpError = ref('');
const showPhoneInput = ref(true);
const consentChecked = ref(true);
const whatsAppChecked = ref(true);

const isCheckboxChecked = computed(() => consentChecked.value && whatsAppChecked.value);

const applyNow = () => {
    const phoneRegex = /^[789]\d{9}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        phoneError.value = true;
    } else {
        phoneError.value = false;
        showPhoneInput.value = false;
    }
};

const editNumber = () => {
    showPhoneInput.value = true;
};

const limitOtpInput = (event) => {
    if (otp.value.length >= 5 && event.keyCode >= 48 && event.keyCode <= 57) {
        event.preventDefault();
    }
};
</script>
