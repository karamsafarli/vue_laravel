<template>
<div class="total">
    <div class="container">
        <div class="row first">
            <div class="col-6 left">
                <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-home-loan-logo.svg" alt="">
            </div>
            <div class="col-6 right">
            </div>
        </div>
        <div class="row second">
            <div class="col-lg-6 text">
                <div class="vehicle">
                    <h2>
                        Make a big move
                        with home loans
                        from <span>9.05% </span>
                    </h2>
                </div>
                <div class="center">
                    <div class="type">
                        <img src="../../assets/image/fast_track.svg" alt="">
                        <h2>Quick & <br /> Transparent</h2>
                    </div>
                    <div class="type">
                        <img src="../../assets/image/doorstep.svg" alt="">
                        <h2>Doorstep <br />

                            service</h2>
                    </div>
                    <div class="type">
                        <img src="../../assets/image/tenure_year.svg" alt="">
                        <h2>Tenure up <br />

                            to 30 years</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 image">
                <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-home-loan-login-desktop-v2.png" alt="">
            </div>
        </div>
    </div>
</div>
<div class="extra">

    <img src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-home-loan-login-desktop-v2.png" alt="">

</div>
<div class="container down">

    <div class="row last" style="margin-bottom:10px;">
        <div class="col-lg-6 otp_form_container">
            <h3 class="form_heading">Get up to 90% of property value in a few clicks!</h3>
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



