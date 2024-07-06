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
                <span class="breadcrumb-font">Documents Required for Personal loan</span>
            </li>
        </ul>
    </div>
</div>

<div class="bannerContainer" style="background-image: url(https://moneyview.in/images/instant-loan-on-aadhar-card-and-pan-card.jpg);">
    <div class="bannerClass">
        <div class="container">
            <div class="container banner">
                <div class="text-center bannerContent paddingLeft8">
                    <div>
                        <h1 class="banner_text font-weight-bold responsiveTextH1">Personal Loan Documents</h1>
                    </div>
                    <div>
                        <h5 class="banner_text p20-top">100% online process helps you apply from the comfort of your home!</h5>
                    </div>
                </div>
            </div>
            <div class="d-flex center_item btn_alignment">
                <router-link to="/personal-loan" class="btn btn-lg cta-btn btn_class banner_btn space_top" id="bannerUrl">
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
                <h2 class="mvl-h2 mb-4">Features and Benefits of Personal Loan</h2>
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
                                <p class="mv-why-us features_text desktop features">Choose any loan amount starting 5,000 up to Rs. 10 lakhs</p>
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
                                <p class="mv-why-us features_text desktop features">Your loan will be credited within a day after your loan application has been approved</p>
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
                                <p class="mv-why-us features_text desktop features">You don’t have to arrange for any guarantor or pledge any asset while applying for personal loans from Money View</p>
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
                                <p class="mv-why-us features_text desktop features">Avail loans at affordable rates starting at just 10% per annum</p>
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
        <p class="mv-why-us text-left">Are you looking for a personal loan that has minimal documentation requirements? Then you’ve come to the right place.</p>
        <p class="mv-why-us text-left">Given below are the documents you need to submit in order to <router-link to="/personal-loan">avail a personal loan</router-link> from Money View -</p>
        <h2 class="mv-h2-text text-left">Documents Required for Personal Loan</h2>
        <p class="mv-why-us text-left">The primary document we require at Money View to process your loan application is your <strong>PAN Card.</strong></p>
        <p class="mv-why-us text-left">Your <strong>PAN Card </strong>will, in most cases, be enough for us to determine your eligibility. However, in certain cases we will require additional documents for proof of address and income.&nbsp;</p>
        <p class="mv-why-us text-left">Given below are the acceptable documents for proof of ID, address, as well as income -</p>
        <div>
            <table class="table table-striped table-bordered mv-why-us text-left">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">Proof of Identity</th>
                        <th scope="col" class="text-center">Proof of Address</th>
                        <th scope="col" class="text-center">Proof of Income</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">PAN Card - This is the primary ID proof required. However, if it is rejected due to image quality issues or other reasons, <strong>any 1</strong> of the officially valid documents given below will suffice</p>
                            <ul class="ul-check mv-why-us text-left">
                                <li>
                                    <p class="mv-why-us text-left">Aadhaar Card</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Indian Passport</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Voter ID</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Driver’s License</p>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <p class="mv-why-us text-left"><strong>Any 1</strong> of the following -&nbsp;</p>
                            <ul class="ul-check mv-why-us text-left">
                                <li>
                                    <p class="mv-why-us text-left">Aadhaar Card</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Indian Passport</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Voter ID</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Valid Driver’s License</p>
                                </li>
                                <li>
                                    <p class="mv-why-us text-left">Utility Bills (Electricity, Water, Gas) dated within the last 60 days</p>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <p class="mv-why-us text-left"><strong><em>Salaried Applicants - </em></strong>Last 3 months’ bank statements of your salary account in PDF format showing salary credits</p>
                            <br>
                            <p class="mv-why-us text-left"><strong>OR</strong></p>
                            <br>
                            <p class="mv-why-us text-left"><strong><em>Self-Employed Applicants -</em></strong><em> </em>Last 3 months’ bank statements in PDF format</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 class="mv-h2-text text-left">List of Documents Required for Salaried Employees</h2>
        <p class="mv-why-us text-left">If you are a salaried employee and you fulfill our eligibility criteria, you will need to provide the following documents -</p>
        <p class="mv-why-us text-left">The primary document we will require is your PAN Card. However, if this document is unacceptable due to reasons such image quality issues, then any of the documents given below will be accepted -</p>
        <ul class="mv-why-us text-left">
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Identity (any 1 of the following)</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Indian Passport</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Aadhaar Card</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Driver’s License</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Voter ID</p>
                    </li>
                </ol>
            </li>
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Address (any 1 of the following)</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Aadhaar Card</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Voter ID</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Indian Passport</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Utility Bills (Electricity, Water, Gas) dated within the last 60 days</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Driver’s License</p>
                    </li>
                </ol>
            </li>
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Income</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Last 3 months’ bank statements of your salary account in PDF format showing salary credits</p>
                    </li>
                </ol>
            </li>
        </ul>
        <h2 class="mv-h2-text text-left">List of Documents Required for Self- Employed Employees</h2>
        <p class="mv-why-us text-left">The following documents will have to be submitted by all self-employed applicants -</p>
        <p class="mv-why-us text-left">The most important document that we will need is your PAN Card. However, if this document is rejected for any reason, then any of the documents given below will be accepted -</p>
        <div>
            <table class="table table-striped table-bordered mv-why-us text-left" id="table1" style="width: 86.6489%; height: 255.906px;">
                <tbody>
                    <tr style="height: 22.3906px;">
                        <td rowspan="4" class="text-left" style="vertical-align: middle;">
                            <p class="mv-why-us text-left"><strong>Proof of Identity&nbsp;</strong></p>
                            <p class="mv-why-us text-left"><strong>(any 1 of the following)</strong></p>
                        </td>
                        <td class="text-left" style="width: 73.9159%; height: 22.3906px;">Valid Indian Passport</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="text-left" style="width: 73.9159%; height: 22.3906px;">Valid Voter ID</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="text-left" style="width: 73.9159%; height: 22.3906px;">Valid Driver’s License</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="text-left" style="width: 73.9159%; height: 22.3906px;">Aadhaar Card</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td rowspan="5" class="text-left" style="vertical-align: middle;">
                            <p class="mv-why-us text-left"><strong>Proof of Address&nbsp;</strong></p>
                            <p class="mv-why-us text-left"><strong>(any 1 of the following)</strong></p>
                        </td>
                        <td class="text-left" style="width: 73.9159%; height: 22.3906px;">Valid Indian Passport</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="mv-why-us text-left" style="width: 73.9159%; height: 22.3906px;">Valid Voter ID</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="mv-why-us text-left" style="width: 73.9159%; height: 22.3906px;">Valid Driver’s License</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="mv-why-us text-left" style="width: 73.9159%; height: 22.3906px;">Aadhaar Card</td>
                    </tr>
                    <tr style="height: 22.3906px;">
                        <td class="mv-why-us text-left" style="width: 73.9159%; height: 22.3906px;">Utility Bills (Electricity, Water, Gas) dated within the last 60 days</td>
                    </tr>
                    <tr style="height: 54.3906px;">
                        <td rowspan="2" class="text-left" style="vertical-align: middle;">
                            <p class="mv-why-us text-left"><strong>Proof of Income</strong></p>
                        </td>
                        <td class="mv-why-us text-left" style="width: 73.9159%; height: 54.3906px;">Last 3 months’ bank statements in PDF format.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 class="mv-h2-text text-left">List of Documents Required for Pensioners</h2>
        <p class="mv-why-us text-left">If you are a pensioner who requires a loan from Money View, assuming you have fulfilled our eligibility conditions, you will have to provide the documents given below -</p>
        <p class="mv-why-us text-left">The most important document that we will require is your PAN Card. However, if this document is not accepted for any reason, then any of the documents given below will be accepted -</p>
        <ul class="mv-why-us text-left">
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Identity (any 1 of the following)</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Driver’s License</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Indian Passport</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Aadhaar Card</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Voter ID</p>
                    </li>
                </ol>
            </li>
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Address (any 1 of the following)</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Aadhaar Card</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Utility Bills (Electricity, Water, Gas) dated within the last 60 days</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Voter ID</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Driver’s License</p>
                    </li>
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Valid Indian Passport</p>
                    </li>
                </ol>
            </li>
            <li>
                <p class="mv-why-us text-left"><strong>Proof of Income</strong></p>
                <ol class="mv-why-us text-left">
                    <li style="list-style-type: lower-alpha;">
                        <p class="mv-why-us text-left">Last 3 months’ bank statements in PDF format showing your credited pension</p>
                    </li>
                </ol>
            </li>
        </ul>
    </div>

    <section class="mb-5 pb-2 container">
        <h2 class="mvl-h2 text-center">How to Submit Personal Loan Documents Online</h2>
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="row applyLoanClass d-flex  align-items-center justify-content-center">
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-flex justify justify-content-center align-items-center">
                            <img src="https://moneyview.in/images/Group%2038-1.png" alt="icon" width="100" height="100">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-6 padding-left-right">
                        <p class="mv-why-us green_color text-left"><strong>Check Eligibility</strong></p>
                        <p class="mv-why-us text-left">Firstly, visit the Money View website or download the personal loan app and provide all the details required. We will then let you know your eligibility in just 2 minutes</p>
                    </div>
                </div>
                <div class="row applyLoanClass d-flex flex-row-reverse flex-md-row align-items-center justify-content-center">
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-flex justify justify-content-center align-items-center">
                            <img src="https://moneyview.in/images/Group%2038.png" alt="icon" width="100" height="100">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-6 padding-left-right">
                        <p class="mv-why-us green_color text-right text-md-left"><strong>Select Loan Tenure</strong></p>
                        <p class="mv-why-us text-right text-md-left">After that, based on your eligibility, you will be able to choose the loan amount and repayment term of your choice</p>
                    </div>
                </div>
                <div class="row applyLoanClass d-flex  align-items-center justify-content-center">
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-flex justify justify-content-center align-items-center">
                            <img src="https://moneyview.in/images/Group%2044.png" alt="icon" width="100" height="100">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-6 padding-left-right">
                        <p class="mv-why-us green_color text-left"><strong>Upload Documents</strong></p>
                        <p class="mv-why-us text-left">Now, you can instantly upload all of the necessary documents online for verification, completely digital and hassle-free through the app itself</p>
                    </div>
                </div>
                <div class="row applyLoanClass d-flex flex-row-reverse flex-md-row align-items-center justify-content-center">
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-flex justify justify-content-center align-items-center">
                            <img src="https://moneyview.in/images/Group%2032.png" alt="icon" width="100" height="100">
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-6 padding-left-right">
                        <p class="mv-why-us green_color text-right text-md-left"><strong>Amount Disbursed</strong></p>
                        <p class="mv-why-us text-right text-md-left">After your documents have been verified and your application is approved, the loan amount will be credited directly to your account within 24 hours</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 d-flex align-items-center desktop">
                <img src="https://moneyview.in/images/ic-plan-selector-banner.png" alt="mobile_img" class="w100">
            </div>
        </div>
    </section>

    <div class="container">
        <div class="parallax margin_top60 desktop alignment">
            <div class="container">
                <div class="main">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mvl-h2-white">Loan EMI Calculators</h2>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/personal-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 266.png" alt="Personal Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Personal Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/education-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 269.png" alt="Education Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Education Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/bike-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 271.png" alt="Bike Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Bike Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/car-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 274.png" alt="Car Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Car Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/home-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 277.png" alt="Home Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Home Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/gold-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 281.png" alt="Gold Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Gold Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/business-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 284.png" alt="Business Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Business Loan EMI Calculator</div>
                            </router-link>
                        </div>
                        <div class="col-3 paddingInline16">
                            <router-link to="/emi-calculator/mortgage-loan-emi-calculator" class="calculator_btn px-2 text-center d-flex align-items-center flex-row">
                                <img src="https://moneyview.in/images/Group 287.png" alt="Mortgage Loan EMI Calculator" height="70" width="70" class="icon_alignment d-flex align-self-center" loading="lazy">
                                <div class="text-center emiTitle">Mortgage Loan EMI Calculator</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="parallax banner_mobile alignment mb-5">
        <div class="container">
            <div class="main">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-9 col-md-9 col-sm-6">
                        <h2 class="mvl-h2-white">Calculate Your EMI</h2>
                        <p class="calculator_text">Use our easy EMI calculator to plan your loan's EMI, interest &amp; repayment schedule.</p>
                    </div>
                    <div class="col-md-3">
                        <router-link to="/emi-calculator/personal-loan-emi-calculator" class="btn btn-lg cta-btn-white">
                            CALCULATE EMI
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container my-2">
        <h3 class="mv-h3-text text-left">Conclusion</h3>
        <p class="mv-why-us text-left">At moneyview, we strive to make our loan application process as smooth and hassle-free as possible. This is why we have kept our documentation requirements to a minimum. No one wants to travel back and forth to the lender with multiple documents which is why our instant application process and minimal documentation requirements are always a hit!</p>
    </div>

    <section class="container my-5 pb-2">
        <h2 class="mv-h2-text text-center pb-3"> Personal loan Documents - Related FAQs </h2>
        <div id="faq-section" class="accordion text-left mt-4 margin_accordion">
            <div class="card">
                <div class="card-header" id="faq1">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                        1. I Am Unable To Upload The Documents Online. Can I Send The Documents Via Email?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq1" class="collapse" aria-labelledby="faq1" data-parent="#faq-section" style="">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Our application process is completely digital therefore all personal loan documents will have to be submitted online for faster processing. We do not accept documents sent via email. In case you are unable to upload the same, please send us a screenshot of the issue to loans@moneyview.in.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq2">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                        2. I Do Not Have Any Of The Documents Required For Income Proof. How Can I Go Ahead With The Application?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq2" class="collapse" aria-labelledby="faq2" data-parent="#faq-section" style="">
                    <div class="card-body">
                        <p class="mv-why-us text-left">We cannot process your application without all the documents required for personal loan. Please try to arrange the respective documents at the earliest so that your loan application can be processed.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq3">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                        3. I Have Uploaded All The Requested Documents Required For Personal Loan But I Received A Mail Asking For More. What Is The Reason Behind This?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq3" class="collapse " aria-labelledby="faq3" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">You will receive an email from us asking for additional documents only if there is an issue with the documents that have already been submitted. All details regarding this will be elaborated in the email itself. Please follow the instructions given to avoid such situations. Additionally, uploading the documents on our app directly will ensure faster processing.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq4">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                        4. Will I Have To Upload A Video With My Documents? If So, Will The Soft Copy Suffice?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq4" class="collapse " aria-labelledby="faq4" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Yes, you will need to submit a video with the hard copy of your PAN card. If you do not have your PAN card with you, you can do so with a hard copy of your Aadhaar card as well. Video with a soft copy of your document is not acceptable.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq5">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                        5. I Do Not Have A Netbanking Account/My Netbanking ID Is Currently Not Valid. How Else Can I Upload My Bank Statement?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq5" class="collapse " aria-labelledby="faq5" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">If you do not have a netbanking account, please contact your bank directly to register yourself. Once you have your ID and password, login, and download the PDF version of your bank statement which can then be uploaded to your moneyview loan application.</p>
                        <div></div>
                        <div>
                            <p class="mv-why-us text-left">If your netbanking ID is not valid, kindly contact your bank at the earliest to rectify the same.</p>
                        </div>
                        <div></div>
                        <p class="mv-why-us text-left">Additionally, once you get your bank statement, ensure that it is in the right format before uploading it on to our app or website.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq6">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                        6. I Have Recently Changed My Bank And Currently Only Have Salary Slips For The Past 2 Months. To Meet Your Criteria Of 3 Months’ Salary Slips, Can I Upload A Salary Slip From My Previous Bank Account?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq6" class="collapse " aria-labelledby="faq6" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">We currently accept only 1 bank statement for applicants. Therefore, you will have to ensure that all your salary slips are from your salary account before uploading the same.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq7">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                        7. What are 3 documents needed for a personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq7" class="collapse " aria-labelledby="faq7" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">In order to get a personal loan from moneyview, we mainly require your PAN card. However, we may also require additional proof of identity, proof of address, and proof of income.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq8">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq8" aria-controls="collapseFaq8">
                        8. How fast is the personal loan documentation process?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq8" class="collapse " aria-labelledby="faq8" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Our application process is smooth, hassle-free, and extremely fast. If you meet our eligibility criteria and your documents are in our order, then you can get your loan amount credited to your account within 24 hours of application approval.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq9">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq9" aria-controls="collapseFaq9">
                        9. Is a salary slip mandatory for a personal loan from moneyview?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq9" class="collapse " aria-labelledby="faq9" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">No, while a salary slip is not mandatory for applicants, we may require this document in certain cases. If you are a self-employed applicant, you can provide your last 3 months’ bank statements in PDF format.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq10">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq10" aria-controls="collapseFaq10">
                        10. Which documents could be used as income proof?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq10" class="collapse " aria-labelledby="faq10" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">The following documents can be used as proof of income -</p>
                        <ul class="mv-why-us text-left">
                            <li>Last 3 months’ bank statements of your salary account in PDF format showing salary credits</li>
                            <li>Last 3 months’ bank statements in PDF format</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq11">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq11" aria-controls="collapseFaq11">
                        11. Do I have to submit my original KYC documents when applying for a personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq11" class="collapse " aria-labelledby="faq11" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Yes, you will have to provide original KYC documents while applying for a personal loan. In most cases however, we will only require your PAN card and the entire application process is done online.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq12">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq12" aria-controls="collapseFaq12">
                        12. What are the personal loan documents required for self-employed applicants?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq12" class="collapse " aria-labelledby="faq12" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">The most important document that we will need is your PAN Card. However, if this document is rejected for any reason, then you can check the list of&nbsp;<router-link to="/personal-loan-documents">personal loan documents required for self-employed applicants</router-link>&nbsp;in the moneyview site.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq13">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq13" aria-controls="collapseFaq13">
                        13. What are the personal loan documents required for salaried applicants?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq13" class="collapse " aria-labelledby="faq13" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Your PAN Card is the primary document required for us to process your loan application. However, if this document is not accepted due to reasons such image quality issues, then you can submit any of the&nbsp;<router-link to="/personal-loan-documents" style="background-color: rgb(255, 255, 255);">personal loan documents required for salaried applicants</router-link>&nbsp;listed in the moneyview site.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq14">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq14" aria-controls="collapseFaq14">
                        14. Is there any documentation process for a pre-approved personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq14" class="collapse " aria-labelledby="faq14" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">You will have to provide documents supporting your application without which your loan will not be sanctioned. However, at moneyview we require a maximum of three documents.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq15">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq15" aria-controls="collapseFaq15">
                        15. Can I apply for a personal loan without a PAN card?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq15" class="collapse " aria-labelledby="faq15" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Most lenders require your PAN card as a primary document while processing your loan application. This is also the case with moneyview. However, if your PAN card is damaged or lost, you will be able to provide&nbsp;<router-link to="/personal-loan-documents" style="background-color: rgb(255, 255, 255);">other documents to support your personal loan</router-link>&nbsp;application.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq16">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq16" aria-controls="collapseFaq16">
                        16. Are the documents required to apply for a personal loan the same across lenders?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq16" class="collapse " aria-labelledby="faq16" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">No, the documentation requirements will vary from one lender to another. At moneyview, we focus on keeping our documentation requirements minimal.&nbsp;</p>
                        <p class="mv-why-us text-left">While we mainly require your PAN card as the primary documents, we may also need additional proof of address and income.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq17">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq17" aria-controls="collapseFaq17">
                        17. What is the documentation process for personal loans applied online through the lender's website?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq17" class="collapse " aria-labelledby="faq17" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">You can get a personal loan from moneyview by either applying through our website or app. In case you have applied through our app, once you fulfill our eligibility criteria, you will be asked to submit the original documents online itself.&nbsp;</p>
                        <p class="mv-why-us text-left">The entire process from application to disbursal is entirely online.</p>
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
                                    <li><router-link to="/personal-loan">Apply for Personal Loan</router-link></li>
                                    <li><router-link to="/personal-loan-interest-rates-and-charges">Personal Loan Interest Rates</router-link></li>
                                    <li><router-link to="/personal-loan-eligibility-check">Personal Loan Eligibility</router-link></li>
                                    <li><router-link to="/personal-loan-documents">Documents Required for Personal Loan</router-link></li>
                                    <li><router-link to="/emi-calculator/personal-loan-emi-calculator">Personal Loan EMI Calculator</router-link></li>
                                    <li><router-link to="/how-to-apply-for-personal-loan">Steps to Apply for a Personal Loan</router-link></li>
                                    <li><router-link to="/loans/top-up-personal-loan">Top-Up Personal Loan</router-link></li>
                                    <li><router-link to="/loans/instant-cash-loan-on-aadhar-card-and-pan-card">Loan on Aadhar &amp; Pan Card</router-link></li>
                                    <li><router-link to="/loans/instant-personal-loan-for-salaried-employee">Loan for Salaried Employees</router-link></li>
                                    <li><router-link to="/loans/personal-loan-foreclosure-repayment-procedure">Personal Loan Foreclosure Procedure</router-link></li>
                                    <li><router-link to="/loans/apply-personal-loan-from-private-finance-company">Personal Loans from Private Finance</router-link></li>
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
                                    <li><router-link to="/personal-loan-in-bangalore">Personal Loan in Bangalore</router-link></li>
                                    <li><router-link to="/personal-loan-in-chennai">Personal Loan in Chennai</router-link></li>
                                    <li><router-link to="/personal-loan-in-pune">Personal Loan in Pune</router-link></li>
                                    <li><router-link to="/personal-loan-in-mumbai">Personal Loan in Mumbai</router-link></li>
                                    <li><router-link to="/personal-loan-in-delhi">Personal Loan in Delhi</router-link></li>
                                    <li><router-link to="/personal-loan-in-hyderabad">Personal Loan in Hyderabad</router-link></li>
                                    <li><router-link to="/personal-loan-in-kolkata">Personal Loan in Kolkata</router-link></li>
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
        <div id="collapseDisclaimer" class="collapse" aria-labelledby="headingDisclaimer" data-parent="#collapse-section" style="">
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


