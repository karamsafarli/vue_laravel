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

<!-- <section class="faq_section">
    <div class="mainContainer creditScoreFaqSecContainer">
        <h2 class="fullRowClass faqLandingPageHeading"> Frequently Asked Questions </h2>
        <div class="accordion text-left fullRowClass" id="faq-section">
            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq1">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                        What is a credit score?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq1" class="collapse" aria-labelledby="faq1" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Credit score is a 3-digit number that shows how likely you are to get credit. When you need a loan, a bank or any lender looks at this score to understand how likely you are to pay the money back. Credit scores range from 300 to 900.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq2">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                        How can a credit score help me?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq2" class="collapse" aria-labelledby="faq2" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        When you apply for a credit card or a loan, lenders like banks and non-banking finance companies check your credit score to see whether you have the ability to repay the loan. If you have a higher credit score, you are likely to receive a lower rate of interest.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq3">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                        Will my credit score drop if I check my credit score?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq3" class="collapse" aria-labelledby="faq3" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Checking your credit score will not reduce it because you are not officially applying for credit. In fact, it is good to check your credit score at least once in 3 months.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq4">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                        Why don’t I have a credit score?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq4" class="collapse" aria-labelledby="faq4" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Scoring models cannot generate a score without enough credit information. If you have little or no credit history available, you probably will not have a credit score.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq5">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                        I have a CIBIL score. Why can I not see it here?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq5" class="collapse" aria-labelledby="faq5" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        This could be due to a technical issue or data inconsistency. Kindly retry with the correct details.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq6">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                        Will my credit score drop if I apply for new credit?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq6" class="collapse" aria-labelledby="faq6" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        The first step a bank takes when you apply for new credit or a loan is to check your credit score from the bureau, this is also called as making a hard credit enquiry. A hard enquiry might temporarily lower your credit score.
                    </div>
                </div>
            </div>

            <div class="card faqCard">
                <div class="card-header faqCardHeader" id="faq7">
                    <a class="collapsed faqCardHeaderText" data-toggle="collapse" aria-expanded="false" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                        How is my credit score calculated?
                        <span class="pull-right marginLeft8"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span>
                    </a>
                </div>
                <div id="collapseFaq7" class="collapse" aria-labelledby="faq7" data-parent="#faq-section">
                    <div class="card-body faqCardBody">
                        Your credit score is calculated after considering multiple factors, such as payment history, age of all credit lines, number of recent credit enquiries, and total active credit accounts among others. It’s important that you check your credit score on your own before applying for a loan.
                    </div>
                </div>
            </div>
            <div class="moreFaqs faqCard faqCardHeaderText">
                For More FAQs -
                <a href="/credit-tracker-faq" class="moreFaqs moreFaqButton" target="_blank" rel="noopener">Click here</a>
            </div>
        </div>
    </div>
</section> -->

<!-- <div class="container-fluid bottom-sheet hideStickyFooterWithClass" style="display: none;">
    <div class="lead_gen_form mainContainer bottom_sheet_grid_container marginTop0px CTloginForm" id="loginForm" style="display: grid;">
        <div class="footerURL display_none_non_important">credit_score_product_page_leads,credit_score_product_page_leads_footer_stickybar_login</div>

        <div class="bottom_sheet_heading_container apply-for-personal-loan-text-grid " style="display: none">
            <p class="bottom-sheet-text undefined"></p>
        </div>

        <div class="lead_gen_container bottom_sheet_lead_gen_grid applyNewGridForStickyfooter newcustomGridStyles" width="80%">
            <div class="generate_otp_container gridContainer" id="generate_otp_wrap">
                <div class="bottom-most-banner-input-container">
                    <span class="country_code">+91</span>
                    <input type="number" id="bottom_sheet_input" class="bottom-most-banner-input bottom_sheet_input input_style generate_otp_input" placeholder="Mobile no.">
                </div>
                <div class="apply-loan-btn-container">
                    <button class="apply-loan-btn apply_now_lead_gen_btn bottom-sheet-btn-style ct_page_footerstickybar_applynow_cta bottom_sheet_ct_btn ">
                        <span class="btn_loader spinner-border spinner-border-sm display_none_non_important" role="status" aria-hidden="true"></span>
                        <p class="bottom-sheet-btn-text-style sticky-footer-btn-text">Get score &amp; more</p>
                    </button>
                </div>
                <p id="otp_message" class="footerStickyOtpMessage generate_otp_message message_container color-white" style="display: none"></p>
                <div class="bottom-most-banner-consent-container">
                    <div id="bottom_sheet_consent" class="bottom-most-banner-consent-wrap consent_checkbox_wrap loginConsent">
                        <input type="checkbox" class="form-check-input generate_otp_consent" id="bottom_sheet_consent_checkbox" checked="">
                        <label class="consent bottom-most-banner-consent-text align-items-center loginConsentText" for="bottom_sheet_consent_checkbox">By proceeding, you agree to our&nbsp; <a target="”_blank”" href="/terms-conditions-loans-app">Terms &amp; Conditions</a> &nbsp;&amp;&nbsp;<a target="”_blank”" href="/privacy-policy-loans">Privacy Policy</a>
                        </label>
                    </div>
                </div>
            </div>
            <div class="bottom_sheet_verify_otp_container verify_otp_container bottom_sheet_lead_gen_grid display_none_non_important">
                <div class="gridContainer">
                    <div class="bottom-most-banner-input-container">
                        <input type="number" id="bottom_sheet_verify_otp_lead_gen_input" class="bottom_sheet_verify_otp_lead_gen_input verify_otp_input input_style" placeholder="Enter OTP" maxlength="5">
                    </div>
                    <div class="apply-loan-btn-container">
                        <button type="button" class="bottom-sheet-btn-style bottom_sheet_verify_otp_lead_gen_btn verify_otp_lead_gen_btn ct_page_header_verify_otp_cta">
                            <p class="bottom-sheet-btn-text-style">Verify OTP</p>
                        </button>
                    </div>
                    <p class="otp_error_message message_container" style="display: none;"></p>
                </div>
                <div class="verify_otp_message_container">
                    <div class="verify_otp_mobile_number_container">
                        <span class="edit_mobile_number_text"></span>
                        <button class="edit_mobile_number text-button-link">Edit</button>
                    </div>
                    <button id="resend_otp" type="button" class="text-button-link resend_otp">Resend OTP</button>
                </div>
            </div>
        </div>

        <div class="verified_bottom_sheet fullRowClass display_none_non_important">
            <div class="verified_container">
                <img src="https://moneyview.in/images/ic-greenTickComplete.svg" width="48px" height="48px" class="marginBottom16" alt="Green Tick Success" loading="lazy">

                <h4 class="verified_bottom_sheet_text marginBottom8">Thank you for your interest!</h4>

                <p class="verified_bottom_sheet_desc marginBottom24">We will reach out to you shortly</p>

                <button class="verified_success_btn verifyBtnCustom"> Okay </button>
            </div>
        </div>
    </div>
    <div class="mainContainer continueCTApplication displayNone marginTop0" style="display: none;">
        <div class="fullRowClass">
            <button class="continueAppButton stickyButtonFont CTButton ct_page_get_score_more_footer_cta">Get Score &amp; more</button>
        </div>
    </div>