<section class="faq_section">
    <div class="container" style="max-width: 1500px;">
        <div class="mainContainer faqSecContainer">
        <h2 class="fullRowClass faqLandingPageHeading"> Frequently Asked Questions </h2>
        <div class="accordion text-left fullRowClass" id="faq-section">
            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq1">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                        Top 6 Reasons To Choose Moneyview Instant Personal Loans?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq1" class="collapse" aria-labelledby="faq1" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview instant personal loans offer unique benefits to its customers as given below -
                        <ul class=" text-left">
                            <li>
                                <p class="text-left">Get any amount from Rs. 5,000 to Rs. 10,00,000 instantly</p>
                            </li>
                            <li>
                                <p class="text-left">Check your loan eligibility in just 2 minutes</p>
                            </li>
                            <li>
                                <p class="text-left">Flexible repayment options that can extend up to 5 years</p>
                            </li>
                            <li>
                                <p class="text-left">Instant loan amount disbursement directly to your account in just a few
                                    minutes after application approval</p>
                            </li>
                            <li>
                                <p class="text-left">Affordable and economical interest rates, starting at just 1.33% per
                                    month (16% Annually*)
                                </p>
                            </li>
                            <li>
                                <p class="text-left">Hassle-free digital application process allowing you to apply for instant
                                    personal loans from anywhere</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq2">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                        Eligibility Criteria For Moneyview Personal Loans
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq2" class="collapse" aria-labelledby="faq2" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview personal loans have simple eligibility criteria. To qualify for a Moneyview personal loan -
                        <ul class="text-left">
                            <li>
                                <p class="text-left">The applicant’s age should be 21-57 years.</p>
                            </li>
                            <li>
                                <p class="text-left">They must be salaried or self-employed.</p>
                            </li>
                            <li>
                                <p class="text-left">A monthly in-hand income of Rs. 13,500 or more is necessary.</p>
                            </li>
                            <li>
                                <p class="text-left">The income must be credited directly to the bank account.</p>
                            </li>
                            <li>
                                <p class="text-left">A minimum CIBIL or Experian score of 650 is required.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq3">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                        What are The Moneyview Personal Loan Interest Rates &amp; Other Charges?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq3" class="collapse" aria-labelledby="faq3" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview offers personal loans at competitive interest rates. Our interest rates &amp; charges
                        are completely transparent with no hidden charges.
                        <div class="scrollTable">
                            <table class="table table-striped table-bordered mv-p text-left" style="width: 100%; height: 332.781px;">
                                <tbody>
                                    <tr class="header">
                                        <th>Types of Loan Fees</th>
                                        <th>Rates &amp; Charges Applicable</th>
                                    </tr>
                                    <tr style="height: 22.3984px;">
                                        <td style="width: 31.9429%; height: 22.3984px;">Interest Rate</td>
                                        <td style="width: 64.7929%; height: 22.3984px;">Starting from 1.33% per month (16% Annually*)</td>
                                    </tr>
                                    <tr style="height: 22.3984px;">
                                        <td style="width: 31.9429%; height: 22.3984px;">Processing Fee/Felicitation Charges</td>
                                        <td style="width: 64.7929%; height: 22.3984px;">Starting from 2% of the approved loan</td>
                                    </tr>
                                    <tr style="height: 99.1953px;">
                                        <td style="width: 31.9429%; height: 99.1953px;">Part/Full Payment of the Loan (Loan Foreclosure)
                                        </td>
                                        <td style="width: 64.7929%; height: 99.1953px;">
                                            <ul class="mv-p text-left">
                                                <li>No part payments are allowed</li>
                                                <li>For foreclosure of your loan, you should have paid a minimum of 3 EMIs.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr style="height: 22.3984px;">
                                        <td style="width: 31.9429%; height: 22.3984px;">Interest on Overdue EMIs</td>
                                        <td style="width: 64.7929%; height: 22.3984px;">2% per month</td>
                                    </tr>
                                    <tr style="height: 22.3984px;">
                                        <td style="width: 31.9429%; height: 22.3984px;">Cheque Bounce</td>
                                        <td style="width: 64.7929%; height: 22.3984px;">Rs.500/- for every bounce</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq4">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                        What are the Benefits of Moneyview Instant Personal Loans?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq4" class="collapse" aria-labelledby="faq4" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Here’s why moneyview instant loans stand out from other offers -
                        <ul class="mv-p text-left faqPoints">
                            <li><strong>Unique Credit Rating Model - </strong>Our credit model offers customized solutions based on
                                individual requirements and eligibility. </li>
                            <li><strong>Quick Disbursement - </strong>Any financial emergencies need to be addressed instantly. Hence,
                                we ensure the funds are credited to your account within a few minutes of loan approval. </li>
                            <li><strong>Hassle-free Application Process - </strong>We aim to make borrowing simple. That’s why our
                                loan application process, from start to finish, is entirely digital, giving you the freedom to complete
                                all the steps from the comfort of your home.</li>
                            <li><strong>Minimal Documentation -</strong>We mainly require your PAN, a selfie, and a mobile number
                                linked to your Aadhaar. We may ask for additional documentation, depending on your profile.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq5">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                        Moneyview Instant Personal Loan Foreclose Charges
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq5" class="collapse" aria-labelledby="faq5" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        <p class=" text-left">It is possible to foreclose your Moneyview instant personal loan after you
                            have paid a certain number of EMIs. The foreclosure charges are as illustrated below -</p>
                        <div class="scrollTable">
                            <table class="table table-striped table-bordered  text-left">
                                <tbody>
                                    <tr>
                                        <th>Charges</th>
                                        <th colspan="2">Amount Chargeable</th>
                                    </tr>
                                    <tr>
                                        <td rowspan="5">
                                            <p class="mv-p text-left">Foreclosure Charges</p>
                                        </td>
                                        <td colspan="2">
                                            <p class="mv-p text-left">Nil but foreclosure can be done only after a minimum number of EMIs have
                                                been paid as illustrated below-</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="mv-p text-left">Tenure</p>
                                        </td>
                                        <td>
                                            <p class="mv-p text-left">Foreclosure</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="mv-p text-left">Up to 6 months</p>
                                        </td>
                                        <td>
                                            <p class="mv-p text-left">Not allowed</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="mv-p text-left">7 - 18 months</p>
                                        </td>
                                        <td>
                                            <p class="mv-p text-left">Allowed after 6 EMI payments</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class="mv-p text-left">Over 18 months</p>
                                        </td>
                                        <td>
                                            <p class="mv-p text-left">Allowed after 12 EMI payments</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class=" text-left">Part-prepayment Charges</p>
                                        </td>
                                        <td colspan="2">
                                            <p class=" text-left">Part-prepayment is not allowed</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq6">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                        What Can You Use Moneyview Personal Loans For?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq6" class="collapse" aria-labelledby="faq6" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Moneyview personal loans are versatile and have no restrictions on end usage. Listed
                        below are some of the most popular reasons why people take our instant loans:
                        <ul class=" text-left">
                            <li>
                                <p class=" text-left">Weddings</p>
                            </li>
                            <li>
                                <p class=" text-left">Medical emergencies</p>
                            </li>
                            <li>
                                <p class=" text-left">Travel expenses</p>
                            </li>
                            <li>
                                <p class=" text-left">Home Renovation projects</p>
                            </li>
                            <li>
                                <p class=" text-left">Education purposes</p>
                            </li>
                            <li>
                                <p class=" text-left">Debt repayment</p>
                            </li>
                            <li>
                                <p class=" text-left">Business ventures</p>
                            </li>
                            <li>
                                <p class=" text-left">Credit Card dues</p>
                            </li>
                            <li>
                                <p class=" text-left">Big purchases</p>
                            </li>
                            <li>
                                <p class=" text-left">Building Credit Score</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq7">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                        How to Track Your Moneyview Instant Loan Application?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq7" class="collapse" aria-labelledby="faq7" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        The users can apply for a Moneyview loan through the website and the app. After submission,
                        you can track the application by following these steps:
                        <p class="mv-p faqPoints"><strong>Through Website</strong></p>
                        <ul class=" text-left">
                            <li>
                                <p class=" text-left">On the official Moneyview website, click on <a href="https://moneyview.in/" target="_blank">Login</a></p>
                            </li>
                            <li>
                                <p class=" text-left">Enter your registered mobile number</p>
                            </li>
                            <li>
                                <p class=" text-left">Verify using an OTP </p>
                            </li>
                            <li>
                                <p class=" text-left">Go to the ‘Dashboard’ section</p>
                            </li>
                            <li>
                                <p class=" text-left">Scroll down to the ‘Application Status’ tab </p>
                            </li>
                            <li>
                                <p class=" text-left">Check the status of your personal loan application status</p>
                            </li>
                        </ul>

                        <p class="mv-p faqPoints"><strong>Through the Moneyview Loans App</strong></p>
                        <ul class=" text-left">
                            <li>
                                <p class=" text-left">Log in to the Moneyview Loans app using your mobile number</p>
                            </li>
                            <li>
                                <p class=" text-left">Go to the Loans section</p>
                            </li>
                            <li>
                                <p class=" text-left">From there, you will be directed automatically to the Money View’s
                                    ‘Application Status’ screen</p>
                            </li>

                            <br>
                            <p class="mv-p">Additionally, you can contact Moneyview customer support and inquire about your loan
                                application status</p>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq8">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq8" aria-controls="collapseFaq8">
                        Will There Be A Credit Report Inquiry When I Apply For An Instant Loan From Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq8" class="collapse" aria-labelledby="faq8" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Yes. Moneyview does a credit report inquiry of every borrower applying for an instant loan. It is a quick process to assess the credit profile of the applicant.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq9">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq9" aria-controls="collapseFaq9">
                        What Happens to My Existing Instant Loan if I Avail a Top-Up Loan From Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq9" class="collapse" aria-labelledby="faq9" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        When you take a top-up loan from Moneyview, a new loan account will be generated for you. In this account, you will find the balance amount of the existing loan along with the top-up loan amount.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq10">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq10" aria-controls="collapseFaq10">
                        What Documents Do I Need to Get an Instant Personal Loan From Moneyview?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq10" class="collapse" aria-labelledby="faq10" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        We prioritize the convenience of our customers above all. To ease the borrowing experience,
                        we keep our documentation requirements minimal. All you have to do is
                        <ul class="text-left">
                            <li>
                                <p class="text-left">Log in to the Moneyview Loans app using your mobile number</p>
                            </li>
                            <li>
                                <p class="text-left">Go to the Loans section</p>
                            </li>
                            <li>
                                <p class="text-left">From there, you will be directed automatically to the Money View’s
                                    ‘Application Status’ screen</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="moreFaqs faqCard faqCardHeaderText">
                For More FAQs -
                <a href="/loans-faq-en" class="moreFaqs moreFaqButton" target="_blank" rel="noopener">Click here</a>
            </div>
        </div>
    </div>
    </div>