<!-- <style scoped>

/* Button Styles */
.cta-btn {
  font-size: 14px;
  font-weight: var(--font-weight-extrabold) !important;
  width: 260px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 31px;
  background-color: var(--primary-color) !important;
  color: var(--white-color);
  cursor: pointer;
  background-image: none;
  border-style: solid;
  border-radius: 4px;
  margin-top: 18px;
}

.cta-btn:hover {
  background-color: transparent !important;
  border-color: var(--primary-color) !important;
  color: var(--primary-color);
}

.cta-btn-outline {
  font-size: 14px;
  font-weight: var(--font-weight-extrabold) !important;
  width: 260px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 31px !important;
  background-color: transparent !important;
  border-color: var(--primary-color) !important;
  color: var(--primary-color);
  cursor: pointer;
  background-image: none;
  border-style: solid;
  border-radius: 4px;
  margin-top: 18px;
}

.cta-btn-outline:hover {
  background-color: var(--primary-color) !important;
  border-color: var(--white-color) !important;
  color: var(--white-color);
}

.font-weight-bold {
    font-weight: 600;
}

.cta-btn-green {
  font-size: 14px;
  font-weight: var(--font-weight-bold) !important;
  width: 100%;
  max-width: 260px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 13px !important;
  background-color: var(--primary-color) !important;
  color: var(--white-color);
  cursor: pointer;
  background-image: none;
  border-style: solid;
  border-radius: 4px;
}

