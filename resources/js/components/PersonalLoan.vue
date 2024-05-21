<template>
<section class="header_banner firstSection">
    <img src="https://moneyview.in/images/PL-header-pattern-desktop.svg" class="banner_bg_pattern" alt="background pattern">
    <div class="mainContainer header_section_container marginTop0">
        <div class="navMenu fullRowClass">
            <a class="navLink personal-loan-page-personal-loan-interest-rates-and-charges-header-navbar" href="/personal-loan-interest-rates-and-charges?utm_source=personal-loan-page&amp;utm_medium=personal-loan-interest-rates-and-charges-header-navbar&amp;utm_campaign=personal-loan-page-personal-loan-interest-rates-and-charges-header-navbar">Interest rates</a>
            <a class="navLink personal-loan-page-personal-loan-eligibility-check-header-navbar" href="/personal-loan-eligibility-check?utm_source=personal-loan-page&amp;utm_medium=personal-loan-eligibility-check-header-navbar&amp;utm_campaign=personal-loan-page-personal-loan-eligibility-check-header-navbar">Eligibility criteria</a>
            <a class="navLink personal-loan-page-personal-loan-documents-header-navbar" href="/personal-loan-documents?utm_source=personal-loan-page&amp;utm_medium=personal-loan-documents-header-navbar&amp;utm_campaign=personal-loan-page-personal-loan-documents-header-navbar">Documents required</a>
            <a class="navLink personal-loan-page-how-to-apply-for-personal-loan-header-navbar" href="/how-to-apply-for-personal-loan?utm_source=personal-loan-page&amp;utm_medium=how-to-apply-for-personal-loan-header-navbar&amp;utm_campaign=personal-loan-page-how-to-apply-for-personal-loan-header-navbar">How to apply</a>
        </div>
        <div class="header_banner_lead_card header_banner_text_span">
            <h1 class="header_banner_title">Get up to ₹10 lakhs<br> in 10 mins!</h1>
            <h3 class="header_banner_heading">Personal loans made just for you</h3>
            <div class="header_apply_online_container">
                <div class="lead_gen_form isModal displayNone PLloginForm" id="loginForm" style="display: grid;">
                    <div id="generateOtpWrap" class="lead_gen_section generate_otp_container lead_gen_container">
                        <div class="header_generate_otp_container">
                            <div class="header_generate_otp_input_container">
                                <div class="country_code"><span>+91</span></div>
                                <div class="header_generate_otp_input_wrap"><input type="number" id="header_generate_otp_input" class="header_generate_otp_input generate_otp_input" placeholder="Enter Mobile Number">
                                    <p id="header_generate_otp_message" class="header_generaate_otp_message generate_otp_message">
                                        An OTP will be sent for verification</p>
                                </div>
                            </div>
                            <button type="button" class="header_generate_otp_apply_loan_btn apply_now_lead_gen_btn pl_page_header_applynow_cta" id="sendOtp"> <span class="btn_loader spinner-border spinner-border-sm" role="status" aria-hidden="true" style="display: none;"></span> Apply now </button>
                        </div>
                        <div class="header_consent_wrapper">
                            <div class="header_generate_otp_consent_container consent_checkbox_wrap loginConsent"><input class="form-check-input header_generate_otp_consent generate_otp_consent" type="checkbox" value="" id="header_generate_otp_consent" checked="checked"> <label class="form-check-label header_generate_otp_consent_text loginConsentText" htmlfor="header_generate_otp_consent"> By proceeding, you agree to our <a class="header_generate_otp_consent_text" target="_blank" href="/terms-conditions-loans-app" rel="noopener"> Terms &amp; Conditions </a> &nbsp;&amp;&nbsp; <a class="header_generate_otp_consent_text" target="_blank" href="/privacy-policy-loans" rel="noopener">Privacy Policy </a> </label></div>
                            <div class="header_generate_otp_consent_container consent_checkbox_wrap whatsAppConsent">
                                <input class="form-check-input header_generate_otp_consent" type="checkbox" value="" id="whatsAppCheckBox" checked="checked">
                                <label class="form-check-label header_generate_otp_consent_text whatsAppConsentText" htmlfor="header_generate_otp_consent">I agree to receive updates on WhatsApp</label>
                            </div>
                        </div>
                    </div>
                    <div id="verifyotpWrap" class="verify_otp_wrap_container verify_otp_container header_verify_otp" style="display: none;">
                        <div>
                            <div style="position: relative;"><input type="number" id="verify_otp_lead_gen_input" class="verify_otp_lead_gen_input verify_otp_input" placeholder="Enter OTP" onkeydown="if(this.value.length === 5 &amp;&amp; event.keyCode > 47 &amp;&amp; event.keyCode < 58)return false;">
                                <button id="resend_otp" type="button" class="text-button-link resend_otp header_resend_otp">Resend
                                    OTP</button></div>
                            <div class="verify_otp_message_container verify_otp_container">
                                <p id="otp_error_message" class="otp_error_message" style="display: none; margin-bottom: 0px;"></p>
                                <div class="verify_otp_mobile_number_container alignItemsEnd flex-grow-1"><span id="mobile2" class="edit_mobile_number_text"></span> <button class="edit_mobile_number text-button-link">Edit</button></div>
                            </div>
                        </div>
                        <button id="verifyNow" type="button" class="verify_otp_lead_gen_btn pl_page_header_verify_otp_cta">Verify
                            OTP</button>
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
                <dotlottie-player class="cardAnimationLottie1" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
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
        <div class="reviewCard colspan-xl-1-6 colspan-xs-1-6">
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
        </div>
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

<section class="faq_section">
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
</section>

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
</template>


<script>
import { ref, onMounted, onUnmounted, defineComponent } from 'vue';
import '@dotlottie/player-component';

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

    return {
      isScrolled,
      scrollToTop
    };
  }
});
</script>


<style scoped>
.marginTop0 {
    margin-top: 0 !important;
}
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

/* Navbar */
.navMenu {
    display: flex;
    gap: 24px;
    margin-block: 24px;
    justify-content: end;
    margin-right: 18px;
    z-index: 1;
}

.navLink {
    font-size: 16px !important;
    font-weight: var(--font-weight-regular) !important;
    line-height: 16px !important;
    letter-spacing: 0px;
    color: var(--primary-color) !important;
}

