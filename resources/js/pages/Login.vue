<template>
<section class="header_banner_section headerBanner firstSection">
    <img src="https://moneyview.in/images/ic-credit-tracker-pattern.svg" class="banner_bg_pattern" alt="background pattern">
    <div class="mainContainer headerMainContainer">
        <div class="headerText">

            <div class="headerBannerText displayBlockDesktop">
                <span>Track your</span><br>
                <span class="bold_text">credit score</span><br>
                <span>for <span class="bold_text">free</span></span>
            </div>

            <div class="header_trust_markers">
                <img src="https://moneyview.in/images/ic-credit-score-powered-by.svg" alt="poweredByIcon" width="16px" height="16px" loading="eager">
                <p class="trustMarkerText">Powered by</p>
                <img src="https://moneyview.in/images/ic-credit-score-cibil-logo.svg" alt="cibilLogo" class="cibilLogo" width="29px" height="12px" loading="eager">
                <div class="divider"></div>
                <img src="https://moneyview.in/images/ic-credit-score-no-spam.svg" alt="noCallLogo" width="16px" height="16px" loading="eager">
                <p class="trustMarkerText">No Spam Calls</p>
            </div>

            <div class="lead_gen_form displayNone CTloginForm" id="loginForm" style="display: grid;">

                <div id="generateOtpWrap" class="lead_gen_section generate_otp_container lead_gen_container">
                    <div class="header_generate_otp_container">
                        <div class="header_generate_otp_input_container">
                            <div class="country_code">
                                <span>+91</span>
                            </div>
                            <input type="number" id="header_generate_otp_input" class="header_generate_otp_input generate_otp_input" placeholder="Enter Mobile Number">
                            <p id="header_generate_otp_message" class="generate_otp_message">
                                An OTP will be sent for verification
                            </p>
                        </div>
                    </div>
                    <div class="header_generate_otp_consent_button_container">
                        <button type="button" class="header_generate_otp_apply_loan_btn apply_now_lead_gen_btn" id="sendOtp">
                            <span class="btn_loader spinner-border spinner-border-sm" role="status" aria-hidden="true" style="display:none; margin-right:8px"></span>
                            <p class="bottom-sheet-btn-text-style">Get score &amp; more</p>
                        </button>
                        <div class="header_generate_otp_consent_container consent_checkbox_wrap">
                            <input class="form-check-input header_generate_otp_consent generate_otp_consent" type="checkbox" value="" id="header_generate_otp_consent" checked="checked">
                            <label class="form-check-label header_generate_otp_consent_text" htmlfor="header_generate_otp_consent">
                                By proceeding, you agree to our
                                <a class="header_generate_otp_consent_text" target="_blank" href="https://moneyview.in/terms-conditions-loans-app" rel="noopener">
                                    Terms &amp; Conditions
                                </a>
                                &nbsp;&amp;&nbsp;
                                <a class="header_generate_otp_consent_text" target="_blank" href="https://moneyview.in/privacy-policy-loans" rel="noopener">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    </div>

                </div>

                <div id="verifyotpWrap" class="verify_otp_wrap_container verify_otp_container header_verify_otp" style="display: none">
                    <div>
                        <div style="position: relative">
                            <input type="number" id="verify_otp_lead_gen_input" class="verify_otp_lead_gen_input verify_otp_input" placeholder="Enter OTP" onkeydown="if(this.value.length === 5 &amp;&amp; event.keyCode > 47 &amp;&amp; event.keyCode < 58)return false;">
                            <button id="resend_otp" type="button" class="text-button-link resend_otp header_resend_otp">Resend OTP</button>
                        </div>
                        <div class="verify_otp_message_container verify_otp_container">
                            <p id="otp_error_message" class="otp_error_message" style="display: none; margin-bottom: 0px"></p>
                            <div class="verify_otp_mobile_number_container justify-content-end flex-grow-1">
                                <span id="mobile2" class="edit_mobile_number_text"></span>
                                <button class="edit_mobile_number text-button-link">Edit</button>
                            </div>
                        </div>
                    </div>
                    <button id="verifyNow" type="button" class="verify_otp_lead_gen_btn">Verify OTP</button>
                </div>

            </div>

            <div class="continueCTApplication displayNone" style="display: none;">
                <button class="continueAppButton w100 CTButton ct_page_get_score_more_header_cta">Get score &amp; more</button>
            </div>
        </div>
        <div class="headerIllustration">
            <div class="headerIllustrationContainer">
                <h1 class="headerBannerText displayBlockMobile">
                    <span>Track your</span><br>
                    <span class="bold_text">credit score</span><br>
                    <span>for <span class="bold_text">free</span></span>
                </h1>
                <div class="headerIllustrationItem">
                    <img class="headerIllustrationImage" loading="eager" srcset="https://moneyview.in/images/CTBannerDesktop.webp 1536w, https://moneyview.in/images/CTBannerMobile.webp 240w" sizes="(min-width: 768px) 768px, 120px" src="https://moneyview.in/images/CTBannerMobile.webp" alt="banner_image">
                </div>
            </div>
            <div class="mainContainer valuePropsContainer">
                <div class="colspan-xs-1-3 colspan-md-1-3 colspan-xl-1-3 valuePropsItem">
                    <div class="valuePropsImage">
                        <img src="https://moneyview.in/images/ctProdDetailsCalendarIcon.svg" alt="receiptCheckIcon" width="36px" height="30px" class="ctScoreIcon" loading="lazy">
                    </div>
                    <div class="valuePropsDesc">
                        Monthly
                        <br>
                        free reports
                    </div>
                </div>
                <div class="colspan-xs-4-6 colspan-md-4-6 colspan-xl-4-6 valuePropsItem">
                    <div class="valuePropsImage">
                        <img src="https://moneyview.in/images/ctProdDetailsGrowthIcon.svg" alt="insightScoreIcon" width="36px" height="30px" class="ctScoreIcon" loading="lazy">
                    </div>
                    <div class="valuePropsDesc">
                        Insights for
                        <br>
                        better score
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="product_card_section">
    <div class="mainContainer creditScoreProductSecContainer">
        <h2 class="fullRowClass creditScoreSecHeading">Why keep track of credit score?</h2>

        <div class="productCardContainer colspan-xl-1-6 colspan-xs-1-6">
            <h3 class="productSectionCardHeader">Monthly free credit report</h3>
            <img src="https://moneyview.in/images/ic-monthly-free-credit-report.svg" width="100%" height="auto" alt="Monthly free credit report" loading="lazy">
        </div>

        <div class="productCardContainer colspan-xl-7-12 colspan-xs-1-6">
            <h3 class="productSectionCardHeader">Detailed analysis of factors affecting score</h3>
            <img src="https://moneyview.in/images/ic-detailed-analysis.svg" width="100%" height="auto" alt="Detailed analysis of factors affecting score" loading="lazy">
        </div>

        <div class="productCardContainer colspan-xl-1-6 colspan-xs-1-6">
            <h3 class="productSectionCardHeader">Personalised tips on improving &amp; building score</h3>
            <img src="https://moneyview.in/images/ic-personalised-tips.svg" width="100%" height="auto" alt="Personalised tips on improving &amp; building score" loading="lazy">
        </div>

        <div class="productCardContainer colspan-xl-7-12 colspan-xs-1-6">
            <h3 class="productSectionCardHeader">Pre- approved offers</h3>
            <img src="https://moneyview.in/images/ic-pre-approved-offers.svg" width="100%" height="auto" alt="Pre- approved offers" loading="lazy">
        </div>

    </div>