/* Breadcrumbs */
body > div:first-of-type {
  padding-top: 60px;
}

ul.breadcrumb_list * {
  font-size: 14px;
}

ul.breadcrumb {
  padding: 10px 1px;
  list-style: none;
  background-color: var(--white-color) !important;
  margin-bottom: -27px;
}

ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
}

ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
  font-size: 12px !important;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

.breadcrumb-font {
  color: #999;
  padding: 7px 2px 0px;
}

.breadcrumb_alignment {
  margin-top: 1.5rem;
}

ul.breadcrumb_list {
  list-style-type: none;
  padding-left: 0px;
  color: var(--primary-color);
  margin-bottom: 0.5rem !important;
}

ul.breadcrumb_list li {
  display: inline;
}

ul.breadcrumb_list li span a {
  color: var(--primary-color);
}

ul.breadcrumb_list li:not(:first-child)::before {
  content: "\003E";
  margin: 0 0.1rem;
}

ul.breadcrumb_list li:last-child::before {
  content: "\003E";
  color: #999;
  margin: 0 0.1rem;
}

/* Banner */

.banner_btn {
  margin: 0px 15px;
  align-items: center;
}

.bannerContainer {
  height: fit-content !important;
  background: no-repeat right / cover scroll;
}

.bannerClass {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent);
  width: 100%;
  padding: 15px 16px 7rem 16px;
}