.navbar-custom {
    background: linear-gradient(109deg, #F0F8F3 37.69%, var(--white-color) 86.94%);
}

/* Banner section */

.header_banner {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 79.37%, #FFFFFF 100%), linear-gradient(109.47deg, #F0F8F3 37.69%, #FFFFFF 86.94%);
    background-clip: border-box;
    position: relative;
}

.banner_bg_pattern {
    position: absolute;
    right: 0;
    top: 0;
}

.header_banner_image_span {
    z-index: 6;
}

.header_banner_lead_card {
    background: var(--white-color);
    padding: 40px 48px;
    box-shadow: 0px 23px 24px 0px var(--grey10);
    height: fit-content;
    align-self: center;
}

.header_banner_subtitle {
    font-style: italic;
    color: var(--orange05);
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    background: var(--orange01);
    border-radius: 2px;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
    padding: 3px 0px 3px 8px;
}

.header_banner_title {
    margin-bottom: 0px;
    font-style: italic;
    font-weight: var(--font-weight-bold);
    color: var(--black-color);
}

.header_banner_heading {
    color: var(--grey07);
    margin-bottom: 0px;
    padding-bottom: 27px;
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

/* get started section */
.get_started_lottie {
    display: grid;
}

.get_started_text {
    display: grid;
}

.get_started_lottie_player {
    width: 100%;
}

.get_started_text_div {
    margin: auto 0;
}

.get_started_title {
    font-weight: var(--font-weight-bold);
}

.get_started_subtitle {
    font-weight: var(--font-weight-regular);
    color: var(--grey07);
}

/*what makes mv better section*/
.what_makes_moneyview_better_title {
    font-weight: var(--font-weight-bold);
}

.betterCard {
    text-align: center;
    background: var(--grey01);
}

.cardTitle {
    font-weight: var(--font-weight-semibold);
    text-align: left;
    color: var(--black-color);
}

.cardDescription {
    font-weight: var(--font-weight-regular);
    text-align: left;
    color: var(--grey09);
}

.cardAnimation {
    text-align: center;
}

/* trust marker*/

.trustMarker {
    background: var(--orange06);
}

.display-flex {
    display: flex !important;
}

.trust-marker-title {
    font-weight: var(--font-weight-semibold);
    color: var(--white-color);
}

.trust-marker-content {
    font-weight: var(--font-weight-regular);
    color: var(--white-color);
}

.trust-marker-heading {
    font-weight: var(--font-weight-semibold);
    color: var(--white-color);
}

.trust-marker-subheading {
    font-weight: var(--font-weight-regular);
    color: var(--white-color);
}

.trustclass {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: 24px;
}

.trustRowClass {
    display: grid;
    grid-column-end: span 8;
}

.text-1:after {
    content: " Million+";
    display: inline-block;
    white-space: pre
}

.text-2:after {
    content: " Cr+";
    display: inline-block;
    white-space: pre
}

.text-3:after {
    content: "+";
    display: inline-block;
}

.backdropBtn {
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
}

.continuePLApplication {
    display: none;
}

#footerLoginForm {
    display: none;
}

#footerContinueApp {
    display: none;
}

/*review section*/
.reviewSection {
    position: relative;
}

.customerReviewTitle {
    font-weight: var(--font-weight-bold);
    position: absolute;
}

.reviewCard {
    box-sizing: border-box;
    background: var(--white-color);
}

.customer-details {
    display: flex;
}

.customer-class {
    margin: auto 0px;
}

.customer-name {
    font-weight: var(--font-weight-regular);
    color: var(--black-color);
}

.review-details {
    font-weight: var(--font-weight-regular);
    color: var(--grey07);
}

.review-content {
    font-weight: var(--font-weight-regular);
    color: var(--grey07);
}

.checked {
    color: var(--yellow01);
    font: normal normal normal 27.35px/1 FontAwesome;
    margin-right: 13.15px;
}

.heart_lottie_div {
    position: relative;
}

.heart_lottie {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0px;
}

/* emi section */
.display-desktop {
    display: block;
}

.display-mobile {
    display: none;
}

.emiCalculator {
    border-radius: 12px;
    background: var(--magenta01);
}

.emi-calculator-image {
    align-self: center;
    width: 220px;
    margin-inline: auto;
}

.heading {
    font-weight: var(--font-weight-semibold);
    color: var(--black-color);
}

.subHeading {
    font-weight: var(--font-weight-regular);
    color: var(--grey09);
}

.calculateEmi {
    font-weight: var(--font-weight-semibold) !important;
    color: var(--primary-color) !important;
    justify-content: center;
    display: flex;
}

.calculateEmiButton {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

/* video section */
.video_section_title {
    font-style: italic;
    font-weight: var(--font-weight-bold);
    color: var(--grey09);
}

.video_section_subtitle {
    font-weight: var(--font-weight-regular);
    color: var(--grey09);
}

.hashtag {
    color: var(--primary-color);
}

.video_section_carousel {
    position: relative;
}

.videocard__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 481px;
    border-radius: 4px;
}

.videocard__img--hover {
    transition: 0.4s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 481px;
    border-radius: 4px;
    top: 0;
}

.videocard {
    transition: 0.4s all ease-out;
    background-color: var(--white-color);
    width: 100%;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
}

.videocard:hover {
    transform: scale(1.1, 1.1);
}

.videocard:hover .videocard__img--hover {
    height: 100%;
}

.videocardPlayButton1 {
    display: block;
    position: absolute;
    z-index: 1;
    top: 45%;
    left: 45%;
}

.videocardPlayButton2 {
    display: none;
    position: absolute;
    z-index: 1;
    top: 45%;
    left: 45%;
}

.videocard--2:hover .videocardPlayButton2 {
    display: block;
}

.videocard--1 {
    z-index: 1;
    height: 100% !important;
}

.videocard--2 {
    left: 56%;
    position: absolute;
    top: 6%;
    height: 90%;
}

.videocard--2:hover {
    z-index: 1;
    top: 0%;
    height: 100%;
    box-shadow: 0 0 0 8px var(--grey04);
    /* using box-shadow instead of border for inner radius */
}

.videoBorder {
    box-shadow: 0 0 0 8px var(--grey04) !important;
    /* using box-shadow instead of border for inner radius */
}

.iframeOverlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

.iframePopup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

/*Bottom-banner*/
.bottomBannerSection {
    position: relative;
}

.bottomBannerContainer {
    background: var(--green07);
    border-radius: 8px;
}

.bottomBannerTitle {
    font-weight: var(--font-weight-semibold);
    color: var(--white-color);
}