</div> -->
</template>

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

    /* other styles */

    /*Grid Styles */
    .mainContainer {
        grid-template-columns: repeat(12, 80px);
        column-gap: 20px;
        margin: 96px 130px 0 130px;
    }

    /* Navbar */
    .navbar-nav:last-child {
        padding-right: 0 !important;
    }

    .nav-link.active {
        font-weight: var(--font-weight-semibold);
    }

    /* Bottom Sheet */
    .footerContainer {
        padding: 64px 130px;
    }

    .footer p {
        font-size: 18px;
        line-height: 26px;
    }

    .footer a {
        font-size: 16px;
        line-height: 24px;
    }

    .footerPadding {
        margin-top: 24px;
    }

    .verticalLine {
        margin-top: 56px;
    }

    .footerLinkContainer {
        grid-template-columns: repeat(12, 80px);
        column-gap: 20px;
    }

    .socialMediaIcons {
        margin-top: -24px;
    }

    /* Bottom Sheet */
    .gridContainer {
        column-gap: 20px;
    }

    .apply-for-personal-loan-text-grid {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 4;
    }

    .newcustomGridStyles {
        grid-column-start: 5;
        grid-column-end: span 6;
    }

    .apply-loan-btn-container {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span2;
    }

    .bottom-most-banner-input-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .bottom-most-banner-input-container .country_code {
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        margin: 16px 12px;
    }

    .input_style {
        border-radius: 4px;
    }

    .bottom-sheet-text {
        text-align: right;
        margin-top: 14px;
    }

    .bottom_sheet_verify_otp_wrap {
        gap: 16px;
    }

    .generate_otp_message {
        margin-top: 4px;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        color: var(--primary-color);
    }

    .bottom-sheet-btn-style {
        border-radius: 4px !important;
    }

    .bottom-most-banner-consent-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        margin-top: 16px;
    }

    .productSectionCardHeader {
        font-size: 32px;
        line-height: 45px;
    }

    .faqLandingPageHeading {
        font-size: 44px;
        line-height: 66px;
        margin-bottom: 32px;
    }

    .faqCard {
        padding-block: 24px;
    }

    .faqCardBody {
        padding-top: 24px !important;
        font-size: 18px;
        line-height: 24px;
    }

    .faqCardBody a {
        font-size: 18px;
    }

    .moreFaqButton {
        font-size: 20px !important;
        line-height: 24px !important;
    }

    .faqCardHeaderText {
        font-size: 20px !important;
        line-height: 24px !important;
    }

    .faqSecContainer {
        margin-bottom: 64px !important;
    }

    .productCardContainer {
        height: 330px;
        margin-bottom: 20px;
    }

    .applyNewGridForStickyfooter {
        display: grid;
        grid-column-start: 3;
        grid-column-end: 11;
    }

    .nav-link {
        padding: 28px 18px !important;
    }

    .navbar-brand {
        padding-bottom: 16px;
        padding-top: 16px;
    }

    .productChip {
        font-size: 12px;
        margin-left: 8px;
        padding: 4px 8px 6px 8px;
    }

    .productSectionHeading {
        font-size: 44px;
        line-height: 66px;
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

    /* other styles */

    /*Grid Styles */
    .mainContainer {
        grid-template-columns: repeat(12, 59px);
        column-gap: 12px;
        margin: 64px 60px 0 60px;
    }

    /* Navbar */
    @media (min-width: 959px) and (max-width: 1199px) {

        /* Navbar */
        .mv-logo {
            width: 153px !important;
            height: 36px;
        }

        .navbar-utm-logo {
            max-width: 150px;
            max-height: 36px;
        }

        .hide-icon {
            display: block;
        }

        .closebtn {
            position: absolute;
            top: 35px;
            right: 60px;
            color: var(--black-color) !important;
            line-height: 0px !important;
        }

        .navbar-custom {
            padding: 14px 0px !important;
        }

        .navbar-custom a {
            font-size: 18px;
            font-weight: var(--font-weight-semibold);
            color: var(--black-color) !important;
            line-height: var(--body-line-height);
        }

        .navbar-custom a.active {
            color: var(--black-color) !important;
        }

        .navbar-custom a:hover {
            border-bottom: none;
            font-size: 18px;
            text-decoration: none !important;
            color: #101012 !important;
        }

        .navbar-custom ul {
            margin: 80px 60px 0px !important;
        }

        .navbar-custom li {
            border-bottom: 1px solid #dcdcde;
        }

        .navbar-collapse {
            position: fixed;
            top: 0px;
            right: 0;
            width: 320px;
            height: 100%;
            background-color: var(--white-color);
            overflow: scroll;
            align-items: unset;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        .navbar-collapse.collapsing {
            left: -75%;
            transition: height 0s ease;
        }

        .navbar-collapse.show {
            right: 0;
            transition: left 300ms ease-in-out;
        }

        .navbar-toggler {
            border: none;
            display: block;
            padding: 5px 0px;
            line-height: 0px !important;
        }

        .navbar-toggler-icon {
            width: 24px !important;
            height: 24px !important;
        }

        .sign-in {
            padding: 0px !important;
            color: var(--primary-color) !important;
            border: none !important;
        }

        .sign-in a {
            color: var(--primary-color) !important;
            width: -webkit-fill-available !important;
            margin: 60px;
            height: 56px !important;
            padding: 15px 0px !important;
        }

        .sign-in a:hover {
            color: var(--primary-color) !important;
        }

        .dropdown-menu {
            border: none;
            box-shadow: none !important;
            border-radius: none !important;
        }

        .dropdown-menu a {
            color: #101012 !important;
            font-weight: var(--font-weight-regular);
            font-size: 14px !important;
            line-height: var(--body-line-height);
        }

        #emi-dropdown-menu {
            padding: 18px 0px 0px !important;
        }

        .navItemContainer {
            display: flex;
            gap: 16px;
        }

        .navItemContainer .nav-link {
            margin-block: auto !important;
        }

        .nav-item {
            margin: 0px !important;
            padding: 16px 0px !important;
        }

        .nav-link {
            margin: 0px !important;
            padding: 6px 0px !important;
        }

        .nav-link.active {
            border-bottom: none !important;
            padding: 0px !important;
        }

        .dropdown-menu {
            margin: 0 !important;
        }

        .nav-link.active+div.dropdown-menu {
            margin: 0 !important;
        }

        .overlay {
            display: none;
            position: fixed;
            top: 0px;
            right: 320px;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 998;
            opacity: 1;
        }

        .menu-fa-icons {
            right: 0px;
            position: absolute;
        }

        .dropdownItem_padding {
            padding: 4px 0px 12px;
            background-color: var(--white-color);
        }

        .ml-auto {
            margin-left: 0px !important;
        }

        .dropdown-menu a:hover {
            background: none;
        }

        a.active {
            border-bottom: none !important;
            height: unset;
        }

        .sidebarMenuIcons {
            display: flex;
        }

        .navbar-brand {
            padding: 0px;
        }
    }

    @media (min-width: 1200px) and (max-width: 1439px) {
        .navbar-custom {
            padding: 0px 0px 0px 0px;
        }

        .navbar-custom a {
            font-weight: var(--font-weight-regular);
            font-size: var(--body-font-size) !important;
            line-height: 28px !important;
        }

        .navbar-brand {
            padding-bottom: 16px;
            padding-top: 16px;
        }

        .mv-logo {
            width: 153px;
            height: 36px;
        }

        .navbar-utm-logo {
            max-width: 150px;
            max-height: 36px;
        }

        .nav-link {
            padding: 20px 18px !important;
        }

        .sign-in {
            padding-left: 80px;
            padding-bottom: 12px;
        }

        .nav-link.active {
            padding-bottom: 42px;
            font-weight: var(--font-weight-semibold);
        }

        .sign-in a {
            width: 120px !important;
            height: 40px !important;
            font-size: 12px !important;
            line-height: var(--body-line-height) !important;
        }

        .menu-fa-icons {
            margin-left: 12px;
        }
    }

    /* Footer */
    .footerContainer {
        padding: 64px 60px;
    }

    .footerLinkContainer {
        grid-template-columns: repeat(12, 59px);
        column-gap: 12px;
    }

    .footer-col-md-1-4 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 4;
    }

    .footer-col-md-5-8 {
        display: grid;
        grid-column-start: 5;
        grid-column-end: span 4;
    }

    .footer-col-md-9-12 {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span 4;
    }

    .footer p {
        font-size: 18px;
        line-height: 26px;
    }

    .footer a {
        font-size: 16px;
        line-height: 24px;
    }

    .footerPadding {
        margin-top: 24px;
    }

    .footerPadding:last-child {
        margin-bottom: 48px;
    }

    .verticalLine {
        margin-top: 40px;
    }

    .footerLinkContainer>div:nth-child(1) {
        order: 1;
    }

    .footerLinkContainer>div:nth-child(2) {
        order: 2;
    }

    .footerLinkContainer>div:nth-child(3) {
        order: 4;
    }

    .footerLinkContainer>div:nth-child(4) {
        order: 3;
    }

    .footerLinkContainer>div:nth-child(5) {
        order: 5;
    }

    .footerLinkContainer>div:nth-child(6) {
        order: 6;
    }

    /* Bottom Sheet */
    .gridContainer {
        column-gap: 12px;
    }

    .apply-for-personal-loan-text-grid {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
    }

    .newcustomGridStyles {
        grid-column-start: 4;
        grid-column-end: span 9;
    }

    .apply-loan-btn-container {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span2;
    }

    .bottom_sheet_generate_otp_container {
        margin-bottom: 4px;
    }

    .bottom-most-banner-input-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .bottom-most-banner-input-container .country_code {
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        margin: 16px 12px;
    }

    .input_style {
        border-radius: 4px;
    }

    .bottom-sheet-text {
        text-align: right;
        margin-top: 14px;
        max-width: 195px;
    }

    .bottom_sheet_verify_otp_wrap {
        gap: 16px;
    }

    .generate_otp_message {
        margin-top: 4px;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        color: var(--primary-color);
    }

    .bottom-sheet-btn-style {
        border-radius: 4px !important;
    }

    .bottom-most-banner-consent-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        margin-top: 12px;
    }

    .productCardContainer {
        height: 240px;
        margin-bottom: 12px;
    }

    .faqLandingPageHeading {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 24px;
    }

    .faqCard {
        padding-block: 24px;
    }

    .faqCardBody {
        padding-top: 24px !important;
        font-size: 18px;
        line-height: 24px;
    }

    .faqCardBody a {
        font-size: 18px;
    }

    .moreFaqButton {
        font-size: 20px !important;
        line-height: 24px !important;
    }

    .faqCardHeaderText {
        font-size: 20px !important;
        line-height: 24px !important;
    }

    .faqSecContainer {
        margin-bottom: 64px !important;
    }

    /*Calcualtor*/
    .sectionTitle {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 42px;
        /*check this*/
        font-weight: var(--font-weight-bold);
    }

    .applyNewGridForStickyfooter {
        display: grid;
        grid-column-start: 2;
        grid-column-end: 12;
    }

    .productChip {
        font-size: 12px;
        margin-left: 8px;
        padding: 4px 8px 6px 8px;
    }

    /*prosaver footer*/
    .verified_success_btn {
        font-size: 20px;
    }

    .verifyBtnCustom {
        min-width: 180px;
    }

    /* fix sticky footer text */
    .footer_longtext_margin_fix {
        margin-top: 4px;
    }

    .productSectionHeading {
        font-size: 32px;
        line-height: 48px;
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

    /* other styles */

    /*Grid Styles */
    .mainContainer {
        grid-template-columns: repeat(12, 48px);
        column-gap: 12px;
        margin: 64px 30px 0 30px;
    }

    .colspan-md-1-7 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 7;
    }

    .colspan-md-7-12 {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .colspan-md-1-3 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
    }

    .colspan-md-4-6 {
        display: grid;
        grid-column-start: 4;
        grid-column-end: span 3;
    }

    /* Navbar */
    .mv-logo {
        width: 151px !important;
        height: 36px;
    }

    .navbar-utm-logo {
        max-width: 150px;
        max-height: 36px;
    }

    .hide-icon {
        display: block;
    }

    .closebtn {
        position: absolute;
        top: 30px;
        right: 30px;
        color: var(--black-color) !important;
        line-height: 0px !important;
    }

    .navbar-custom {
        padding: 14px 0px !important;
    }

    .navbar-custom a {
        font-size: 18px;
        font-weight: var(--font-weight-semibold);
        color: var(--black-color) !important;
        line-height: var(--body-line-height);
    }

    .navbar-custom a.active {
        color: var(--black-color) !important;
    }

    .navbar-custom a:hover {
        border-bottom: none;
        font-size: 18px;
        text-decoration: none !important;
        color: #101012 !important;
    }

    .navbar-custom ul {
        margin: 100px 40px 0px !important;
    }

    .navbar-custom li {
        border-bottom: 1px solid #dcdcde;
    }

    .navbar-brand {
        padding-bottom: 0px !important;
    }

    .navbar-collapse {
        position: fixed;
        top: 0px;
        right: 0;
        width: 320px;
        height: 100%;
        background-color: var(--white-color);
        overflow: scroll;
        align-items: unset;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .navbar-collapse.collapsing {
        left: -75%;
        transition: height 0s ease;
    }

    .navbar-collapse.show {
        right: 0;
        transition: left 300ms ease-in-out;
    }

    .navbar-toggler {
        border: none;
        display: block;
        padding: 5px 0px;
        line-height: 0px !important;
    }

    .navbar-toggler-icon {
        width: 24px !important;
        height: 24px !important;
    }

    .sign-in {
        padding: 0px !important;
        color: var(--primary-color) !important;
        border: none !important;
    }

    .sign-in a {
        color: var(--primary-color) !important;
        width: -webkit-fill-available !important;
        margin: 30px;
        height: 56px !important;
        padding: 15px 0px !important;
    }

    .sign-in a:hover {
        color: var(--primary-color) !important;
    }

    .dropdown-menu {
        border: none;
        box-shadow: none !important;
        border-radius: none !important;
    }

    .dropdown-menu a {
        color: #101012 !important;
        font-weight: var(--font-weight-regular);
        font-size: 14px !important;
        line-height: var(--body-line-height);
    }

    #emi-dropdown-menu {
        padding: 18px 0px 0px !important;
    }

    .navItemContainer {
        display: flex;
        gap: 16px;
    }

    .navItemContainer .nav-link {
        margin-block: auto !important;
    }

    .nav-item {
        margin: 0px !important;
        padding: 16px 0px !important;
    }

    .nav-link {
        margin: 0px !important;
        padding: 6px 0px !important;
    }

    .nav-link.active {
        border-bottom: none !important;
        padding-bottom: 0px !important;
    }

    .dropdown-menu {
        margin: 0 !important;
    }

    .nav-link.active+div.dropdown-menu {
        margin: 0 !important;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0px;
        right: 320px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 998;
        opacity: 1;
    }

    .sidebarMenuIcons {
        display: flex;
    }

    .menu-fa-icons {
        right: 0px;
        position: absolute;
    }

    .dropdownItem_padding {
        padding: 4px 0px 12px;
        background-color: var(--white-color);
    }

    .ml-auto {
        margin-left: 0px !important;
    }

    .dropdown-menu a:hover {
        background: none;
    }

    a.active {
        border-bottom: none !important;
        height: unset;
    }

    .iosBtnAlignment {
        justify-content: center !important;
    }

    /* Footer */
    .footerContainer {
        padding: 32px 30px;
    }

    .footer-col-1-6 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .footer-col-7-12 {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 12;
    }

    .displayFooterGridMobile {
        display: grid !important;
    }

    .displayFooterGridDesktop {
        display: none !important;
    }

    .footerPadding:last-child {
        margin-bottom: 48px;
    }

    .footerLinkContainer>div:nth-child(1) {
        order: 1;
    }

    .footerLinkContainer>div:nth-child(2) {
        order: 2;
    }

    .footerLinkContainer>div:nth-child(3) {
        order: 3;
    }

    .footerLinkContainer>div:nth-child(4) {
        order: 5;
    }

    .footerLinkContainer>div:nth-child(5) {
        order: 4;
    }

    .footerLinkContainer>div:nth-child(6) {
        order: 6;
    }

    .footerLinkContainer {
        grid-template-columns: repeat(12, 48px);
        /* grid-template-columns: repeat(6, 1fr); */
        column-gap: 12px;
    }

    .footer p {
        font-size: 16px;
        line-height: 24px;
        margin-top: 48px;
    }

    .footer p:first-child {
        margin-top: 0px;
    }

    .footer a {
        font-size: 16px;
        line-height: 24px;
    }

    .footerPadding {
        margin-top: 12px;
    }

    .footerPadding:last-child {
        margin-bottom: 48px;
    }

    .verticalLine {
        margin-top: 32px;
    }

    .savingsAccount {
        display: block;
    }

    /* Bottom Sheet */
    .gridContainer {
        column-gap: 12px;
    }

    .apply-for-personal-loan-text-grid {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
    }

    .newcustomGridStyles {
        grid-column-start: 4;
        grid-column-end: span 9;
    }

    .apply-loan-btn-container {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span2;
    }

    .bottom_sheet_generate_otp_container {
        margin-bottom: 4px;
    }

    .bottom-most-banner-input-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .bottom-most-banner-input-container .country_code {
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        margin: 16px 12px;
    }

    .input_style {
        border-radius: 4px;
    }

    .bottom-sheet-text {
        text-align: right;
        margin-top: 4px;
    }

    .bottom_sheet_verify_otp_wrap {
        gap: 16px;
    }

    .generate_otp_message {
        margin-top: 4px;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        color: var(--primary-color);
    }

    .bottom-sheet-btn-style {
        border-radius: 4px !important;
    }

    .bottom-most-banner-consent-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        margin-top: 12px;
    }

    .productCardContainer {
        height: 240px;
        margin-bottom: 12px;
    }

    .faqLandingPageHeading {
        margin-bottom: 24px;
    }

    .faqSecContainer {
        margin-bottom: 64px !important;
    }

    .faqCard {
        padding-block: 24px;
    }

    .faqCardBody {
        padding-top: 24px !important;
        font-size: 16px;
        line-height: 24px;
    }

    .faqCardBody a {
        font-size: 16px;
    }

    .moreFaqButton {
        font-size: 20px !important;
        line-height: 24px !important;
    }

    .faqCardHeaderText {
        font-size: 18px !important;
        line-height: 24px !important;
    }

    /* Element Styles */
    a:hover {
        text-decoration: none !important;
    }

    .applyNewGridForStickyfooter {
        display: grid;
        grid-column-start: 2;
        grid-column-end: 12;
    }

    .productChip {
        font-size: 12px;
        margin-left: 8px;
        padding: 4px 8px 6px 8px;
    }

    /* footer styles */
    .verified_success_btn {
        font-size: 20px;
    }

    /* get design update */
    .verifyBtnCustom {
        min-width: 180px;
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

    /* other styles */

    /*Grid Styles */
    .mainContainer {
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
        margin: 72px 24px 0 24px;
    }

    .fullRowClass {
        grid-column-end: span 6;
    }

    .colspan-xs-1-6 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .colspan-xs-1-3 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
    }

    .colspan-xs-4-6 {
        display: grid;
        grid-column-start: 4;
        grid-column-end: span 3;
    }

    .colspan-sm-1-3 {
        display: grid;
        grid-column-start: 1 !important;
        grid-column-end: span 3 !important;
    }

    .colspan-sm-4-6 {
        display: grid;
        grid-column-start: 4 !important;
        grid-column-end: span 3 !important;
    }

    .colspan-sm-1-2 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 2;
    }

    .colspan-sm-3-4 {
        display: grid;
        grid-column-start: 3;
        grid-column-end: span 2;
    }

    .colspan-sm-5-6 {
        display: grid;
        grid-column-start: 5;
        grid-column-end: span 2;
    }

    /* Navbar */
    .mv-logo {
        width: 151px !important;
        height: 36px;
    }

    .navbar-utm-logo {
        max-width: 150px;
        max-height: 36px;
    }

    .stickyBar {
        align-items: unset;
    }

    .navDisplayBlockMobile {
        display: block;
    }

    .hide-icon {
        display: block;
    }

    .closebtn {
        position: absolute;
        top: 24px;
        right: 24px;
        color: var(--black-color) !important;
        line-height: 0px !important;
    }

    .navbar-custom {
        padding: 20px 0px;
        padding-block: 12px !important;
    }

    .navbar-custom a {
        font-size: 18px;
        font-weight: var(--font-weight-semibold);
        color: var(--black-color) !important;
        line-height: var(--body-line-height);
    }

    .navbar-custom a.active {
        color: var(--black-color) !important;
    }

    .navbar-custom a:hover {
        border-bottom: none;
        font-size: 18px;
        text-decoration: none !important;
        color: #101012 !important;
    }

    .navbar-custom ul {
        margin: 80px 40px 0px !important;
    }

    .navbar-custom li {
        border-bottom: 1px solid #dcdcde;
    }

    .navbar-brand {
        padding-bottom: 0px !important;
    }

    .navbar-collapse {
        position: fixed;
        top: 0px;
        right: 0;
        width: 320px;
        height: 100%;
        background-color: var(--white-color);
        overflow: scroll;
        align-items: unset;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .navbar-collapse.collapsing {
        left: -75%;
        transition: height 0s ease;
    }

    .navbar-collapse.show {
        right: 0;
        transition: left 300ms ease-in-out;
    }

    .navbar-toggler {
        border: none;
        display: block;
        padding: 5px 0px;
        line-height: 0px !important;
    }

    .navbar-toggler-icon {
        width: 24px !important;
        height: 24px !important;
    }

    .sign-in {
        padding: 0px !important;
        color: var(--primary-color) !important;
        border: none !important;
    }

    .sign-in a {
        color: var(--primary-color) !important;
        width: -webkit-fill-available !important;
        margin: 24px;
        height: 56px !important;
        padding: 15px 0px !important;
    }

    .sign-in a:hover {
        color: var(--primary-color) !important;
    }

    .dropdown-menu {
        border: none;
        box-shadow: none !important;
        border-radius: none !important;
    }

    .dropdown-menu a {
        color: #101012 !important;
        font-weight: var(--font-weight-regular);
        font-size: 14px !important;
        line-height: var(--body-line-height);
    }

    #emi-dropdown-menu {
        padding: 18px 0px 0px !important;
    }

    .navItemContainer {
        display: flex;
        gap: 16px;
    }

    .navItemContainer .nav-link {
        margin-block: auto !important;
    }

    .nav-item {
        margin: 0px !important;
        padding: 16px 0px !important;
    }

    .nav-link {
        margin: 0px !important;
        padding: 6px 0px !important;
    }

    .nav-link.active {
        border-bottom: none !important;
        padding-bottom: 0px !important;
    }

    .dropdown-menu {
        margin: 0 !important;
    }

    .nav-link.active+div.dropdown-menu {
        margin: 0 !important;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0px;
        right: 320px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 998;
        opacity: 1;
    }

    .menu-fa-icons {
        right: 0px;
        position: absolute;
    }

    .dropdownItem_padding {
        padding: 4px 0px 12px;
        background-color: var(--white-color);
    }

    .ml-auto {
        margin-left: 0px !important;
    }

    .dropdown-menu a:hover {
        background: none;
    }

    .sidebarMenuIcons {
        display: flex;
    }

    a.active {
        border-bottom: none !important;
        height: unset;
    }

    .iosBtnAlignment {
        justify-content: center !important;
    }

    /* Footer */
    .footer {
        display: block;
        flex-flow: unset;
        align-items: unset;
        justify-content: unset;
    }

    .footer p {
        font-size: 16px;
        line-height: 24px;
        margin-top: 48px;
    }

    .footer p:first-child {
        margin-top: 0px;
    }

    .footer a {
        font-size: 14px;
        line-height: 20px;
    }

    .footerPadding {
        margin-top: 12px;
    }

    .footerPadding:last-child {
        margin-bottom: 48px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 8px;
    }

    .footerContainer {
        /* margin-bottom: -10px !important; */
        padding: 32px 24px !important;
    }

    .verticalLine {
        margin-top: 32px;
    }

    .footerLinkContainer {
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
    }

    .footerSEOSection {
        padding-block: 24px;
        align-items: unset;
    }

    .footerBottomSectionTitle {
        font-size: 14px !important;
    }

    .footerBottomSectionContent {
        font-size: 14px !important;
        margin-top: 0px !important;
    }

    .fa-icons {
        margin-top: 12px;
        margin-bottom: 4px;
    }

    .savingsAccount {
        display: block;
    }

    .bankingMargin {
        margin-top: 0px;
    }

    /* Bottom Sheet */

    .bottom_sheet_grid_container {
        margin: 0px !important;
        width: 100% !important;
    }

    .apply-for-personal-loan-text-grid {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 4;
    }

    .bottom_sheet_lead_gen_grid {
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .bottom-most-banner-input-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .apply-loan-btn-container {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span2;
    }

    .bottom-sheet-btn-text-style {
        font-size: 16px;
        font-weight: var(--font-weight-semibold);
        line-height: 20px;
    }

    .bottom-most-banner-input-container .country_code {
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        margin: 16px 12px;
    }

    .generate_otp_message {
        margin-top: 8px;
    }

    .bottom_sheet_verify_otp_wrap {
        gap: 0px;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 14px;
        line-height: 22px;
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    .bottom-most-banner-consent-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        margin-top: 12px;
    }

    /*popup*/

    .popupModalDialog {
        max-width: 312px;
    }

    .getInstantlyButton {
        gap: 4px;
    }

    /* Common Styles */
    .main {
        margin-top: 40px;
    }

    .responsiveTextH1 {
        font-size: 32px;
    }

    .responsiveTextH4 {
        font-size: 20px;
    }

    .mv-h2 {
        font-size: 26px;
        font-weight: var(--font-weight-extrabold);
        padding: 20px;
        margin-top: 100px;
    }

    .mv-h3 {
        font-size: 24px;
        font-weight: var(--font-weight-extrabold);
        padding: 20px 0px;
    }

    .mv-h1-text {
        display: block;
        font-size: 27px;
        font-weight: var(--font-weight-bold) !important;
    }

    .mv-h2-text {
        display: block;
        font-size: 24px;
        font-weight: var(--font-weight-bold) !important;
    }

    .mv-h3-text {
        display: block;
        font-size: 21px;
        font-weight: var(--font-weight-semibold) !important;
    }

    .mv-h4-text {
        display: block;
        font-size: 19px;
        font-weight: var(--font-weight-regular) !important;
    }

    .mv-h5-text {
        display: block;
        font-size: 17px;
        font-weight: var(--font-weight-regular) !important;
    }

    .img-mv-loans {
        margin-top: 10x;
    }

    .personalloanheader {
        font-size: 24px !important;
        font-weight: var(--font-weight-extrabold) !important;
        color: var(--white-color) !important;
        padding: 0px 50px;
        padding-top: 150px;
        text-align: center !important;
    }

    .nobackground {
        background-image: none !important;
        background-color: transparent !important;
        height: unset !important;
    }

    .textAlign-sm-center-lg-left {
        display: flex;
        justify-content: space-between;
    }

    .displayFlexDesktop {
        display: none !important;
    }

    .displayDesktop {
        display: none !important;
    }

    .displayMobile {
        display: block !important;
    }

    .displayGridMobile {
        display: grid !important;
    }

    .displayGridDesktop {
        display: none !important;
    }

    .displayBlockMobile {
        display: block !important;
    }

    .displayBlockDesktop {
        display: none !important;
    }

    .productCardContainer {
        height: 250px;
    }

    .displayFooterGridMobile {
        display: grid !important;
    }

    .displayFooterGridDesktop {
        display: none !important;
    }

    /* Element Styles */
    a:hover {
        text-decoration: none !important;
    }

    @media screen and (max-width: 600px) {

        /*Common Styles */
        .desktop {
            display: none !important;
        }

        .mobile {
            display: flex !important;
        }

        .paddingInline0 {
            padding-left: 0px;
            padding-right: 0px;
        }
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

    /*Grid Styles*/
    .mainContainer {
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
        margin: 72px 24px 0 24px;
    }

    .fullRowClass {
        grid-column-end: span 6;
    }

    .colspan-xs-1-6 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .colspan-xs-1-3 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 3;
    }

    .colspan-xs-4-6 {
        display: grid;
        grid-column-start: 4;
        grid-column-end: span 3;
    }

    /* Navbar */
    .mv-logo {
        width: 151px !important;
        height: 36px;
    }

    .navbar-utm-logo {
        max-width: 150px;
        max-height: 36px;
    }

    .stickyBar {
        align-items: unset;
    }

    .navDisplayBlockMobile {
        display: block;
    }

    .hide-icon {
        display: block;
    }

    .closebtn {
        position: absolute;
        top: 24px;
        right: 24px;
        color: var(--black-color) !important;
        line-height: 0px !important;
    }

    .navbar-custom {
        padding: 20px 0px;
        padding-block: 12px !important;
    }

    .navbar-custom a {
        font-size: 18px;
        font-weight: var(--font-weight-semibold);
        color: var(--black-color) !important;
        line-height: var(--body-line-height);
    }

    .navbar-custom a.active {
        color: var(--black-color) !important;
    }

    .navbar-custom a:hover {
        border-bottom: none;
        font-size: 18px;
        text-decoration: none !important;
        color: #101012 !important;
    }

    .navbar-custom ul {
        margin: 80px 40px 0px !important;
    }

    .navbar-custom li {
        border-bottom: 1px solid #dcdcde;
    }

    .navbar-brand {
        padding-bottom: 0px !important;
    }

    .navbar-collapse {
        position: fixed;
        top: 0px;
        right: 0;
        width: 320px;
        height: 100%;
        background-color: var(--white-color);
        overflow: scroll;
        align-items: unset;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .navbar-collapse.collapsing {
        left: -75%;
        transition: height 0s ease;
    }

    .navbar-collapse.show {
        right: 0;
        transition: left 300ms ease-in-out;
    }

    .navbar-toggler {
        border: none;
        display: block;
        padding: 5px 0px;
        line-height: 0px !important;
    }

    .navbar-toggler-icon {
        width: 24px !important;
        height: 24px !important;
    }

    .sign-in {
        padding: 0px !important;
        color: var(--primary-color) !important;
        border: none !important;
    }

    .sign-in a {
        color: var(--primary-color) !important;
        width: -webkit-fill-available !important;
        margin: 24px;
        height: 56px !important;
        padding: 15px 0px !important;
    }

    .sign-in a:hover {
        color: var(--primary-color) !important;
    }

    .dropdown-menu {
        border: none;
        box-shadow: none !important;
        border-radius: none !important;
    }

    .dropdown-menu a {
        color: #101012 !important;
        font-weight: var(--font-weight-regular);
        font-size: 14px !important;
        line-height: var(--body-line-height);
    }

    #emi-dropdown-menu {
        padding: 18px 0px 0px !important;
    }

    .navItemContainer {
        display: flex;
        gap: 16px;
    }

    .navItemContainer .nav-link {
        margin-block: auto !important;
    }

    .nav-item {
        margin: 0px !important;
        padding: 16px 0px !important;
    }

    .nav-link {
        margin: 0px !important;
        padding: 6px 0px !important;
    }

    .nav-link.active {
        border-bottom: none !important;
        padding-bottom: 0px !important;
    }

    .dropdown-menu {
        margin: 0 !important;
    }

    .nav-link.active+div.dropdown-menu {
        margin: 0 !important;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0px;
        right: 320px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 998;
        opacity: 1;
    }

    .menu-fa-icons {
        right: 0px;
        position: absolute;
    }

    .dropdownItem_padding {
        padding: 4px 0px 12px;
        background-color: var(--white-color);
    }

    .ml-auto {
        margin-left: 0px !important;
    }

    .dropdown-menu a:hover {
        background: none;
    }

    .sidebarMenuIcons {
        display: flex;
    }

    a.active {
        border-bottom: none !important;
        height: unset;
    }

    .iosBtnAlignment {
        justify-content: center !important;
    }

    /* Footer */
    .footer {
        display: block;
        flex-flow: unset;
        align-items: unset;
        justify-content: unset;
    }

    .footerContainer {
        padding: 32px 24px !important;
    }

    .footer p {
        font-size: 16px;
        line-height: 24px;
        margin-top: 48px;
    }

    .footer p:first-child {
        margin-top: 0px;
    }

    .footer a {
        font-size: 14px;
        line-height: 20px;
    }

    .footerPadding {
        margin-top: 12px !important;
    }

    .footerPadding:last-child {
        margin-bottom: 48px;
    }

    .verticalLine {
        margin-top: 32px;
    }

    .footerLinkContainer {
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
    }

    .fa-icons {
        margin-top: 12px;
        margin-bottom: 4px;
    }

    .savingsAccount {
        display: block;
    }

    .bankingMargin {
        margin-top: 0px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 8px;
    }

    .footerSEOSection {
        padding-block: 24px;
        align-items: unset;
    }

    .footerBottomSectionTitle {
        font-size: 14px !important;
    }

    .footerBottomSectionContent {
        font-size: 14px !important;
        margin-top: 0px !important;
    }

    /* Bottom Sheet */
    .bottom_sheet_grid_container {
        margin: 0px !important;
        width: 100% !important;
    }

    .bottom_sheet_lead_gen_grid {
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .apply-for-personal-loan-text-grid {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .bottom-most-banner-input-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 7;
    }

    .apply-loan-btn-container {
        display: grid;
        grid-column-start: 8;
        grid-column-end: span2;
    }

    .bottom-sheet-btn-text-style {
        font-size: 16px;
        font-weight: var(--font-weight-semibold);
        line-height: 20px;
    }

    .bottom-most-banner-input-container .country_code {
        font-size: 16px;
        font-weight: 350;
        line-height: 24px;
        margin: 16px 12px;
    }

    .bottom_sheet_verify_otp_wrap {
        gap: 0px;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 14px;
        line-height: 22px;
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    .bottom_sheet_verify_otp_lead_gen_btn {
        padding: 13px 20px;
    }

    .bottom-most-banner-consent-container {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        margin-top: 12px;
    }

    /*popup*/

    .popupModalDialog {
        max-width: 312px;
    }

    .getInstantlyButton {
        gap: 4px;
    }

    .desktop {
        display: none !important;
    }

    .mobile {
        display: flex !important;
    }

    .paddingInline0 {
        padding-left: 0px;
        padding-right: 0px;
    }

    .displayFlexDesktop {
        display: none !important;
    }

    .displayDesktop {
        display: none !important;
    }

    .displayMobile {
        display: block !important;
    }

    .displayGridMobile {
        display: grid !important;
    }

    .displayGridDesktop {
        display: none !important;
    }

    .displayBlockMobile {
        display: block !important;
    }

    .displayBlockDesktop {
        display: none !important;
    }

    .productCardContainer {
        height: 250px;
    }

    .displayFooterGridMobile {
        display: grid !important;
    }

    .displayFooterGridDesktop {
        display: none !important;
    }

    /* Element Styles */
    a:hover {
        text-decoration: none !important;
    }

    @media screen and (max-width: 359px) {
        .bottom-sheet-btn-text-style {
            padding: 12px;
            font-size: 14px;
            min-width: max-content;
        }

        .chipOverflow {
            min-width: max-content;
        }
    }

}
</style>