.bannerContent {
  padding-top: 5rem !important;
}

.center_item {
  padding-top: 3%;
}

.btn_alignment {
  text-align: left;
}

.banner_text {
  text-align: left !important;
}

/*Table of content */

.tableofcontentClass {
  padding: 20px 10px;
  margin: 10px 0 20px 0;
  max-width: 750px;
  border: 0.5px solid var(--black-color);
  background: #f3f3f3;
  text-align: justify;
}

/* Features & Benifits */

.applyLoanClass {
  padding: 32px 0;
}

.topFeaturesOverlay {
  box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.5);
  background-color: var(--white-color);
  border-radius: 8px;
  padding: 0 1.5rem 1.5rem 1rem;
  width: 100%;
  height: fit-content;
  transition: height 0.25s ease-in;
  overflow: hidden;
  margin-top: -3rem;
  margin-bottom: 2rem;
}

.features_text {
  text-align: left !important;
}

.hideItem {
  display: none;
}

.icon_style {
  max-width: 110px;
}

.expandMoreBtn {
  position: relative;
  left: 50%;
}

.expandBtn {
  cursor: pointer;
}

/* EMI Calculator */

.parallax {
  background: linear-gradient(rgb(12 12 12 / 50%), rgb(12 12 12 / 50%)), url(https://moneyview.in/images/calculator_bg.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.icon_alignment {
  justify-content: center;
  vertical-align: middle;
}

.calculator_btn {
  font-size: 15px;
  font-weight: var(--font-weight-bold) !important;
  padding: 16px !important;
  height: 6rem;
  background-color: var(--white-color) !important;
  color: #777777;
  cursor: pointer;
  background-image: none;
  margin-top: 2rem;
}

.cta-btn-white {
  font-size: 14px;
  font-weight: var(--font-weight-bold) !important;
  width: 100%;
  max-width: 260px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 31px !important;
  background-color: var(--white-color) !important;
  color: var(--primary-color);
  cursor: pointer;
  background-image: none;
  border-style: solid;
  border-radius: 4px;
  margin-top: 18px;
}

.banner_mobile {
  display: none;
}

.mvl-h2-white {
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--white-color);
  text-align: center;
  margin-bottom: 39.1px;
}

