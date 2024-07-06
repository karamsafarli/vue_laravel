<template>
<div id="business_loan_page">
  <section class="header_banner firstSection">
    <div class="mainContainer headerSectionMainContainer marginTop0">
        <div class="headerBannerTextContainer">
            <h1 class="headerBannerTitle">Business loan that’s made for you</h1>
            <h4 class="headerBannerSubTitle">Get up to <span class="primaryColor">₹5 Lakhs instantly</span></h4>
            <div class="lead_gen_form isModal displayNone PLloginForm loginSectionWidth" id="loginForm" style="display: grid;">
                <div v-if="showPhoneInput" id="generateOtpWrap" class="lead_gen_section generate_otp_container lead_gen_container">
                    <div class="header_generate_otp_container">
                        <div class="header_generate_otp_input_container">
                            <div class="country_code"><span>+91</span></div>
                            <div class="header_generate_otp_input_wrap">
                                <input type="text" v-model="phoneNumber" class="header_generate_otp_input generate_otp_input" :class="{ 'input-error': phoneError }" placeholder="Enter Mobile Number" maxlength="10" />
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
                            <input class="form-check-input header_generate_otp_consent generate_otp_consent" type="checkbox" v-model="consentChecked" id="header_generate_otp_consent" />
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
                            <input type="text" v-model="otp" id="verify_otp_lead_gen_input" class="verify_otp_lead_gen_input verify_otp_input" placeholder="Enter OTP" maxlength="5" />
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
            <div class="continuePLApplication displayNone loginSectionWidth" style="display: none;">
                <p class="welcomeBackText">Welcome back!</p>
                <button class="PLButton w100 continueAppButton business_loan_loggedin_continueapplication_cta">Continue loan application</button>
            </div>
        </div>

        <div class="headerIllustration">
            <img loading="eager" id="banner_image" srcset="https://moneyview.in/images/businessLoan-header-banner-desktop.webp 1536w, https://moneyview.in/images/businessLoan-header-banner-mobile.webp 240w" sizes="(min-width: 768px) 768px, 120px" src="https://moneyview.in/images/businessLoan-header-banner-mobile.webp" alt="Personal Loan RK Banner Image">
        </div>
    </div>
</section>

<section>
    <div class="mainContainer">
        <h2 class="fullRowClass featureSection featureCardHeading">Why choose us</h2>
        <div class="featureCard colspan-xl-1-4 colspan-xs-1-6 businessLoanFeatureCard businessLoan-col-span-xl-1-6 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Affordable credit at every step</h3>
                <p class="featureCardDesc">Monthly interest starts from 1.33%*</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-InterestRates.svg" class="featureCardImage" alt="ic-InterestRates.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-5-8 colspan-xs-1-6 businessLoanFeatureCard businessLoan-col-span-xl-7-12 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Hassle-free application process</h3>
                <p class="featureCardDesc">Apply online from anywhere &amp; enjoy quick approval</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-oneTapSuccess.svg" class="featureCardImage" alt="ic-oneTapSuccess.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-9-12 colspan-xs-1-6 businessLoanFeatureCard businessLoan-col-span-xl-1-6 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Flexible repayment plans</h3>
                <p class="featureCardDesc">Get up to 60 months to repay your loan</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-calendarTicked.svg" class="featureCardImage" alt="ic-calendarTicked.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-1-12 colspan-xs-1-6 businessLoanFeatureCard businessLoan-col-span-xl-7-12 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Zero collateral</h3>
                <p class="featureCardDesc">100% transparent, no collateral loan made for you</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-zeroCollateral.svg" class="featureCardImage" alt="ic-zeroCollateral.svg" loading="lazy">
        </div>
    </div>
</section>

<section>
    <div class="mainContainer">
        <h2 class="fullRowClass featureSection featureCardHeading">Apply for a Business Loan</h2>
        <div class="featureCard colspan-xl-1-4 colspan-xs-1-6 businessLoanStep businessLoan-col-span-xl-1-3 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Check <br class="displayDesktop"> eligibility</h3>
                <p class="featureCardDesc">By providing basic details</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-check-eligibility.svg" class="featureCardImage" alt="ic-check-eligibility.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-5-8 colspan-xs-1-6 businessLoanStep businessLoan-col-span-xl-4-6 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Select <br class="displayDesktop"> offer</h3>
                <p class="featureCardDesc">Choose the amount you need &amp; a flexible repayment plan</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-select-offer.svg" class="featureCardImage" alt="ic-select-offer.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-9-12 colspan-xs-1-6 businessLoanStep businessLoan-col-span-xl-7-9 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Document <br class="displayDesktop"> verification</h3>
                <p class="featureCardDesc">Upload all the required documents &amp; get approved</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-document-verification.svg" class="featureCardImage" alt="ic-document-verification.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-1-12 colspan-xs-1-6 businessLoanStep businessLoan-col-span-xl-10-12 businessLoan-col-span-xs-1-6">
            <div>
                <h3 class="featureCardTitle">Instant <br class="displayDesktop"> Disbursal</h3>
                <p class="featureCardDesc">Get the money in your bank account</p>
            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-instant-disbursal.svg" class="featureCardImage" alt="ic-instant-disbursal.svg" loading="lazy">
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
                        <p class="trust-marker-title text-1" data_target="245000">225000</p>
                        <p class="trust-marker-content">Happy<br>Users</p>
                    </div>
                </div>
                <div class="colspan-xl-3-4 colspan-sm-3-4 colspan-xs-4-6 display-flex trustMarkerMargin">
                    <div class="trust-marker-image"><img src="https://moneyview.in/images/ic-trustMarker-wallet.svg" class="trust-marker-image" alt="TrustMarker Wallet" loading="lazy"></div>
                    <div class="trust-marker-container">
                        <p class="trust-marker-title text-2" data_target="651">450</p>
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