.bottomBannerSubTitle {
    font-weight: var(--font-weight-regular);
    color: var(--white-color);
}

.downloadBtn {
    color: var(--white-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    background-color: var(--orange05);
    border: none;
    border-radius: 4px;
    padding: 16px 24px;
}

/*Accordian*/
.accordion .card {
    border-bottom: 0px;
}

.accordion .card-header {
    margin-bottom: 0px !important;
    border-top: 0px;
    border-bottom: 0px !important;
    padding: 0px;
}

.accordion .card-header>a[aria-expanded="true"] .fa-angle-down {
    display: none;
}

.accordion .card-header>a[aria-expanded="false"] .fa-angle-up {
    display: none;
}

.accordion .card .card-body ul,
ol {
    padding-left: 2.5rem;
}

.accordion .card .card-body table {
    border: 1px solid var(--grey07);
    width: fit-content !important;
}

.accordion .card .card-body .table th {
    color: var(--black-color);
    font-weight: var(--font-weight-regular);
    padding: 15px 0px 16px 24px;
}

.accordion .card .card-body .table td {
    padding: 12px 24px 12px 24px;
}

.accordionCardHeader {
    font-weight: var(--font-weight-regular) !important;
    color: var(--black-color);
    padding: 0px;
}

.hrAccordian {
    margin: 0px;
    border: 1px solid #dcdcde;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: var(--white-color) !important;
}

.table td,
.table th,
.table-bordered th,
.table-bordered td {
    border: 1px solid var(--grey07) !important;
    color: var(--grey07);
}

.cardLinks {
    font-weight: var(--font-weight-regular) !important;
    margin: 0px;
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

@keyframes bottom-slide-in {
    0% {
        opacity: 0;
        transform: translateY(100%);
        animation-timing-function: cubic-bezier(0, 0, 0, 1);
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}



/* RESPONSIVE STYLES */


@media screen and (min-width: 1440px) {
    .lead_gen_section {
        gap: 16px;
    }

    .header_section_container {
        margin-top: 80px;
    }

    .header_banner_lead_card {
        border-radius: 4px;
        margin-block: 12px 30px;
    }

    .header_banner_text_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        align-items: center;
    }

    .header_banner_image_span {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .header_banner_subtitle {
        font-weight: var(--font-weight-semibold);
        font-size: 20px;
        line-height: var(--body-line-height);
    }

    .header_banner_title {
        font-weight: var(--font-weight-bold);
        font-size: 44px;
        line-height: 44px;
        padding-bottom: 4px;
        margin-bottom: 0px;
    }

    .header_banner_heading {
        font-weight: var(--font-weight-regular);
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 0px;
    }

    .header_apply_online_container {
        max-width: 390px;
    }

    .header_generate_otp_container {
        gap: 12px;
    }

    .verify_otp_lead_gen_btn {
        width: 100% !important;
        padding: 16px 20px;
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_generate_otp_input {
        height: 56px !important;
        width: 100% !important;
        font-size: 14px !important;
        line-height: 22px !important;
    }

    .verify_otp_lead_gen_input {
        width: 100% !important;
        font-size: var(--body-font-size) !important;
        line-height: var(--body-line-height) !important;
        line-height: 22px !important;
    }

    #banner_image {
        width: 580px;
        aspect-ratio: 991/872;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 12px;
        line-height: var(--primary-color);
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    /* get started section */
    .get_started_lottie {
        grid-column-start: 1;
        grid-column-end: span 5;
    }

    .get_started_text {
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .get_started_text_div {
        width: 468px;
        height: 169px;
    }

    .get_started_title {
        font-size: 44px;
        line-height: 64px;
    }

    .get_started_subtitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-top: 20px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 32px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
    }

    .what_makes_moneyview_better_title {
        font-size: 44px;
        line-height: 64px;
        margin-bottom: 64px;
    }

    .paddingDiv {
        padding: 32px;
    }

    .betterCard {
        border-radius: 20px;
    }

    .cardTitle {
        font-size: 32px;
        line-height: 48px;
        width: 289px;
        margin-bottom: 24px;
    }

    .cardDescription {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        width: 448px;
        min-height: 76px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 16px;
    }

    /* trust marker*/
    .trustMarker {
        margin-top: 96px;
    }

    .trust-marker-1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .trust-marker-2 {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span 4;
    }

    .trust-marker-image {
        width: 32px;
        height: 32px;
    }

    .trust-marker-container {
        padding: 0px 0px 0px 12px;
    }

    .trust-marker-title {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 4px;
    }

    .trust-marker-content {
        height: 28px;
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .trust-marker-heading {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 12px;
    }

    .trust-marker-subheading {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 40px;
    }

    .trust-marker-col-1 {
        padding: 50px 0px 56px 0px;
    }

    .trustclass {
        column-gap: 20px;
    }

    /*review section*/
    .reviewSection {
        margin-bottom: 82px;
    }

    .customerReviewTitle {
        font-size: 44px;
        line-height: 64px;
        margin-bottom: 0px;
    }

    .reviewCard {
        border: 2px solid var(--grey02);
        border-radius: 24px;
        padding: 32px 32px;
    }

    .customer-image {
        width: 72px;
        height: 72px;
    }

    .customer-class {
        padding-left: 12px;
    }

    .customer-name {
        font-size: 20px;
        line-height: 32px;
    }

    .review-details {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 0px;
    }

    .review-content {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 0px;
    }

    .customerRating {
        margin: 20px 0px;
    }

    /* emi section*/
    .emiCalculatorMargin {
        margin-block: 42px 32px;
    }

    .heading {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 16px;
    }

    .subHeading {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        width: 680px;
    }

    .calculateEmi {
        font-size: var(--body-font-size) !important;
        line-height: 28px !important;
    }

    .calculateEmiButton {
        margin-top: 43px;
        margin-right: 32px;
    }

    .rightArrow {
        width: 53px;
        height: 32px;
        margin-left: 24px;
    }

    /* video section */
    .video_section_title {
        font-size: 44px;
        line-height: 44px;
    }

    .video_section_subtitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        width: 780px;
        margin-top: 32px;
        margin-bottom: 66px;
    }

    .video_section_carousel {
        width: 750px;
        height: 428px;
    }

    .videocard__img {
        width: 750px !important;
        height: 428px !important;
    }

    .videocard__img--hover {
        width: 750px !important;
        height: 428px !important;
    }

    .videocard--2 {
        top: 8%;
    }

    .videocardPlayButton1 img {
        width: 64px;
        height: 64px;
    }

    .videocardPlayButton2 img {
        width: 64px;
        height: 64px;
    }

    .videocardPlayButton1 {
        left: 45%;
        top: 45%;
    }

    .videocardPlayButton2 {
        left: 45%;
        top: 45%;
    }

    .iframePlayer {
        width: 800px;
        height: 480px;
    }

    /*Bottom-banner*/
    .bottomBannerSection {
        position: relative;
        padding-top: 196px;
    }

    .bottomBannerContainer {
        margin: 0px !important
    }

    .bottomBannerImage {
        width: 80%;
        bottom: -15%;
        height: auto;
        position: absolute;
        right: 20%;
    }

    .bottomBanner {
        background-image: url("https://moneyview.in/images/PL-bottomBanner-Desktop.webp");
        background-repeat: no-repeat;
        background-position: right 0% top 48%;
        background-size: 100%;
        padding-top: 292px !important;
    }

    .bottomBannerTitle {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 16px;
    }

    .bottomBannerSubTitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 40px;
    }

    .bottomBannerTextPadding {
        padding: 48px 48px 45px;
    }

    .bottom-banner-backdrop {
        height: 260px;
        bottom: 26px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 80px !important;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .accordion .card .card-body table {
        margin: 20px 80px 0px;
    }

    /* FAQ */
    .accordion .card .card-body .FaqContent {
        margin-bottom: 24px;
    }

    .downloadBtn {
        font-size: 20px;
        line-height: 20px;
    }

}

@media screen and (min-width: 960px) and (max-width: 1439px) {
    .lead_gen_section {
        gap: 16px;
    }

    .header_section_container {
        margin-top: 64px;
    }

    .header_banner_lead_card {
        border-radius: 4px;
        margin-block: 12px 30px;
    }

    .header_banner_text_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        align-items: center;
    }

    .header_banner_image_span {
        display: grid;
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .header_banner_subtitle {
        font-weight: var(--font-weight-semibold);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_banner_title {
        font-weight: var(--font-weight-bold);
        font-size: 32px;
        line-height: 36px;
        padding-bottom: 4px;
        margin-bottom: 0px;
    }

    .header_banner_heading {
        font-weight: var(--font-weight-regular);
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 15px;
        margin-bottom: 0px;
    }

    .header_apply_online_container {
        width: 100%;
    }

    .header_generate_otp_container {
        width: 100%;
        gap: 12px;
    }

    .header_generate_otp_consent_text {
        font-size: 8px;
        line-height: 14px;
    }

    .verify_otp_lead_gen_btn {
        width: 100% !important;
        height: 56px;
        padding: 16px 20px;
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_generate_otp_input {
        height: 56px !important;
        width: 100% !important;
        font-size: 14px !important;
        line-height: 22px !important;
    }

    .verify_otp_lead_gen_input {
        width: 100% !important;
        font-size: var(--body-font-size) !important;
        line-height: var(--body-line-height) !important;
        line-height: 22px !important;
    }

    #banner_image {
        width: 493px;
        aspect-ratio: 991/872;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 12px;
        line-height: var(--body-line-height);
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    /* get started section */
    .get_started_lottie {
        grid-column-start: 1;
        grid-column-end: span 5;
    }

    .get_started_text {
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .get_started_text_div {
        width: 324px;
        height: 169px;
    }

    .get_started_title {
        font-size: 32px;
        line-height: 48px;
    }

    .get_started_subtitle {
        font-size: 14px;
        line-height: 20px;
        margin-top: 16px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 12px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
    }

    .what_makes_moneyview_better_title {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 42px;
    }

    .paddingDiv {
        padding: 32px;
    }

    .betterCard {
        border-radius: 16px;
    }

    .cardTitle {
        font-size: 20px;
        line-height: 32px;
        width: 176px;
        margin-bottom: 12px;
    }

    .cardDescription {
        font-size: 14px;
        line-height: 20px;
        width: 332px;
        min-height: 60px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 20px;
    }

    /* trust marker*/
    .trustMarker {
        margin-top: 64px;
    }

    .trust-marker-1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .trust-marker-2 {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span 4;
    }

    .trust-marker-image {
        width: 24px;
        height: 24px;
    }

    .trust-marker-container {
        padding: 0px 0px 0px 8px;
    }

    .trust-marker-title {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 2px;
    }

    .trust-marker-content {
        height: 48px;
        font-size: 14px;
        line-height: var(--body-line-height);
    }

    .trust-marker-heading {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 8px;
    }

    .trust-marker-subheading {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 28px;
    }

    .trust-marker-col-1 {
        padding: 50px 0px 56px 0px;
    }

    .trustclass {
        column-gap: 12px;
    }

    .trust_marker_model_image {
        align-self: end;
    }

    /*review section*/
    .reviewSection {
        margin-bottom: 40px;
    }

    .customerReviewTitle {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 0px;
    }

    .reviewCard {
        border: 2px solid var(--grey02);
        border-radius: 20px;
        padding: 32px 32px;
    }

    .customer-image {
        width: 48px;
        height: 48px;
    }

    .customer-class {
        padding-left: 8px;
    }

    .customer-name {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .review-details {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 0px;
    }

    .review-content {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    .customerRating {
        margin: 14px 0px;
    }

    /* emi section*/
    .emiCalculatorMargin {
        margin-block: 34px 24px;
    }

    .heading {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 12px;
    }

    .subHeading {
        font-size: 14px;
        line-height: 20px;
        width: 455px;
    }

    .calculateEmi {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .calculateEmiButton {
        margin-top: 32px;
        margin-right: 24px;
    }

    .rightArrow {
        width: 33px;
        height: 20px;
        margin-left: 8px;
    }

    /* video section */
    .video_section_title {
        font-size: 36px;
        line-height: 36px;
    }

    .video_section_subtitle {
        font-size: 14px;
        line-height: 20px;
        width: 780px;
        margin-top: 16px;
        margin-bottom: 32px;
    }

    .video_section_carousel {
        width: 527px;
        height: 297px;
    }

    .videocard__img {
        width: 527px !important;
        height: 297px !important;
    }

    .videocard__img--hover {
        width: 527px !important;
        height: 297px !important;
    }

    .videocard--2 {
        left: 58% !important;
        top: 8%;
    }

    .videocardPlayButton1 img {
        width: 45px;
        height: 45px;
    }

    .videocardPlayButton2 img {
        width: 45px;
        height: 45px;
    }

    .videocardPlayButton1 {
        left: 45%;
        top: 45%;
    }

    .videocardPlayButton2 {
        left: 45%;
        top: 45%;
    }

    .iframePlayer {
        width: 500px;
        height: 360px;
    }

    /*Bottom-banner*/
    .bottomBannerContainer {
        margin: 0px !important
    }

    .bottomBannerSection {
        padding-top: 163px !important;
    }

    .bottomBannerImage {
        width: 80%;
        bottom: -16%;
        height: auto;
        position: absolute;
        right: 20%;
    }

    .bottomBannerTitle {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 12px;
    }

    .bottomBannerSubTitle {
        font-size: 12px;
        line-height: var(--body-line-height);
        margin-bottom: 20px;
    }

    .bottomBannerTextPadding {
        padding: 24px;
    }

    .bottom-banner-backdrop {
        height: 186px;
        bottom: 20px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 60px !important;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .accordion .card .card-body table {
        margin: 20px 59px 0px;
    }

    /* FAQ */
    .accordion .card .card-body .FaqContent {
        margin-bottom: 20px;
    }

    .downloadBtn {
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 959px) and (max-width: 1199px) {

        /* Navbar */
        .navMenu {
            display: none !important;
        }

        .PLSideMenuLinks {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-left: 52px;
            text-align: left;
        }

        .navLink {
            font-size: 14px !important;
            line-height: 24px !important;
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 959px) {
    .navMenu {
        display: none;
    }

    .PLSideMenuLinks {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-left: 52px;
        text-align: left;
    }

    .navLink {
        font-size: 14px !important;
        line-height: 24px !important;
    }

    .header_banner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 48.34%, #FFFFFF 61.2%), linear-gradient(109.47deg, #F0F8F3 37.69%, #FFFFFF 86.94%);
        display: block !important;
    }

    .banner_bg_pattern {
        width: 520px;
        height: 450px;
    }

    .lead_gen_section {
        gap: 16px;
    }

    .header_section_container {
        margin-top: 62px;
        grid-template-columns: repeat(12, 1fr) !important;
    }

    .header_banner_lead_card {
        border-radius: 0px;
        padding: 40px 30px 12px 30px;
        margin-inline: -30px;
        position: relative;
        box-shadow: none !important;
        background: transparent;
    }

    .header_banner_text_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        grid-row-start: 2;
    }

    .header_banner_image_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 12;
        grid-row-start: 1;
    }

    .header_banner_subtitle {
        font-weight: var(--font-weight-semibold);
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 16px;
        max-width: 376px;
    }

    .header_banner_title {
        font-weight: var(--font-weight-bold);
        font-size: 52px;
        line-height: 52px;
        padding-bottom: 4px;
        margin-bottom: 0px;
    }

    .header_banner_heading {
        font-weight: var(--font-weight-regular);
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 0px;
    }

    .header_apply_online_container {
        width: 100%;
    }

    .header_generate_otp_container {
        width: 100%;
        gap: 12px;
    }

    .verify_otp_lead_gen_btn {
        width: 100% !important;
        height: 56px;
        padding: 16px 20px;
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_generate_otp_input {
        height: 56px !important;
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 22px !important;
    }

    .verify_otp_lead_gen_input {
        height: 64px !important;
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 22px !important;
    }

    #banner_image {
        width: 464px;
        aspect-ratio: 991/872;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 14px;
        line-height: 22px;
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    /* get started section */
    .get_started_lottie {
        grid-column-start: 1;
        grid-column-end: span 5;
    }

    .get_started_text {
        grid-column-start: 7;
        grid-column-end: span 6;
    }

    .get_started_text_div {
        width: 348px;
        height: 169px;
    }

    .get_started_title {
        font-size: 32px;
        line-height: 48px;
        width: 288px;
    }

    .get_started_subtitle {
        font-size: 14px;
        line-height: 20px;
        margin-top: 16px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 12px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
    }

    .what_makes_moneyview_better_title {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 40px;
    }

    .paddingDiv {
        padding: 32px 28px 28px 28px;
    }

    .betterCard {
        border-radius: 16px;
    }

    .cardTitle {
        font-size: 24px;
        line-height: 32px;
        width: 292px;
        margin-bottom: 14px;
    }

    .cardDescription {
        font-size: 14px;
        line-height: 20px;
        width: 292px;
        min-height: 80px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 20px;
    }

    /* trust marker*/
    .trustMarker {
        margin-top: 64px;
    }

    .trust-marker-1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 8;
    }

    .trust-marker-2 {
        display: grid;
        grid-column-start: 9;
        grid-column-end: span 4;
    }

    .trust-marker-image {
        width: 24px;
        height: 24px;
    }

    .trust-marker-container {
        padding: 0px 0px 0px 8px;
    }

    .trust-marker-title {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 2px;
    }

    .trust-marker-content {
        height: 48px;
        font-size: 14px;
        line-height: var(--body-line-height);
    }

    .trust-marker-heading {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 8px;
    }

    .trust-marker-subheading {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 40px;
    }

    .trust-marker-col-1 {
        padding: 50px 0px 56px 0px;
    }

    .trustclass {
        column-gap: 12px;
    }

    .trustMarkerMargin {
        margin-bottom: 16px;
    }

    .trust_marker_model_image {
        position: absolute;
        left: -72px;
        align-self: end;
    }

    /*review section*/
    .reviewSection {
        margin-bottom: 60px;
    }

    .customerReviewTitle {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 0px;
    }

    .reviewCard {
        border: 2px solid var(--grey02);
        border-radius: 20px;
        padding: 32px 32px;
    }

    .customer-image {
        width: 48px;
        height: 48px;
    }

    .customer-class {
        padding-left: 12px;
    }

    .customer-name {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .review-details {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 0px;
    }

    .review-content {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    .customerRating {
        margin: 14px 0px;
    }

    /* emi section*/
    .emiCalculatorMargin {
        margin-block: 34px 24px;
    }

    .emi-calculator-image {
        height: 209px;
    }

    .heading {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 12px;
    }

    .subHeading {
        font-size: 14px;
        line-height: 20px;
        width: 286px;
    }

    .calculateEmi {
        font-size: 14px !important;
        line-height: 18px !important;
    }

    .calculateEmiButton {
        margin-top: 32px;
        margin-right: 24px;
    }

    .rightArrow {
        width: 33px;
        height: 20px;
        margin-left: 8px;
    }

    /* video section */
    .video_section_title {
        font-size: 52px;
        line-height: 52px;
    }

    .video_section_subtitle {
        font-size: 14px;
        line-height: 20px;
        width: 706px;
        margin-top: 16px;
        margin-bottom: 28px;
    }

    .video_section_carousel {
        width: 446px;
        height: 250px;
    }

    .videocard__img {
        width: 446px !important;
        height: 250px !important;
    }

    .videocard__img--hover {
        width: 446px !important;
        height: 250px !important;
    }

    .videocard--2 {
        left: 58% !important;
        top: 8%;
    }

    .videocardPlayButton1 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton2 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton1 {
        left: 45%;
        top: 45%;
    }

    .videocardPlayButton2 {
        left: 45%;
        top: 45%;
    }

    .videoBorder {
        box-shadow: 0 0 0 6px var(--grey04) !important;
        /* using box-shadow instead of border for inner radius */
    }

    .videocard--2:hover {
        box-shadow: 0 0 0 6px var(--grey04);
        /* using box-shadow instead of border for inner radius */
    }

    .iframePlayer {
        width: 500px;
        height: 360px;
    }

    /*Bottom-banner*/
    .bottomBannerContainer {
        margin: 0px !important;
    }

    .bottomBannerSection {
        position: relative;
        padding-top: 136px !important;
    }

    .bottomBannerImage {
        width: 88%;
        bottom: -15%;
        height: auto;
        position: absolute;
        right: 20%;
    }

    .bottomBannerTitle {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 12px;
    }

    .bottomBannerSubTitle {
        font-size: 12px;
        line-height: var(--body-line-height);
        margin-bottom: 8px;
    }

    .bottomBannerTextPadding {
        padding: 24px;
    }

    .bottom-banner-backdrop {
        height: 157px;
        bottom: 20px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 40px !important;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .accordion .card .card-body table {
        margin: 20px 48px 0px;
    }

    /* FAQ */

    .accordion .card .card-body .FaqContent {
        margin-bottom: 16px;
    }
}

@media screen and (min-width: 480px) and (max-width: 767px) {
    section {
        align-items: unset;
    }

    /* Header-Banner */
    .navMenu {
        display: none;
    }

    .PLSideMenuLinks {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-left: 52px;
        text-align: left;
    }

    .navLink {
        font-size: 14px !important;
        line-height: 24px !important;
    }

    .header_banner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 48.34%, #FFFFFF 61.2%), linear-gradient(109.47deg, #F0F8F3 37.69%, #FFFFFF 86.94%);
    }

    .banner_bg_pattern {
        width: 280px;
        height: 258px;
    }

    .lead_gen_section {
        gap: 12px;
    }

    .header_section_container {
        margin-top: 62px;
    }

    .header_banner_lead_card {
        border-radius: 0px;
        padding: 40px 24px 12px 24px;
        margin-inline: -24px;
        position: relative;
        box-shadow: none !important;
        background: transparent;
    }

    .header_banner_text_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 2;
    }

    .header_banner_image_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 1;
    }

    .header_banner_subtitle {
        font-weight: var(--font-weight-semibold);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        max-width: 280px;
    }

    .header_banner_title {
        font-weight: var(--font-weight-bold);
        font-size: 40px;
        line-height: 40px;
        padding-bottom: 4px;
        margin-bottom: 0px;
    }

    .header_banner_heading {
        font-weight: var(--font-weight-regular);
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 15px;
        margin-bottom: 0px;
    }

    .header_generate_otp_container {
        width: 100%;
        gap: 8px;
    }

    .header_apply_online_container {
        width: 100%;
        gap: 23px;
    }

    .verify_otp_lead_gen_btn {
        width: 100% !important;
        height: 56px;
        padding: 16px 20px;
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_generate_otp_input {
        height: 56px !important;
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 20px !important;
    }

    .verify_otp_lead_gen_input {
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 22px !important;
    }

    #banner_image {
        width: 435px;
        aspect-ratio: 991/872;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 14px;
        line-height: 22px;
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    .header_generate_otp_consent {
        width: 16px;
        height: 16px;
    }

    .header_generate_otp_consent:checked {
        background-size: 12px !important;
    }

    /* get started section */
    .get_started_lottie {
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 2;
    }

    .get_started_text {
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 1;
    }

    .get_started_text_div {
        width: 428px;
    }

    .get_started_title {
        font-size: 32px;
        line-height: 44px;
        width: 312px;
    }

    .get_started_subtitle {
        font-size: 14px;
        line-height: var(--body-line-height);
        margin-top: 16px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 24px;
    }

    .what_makes_moneyview_better_title {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 24px;
    }

    .paddingDiv {
        padding: 36px 28px 28px 28px;
    }

    .betterCard {
        width: 100%;
        border-radius: 12px;
    }

    .cardTitle {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 16px;
        width: 100%;
    }

    .removeBr br {
        display: none;
    }

    .cardDescription {
        font-size: 14px;
        line-height: var(--body-line-height);
        width: 376px;
        min-height: 72px;
        margin-top: 8px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 8px;
    }

    /* trust marker */
    .trustMarker {
        margin-top: 72px;
    }

    .trust-marker-1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .trust-marker-2 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .trust-marker-image {
        width: 24px;
        height: 24px;
    }

    .trust-marker-container {
        padding: 0px 0px 0px 12px;
    }

    .trust-marker-title {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 4px;
    }

    .trust-marker-content {
        height: 40px;
        font-size: 14px;
        line-height: 20px;
    }

    .trust-marker-heading {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 12px;
    }

    .trust-marker-subheading {
        font-size: 14px;
        line-height: var(--body-line-height);
        margin-bottom: 22px;
    }

    .trustMarkerMargin {
        margin-bottom: 16px;
    }

    .trust-marker-col-1 {
        padding: 56px 0px 0px;
    }

    .trustclass {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
    }

    .trustRowClass {
        display: grid;
        grid-column-end: span 6;
    }

    .trust_marker_model_image {
        width: auto;
        align-self: end;
        margin-top: 0px;
        height: 295px;
        margin: auto;
    }

    /*review section*/
    .reviewSection {
        margin-bottom: 24px;
    }

    .reviewCardMargin {
        margin-top: 16px;
    }

    .reviewCard {
        border: 1px solid var(--grey02);
        border-radius: 16px;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .customerReviewTitle {
        font-size: 28px;
        line-height: 36px;
    }

    .customer-image {
        width: 40px;
        height: 40px;
    }

    .customer-class {
        padding-left: 8px;
    }

    .customer-name {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 2px;
    }

    .review-details {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    .checked {
        font: normal normal normal 12px/1 FontAwesome;
        margin-right: 6px;
        border-radius: 0.5px;
    }

    .review-content {
        font-size: 14px;
        line-height: 22px;
    }

    .customerRating {
        margin: 14px 0px;
    }

    /* emi section */
    .display-desktop {
        display: none;
    }

    .display-mobile {
        display: flex;
    }

    .emiCalculator {
        margin-top: 36px !important;
    }

    .emiCalculatorMargin {
        margin-block: 20px !important;
        margin-inline: 0px !important;
    }

    .emi-calculator-image {
        width: 210px;
        margin: auto;
        margin-top: 0px;
        width: 180px;
    }

    .heading {
        margin-bottom: 8px;
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .subHeading {
        font-size: 12px;
        line-height: 18px;
        width: 160px;
    }

    .calculateEmi {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .calculateEmiButton {
        margin-top: 16px;
        justify-content: flex-start !important;
    }

    .rightArrow {
        margin-top: 2px;
        width: 25px;
        height: 15px;
        margin-left: 8px;
    }

    /* video section */
    .video_section_title {
        font-size: 40px;
        line-height: 40px;
    }

    .video_section_subtitle {
        width: 432px;
        font-size: 14px;
        line-height: 20px;
        margin-top: 16px;
        margin-bottom: 45px;
    }

    .videocard--2 {
        right: -84% !important;
        left: auto;
        top: 8%;
    }

    .videocardPlayButton1 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton2 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton1 {
        left: 40%;
        top: 40%;
    }

    .videocardPlayButton2 {
        left: 40%;
        top: 40%;
    }

    .videoBorder {
        box-shadow: 0 0 0 4px var(--grey04) !important;
        /* using box-shadow instead of border for inner radius */
    }

    .videocard--2:hover {
        box-shadow: 0 0 0 4px var(--grey04);
        /* using box-shadow instead of border for inner radius */
    }

    .iframePlayer {
        width: 338px !important;
        height: 220px !important;
    }

    .video_section_carousel {
        width: 50vw;
        height: 220px;
    }

    .videocard__img {
        height: 100% !important;
    }

    .videocard__img--hover {
        width: auto !important;
        height: 100% !important;
    }

    .play_image {
        width: 40px;
        height: 40px;
        left: 40%;
        top: 30%;
    }

    /*Bottom-banner*/
    .bottomBannerSection {
        overflow: hidden;
    }

    .bottomBanner {
        background-image: url(https://moneyview.in/images/Bottom-Banner-Mobile-Bg.webp);
        background-repeat: no-repeat;
        background-color: unset !important;
        background-size: cover;
        background-position: right 0% bottom 0%;
        margin: 60px 24px 0px 24px !important;
        height: 380px;
        border-radius: 12px;
        padding-top: 0px !important;
    }

    .bottomBannerTitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 12px;
        width: 254px;
    }

    .bottomBannerImage {
        width: 70%;
        height: auto;
        margin-bottom: -1%;
        margin-top: 24px;
    }

    .bottomBannerSubTitle {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 12px;
    }

    .bottomBannerTextPadding {
        padding: 24px 0px 0px 24px;
    }

    .bottom-banner-backdrop {
        height: 380px;
        width: calc(100vw - 48px);
        bottom: 2px;
    }

    /*Accordian*/

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    /* FAQ */

    .accordion .card .card-body .FaqContent {
        margin-bottom: 12px;
    }

    .benefitsMargin {
        margin-block: 40px !important;
    }

    @media screen and (min-width: 480px) and (max-width: 599px) {
        .bottom-banner-backdrop {
            height: 380px;
            width: calc(100vw - 48px);
            bottom: 2px;
        }
    }

}

@media screen and (min-width: 280px) and (max-width: 479px) {
    section {
        align-items: unset;
    }

    /* Header-Banner */
    .navMenu {
        display: none;
    }

    .PLSideMenuLinks {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-left: 52px;
        text-align: left;
    }

    .navLink {
        font-size: 14px !important;
        line-height: 24px !important;
    }

    .header_banner {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 48.34%, #FFFFFF 61.2%), linear-gradient(109.47deg, #F0F8F3 37.69%, #FFFFFF 86.94%);
    }

    .banner_bg_pattern {
        width: 260px;
        height: 240px;
    }

    .lead_gen_section {
        gap: 12px;
    }

    .header_section_container {
        margin-top: 62px;
    }

    .header_banner_lead_card {
        border-radius: 0px;
        padding: 24px 24px 12px 24px;
        margin-inline: -24px;
        position: relative;
        box-shadow: none !important;
        background: transparent;
    }

    .header_banner_text_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 2;
    }

    .header_banner_image_span {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 1;
    }

    .header_banner_subtitle {
        font-weight: var(--font-weight-semibold);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        max-width: 266px;
    }

    .header_banner_title {
        font-weight: var(--font-weight-bold);
        font-size: 32px;
        line-height: 32px;
        padding-bottom: 12px;
        margin-bottom: 0px;
    }

    .header_banner_heading {
        font-weight: var(--font-weight-regular);
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 0px;
        padding-bottom: 16px;
    }

    .header_generate_otp_container {
        width: 100%;
        gap: 8px;
    }

    .header_apply_online_container {
        width: 100%;
        gap: 23px;
    }

    .verify_otp_lead_gen_btn {
        width: 100% !important;
        height: 56px;
        padding: 16px 20px;
        font-weight: var(--font-weight-regular);
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .header_generate_otp_input {
        height: 56px !important;
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 20px !important;
    }

    .verify_otp_lead_gen_input {
        width: 100% !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-regular) !important;
        line-height: 22px !important;
    }

    .header_generate_otp_consent {
        width: 16px;
        height: 16px;
    }

    .header_generate_otp_consent:checked {
        background-size: 12px !important;
    }

    .header_generate_otp_consent_text {
        font-size: 7px;
        line-height: 12px;
    }

    #banner_image {
        min-width: 285px;
        width: 100%;
        aspect-ratio: 991/872;
    }

    .resend_otp {
        font-weight: var(--font-weight-regular);
        font-size: 14px;
        line-height: 22px;
        color: var(--primary-color);
        padding-right: 0px !important;
    }

    /* get started section */
    .get_started_lottie {
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 2;
    }

    .get_started_text {
        grid-column-start: 1;
        grid-column-end: span 6;
        grid-row-start: 1;
    }

    .get_started_text_div {
        width: 100%;
    }

    .get_started_title {
        font-size: 32px;
        line-height: 44px;
        width: 312px;
    }

    .get_started_subtitle {
        font-size: 14px;
        line-height: var(--body-line-height);
        margin-top: 16px;
    }

    /* what makes mv better section */

    .cardMarginTop {
        margin-top: 24px;
    }

    .what_makes_moneyview_better_title {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 24px;
    }

    .paddingDiv {
        padding: 36px 28px 28px 28px;
    }

    .betterCard {
        width: 100%;
        border-radius: 12px;
    }

    .cardTitle {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 16px;
        width: 100%;
    }

    .removeBr br {
        display: none;
    }

    .cardDescription {
        font-size: 14px;
        line-height: var(--body-line-height);
        width: 256px;
        min-height: 96px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 8px;
    }

    /* trust marker */
    .trustMarker {
        margin-top: 72px;
    }

    .trust-marker-1 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .trust-marker-2 {
        display: grid;
        grid-column-start: 1;
        grid-column-end: span 6;
    }

    .trust-marker-image {
        width: 24px;
        height: 24px;
    }

    .trust-marker-container {
        padding: 0px 0px 0px 12px;
    }

    .trust-marker-title {
        font-size: 18px;
        line-height: var(--body-line-height);
        margin-bottom: 4px;
    }

    .trust-marker-content {
        height: 40px;
        font-size: 14px;
        line-height: 20px;
    }

    .trust-marker-heading {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 12px;
    }

    .trust-marker-subheading {
        font-size: 14px;
        line-height: var(--body-line-height);
        margin-bottom: 22px;
    }

    .trustMarkerMargin {
        margin-bottom: 16px;
    }

    .trust-marker-col-1 {
        padding: 56px 0px 0px;
    }

    .trustclass {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 12px;
    }

    .trustRowClass {
        display: grid;
        grid-column-end: span 6;
    }

    .trust_marker_model_image {
        width: 100%;
        align-self: end;
        margin-top: -80px;
    }

    /*review section*/
    .reviewSection {
        margin-bottom: 24px;
    }

    .reviewCardMargin {
        margin-top: 16px;
    }

    .reviewCard {
        border: 1px solid var(--grey02);
        border-radius: 16px;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .customerReviewTitle {
        font-size: 28px;
        line-height: 36px;
    }

    .customer-image {
        width: 40px;
        height: 40px;
    }

    .customer-class {
        padding-left: 8px;
    }

    .customer-name {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 2px;
    }

    .review-details {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 0px;
    }

    .checked {
        font: normal normal normal 12px/1 FontAwesome;
        margin-right: 6px;
        border-radius: 0.5px;
    }

    .review-content {
        font-size: 14px;
        line-height: 22px;
    }

    .customerRating {
        margin: 14px 0px;
    }

    /* emi section */
    .display-desktop {
        display: none;
    }

    .display-mobile {
        display: flex;
    }

    .emiCalculator {
        margin-top: 36px !important;
    }

    .emiCalculatorMargin {
        margin-block: 12px 20px !important;
        margin-inline: 24px !important;
    }

    .heading {
        margin-bottom: 8px;
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .subHeading {
        font-size: 12px;
        line-height: 18px;
    }

    .calculateEmi {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .calculateEmiButton {
        margin-top: 16px;
    }

    .rightArrow {
        margin-top: 2px;
        width: 25px;
        height: 15px;
        margin-left: 8px;
    }

    .emi-calculator-image {
        margin-left: 2px;
        width: 180px;
        margin-inline: unset;
    }

    /* video section */
    .video_section_title {
        font-size: 36px;
        line-height: 36px;
    }

    .video_section_subtitle {
        width: 305px;
        font-size: 14px;
        line-height: var(--body-line-height);
        margin-top: 16px;
        margin-bottom: 34px;
    }

    .videocard--2 {
        left: 50% !important;
        top: 8%;
    }

    .videocardPlayButton1 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton2 img {
        width: 40px;
        height: 40px;
    }

    .videocardPlayButton1 {
        left: 40%;
        top: 40%;
    }

    .videocardPlayButton2 {
        left: 40%;
        top: 40%;
    }

    .videoBorder {
        box-shadow: 0 0 0 2px var(--grey04) !important;
        /* using box-shadow instead of border for inner radius */
    }

    .videocard--2:hover {
        box-shadow: 0 0 0 2px var(--grey04);
        /* using box-shadow instead of border for inner radius */
    }

    .iframePlayer {
        width: 338px !important;
        height: 220px !important;
    }

    /* video Section */
    .video_section_carousel {
        width: 210px;
        height: 118px;
    }

    .videocard__img {
        width: 210px !important;
        height: 118px !important;
    }

    .videocard__img--hover {
        width: 210px !important;
        height: 118px !important;
    }

    /*Bottom-banner*/
    .bottomBannerSection {
        overflow: hidden;
    }

    .bottomBanner {
        background-image: url(https://moneyview.in/images/Bottom-Banner-Mobile-Bg.webp);
        background-repeat: no-repeat;
        background-color: unset !important;
        background-size: cover;
        background-position: right 0% bottom 0%;
        margin: 60px 24px 0px 24px !important;
        height: 380px;
        border-radius: 12px;
        padding-top: 0px !important;
    }

    .bottomBannerTitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 12px;
        width: 254px;
    }

    .bottomBannerImage {
        width: 78%;
        height: auto;
        margin-bottom: -1%;
        margin-top: 24px;
    }

    .bottomBannerSubTitle {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 12px;
    }

    .bottomBannerTextPadding {
        padding: 24px 0px 0px 24px;
    }

    .bottom-banner-backdrop {
        height: 380px;
        width: calc(100vw - 48px);
        bottom: 2px;
    }

    /*Accordian*/

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    /* FAQ */
    .accordion .card .card-body .FaqContent {
        margin-bottom: 12px;
    }

    .benefitsMargin {
        margin-block: 40px !important;
    }

    @media screen and (min-width: 400px) and (max-width: 480px) {
        .bottom-banner-backdrop {
            height: 380px;
            width: calc(100vw - 48px);
            bottom: 2px;
        }
    }

}
</style>