</section>

<section class="feature_card_section">
    <div class="mainContainer creditScoreFeatureCardSecContainer">
        <h2 class="fullRowClass creditScoreSecHeading">How can you improve your credit score?</h2>

        <div class="featureCard colspan-xl-1-4 colspan-xs-1-6 featureCardExtraClass1">
            <div>
                <h3 class="featureCardTitle">Pay bill on time</h3>

            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-credit-score-pay-bill.svg" class="featureCardImage" alt="ic-credit-score-pay-bill.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-5-8 colspan-xs-1-6 featureCardExtraClass2">
            <div>
                <h3 class="featureCardTitle">Reduce card utilisation</h3>

            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-credit-score-reduce-utilization.svg" class="featureCardImage" alt="ic-credit-score-reduce-utilization.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-9-12 colspan-xs-1-6 featureCardExtraClass3">
            <div>
                <h3 class="featureCardTitle">Monitor reports for errors</h3>

            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-credit-score-monitor-reports.svg" class="featureCardImage" alt="ic-credit-score-monitor-reports.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-1-6 colspan-xs-1-6 featureCardExtraClass1">
            <div>
                <h3 class="featureCardTitle">Do not open many credit accounts</h3>

            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-credit-score-many-accounts.svg" class="featureCardImage" alt="ic-credit-score-many-accounts.svg" loading="lazy">
        </div>
        <div class="featureCard colspan-xl-7-12 colspan-xs-1-6 featureCardExtraClass2">
            <div>
                <h3 class="featureCardTitle">Maintain mix of accounts</h3>

            </div>
            <img style="margin-left:auto;" src="https://moneyview.in/images/ic-credit-score-mix-accounts.svg" class="featureCardImage" alt="ic-credit-score-mix-accounts.svg" loading="lazy">
        </div>
    </div>