.alignment {
  padding: 40px 0;
  margin-bottom: 24px !important;
}

.emiTitle {
  font-size: 15px;
  font-weight: var(--font-weight-bold);
}

/* Interlinks */
.interlinksSectionContainer {
 background-color: var(--grey01);
}

.wrapper {
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: var(--white-color) !important;
  width: 100%;
}

ul.newInterlinks * {
  color: #999;
}

ul.newInterlinks *:hover {
  color: var(--primary-color);
}

.interLinkIcon {
  max-height: 392.5px;
  overflow-y: auto;
  background: var(--white-color);
  margin-top: 1rem;
}

.interlinksIcon {
  height: 180px;
  margin: 16px 0;
  padding-top: 40px;
  background-color: #fbfbfb;
  transition: all 0.1s ease;
  cursor: pointer;
}

.interlinksIcon:hover {
  background-color: var(--primary-color);
}

.interlinksIcon:hover * {
  color: #f1f1f1;
}

.interlinksHeading {
  padding-top: 32px;
  margin-bottom: 24px;
}

.interlinks_alignment {
  margin: 0 auto;
  padding-bottom: 40px;
}

.interlinksIconText {
  color: #999;
  font-size: 15px;
  font-weight: var(--font-weight-bold);
}

.interlinksImage {
  height: 70px;
  margin: auto;
  background: no-repeat center / contain;
}

