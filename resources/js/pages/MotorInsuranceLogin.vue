<template>
<div class="total">
    <div class="container">
        <div class="row first">
            <div class="col-6 left">
                <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-home-loan-logo.svg" alt="">
            </div>
            <div class="col-6 right">
                <span>Powered by</span>
                <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-insurance-dekho-logo-white.svg" alt="">
            </div>
        </div>
        <div class="row second">
            <div class="col-lg-6 text">
                <div class="vehicle">
                    <h2>Vehicle Insurance
                        from <span>₹1.5*/day</span></h2>
                </div>
                <div class="center">
                    <div class="type">
                        <img src="../../assets/image/cashless.svg" alt="">
                        <h2>Cashless <br /> Claims</h2>
                    </div>
                    <div class="type">
                        <img src="../../assets/image/no_inspection.svg" alt="">
                        <h2>No Vehicle <br />

                            Inspection</h2>
                    </div>
                    <div class="type">
                        <img src="../../assets/image/accident_cover.svg" alt="">
                        <h2>Accident Cover <br />

                            of up to ₹15L</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 image">
                <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/motor-insurance-desktop-login.png" alt="">
            </div>
        </div>
    </div>
</div>
<div class="extra">

    <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/motor-insurance-desktop-login.png" alt="">

</div>
<div class="container down">
    <div class="row last" style="margin-bottom:10px;">
        <div class="col-lg-6 otp_form_container">
            <h3 class="form_heading">Upto 85% lower premium: Get a Quote</h3>
            <div class="header_apply_online_container">
                <div class="lead_gen_form isModal displayNone PLloginForm" id="loginForm" style="display: grid;">
                    <div v-if="showPhoneInput" id="generateOtpWrap" class="lead_gen_section generate_otp_container lead_gen_container">
                        <div class="header_generate_otp_container">
                            <div class="header_generate_otp_input_container">
                                <div class="country_code"><span>+91</span></div>
                                <div class="header_generate_otp_input_wrap">
                                    <input maxlength="10" type="text" v-model="phoneNumber" class="header_generate_otp_input generate_otp_input" :class="{ 'input-error': phoneError }" placeholder="Enter Mobile Number" />
                                    
                                    <p v-if="phoneError"id="header_generate_otp_message" class="header_generaate_otp_message generate_otp_message input_error_text" style="display: grid; color: rgb(214, 39, 60);">Please enter valid mobile number</p>
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
        </div>
    </div>

</div>

<div class="bottom_paragraph">
    <p>
        *Standard T&C Apply. Starting premium as shown in creative applies to Motor Third- Party Insurance for bikes with cubic capacity of less than 75 CC. Per day premium is for indication only. Premium is payable on an annual basis. The amount of premium displayed in the advertisement is as per the respective Insurer’s product filing. For more details on risk factors, terms and conditions, please read the sales brochure of respective insurers carefully before concluding a sale. Girnar Insurance Brokers Private Limited, Corp. Off: Plot no.301, Phase- 2, Udyog Vihar, Gurugram- 122022, Haryana. IRDAI License no588. Direct Broker (Life & General) valid till 19th March 2026. Helpline number: 7551196989.URN:GIBPL/2023/371.
    </p>
</div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


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



<style scoped>


.bottom_paragraph {
    padding: 24px;
    background-color: rgb(246, 246, 246);
    transform: translateY(15%);
}

.bottom_paragraph p {
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
}

.header_generate_otp_message {
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin-left: 20px;
}

.header_generate_otp_input_container {
    position: relative;
}

.header_generate_otp_input_container .country_code {
    position: absolute;
    color: var(--grey05);
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    margin-left: 16px;
    margin-top: 16px;
}

.lead_gen_section {
    display: flex;
    flex-direction: column;
}