</section>


<credit-tracker-faq/>



</template>

<script setup>
import CreditTrackerFaq from "../components/CreditTrackerFaq.vue";
</script>

<style scoped>
p {
    margin-top: 0px;
    margin-bottom: 0px;
}

section {
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body>div:first-of-type {
    padding: 0px;
}

/* Banner section */

.lead_gen_section {
    display: flex;
    flex-direction: column;
}

.headerBanner {
    background: linear-gradient(180deg, rgba(255, 127, 76, 0.23) 0%, rgba(255, 127, 76, 0) 57.11%);
    background-clip: border-box;
    position: relative;
}

.banner_bg_pattern {
    position: absolute;
    right: 0;
    top: 0;
}

.header_generate_otp_container {
    width: 100%;
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

.headerText {
    grid-row: 1;
}

.headerIllustration {
    grid-row: 1;
    align-content: space-between;
}

.headerIllustrationContainer {
    display: grid;
}

.headerIllustrationItem {
    position: relative;
}

.headerIllustrationImage {
    position: absolute;
}

.headerFeatures {
    height: 100px;
}

.header_generate_otp_consent_text {
    font-weight: var(--font-weight-regular);
    font-size: 11px;
    line-height: 20px;
    color: var(--grey07);
    padding-bottom: 0px;
    margin-bottom: 0px !important;
}

.header_generate_otp_consent_text a {
    margin-left: 0px;
    text-decoration: underline !important;
    color: var(--grey07);
    font-weight: var(--font-weight-semibold);
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
    border: 2px solid var(--grey09);
}

.header_generate_otp_apply_loan_btn {
    background-color: var(--primary-color);
    border-radius: 4px;
    outline: none;
    border: none;
    color: var(--white-color) !important;
    margin: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 56px;
    padding: 16px 24px !important;
}

.header_generate_otp_apply_loan_btn p {
    font-weight: var(--font-weight-semibold);
    font-size: 16px;
    line-height: 20px;
}

.header_generate_otp_apply_loan_btn:disabled {
    background: linear-gradient(80.49deg, var(--primary-color) 3.03%, var(--primary-color) 98.5%);
    opacity: 0.6 !important;
    color: var(--white-color) !important;
}

.header_generate_otp_apply_loan_btn:hover {
    cursor: pointer;
}

.header_generate_otp_consent_button_container {
    display: grid;
    gap: 16px;
    padding-block: 8px;
}

.header_generate_otp_consent_container {
    display: flex;
    gap: 12px;
    align-items: center;
}

.header_generate_otp_consent {
    width: 24px;
    height: 24px;
    margin-left: 0px !important;
}

.header_generate_otp_consent:focus {
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: none;
}

.generate_otp_message {
    margin-left: 0px;
}

.header_trust_markers {
    display: flex;
    gap: 4px;
    align-items: flex-start;
    margin-bottom: 16px;
}

.divider {
    height: 7.5px;
    width: 1px;
    background-color: var(--grey04);
    margin-inline: 4px;
    align-self: center;
}

.cibilLogo {
    align-self: center;
    margin-top: 2px;
}

.trustMarkerText {
    color: var(--grey09);
    font-weight: var(--font-weight-regular);
    line-height: 20px;
    font-size: 12px;
}

.headerBannerText {
    color: var(--black-color);
    font-size: 32px;
    line-height: 46px;
    font-weight: var(--font-weight-regular);
}

.bold_text {
    font-weight: var(--font-weight-bold);
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

.verify_otp_lead_gen_input {
    padding: 16px;
    height: 56px;
    background: var(--white-color);
    border-radius: 4px;
    border: 1px solid var(--grey05);
    width: 100%;
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
}

.verify_otp_lead_gen_input:focus {
    border: 2px solid rgba(16, 16, 18, 1);
}

.verify_otp_lead_gen_btn {
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
    width: 100% !important;
    height: 56px;
    font-weight: var(--font-weight-semibold);
    font-size: 16px;
    line-height: 24px;
}

.verify_otp_lead_gen_btn:disabled {
    background: linear-gradient(80.49deg, var(--primary-color) 3.03%, var(--primary-color) 98.5%);
    opacity: 0.6 !important;
    color: var(--white-color) !important;
}

.verify_otp_wrap_container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: fit-content;
}

.verify_otp_wrap {
    position: relative;
    display: flex;
    flex-direction: row;
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
    color: var(--black-color);
    font-weight: var(--font-weight-regular);
    font-size: 14px;
    line-height: 24px;
}

.edit_mobile_number {
    font-weight: var(--font-weight-semibold);
    font-size: 14px;
    line-height: 24px;
    padding-inline: 0px !important;
    color: var(--primary-color);
}

.resend_otp {
    font-weight: var(--font-weight-semibold);
    font-size: 16px;
    line-height: 24px;
    color: var(--primary-color);
    padding-right: 0px !important;
}

.error_border {
    border: 2px solid var(--error01) !important;
}

.input_error_text {
    font-weight: var(--font-weight-regular);
    font-size: 14px;
    line-height: 24px;
    color: var(--error01) !important;
    margin: 0px;
    padding-top: 0px;
}

.header_resend_otp {
    position: absolute;
    right: 18px;
    padding-block: 18px;
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

/*OTP Modal*/
::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--grey07);
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--grey07);
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--grey07);
}