/* Feedback section */

#successSection {
  display: none;
  padding-left: 16px;
  padding-bottom: 4px;
}

#successSection p {
  color: var(--primary-color);
}

#feedbackForm {
  padding-right: 0px;
  margin-left: -8px;
  padding-bottom: 16px;
}

#feedbackComment {
  width: 100%;
  padding: 8px;
}

#feedbackSection div {
  width: 100%;
  justify-content: center;
}

#feedbackComment::placeholder {
  font-size: 15px;
  font-weight: var(--font-weight-regular);
}

#feedbackComment:-ms-input-placeholder {
  font-size: 15px;
  font-weight: var(--font-weight-regular);
}

#feedbackComment::-ms-input-placeholder {
  font-size: 15px;
  font-weight: var(--font-weight-regular);
}

#feedbackComment:focus {
  outline: none !important;
  border: 1px solid var(--primary-color);
  border-radius: 2px;
}

button:disabled {
  background-color: #dcdcde !important;
  color: rgb(115, 117, 122) !important;
  border: 0px solid !important;
}

#feedbackActionMessageMain {
  font-size: var(--body-font-size) !important;
  font-weight: var(--font-weight-semibold) !important;
  margin-bottom: 4px;
}

#feedbackActionMessageSecondary {
  font-size: 15px !important;
  font-weight: var(--font-weight-regular) !important;
  margin-bottom: 8px;
}

#feedbackCommentHelperText {
  font-size: 12px !important;
}

#submitFeedback {
  background: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  color: var(--chalk-white);
  height: 30px;
  margin: 8px auto;
  display: block;
  width: 144px !important;
}

#feedbackActionSuccess,
#feedbackSection {
  display: none;
}

.feedbackHelpfulText {
  padding-top: 2px;
  font-size: var(--body-font-size) !important;
  font-weight: var(--font-weight-semibold) !important;
}

.feedbackHelpfulButton {
  color: #333333 !important;
  background-color: var(--chalk-white);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  width: 100%;
  width: 144px !important;
  font-weight: var(--font-weight-regular) !important;
}

/* Tables */
/* .scrollTable {
  width: 100%;
  overflow: scroll;
} */

/* mvl/loan-partner */
.img-mv-loans {
  width: 112px;
  padding-bottom: 20px;
}

/* used in so many pages */
.mv-h4 {
  font-size: 24px;
  font-weight: var(--font-weight-extrabold);
  padding: 25px 0px 5px 0px;
}

.mv-h5 {
  font-size: 15px !important;
  font-weight: var(--font-weight-bold) !important;
  color: #505d68 !important;
  line-height: 30px !important;
  padding: 20px 0px 2px 0px;
  margin-bottom: 0;
}

.mv-h6 {
  font-size: 14px !important;
  font-weight: var(--font-weight-regular) !important;
  color: #505d68 !important;
  line-height: 30px !important;
  font-weight: var(--font-weight-bold);
}

.mv-why-us {
  font-size: 15px;
  font-weight: var(--font-weight-regular) !important;
  margin-top: 0px;
  margin-bottom: 10px;
  color: #777;
  line-height: 1.75;
}

.ul-check {
  vertical-align: middle;
  list-style: none;
  padding-left: 0px;
}

.ul-check li {
  margin: 10px 0px;
  background-image: url("/img/ic-tick-icon.png");
  background-repeat: no-repeat;
  line-height: 30px;
  padding-left: 35px;
  background-size: contain;
}

/* /money-manger , /mvl , /unsubscribe */
.mv-link {
  color: var(--primary-color) !important;
  border-bottom: 1px solid #777;
  padding-bottom: 3px;
  text-decoration: none;
  cursor: pointer;
}

.mv-link:hover {
  color: var(--primary-color) !important;
  border-bottom: 1px solid var(--primary-color);
  text-decoration: none;
  cursor: pointer;
}

/* /security-money-view-app, /mvl, / */
.mv-p {
  color: #777;
  font-size: 14px;
  line-height: 1.75;
  font-weight: var(--font-weight-regular) !important;
}

