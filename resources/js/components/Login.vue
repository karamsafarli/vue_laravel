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


<script>
    import '../../css/login.css';
</script>