button:focus {
    outline: 0 !important;
}

.modal-btn-close {
    opacity: 1 !important;
    margin-top: -20px !important;
}

.valuePropsContainer {
    margin: 0px;
    z-index: 2;
}

.valuePropsItem {
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 4px;
    background-color: var(--grey01);
}

.valuePropsDesc {
    color: var(--grey09);
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 22px;
}

.featureCard {
    background-color: var(--grey01);
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 12px;
    align-content: space-between;
}

.featureCardTitle {
    color: var(--black-color);
    font-size: 18px;
    font-weight: var(--font-weight-semibold);
    line-height: 24px;
    margin-bottom: 0px;
}

.featureCardImage {
    width: 72px;
    height: 72px;
}

.creditScoreProductSecContainer {
    margin-top: 92px;
}

.creditScoreSecHeading {
    font-size: 28px;
    font-weight: var(--font-weight-bold);
    line-height: 42px;
    margin-bottom: 16px;
}

.creditScoreFeatureCardSecContainer {
    margin-top: 48px;
}

.creditScoreFaqSecContainer {
    margin-block: 48px;
}

/* RESPONSIVE */

@media screen and (min-width: 1440px) {
    .headerMainContainer {
        margin-top: 144px;
    }

    .headerBanner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 79.37%, #FFFFFF 100%), linear-gradient(109.47deg, rgba(255, 236, 228, 0.894118) 37.69%, #FFFFFF 86.94%);
        background-clip: border-box;
    }

    .banner_bg_pattern {
        width: 450px;
        height: 540px;
    }

    .headerText {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 4;
        margin-bottom: 62px;
    }

    .headerIllustration {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
        margin-bottom: 24px;
    }

    .headerIllustrationImage {
        width: 250px;
        top: -40px;
        left: 160px;
    }

    .headerBannerText {
        font-size: 48px;
        line-height: 60px;
        margin-bottom: 16px;
    }

    .featureCard {
        padding: 32px;
        height: 330px;
        margin-bottom: 20px;
    }

    .featureCardTitle {
        font-size: 32px;
        line-height: 48px;
    }

    .featureCardImage {
        width: 140px;
        height: 140px;
    }

    .creditScoreProductSecContainer {
        margin-top: 64px;
    }

    .creditScoreSecHeading {
        font-size: 44px;
        line-height: 66px;
        margin-bottom: 32px;
    }

    .creditScoreFeatureCardSecContainer {
        margin-top: 80px;
    }

    .creditScoreFeatureCardSecContainer {
        margin-top: 64px;
    }

    .creditScoreFaqSecContainer {
        margin-block: 64px;
    }

    .ctScoreIcon {
        width: 48px;
        height: 40px;
    }

}