</section>


<div class="container">
   <div class="mail_box_container">
    <div class="mail_box">
        <div class="mb_left">
            <img src="https://dugtmg0pklp2w.cloudfront.net/ic-email-faq.svg" alt="">
        </div>
        <div class="mb_right">
            <h4>Not able to find your question?</h4>
            <h5>You may get in touch with us on</h5>
            <a href="mailto:care@digitsathi.in">care@digitsathi.in</a>
        </div>
    </div>
   </div>
</div>
</template>

<style scoped>


.mail_box_container {
    padding-bottom: 30px;
}
.mail_box {
    padding: 24px;
    max-width: 300px;
    border: 1px solid rgb(185, 186, 189);
    border-radius: 20px !important;
    box-shadow: none !important;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.mail_box h4{
    color: rgb(52, 53, 58);
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
}
.mail_box h5{
    color: rgb(115, 117, 122);
    font-size: 12px;
    line-height: 22px;
}
.mail_box a{
    margin: 0px;
    font: inherit;
    text-decoration-line: underline;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    color: inherit;
    text-decoration-color: inherit;
    cursor: pointer;
    text-decoration: underline !important;
}

/* FAQ */
.accordion .card .card-body .FaqHeader {
    font-weight: var(--font-weight-regular);
    color: var(--black-color) !important;
}

.moreFaqButton {
    color: var(--primary-color) !important;
    text-decoration: underline !important;
}

/*Animation */
.section-animation.animation_effect {
    animation-name: bottom-slide-in;
    animation-duration: 1250ms;
}

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
    margin-top: 75px !important;
}

@media (max-width:991px) {
    .second {
        margin-top: 55px !important;
    }
}

@media (max-width:768px) {
    .second {
        margin-top: 25px !important;
    }
}

.second .text {
    margin-top: 20px;
}

@media (max-width:768px) {
    .second .text {
        margin-top: 10px;
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
    top: 77px;
}

@media (max-width:991px) {
    .second .image img {
        display: none;

    }
}

.extra {
    background-color: #144835;
}

@media (min-width:991px) {
    .extra img {

        display: none;

    }
}

.extra img {

    width: 100%;

}

.container .last h3 {
    margin-top: 30px;
    font-size: 20px;
    color: #444444;
    margin-bottom: 20px;
}

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





.container .last button {
    background-color: rgb(20, 72, 53);
    margin: 20px 0;
    width: 100%;
    padding: 16px;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

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