.header_generate_otp_consent_text {
    font-weight: var(--font-weight-regular);
    font-size: 11px;
    line-height: 20px;
    align-self: center;
    color: var(--grey07);
    padding-bottom: 16px;
    padding-bottom: 0px;
    margin-bottom: 0px !important;
}

.header_generate_otp_consent_text a {
    font-weight: var(--font-weight-semibold);
    margin-left: 0px;
    text-decoration: underline !important;
}

.header_generate_otp_input {
    background: var(--white-color) !important;
    color: var(--black-color);
    border: 1px solid var(--grey05);
    padding: 16px 16px 16px 54px;
    border-radius: 4px;
    height: 56px;
    width: 100%;
}

.header_generate_otp_input:focus {
    border: 2px solid rgba(16, 16, 18, 1);
}

.verify_otp_lead_gen_input {
    align-items: center;
    padding: 18px;
    gap: 8px;
    height: 56px !important;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(185, 186, 189, 1);
    width: 100%;
}

.verify_otp_lead_gen_input:focus {
    border: 2px solid rgba(16, 16, 18, 1)
}

.header_generate_otp_apply_loan_btn {
    background: var(--primary-color);
    border-radius: 4px;
    outline: none;
    border: none;
    color: var(--white-color) !important;
    padding: 0px !important;
    margin: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 56px;
    padding: 16px 20px !important;
    font-weight: var(--font-weight-regular);
    font-size: var(--body-font-size) !important;
    line-height: var(--body-line-height);
    gap: 8px;
}

.header_generate_otp_apply_loan_btn:disabled {
    background: var(--primary-color) !important;
    opacity: 0.6 !important;
    color: var(--white-color) !important;
}

.header_generate_otp_apply_loan_btn:hover {
    cursor: pointer;
}

.verify_otp_lead_gen_btn {
    height: 56px;
    background: var(--primary-color);
    border-radius: 4px;
    outline: none;
    border: none;
    color: var(--white-color);
    padding: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.verify_otp_lead_gen_btn:disabled {
    background: var(--primary-color) !important;
    opacity: 0.6 !important;
    color: var(--white-color) !important;
}

.header_apply_online_container {
    display: flex;
    flex-direction: column;
    gap: 27px;
    
}

.otp_form_container {
    margin: 30px 0;
}

.form_heading  {
    font-size: 20px;
    line-height: 22px;
    white-space: nowrap;
    
}

.header_generate_otp_container {
    display: flex;
    flex-direction: column;
}

.verify_otp_wrap_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
}

.verify_otp_wrap {
    position: relative;
    display: flex;
    flex-direction: row;
}

.header_consent_wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px
}

.header_generate_otp_consent_container {
    display: flex;
    gap: 8px;
    align-items: center;
}

.header_generate_otp_consent {
    width: 24px;
    height: 24px;
    margin-left: 0px !important;
}

.otpInput {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
}

.otp-field {
    align-items: center;
    padding: 8px;
    width: 80px;
    height: 48px;
    border: 1px solid var(--grey05);
    border-radius: 8px;
    text-align: center;
}

.verify_otp_message_container {
    display: flex;
    justify-content: space-between;
    padding: 4px 0px 0px;
}

.verify_otp_mobile_number_container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.edit_mobile_number_text {
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: var(--grey07);
}

.edit_mobile_number {
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.3px;
    padding-inline: 0px !important;
    color: var(--primary-color);
}

.text-button-link {
    width: fit-content;
    outline: none !important;
    background-color: transparent !important;
    border: none !important;
}

.text-button-link:disabled {
    background-color: transparent !important;
    border: none !important;
    color: var(--grey05) !important;
}

.google_play_store_image {
    width: 142px;
    height: 32px;
    margin: auto;
}

.header_resend_otp {
    position: absolute;
    right: 18px;
    padding-block: 18px;
}



* {

    box-sizing: border-box;

}

.total {
    background-color: #144835;

}

.row {
    margin: 0 !important;
}

.total .container {
    padding: 20px 0;
}