<section class="faq_section">
    <div class="mainContainer faqSecContainer">
        <h2 class="fullRowClass faqLandingPageHeading"> Frequently Asked Questions </h2>
        <div class="accordion text-left fullRowClass" id="faq-section">
            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq1">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                        What is Moneyview business loan?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq1" class="collapse" aria-labelledby="faq1" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview business loans are meant for self-employed individuals and business owners. They can use the funds to start or grow their business. The funds can be used for purchasing raw materials, equipment, or capital.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq2">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                        What are the benefits of taking a business loan from Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq2" class="collapse" aria-labelledby="faq2" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        The major benefits of applying for a business loan from Moneyview are quick disbursal and flexible repayment terms. You can get loans up to Rs.5 Lakh at interest rates starting from just 1.33% per month.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq3">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                        How to calculate business loan EMI?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq3" class="collapse" aria-labelledby="faq3" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Calculating your EMIs before applying for a loan helps you plan your finances. You can use the <a href="/emi-calculator/business-loan-emi-calculator">Moneyview business loan calculator</a> to check your EMI
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq4">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                        Will a business loan impact my credit score?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq4" class="collapse" aria-labelledby="faq4" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Any credit product will impact your credit score, including business loans. However, if you don’t exceed your Credit Utilization Ratio and pay your EMIs on time every month, your <a href="/credit-score/login">credit score will be positively impacted by a loan.
                        </a></div><a href="/credit-score/login">
                    </a>
                </div><a href="/credit-score/login">
                </a>
            </div><a href="/credit-score/login">

            </a>
            <div class="card faqCard"><a href="/credit-score/login">
                </a>
                <div class="card-header faqCardHeader" id="faq5"><a href="/credit-score/login">
                    </a><a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                        How long will it take to apply for a business loan from Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq5" class="collapse" aria-labelledby="faq5" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        The application process for a Moneyview business loan involves 4 simple steps and can be completed within minutes.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq6">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                        What is the interest rate of a Moneyview business loan?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq6" class="collapse" aria-labelledby="faq6" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview offers business loans at competitive interest rates starting from 1.33% per month.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq7">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                        What documents are required for applying for a Moneyview business loan?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq7" class="collapse" aria-labelledby="faq7" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        You just need your PAN and Aadhaar card to apply for a Moneyview business loan. You might also need your GST Certificate, Business Registration Proof, and Bank Statement to complete the application process.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq8">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq8" aria-controls="collapseFaq8">
                        Am I eligible for a business loan from Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq8" class="collapse" aria-labelledby="faq8" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        If your age is between 21 and 57, you have a minimum monthly in-hand income of Rs.13,500, you are eligible for a Moneyview business loan. You must also have a minimum CIBIL or Experian score of 650 to be eligible.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<button v-if="isScrolled" id="scrollToTopBtn" class="scrollToTopBtn" @click="scrollToTop">
    <img src="https://moneyview.in/images/ic-scroll-up.svg" width="24" height="24">
</button>
</div>
</template>

<script>
import {
    ref,
    onMounted,
    onUnmounted,
    defineComponent,
    computed
} from 'vue';
import '@dotlottie/player-component';
import '../../css/business_loan.css'

export default defineComponent({
    setup() {
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
            console.log('fajflakf')
            const phoneRegex = /^[789]\d{9}$/;
            if (!phoneRegex.test(phoneNumber.value)) {
                console.log('salam')
                phoneError.value = true;
            } else {
                phoneError.value = false;
                showPhoneInput.value = false;
            }
        };

        const editNumber = () => {
            showPhoneInput.value = true;
        };

        return {
            isScrolled,
            scrollToTop,
            phoneNumber,
            phoneError,
            otp,
            otpError,
            showPhoneInput,
            consentChecked,
            whatsAppChecked,
            isCheckboxChecked,
            applyNow,
            editNumber
        };
    }
});
</script>