@media screen and (min-width: 960px) and (max-width: 1439px) {
    .headerMainContainer {
        margin-top: 114px;
    }

    .headerBanner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 79.37%, #FFFFFF 100%), linear-gradient(109.47deg, rgba(255, 236, 228, 0.894118) 37.69%, #FFFFFF 86.94%);
        background-clip: border-box;
    }

    .banner_bg_pattern {
        width: 350px;
        height: 420px;
    }

    .headerText {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 5;
        margin-bottom: 36px;
    }

    .headerIllustration {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
        grid-row: 1;
        margin-bottom: 24px;
    }

    .headerIllustrationImage {
        width: 220px;
        top: -60px;
        left: 90px;
    }

    .headerBannerText {
        font-size: 44px;
        line-height: 44px;
        margin-bottom: 16px;
    }

    .featureCard {
        padding: 24px;
        height: 266px;
    }

    .featureCardTitle {
        font-size: 24px;
        line-height: 36px;
    }

    .featureCardImage {
        width: 120px;
        height: 120px;
    }

    .creditScoreProductSecContainer {
        margin-top: 88px;
    }

    .creditScoreFeatureCardSecContainer {
        margin-top: 64px;
    }

    .creditScoreSecHeading {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 32px;
    }

    .creditScoreFaqSecContainer {
        margin-block: 64px;
    }

    .ctScoreIcon {
        width: 48px;
        height: 40px;
    }

 
}

@media screen and (min-width: 768px) and (max-width: 959px) {
    .headerMainContainer {
        margin-top: 104px;
    }

    .headerBanner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 79.37%, #FFFFFF 100%), linear-gradient(109.47deg, rgba(255, 236, 228, 0.894118) 37.69%, #FFFFFF 86.94%);
        background-clip: border-box;
    }

    .banner_bg_pattern {
        width: 220px;
        height: 450px;
    }

    .headerText {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 5;
        margin-bottom: 29px;
    }

    .headerIllustration {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
        grid-row: 1;
        margin-bottom: 43px;
    }

    .headerIllustrationImage {
        width: 220px;
        top: -55px;
        left: 55px;
    }

    .headerBannerText {
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 32px;
    }

    .featureCard {
        padding: 28px 16px;
        height: 188px;
    }

    .creditScoreProductSecContainer {
        margin-top: 52px;
    }

    .creditScoreFeatureCardSecContainer {
        margin-top: 64px;
    }

    .creditScoreFaqSecContainer {
        margin-block: 64px;
    }

    .creditScoreSecHeading {
        margin-bottom: 24px;
    }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  section {
  align-items: unset;
}

.headerMainContainer {
  width: 90%;
  margin-top: 132px;
}

.banner_bg_pattern {
  width: 230px;
  height: 276px;
}

.headerText {
  display: grid;
  grid-column-start: 1;
  grid-column-end: span 6;
  grid-row: 2;
}

.headerIllustration {
  display: grid;
  grid-column-start: 1;
  grid-column-end: span 6;
  grid-row: 1;
}

.headerIllustrationImage {
  width: 194px;
  right: 0;
  top: -215px;
}

.valuePropsContainer {
  margin-bottom: 32px;
  margin-top: 72px;
}

.valuePropsItem {
  padding: 16px 12px;
}

.valuePropsDesc {
  line-height: 20px;
}

.featureCardExtraClass1 {
  display: grid;
  grid-column-start: 1;
  grid-column-end: span 3;
  height: 168px;
}

.featureCardExtraClass2 {
  display: grid;
  grid-column-start: 4;
  grid-column-end: span 3;
  height: 168px;
}

.featureCardExtraClass3 {
  display: flex;
  height: 104px;
  gap: 16px;
}


}

@media screen and (min-width: 300px) and (max-width: 479px) {
    section {
        align-items: unset;
    }

    /* Header-Banner */

    .headerMainContainer {
        width: 90%;
        margin-top: 92px;
    }

    .headerText {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row: 2;
    }

    .headerIllustration {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row: 1;
    }

    .headerIllustrationImage {
        width: 180px;
        right: 0;
        top: -180px;
    }

    .header_generate_otp_input {
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 20px !important;
    }

    .valuePropsContainer {
        margin-bottom: 24px;
        margin-top: 72px;
    }

    .featureCardExtraClass1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
        height: 168px;
    }

    .featureCardExtraClass2 {
        display: grid;
        grid-column-start: 4;
        grid-column-end: span 3;
        height: 168px;
    }

    .featureCardExtraClass3 {
        display: flex;
        height: 104px;
        gap: 16px;
    }

    #banner_image {
        min-width: 285px;
        width: 100%;
    }

    /* other styles */

   

}
</style>