/* emi-calc , mvl , hindi/emi */
.faq-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #eaeaea;
  margin: 18px 0 0;
  color: #777;
  width: 100%;
  font-size: 14px;
}

.faq-table tr.header {
  background-color: lightgrey;
  padding: 10px;
}

.faq-table th {
  padding: 8px;
  font-weight: var(--font-weight-regular);
  border: 1px solid #eaeaea;
}

.faq-table td {
  padding: 8px;
  font-weight: var(--font-weight-regular);
  border: 1px solid #eaeaea;
}

/* emi-calulator, loan-partner , money-manager */
.bg-green {
  background-color: var(--green-lightest-2);
  padding: 20px 0px;
}

.green_color {
  color: var(--primary-color);
  line-height: normal;
  margin-bottom: 4px;
}

/* 7pages */
.cities-header {
  background-color: rgb(255, 255, 255, 0.7);
  height: inherit;
}

/* calculator & seo */
.values {
  background: #f7f7f7;
  padding: 30px 20px;
  text-align: center;
}

.values p {
  padding-top: 30px;
  min-height: 140px;
}

.orderedList li,
.unorderedList li {
  color: #7b7e7b;
}

/* /mvl, careers, download apps */
.mvl-h2 {
  font-weight: var(--font-weight-bold) !important;
  font-size: 22px;
}

