<template>
<div class="personal_loan_subpages">
    <div class="container">
        <div class="container breadcrumb_alignment paddingInline0">
            <ul class="breadcrumb_list">
                <li>
                    <span>
                        <router-link to="/">Home</router-link>
                    </span>
                </li>
                <li>
                    <span>
                        <router-link to="/personal-loan">Personal Loan</router-link>
                    </span>
                </li>
                <li>
                    <span class="breadcrumb-font">How to Apply for a Personal Loan</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="bannerContainer" style="background-image: url(https://moneyview.in/images/personal-loan-online.jpg);">
        <div class="bannerClass">
            <div class="container">
                <div class="container banner">
                    <div class="text-center bannerContent paddingLeft8">
                        <div>
                            <h1 class="banner_text font-weight-bold responsiveTextH1">How to Apply for a Personal Loan</h1>
                        </div>
                        <div>
                            <h5 class="banner_text p20-top">Check Your Loan Eligibility in 2 mins &amp; Apply Now</h5>
                        </div>
                    </div>
                </div>
                <div class="d-flex center_item btn_alignment">
                    <router-link class="btn btn-lg cta-btn btn_class banner_btn space_top" id="bannerUrl" to="/personal-loan">
                        Apply Online
                    </router-link>
                    <a href="https://mvl.onelink.me/504844896/662kou59" class="playstore_btn">
                        <img class="img-fluid banner_btn space_top" src="https://moneyview.in/images/dist/img/Google-Play-Badge-US.svg" width="175" alt="play_store_buttton" loading="lazy">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="container my-2 paddingInline0">
        <div class="container">
            <div class="topFeaturesOverlay">
                <div class="main">
                    <h2 class="mvl-h2 mb-4">Top Features and Benefits of Personal Loan</h2>
                    <div class="row topFeatures">
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3  ">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%208.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Flexible Loan Amount</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">Based on the eligibility factors you can choose a loan amount of upto Rs. 10 lakhs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3  ">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%209.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>24 Hour Disbursal</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">Once approved, your loan amount will be credited to your account within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopEndItems ">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2010.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Collateral Free Loans</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">To apply for a personal loan through Money View, you don’t have to pledge any asset or arrange for a guarantor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopEndItems ">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2011.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Affordable Interest Rates</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">We understand how important interest rates are as they determine the EMI amount to be paid. At Money View, the interest rate starts at just 1.33% per month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopToggleItems" v-if="isMore">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2012.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Completely Paperless</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">All we require are your ID proof, address proof, and income proof.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopToggleItems " v-if="isMore">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2013.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Flexible Repayment Term</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">Applicants can choose flexible repayment tenure of up to 5 years.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopToggleItems" v-if="isMore">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2014.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Loans on Low Credit Score</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">The minimum score required is a CIBIL score of 650 or Experian score of 650.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 mt-3 mb-3 desktopToggleItems" v-if="isMore">
                            <div class="row">
                                <div class="col-4 d-flex align-items-center">
                                    <img src="https://moneyview.in/images/Asset%2015.png" alt="topfeature_icon" class="icon_style" loading="lazy">
                                </div>
                                <div class="col-8 valign-items-middle">
                                    <div class="row">
                                        <div class="col-10">
                                            <p class="mv-why-us features_text green_color"><strong>Quick Eligibility Check</strong></p>
                                        </div>
                                        <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                    </div>
                                    <p class="mv-why-us features_text desktop features">Find out your eligibility within just 2 minutes from the Money view website or loan app.</p>
                                </div>
                            </div>
                        </div>
                        <div class="expandMoreBtn desktop" @click="toggleIsMore">
                            <i class="fa expandBtn" :class="{'fa-angle-down': !isMore, 'fa-angle-up': isMore}"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-3">
            <p class="mv-why-us text-left">Our 100% paperless process simplifies the loan application &amp; provides instant approval within a few hours!</p>
            <h2 class="mv-h2-text text-left">Steps to Apply for a Personal Loan</h2>
            <ul class="ul-check mv-why-us text-left">
                <li>
                    <h3 class="mv-why-us text-left"><strong>Check your Eligibility</strong></h3>
                </li>
            </ul>
            <p class="mv-why-us text-left">Register on the Money View<a href="https://moneyview.in/apply-loan/signup"> website</a> or <a href="https://play.google.com/store/apps/details?id=com.whizdm.moneyview.loans" target="_blank" rel="noopener">download the app</a> and provide the following -</p>
            <ul class="mv-why-us text-left">
                <li>
                    <p class="mv-why-us text-left">First and last name according to your PAN card</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Income</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Age and date of birth</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Location and area code</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Gender</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Purpose of availing said loan</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">PAN number</p>
                </li>
                <li>
                    <p class="mv-why-us text-left">Mobile number</p>
                </li>
            </ul>
            <p class="mv-why-us text-left">And any other requested details.</p>
            <p class="mv-why-us text-left">Once this is done, sit back and relax while we calculate your eligibility within 2 minutes</p>
            <ul class="ul-check mv-why-us text-left">
                <li>
                    <h3 class="mv-why-us text-left"><strong>Select a Loan Plan</strong></h3>
                </li>
            </ul>
            <p class="mv-why-us text-left">Based on the information provided &amp; your credit profile, an eligible loan amount will be displayed. Select the loan amount as well as repayment tenure of your choice that suits your requirements</p>
            <ul class="ul-check mv-why-us text-left">
                <li>
                    <h3 class="mv-why-us text-left"><strong>Complete KYC &amp; Income Verification</strong></h3>
                </li>
            </ul>
            <p class="mv-why-us text-left">The next step is to upload all the required documents such as ID proof, address proof, and income proof. You will also be required to take your Selfie &amp; upload images of your PAN Card. The entire process is 100% online and does not require any physical copies.</p>
            <ul class="ul-check mv-why-us text-left">
                <li>
                    <h3 class="mv-why-us text-left"><strong>Loan Approval &amp; EMI-Auto debit</strong></h3>
                </li>
            </ul>
            <p class="mv-why-us text-left">Once your documents are verified, your loan will be instantly approved. You’ll now be required to enable the EMI-auto debit or NACH mandate using Netbaking/Debit card or NACH Form. This step ensures that the auto-debit facility for your bank account is activated for easy monthly EMI payments.</p>
            <ul class="ul-check mv-why-us text-left">
                <li>
                    <h3 class="mv-why-us text-left"><strong>Loan Disbursal</strong></h3>
                </li>
            </ul>
            <p class="mv-why-us text-left">Once the EMI-auto debit is enabled, you’ll be sent a Loan Agreement with details like your loan amount, interest, applicable fees &amp; tenure etc. Kindly review the same &amp; submit. Once submitted, the loan amount will be transferred to your bank A/c within 1 business day.</p>
            <p class="mv-why-us text-left">In five quick and easy steps you can now avail an instant personal loan from Money View.</p>
        </div>

        <section class="container my-5 pb-2">
            <h2 class="mv-h2-text text-center pb-3"> How to Apply for a Personal Loan - Related FAQs </h2>
            <div id="faq-section" class="accordion text-left mt-4 margin_accordion">
                <div class="card">
                    <div class="card-header" id="faq1">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                            1. Why Should I Avail A Personal Loan From Money View?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq1" class="collapse show" aria-labelledby="faq1" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">While there are many personal loans available in the market today, the benefits offered by Money View instant personal loans are immense. Some of these include -</p>
                            <ul class="mv-why-us text-left">
                                <li>Quick eligibility check that takes less than 2 minutes</li>
                                <li>Flexibility in selecting the loan amount and repayment term</li>
                                <li>Hassle-free and digital loan application process</li>
                                <li>Unique credit verification system ensuring lenient eligibility</li>
                                <li>Loan disbursement within 24 hours of loan approval</li>
                                <li>Purpose of availing said loan</li>
                                <li>No collateral or hidden charges</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq2">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                            2. How Long Does Money View Take To Disburse My Loan?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq2" class="collapse " aria-labelledby="faq2" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">As part of our personal loan process, once your loan application has been processed and approved, the loan amount will be credited to your bank account within 24 hours.<br></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq3">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                            3. How Will I Pay The EMIs For My Personal Loan?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq3" class="collapse " aria-labelledby="faq3" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">As part of the personal loan process, you will be required to submit a NACH mandate allowing us to auto debit your EMI amount. This ensures that the process of paying your EMIs is hassle-free.</p>
                            <p class="mv-why-us text-left">In case the auto-debit feature for your loan account is not activated or enabled, you can pay your EMIs through the ‘Pay Now’ option on our app through your debit card or netbanking.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq4">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                            4. Why Do I Need To Submit The NACH Mandate? Does My Loan Get Disbursed Immediately After I Submit The NACH Form?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq4" class="collapse " aria-labelledby="faq4" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">In order to ensure hassle-free and timely repayment of your EMIs, you will need to enable the auto debit facility from your bank through the NACH mandate. You will have to download, print, sign the same and email it to us.</p>
                            <p class="mv-why-us text-left">Regarding the loan disbursement, after your loan agreement is reviewed, you will receive an OTP on your registered mobile number which will have to be entered for the submission and approval of your loan agreement. Your loan will be disbursed after this.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq5">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                            5. Can I Cancel The Loan At Any Stage?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq5" class="collapse " aria-labelledby="faq5" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">No, as a customer you are allowed to cancel your loan only before the loan application is processed. After processing, you will not be able to cancel your loan<br></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq6">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                            6. How To Apply For A Personal Loan If The App Crashes Midway Through The Application Process?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq6" class="collapse " aria-labelledby="faq6" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">Our app has been designed to ensure a smooth experience free from errors of any kind. However, if the app does crash, please do not worry, you will be able to restart the process from the same step.<br></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq7">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                            7. Is Money View The Lender Of This Loan? If Not, Does My Data Get Shared With The Lender When I Apply For A Loan?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq7" class="collapse " aria-labelledby="faq7" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">No, Money View only facilitates the process of lending as well as repayment of loans. Your data will be shared with the lender in order to process your loan. However, the entire process of applying for and receiving a loan from Money View is completely safe and secure.<br></p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="faq8">
                        <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq8" aria-controls="collapseFaq8">
                            8. I Am Unable To Fill In My Current Address. What Should I Do?
                            <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                        </a>
                    </div>
                    <div id="collapseFaq8" class="collapse " aria-labelledby="faq8" data-parent="#faq-section">
                        <div class="card-body">
                            <p class="mv-why-us text-left">While providing your address please ensure that you are providing your information in English without using any special characters. You will need to provide your complete address with your house number, street name, and other details wherever applicable.</p>
                            <p class="mv-why-us text-left">Additionally, please ensure that the address you provide matches the one specified in your documents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section class="mt-5 interlinksSectionContainer">
        <div class="container">
            <h2 class="mv-h2-text text-center interlinksHeading"> INTERLINKS </h2>
            <div class="row interlinks_alignment">
                <div class="col-sm-12 col-md-4 order-2 order-md-1 interLinkIcon">
                    <div class="accordion text-left" id="interlinks-section">
                        <div class="card">
                            <div class="card-header px-3 py-3" id="heading0">
                                <a data-toggle="collapse" class="collapsed" data-target="#collapse0" aria-expanded="false" aria-controls="collapse0">
                                    Loan Related Articles
                                    <span class="pull-right"><i class="fa fa-angle-down"></i></span>
                                </a>
                            </div>
                            <div id="collapse0" class="collapse show" aria-labelledby="heading0" data-parent="#interlinks-section">
                                <div class="interlinks card-body">
                                    <ul class="interlinks newInterlinks">
                                        <li>
                                            <router-link to="/personal-loan">Apply for Personal Loan</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-interest-rates-and-charges">Personal Loan Interest Rates</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-eligibility-check">Personal Loan Eligibility</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-documents">Documents Required for Personal Loan</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/emi-calculator/personal-loan-emi-calculator">Personal Loan EMI Calculator</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/how-to-apply-for-personal-loan">Steps to Apply for a Personal Loan</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/loans/top-up-personal-loan">Top-Up Personal Loan</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/loans/instant-cash-loan-on-aadhar-card-and-pan-card">Loan on Aadhar &amp; Pan Card</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/loans/instant-personal-loan-for-salaried-employee">Loan for Salaried Employees</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/loans/personal-loan-foreclosure-repayment-procedure">Personal Loan Foreclosure Procedure</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/loans/apply-personal-loan-from-private-finance-company">Personal Loans from Private Finance</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header px-3 py-3" id="heading1">
                                <a data-toggle="collapse" class="collapsed" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    Personal Loan in Top Cities
                                    <span class="pull-right"><i class="fa fa-angle-down"></i></span>
                                </a>
                            </div>
                            <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#interlinks-section">
                                <div class="interlinks card-body">
                                    <ul class="interlinks newInterlinks">
                                        <li>
                                            <router-link to="/personal-loan-in-bangalore">Personal Loan in Bangalore</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-chennai">Personal Loan in Chennai</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-pune">Personal Loan in Pune</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-mumbai">Personal Loan in Mumbai</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-delhi">Personal Loan in Delhi</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-hyderabad">Personal Loan in Hyderabad</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/personal-loan-in-kolkata">Personal Loan in Kolkata</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 order-1 order-md-2">
                    <div class="row pl-md-4">
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/personal-loan">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url('https://moneyview.in/images/Group 38.png');"></div>
                                    <div class="interlinksIconText text-center">Apply for Personal Loan</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/personal-loan-interest-rates-and-charges">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url('https://moneyview.in/images/Asset 11.png');"></div>
                                    <div class="interlinksIconText text-center">Personal Loan Interest Rates</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/personal-loan-eligibility-check">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url('https://moneyview.in/images/Group%2032.png');"></div>
                                    <div class="interlinksIconText text-center">Personal Loan Eligibility</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/personal-loan-documents">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url(&quot;https://moneyview.in/images/Asset%2010.png&quot;);"></div>
                                    <div class="interlinksIconText text-center">Personal Loan Documents</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/loans/instant-personal-loan-for-self-employed">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url(&quot;https://moneyview.in/images/Asset%208.png&quot;);"></div>
                                    <div class="interlinksIconText text-center">Personal Loan for Self Employed</div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-6 col-sm-6 col-md-4">
                            <router-link to="/loans/instant-personal-loan-for-salaried-employee">
                                <div class="interlinksIcon px-2 text-center">
                                    <div class="interlinksImage changeIcon" style="background-image: url('https://moneyview.in/images/Group 284.png');"></div>
                                    <div class="interlinksIconText text-center">Personal Loan for Salaried Employees</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container mt-4">
        <div>
            <form id="feedbackForm" class="row">
                <div class="col-12 row" id="feedbackAction">
                    <p class="feedbackHelpfulText col-12 col-sm-6 col-md-6 col-lg-3 mv-why-us">Was this information useful?</p>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="submit" id="feedbackYes" class="feedbackHelpfulButton" value="yes">Yes</button>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                            <button type="submit" id="feedbackNo" class="feedbackHelpfulButton" value="no">No</button>
                        </div>
                    </div>
                </div>
                <div class="col-12" id="feedbackActionSuccess">
                    <p class="mv-why-us" id="feedbackActionMessageMain"></p>
                    <p class="mv-why-us" id="feedbackActionMessageSecondary"></p>
                </div>
                <div id="feedbackSection" class="col-12 col-lg-5">
                    <textarea id="feedbackComment" name="feedbackComment" rows="4" cols="35" maxlength="300" placeholder="Type your comment"></textarea>
                    <p class="mv-why-us" id="feedbackCommentHelperText">300 characters allowed (alphanumeric and special characters such as comma, full stop, @, ", &amp;)</p>
                    <div>
                        <button disabled="true" type="submit" id="submitFeedback" class="col-12" onclick="event.preventDefault();">Submit</button>
                    </div>
                </div>
            </form>
            <div id="successSection">
                <p>Thank you. Your feedback is important to us.</p>
            </div>
        </div>
    </div>

    <div id="collapse-section" class="accordion text-left container margin_accordion mt-3">
        <div class="card">
            <div class="card-header" id="headingDisclaimer"><a data-toggle="collapse" class="collapsed" data-target="#collapseDisclaimer" aria-expanded="false" aria-controls="collapseDisclaimer">Disclaimer: <span class="pull-right"><i class="fa fa-angle-right"></i></span></a></div>
            <div id="collapseDisclaimer" class="collapse" aria-labelledby="headingDisclaimer" data-parent="#collapse-section">
                <div class="card-body">
                    <p class="mv-why-us p20-top">*Starting interest rate varies on factors like credit history, obligation, or lender. #Indicative disbursement time measured for a loan of Rs 50,000 carried under controlled conditions. Subject to the necessary KYC and Income Verification. T&amp;C apply.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import '../../css/hta_ploan.css';
export default {
    data() {
        return {
            isMore: false
        }
    },

    methods: {
        toggleIsMore() {
            this.isMore = !this.isMore
        }
    }
}
</script>