.total .container .first .left img {
    width: 200px;
}

@media (max-width:768px) {
    .total .container .first .left img {
        width: 120px;
    }
}

@media (max-width:400px) {
    .total .container .first .left img {
        width: 110px;
    }
}

.total .container .first {
    margin: 0 !important;
}

.total .container .first .right {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    gap: 9px;
}

.total .container .first .right img {
    width: 120px;
}

@media (max-width:768px) {
    .total .container .first .right img {
        width: 80px;
    }
}

.total .container .first .right span {
    color: rgb(143, 202, 173);
    font-size: 17px;
}

@media (max-width:768px) {
    .total .container .first .right span {
        font-size: 12px;
    }
}

@media (max-width:400px) {
    .total .container .first .right span {
        font-size: 10px;
    }
}

.second {
    margin-top: 85px;
}

@media (max-width:768px) {
    .second {
        margin-top: 45px;
    }
}

.second .text {
    margin-top: 20px;
}

@media (max-width:768px) {
    .second .text {
        margin-top: 60px;
    }
}

.second .text .vehicle h2 {
    font-size: 48px;
    line-height: 56px;
    color: #bef5c3;
    font-weight: 700;
    letter-spacing: 1px;
    max-width: 430px;
}

@media (max-width:700px) {
    .second .text .vehicle h2 {
        font-size: 32px;
        line-height: 35px;
        color: #bef5c3;
        font-weight: 700;
        max-width: 300px;
    }
}

@media (max-width:400px) {
    .second .text .vehicle h2 {
        font-size: 28px;
        line-height: 35px;
        color: #bef5c3;
        font-weight: 700;
        max-width: 300px;
    }
}

.second .text .vehicle h2 span {
    color: white;
    font-weight: 700;
}

.second .text .center {
    border-top: 1px solid #63B58C;
    border-bottom: 1px solid #63B58C;
    padding: 10px 0;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

@media (max-width:600px) {
    .second .text .center {

        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }
}

.second .text .center .type {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.second .text .center .type img {
    width: 61px;
    height: 61px;
}

.second .text .center .type h2 {
    font-size: 14px;
    color: rgb(255, 255, 255);
    margin-top: 5px;
    font-weight: 600;
    line-height: 20px;

}

@media (max-width:600px) {
    .second .text .center .type h2 {
        font-size: 18px;
        color: rgb(255, 255, 255);
        margin-top: 5px;
        font-weight: 600;
        line-height: 23px;

    }
}

.second .image {
    display: flex;
    justify-content: flex-end;
    padding: 0 40px;
    position: relative;
}

.second .image img {
    max-width: 418px;
    position: absolute;
    top: 47px;
}

@media (max-width:991px) {
    .second .image img {
        display: none;

    }
}

@media (min-width:991px) {
    .extra img {
        display: none;
    }
}

.extra img {
    width: 100%;

}

/* .container .last h3 {
    margin-top: 30px;
    font-size: 20px;
    color: #444444;
    margin-bottom: 20px;
} */

@media (max-width:420px) {
    .container .last h3 {

        font-size: 14px;

    }
}

.container .last .number {
    width: 100%;

    padding: 16px 16px 16px 54px;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid rgb(185, 186, 189);
    position: relative;
}

/* .container .last span {
    position: absolute;
    top: 90px;
    left: 25px;
    font-size: 17px;
    color: rgb(185, 186, 189);
    font-weight: 400;

} */



/* .container .last button {
    background-color: rgb(20, 72, 53);
    margin: 20px 0;
    width: 100%;
    padding: 16px;
    color: white;
    font-weight: 600;
    cursor: pointer;
} */

.check {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
}

.check h3 {
    padding: 0 10px;
    margin: 0 !important;
    font-size: 11px !important;

}

.check h3 a {
    color: black;
    text-decoration: underline;

}

.check2 {
    margin-bottom: 30px;
}
</style>