.personal-loan-bg-gradient {
  background-image: linear-gradient(to right, #59cc59 2%, #00c987 98%) !important;
}

.loan-criteria {
  background-size: 300px 100px;
  background: white;
  padding: 30px 20px;
  text-align: center;
  max-height: 300px !important;
}

.presonalloanoverlay {
  background-color: rgba(0, 130, 18, 0.7);
  position: relative;
  width: 100%;
  height: 100%;
}

.mv-h1-text {
  display: block;
  font-size: 32px;
  font-weight: var(--font-weight-bold) !important;
}

.mv-h2-text {
  display: block;
  font-size: 26px;
  font-weight: var(--font-weight-bold) !important;
}

.mv-h3-text {
  display: block;
  font-size: 22px;
  font-weight: var(--font-weight-semibold) !important;
}

.mv-h4-text {
  display: block;
  font-size: 21px;
  font-weight: var(--font-weight-regular) !important;
}

.mv-h5-text {
  display: block;
  font-size: 19px;
  font-weight: var(--font-weight-regular) !important;
}

.mv-h2 {
  font-size: 32px;
  font-weight: var(--font-weight-extrabold);
  padding: 50px;
}

.mv-h3 {
  font-size: 28px;
  font-weight: var(--font-weight-extrabold);
  padding: 40px 0px;
}

.couponlink a:hover {
  color: var(--primary-color);
  text-decoration: none !important;
  font-size: 24px;
  font-weight: var(--font-weight-extrabold);
}

.textAlign-sm-center-lg-left {
  text-align: left;
}

.search-box {
  border-radius: 4px !important;
}

.noResulText {
 font-weight: var(--font-weight-regular);
}

.tab button {
  color: var(--primary-color);
  border-radius: 4px;
}

.tab button:hover {
  background-color: var(--primary-color) !important;
  color: var(--white-color) !important;
}

.active-btn {
  background-color: var(--primary-color) !important;
  color: var(--white-color) !important;
}

.tab button:active {
  background-color: var(--primary-color) !important;
  color: var(--white-color) !important;
}

.tab button:focus {
  background-color: var(--primary-color) !important;
  color: var(--white-color);
}

/*about-us*/
.investor-section {
  background-color: var(--orange01) !important;
}

.founders-border-box {
  border-radius: 4px !important;
  box-shadow: 8px 8px var(--green01) !important;
}

.box-shadow-color {
  box-shadow: 8px 8px var(--magenta01) !important;
}

.loan-title {
  font-weight: var(--font-weight-bold) !important;
}

.loan-item {
 border-radius: 4px !important;
}

.loan-item:hover {
  background-color: var(--primary-color) !important;
}

/*Grievance*/
.faq-section {
  background: var(--orange01) !important;
  border-radius: 8px !important;
}

.view-faq-button {
 background: var(--primary-color) !important;
 box-shadow: none !important;
 border-radius: 4px !important;
}

.write-to-us-button {
  color: var(--primary-color) !important;
  border: 1px solid var(--primary-color) !important;
  border-radius: 4px !important;
}

.cta_button {
  background: var(--primary-color) !important;
  border-radius: 4px;
}

.table thead {
  background: var(--primary-color) !important;
  color: var(--white-color) !important;
}



@media screen and (min-width: 768px) and (max-width: 959px) {
    /* Breadcrumbs */
body > div:first-of-type {
  padding-top: 25px;
}

ul.breadcrumb {
  padding: 10px 1px;
  list-style: none;
  background-color: var(--white-color) !important;
  margin-top: 60px;
  margin-bottom: -27px;
}

ul.breadcrumb li {
  display: inline;
  font-size: 13px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
}

ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
  font-size: 12px !important;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

ul.breadcrumb_list * {
  font-size: 12px;
}

.breadcrumb-font {
  font-size: 12px;
  color: #999;
  padding: 1px 2px 0px;
}

.breadcrumb_alignment {
  margin-top: 2.5rem;
  text-align: left;
}

/* Banner */
.banner_btn {
  width: 149px !important;
  padding: 12px 0px !important;
  margin: -8px 0;
  align-items: center;
}

.playstore_btn {
  justify-content: right;
  display: flex;
}

.btn_alignment {
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
}

.banner_text {
  text-align: center !important;
}

.bannerContent {
  padding-bottom: 2rem !important;
}

.btn_class {
  height: 42px !important;
  margin-top: 6px !important;
  padding: 9px !important;
}

/* Interlinks */
.wrapper {
  margin-left: 1px;
}

.interlinksHeading {
  padding-top: 40px;
  margin-bottom: 5px;
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
}



@media screen and (min-width: 480px) and (max-width: 767px) {
    /* Breadcrumbs */
body > div:first-of-type {
  padding-top: 25px;
}

ul.breadcrumb {
  padding: 10px 1px;
  list-style: none;
  background-color: var(--white-color) !important;
  margin-top: 60px;
  margin-bottom: -27px;
}

ul.breadcrumb li {
  display: inline;
  font-size: 13px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
}

ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
  font-size: 12px !important;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

ul.breadcrumb_list * {
  font-size: 12px;
}

.breadcrumb-font {
  font-size: 12px;
  color: #999;
  padding: 1px 2px 0px;
}

.breadcrumb_alignment {
  margin-top: 2.5rem;
  text-align: left;
}

/* Banner */
.banner_btn {
  width: 149px !important;
  padding: 12px 0px !important;
  margin: -8px 0;
  align-items: center;
}

.playstore_btn {
  justify-content: right;
  display: flex;
}

.btn_alignment {
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
}

.banner_text {
  text-align: center !important;
}

.bannerContent {
  padding-bottom: 2rem !important;
}

.btn_class {
  height: 42px !important;
  margin-top: 6px !important;
  padding: 9px !important;
}

/* Interlinks */
.wrapper {
  margin-left: 1px;
}

.interlinksHeading {
  padding-top: 40px;
  margin-bottom: 5px;
}


@media screen and (max-width: 600px) {
  /* Banner */
  .bannerClass {
    border-radius: 4px;
    padding: 0rem !important;
  }

  .playstore_btn {
    margin-left: 10px;
  }

  .center_item {
    padding-bottom: 7% !important;
  }

  .btn_alignment {
    padding-left: 0px !important;
  }

  /* Features & Benifits && Apply Loan */
  .applyLoanClass {
    padding: 14px 0px !important;
  }

  .applyLoanClass :nth-child(odd) {
    padding-right: 0px;
  }

  .features_text {
    padding-left: 4px;
  }

  .valign-items-middle {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topFeaturesOverlay {
    height: fit-content !important;
    margin-top: unset !important;
  }

  .hideItem {
    display: unset !important;
  }

  /* EMI Calculator */
  .banner_mobile {
    display: block;
  }

  .mvl-h2 {
    margin-bottom: 20px;
  }

  .calculator_text {
    color: var(--white-color);
    text-align: center;
  }

  .mvl-h2-white {
    color: var(--white-color);
    font-size: 22px;
    margin-bottom: 29px !important;
  }

  .feedbackHelpfulButton {
    width: 120px !important;
  }
}
}


@media  screen and (min-width: 280px) and (max-width: 480px) {
    /* Breadcrumbs */
body > div:first-of-type {
  padding-top: 25px;
}

ul.breadcrumb {
  padding: 10px 1px;
  list-style: none;
  background-color: var(--white-color) !important;
  margin-top: 60px;
  margin-bottom: -27px;
}

ul.breadcrumb li {
  display: inline;
  font-size: 13px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
}

ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
  font-size: 12px !important;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

ul.breadcrumb_list * {
  font-size: 12px;
}

.breadcrumb-font {
  font-size: 12px;
  color: #999;
  padding: 1px 2px 0px;
}

.breadcrumb_alignment {
  margin-top: 2.5rem;
  text-align: left;
}

/* Banner */
.bannerClass {
  border-radius: 4px;
  padding: 0rem !important;
}

.center_item {
  padding-bottom: 7% !important;
}

.banner_btn {
  width: 149px !important;
  padding: 12px 0px !important;
  margin: -8px 0;
  align-items: center;
}

.playstore_btn {
  justify-content: right;
  display: flex;
  margin-left: 10px;
}

.btn_alignment {
  display: flex;
  justify-content: space-between;
  padding-left: 0px !important;
}

.banner_text {
  text-align: center !important;
}

.bannerContent {
  padding-bottom: 2rem !important;
}

.btn_class {
  height: 42px !important;
  margin-top: 6px !important;
  padding: 9px !important;
}

/* Features & Benifits && Apply Loan */
.applyLoanClass {
  padding: 14px 0px !important;
}

.applyLoanClass :nth-child(odd) {
  padding-right: 0px;
}

.features_text {
  padding-left: 4px;
}

.valign-items-middle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topFeaturesOverlay {
  height: fit-content !important;
  margin-top: unset !important;
}

/* Features & Benifits */

.hideItem {
  display: unset !important;
}

/* EMI Calculator */
.banner_mobile {
  display: block;
}

.mvl-h2 {
  margin-bottom: 20px;
}

.calculator_text {
  color: var(--white-color);
  text-align: center;
}

.mvl-h2-white {
  color: var(--white-color);
  font-size: 22px;
  margin-bottom: 29px !important;
}

/* Interlinks */
.wrapper {
  margin-left: 1px;
}

.interlinksHeading {
  padding-top: 40px;
  margin-bottom: 5px;
}

.feedbackHelpfulButton {
  width: 120px !important;
}

/*Common Styles */
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
}
</style> -->