<template>
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
                    <router-link to="/personal-loan-interest-rates-and-charges">Personal Loan Interest Rates</router-link>
                </span>
            </li>
        </ul>
    </div>
</div>

<div class="bannerContainer" style="background-image: url(https://moneyview.in/images/personal-loan-interest-rates-and-charges-min.png);">
    <div class="bannerClass">
        <div class="container">
            <div class="container banner">
                <div class="text-center bannerContent paddingLeft8">
                    <div>
                        <h1 class="banner_text font-weight-bold responsiveTextH1">Personal Loan Interest Rates 2024</h1>
                    </div>
                    <div>
                        <h5 class="banner_text p20-top">Our Interest Rates starting at just 10% per annum</h5>
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
                                <p class="mv-why-us features_text desktop features">Instant collateral-free and online loans from Rs. 5,000 to Rs. 10 Lakhs.</p>
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
                                        <p class="mv-why-us features_text green_color"><strong>Quick Eligibility Check</strong></p>
                                    </div>
                                    <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                </div>
                                <p class="mv-why-us features_text desktop features">Skip the long queues and check your loan eligibility with us in just 2 minutes</p>
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
                                        <p class="mv-why-us features_text green_color"><strong>Hassle-free Loans </strong></p>
                                    </div>
                                    <div class="col-2 mobile"><i class="fa fa-angle-down features-btn"></i></div>
                                </div>
                                <p class="mv-why-us features_text desktop features">From eligibility check and document verification to loan disbursement, the entire process is online, enabling you to apply for loans from the comfort of your home.</p>
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
                                <p class="mv-why-us features_text desktop features">Economical interest rates that are easy on your pocket starting at just 10% annually</p>
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
        <h2 class="mv-h2-text text-left">Personal Loan Interest Rates and Charges</h2>
        <p class="mv-why-us text-left">Interest rates and other charges for <router-link to="/personal-loan">personal loans</router-link> by Moneyview are transparent and affordable with no hidden costs. Take a look at the applicable charges below -</p>
        <div class="scrollTable">
            <table class="table table-striped table-bordered mv-why-us text-left">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">Fees and Charges</th>
                        <th scope="col" class="text-center">Amount Chargeable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Interest Rate</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">Starting from 10% per annum</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Loan Processing Charges</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">Starts at 2% of the approved loan amount</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Penal charges on Overdue EMI</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">24% per annum plus applicable taxes, if any</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">NACH Bounce</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">Rs.500/- each time</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Loan Cancellation</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">If a borrower wishes to exit the loan after it has been sanctioned, he/she can do so within 3 days of loan disbursement.<br>The principal amount and other applicable charges will have to be paid.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 class="mv-h2-text p20-top text-left"><strong>Foreclosure and Part-Prepayment Charges</strong></h2>
        <p class="mv-why-us text-left">The foreclosure and pre-payment charges for Moneyview personal loans are as mentioned below -&nbsp;</p>
        <div class="scrollTable">
            <table class="table table-striped table-bordered mv-why-us text-left">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">Fees and Charges</th>
                        <th scope="col" class="text-center">Amount Chargeable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Foreclosure Charges</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">Nil but foreclosure can be done only after a minimum number of EMIs have been paid as illustrated below-</p>
                            <div class="scrollTable">
                                <table class="table table-striped table-bordered mv-why-us text-left">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p class="mv-why-us text-left">Tenure</p>
                                            </td>
                                            <td>
                                                <p class="mv-why-us text-left">Foreclosure</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mv-why-us text-left">Up to 6 months</p>
                                            </td>
                                            <td>
                                                <p class="mv-why-us text-left">Not allowed</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mv-why-us text-left">7 - 18 months</p>
                                            </td>
                                            <td>
                                                <p class="mv-why-us text-left">Allowed after 6 EMI payments</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mv-why-us text-left">Over 18 months</p>
                                            </td>
                                            <td>
                                                <p class="mv-why-us text-left">Allowed after 12 EMI payments</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="mv-why-us text-left">Part- Prepayment Charges</p>
                        </td>
                        <td>
                            <p class="mv-why-us text-left">Part-prepayment is not allowed</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2 class="mv-h2-text p20-top text-left">Factors That Affect Personal Loan Interest Rates</h2>
        <p class="mv-why-us text-left">Lenders set interest rates based on their cost of funds and their assessment of the credit risk of their loan applicants. The following are some of the most important elements that can affect your personal loan interest rates:</p>
        <h3 class="mv-h3-text text-left">Credit Score</h3>
        <p class="mv-why-us text-left">A number that indicates your creditworthiness is your credit score. It demonstrates your financial stability and establishes a certain level of confidence between you and the lender. Maintaining a high credit score can help you become more qualified for personal loans and also improve your chances of having the loan approved.</p>
        <h3 class="mv-h3-text text-left">Income&nbsp;</h3>
        <p class="mv-why-us text-left">A significant factor influencing your interest rate is your income level. Banks typically charge borrowers with higher-income jobs an interest rate that is lower than that of borrowers with lower-income jobs. Because higher incomes are suggestive of better financial standing and a greater likelihood of timely loan payback, banks frequently rely on them for loan repayment.</p>
        <h3 class="mv-h3-text text-left">Repayment History</h3>
        <p class="mv-why-us text-left">One of the most important things that lenders take into account when determining the interest rate on a personal loan is your repayment history. Maintaining a strong payback history guarantees that lenders view your credit profile as low-risk when granting new loans, including personal loans.&nbsp;</p>
        <p class="mv-why-us text-left">Use a <a href="https://moneyview.in/emi-calculator/personal-loan-emi-calculator?utm_source=home-page&amp;utm_medium=personal-loan-emi-calculator-header-navbar&amp;utm_campaign=home-page-personal-loan-emi-calculator-header-navbar">personal loan calculator</a> to calculate multiple EMIs for varying loan amounts and tenures to better plan your repayment schedule and assess whether the loan fits within your budget.</p>
        <h3 class="mv-h3-text text-left">Existing Relationship with the Lender</h3>
        <p class="mv-why-us text-left">In case you have done business with a lender before, they might provide you with competitive interest rates on personal loans. This is because lenders typically try to retain clients in this manner and are inclined to trust borrowers whose financial records they have on file.</p>
        <p class="mv-why-us text-left">Additionally, a good rapport between you and the lender helps speed up the approval process. An <a href="https://moneyview.in/emi-calculator/personal-loan-emi-calculator?utm_source=home-page&amp;utm_medium=personal-loan-emi-calculator-header-navbar&amp;utm_campaign=home-page-personal-loan-emi-calculator-header-navbar">EMI calculator</a> can be used to determine which offer is the best if you have received many offers from different lenders with whom you have done business.</p>
        <h3 class="mv-h3-text text-left">Debt-to-Income Ratio&nbsp;</h3>
        <p class="mv-why-us text-left">This figure shows you how much debt you owe in relation to your income at any given point. The bank granting you the loan may charge you a higher interest rate since it is deemed riskier if your high salary is mostly used to pay off your existing debts. Banks are likely to impose a higher interest rate on borrowers with high debt-to-income ratios since they are viewed as a burden on the lender.</p>
        <h2 class="mv-h2-text text-left">Types of Interest Rates</h2>
        <p class="mv-why-us text-left">There are two main <a href="https://moneyview.in/loan-insights/fixed-interest-rate-vs-floating-interest-rate">types of personal loan interest</a>:</p>
        <h3 class="mv-h3-text text-left">1. Reducing or Variable Interest Rate</h3>
        <p class="mv-why-us text-left">Reducing or variable interest rates is a type of personal loan interest rate that fluctuates regularly. A personal loan's variable interest rate is tied to the Reserve Bank of India's repo rate adjustments. The adjustable interest rate is also known as a lowering or variable interest rate.</p>
        <h3 class="mv-h3-text text-left">2. Fixed or Flat Interest Rate</h3>
        <p class="mv-why-us text-left">The interest rate on the loan amount is fixed under this method and remains constant throughout the loan term. The lender determines the rate based on assumptions about the average discount rate over the loan term.</p>
        <h2 class="mv-h2-text text-left">How to Get the Lowest Interest Rate on Personal Loan?</h2>
        <p class="mv-why-us text-left">The best way to meet your urgent financial needs is to apply for low-interest personal loans. This makes it easy for you to make repayments. Use the strategies below to get the lowest interest rate on a personal loan.</p>
        <h3 class="mv-h3-text text-left">1. Keep Your Credit Score in Good Shape</h3>
        <p class="mv-why-us text-left">Your credit score measures your creditworthiness based on previous credit management behaviors. A credit score of 700 or 750 makes you eligible for a personal loan. In general, a higher score indicates a better chance of loan approval.</p>
        <h3 class="mv-h3-text text-left">2. Shop Around for the Best Deal from Different Lenders</h3>
        <p class="mv-why-us text-left">A little research will help you find easy personal loans. Compare personal loans from various providers to determine the best interest rate and features. This will take some time, but it will help you make the most informed decision possible.</p>
        <h3 class="mv-h3-text text-left">3. Keep an Eye Out for Seasonal Deals</h3>
        <p class="mv-why-us text-left">Customers are informed of special offers by SMS and email by lenders. If you want to save money on your loan, keep an eye out for these bargains. These offers provide you with short-term interest rate discounts. During the holiday season, these discounts are typically available when you apply online.</p>
        <h3 class="mv-h3-text text-left">4. Try Negotiating with Your Moneylender</h3>
        <p class="mv-why-us text-left">If you earn a good income and work for a recognized public or private company, the lender considers you a trustworthy candidate. So take advantage of this possibility to get lower interest rates. Your company's good name can help you get a lower interest rate because the lender is certain that you will have the funds to make the payments on time.&nbsp;&nbsp;</p>
    </div>

    <section class="mb-5 pb-2 container">
        <h2 class="mvl-h2 text-center">How to Apply for An Instant Personal Loan</h2>
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
                        <p class="mv-why-us text-left">Visit the Moneyview website or download the loans app, provide all the necessary details, and we will let you know your eligibility in just 2 minutes</p>
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
                        <p class="mv-why-us text-right text-md-left">Based on the options given, you will have to select the loan amount and repayment term of your choice</p>
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
                        <p class="mv-why-us text-left">Easily upload all of the necessary documents online for verification</p>
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
                        <p class="mv-why-us text-right text-md-left">After your documents are verified and the loan agreement is submitted, the loan amount will be credited to your bank account within 24 hours in most cases</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 d-flex align-items-center desktop">
                <img src="https://moneyview.in/images/ic-plan-selector-banner.png" alt="mobile_img" class="w100">
            </div>
        </div>
    </section>

    <section class="container my-5 pb-2">
        <h2 class="mv-h2-text text-center pb-3"> Personal Loan Interest Rates - Related FAQs </h2>
        <div id="faq-section" class="accordion text-left mt-4 margin_accordion">
            <div class="card">
                <div class="card-header" id="faq1">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq1" aria-controls="collapseFaq1">
                        1. What is the Current Personal Loan Interest Rate Charged on moneyview Loans? is This a Low Interest Rate Personal Loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq1" class="collapse" aria-labelledby="faq1" data-parent="#faq-section" style="">
                    <div class="card-body">
                        <p class="mv-why-us text-left">The rate of interest for personal loans starts at an affordable 1.33% per month and varies based on the amount availed, your credit score, repayment history, etc.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq2">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq2" aria-controls="collapseFaq2">
                        2. Do I Have To Pay A Processing Fee On The Loan? At What Rate Will It Be Charged?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq2" class="collapse" aria-labelledby="faq2" data-parent="#faq-section" style="">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Yes, a small amount is charged as a processing fee and starts from 2% of your loan amount. The amount is decided by our system based on multiple factors and will be deducted from your loan amount while the remaining balance will be transferred to your bank account.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq3">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq3" aria-controls="collapseFaq3">
                        3. I Do Not Understand The Interest Rates. How Much Will I Have To Pay?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq3" class="collapse " aria-labelledby="faq3" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">If you are unsure of how much to pay and the interest rate charged, visit the&nbsp;<a href="https://play.google.com/store/apps/details?id=com.whizdm.moneyview.loans" target="_blank" style="background-color: rgb(255, 255, 255);">moneyview loans app</a>&nbsp;and check the column titled ‘Monthly EMI’. This section will also display the duration of the loan and amount that you need to pay as monthly EMI. Additionally, the entire interest that you will be paying on the loan will also be given as reference.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq4">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq4" aria-controls="collapseFaq4">
                        4. How Is EMI Calculated On My Loan? Do You Follow The Reducing Balance Method For Interest Calculation?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq4" class="collapse " aria-labelledby="faq4" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Your EMI or Equated Monthly Installment consists of a portion of principal amount as well as interest payment on the loan. The EMI amount on your loan depends on the principal amount, the loan tenure, and the rate of interest.</p>
                        <p class="mv-why-us text-left">moneyview follows the reducing balance method for interest calculation. Given below is an example to illustrate the same.</p>
                        <p class="mv-why-us text-left"></p>
                        <p class="mv-why-us text-left">Suppose you avail a loan for Rs 50,000 for a term of 6 months at an interest rate of 16%, your repayment schedule will be as given in the table below. Your outstanding loan amount reduces with payment of each EMI, which is why this method is called the reducing balance method for interest calculation.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq5">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq5" aria-controls="collapseFaq5">
                        5. My Experian Score Is 680. Can I Still Apply For An Instant Loan From moneyview?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq5" class="collapse " aria-labelledby="faq5" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Yes, you can. As moneyview uses its own unique algorithm to process loan applications, individuals with relatively lower credit scores can also avail personal loans from moneyview. However, the minimum credit score requirement is a CIBIL score or an Experian score of 650.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq6">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq6" aria-controls="collapseFaq6">
                        6. What is a low-interest rate?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq6" class="collapse " aria-labelledby="faq6" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">When the risk-free rate of interest, which is usually determined by a central bank, is lower than the historical average for an extended period of time, it is called a low-interest-rate environment.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq7">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq7" aria-controls="collapseFaq7">
                        7. What is the rate of interest charged on a personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq7" class="collapse " aria-labelledby="faq7" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">The majority of banks charge personal loan interest rates ranging from 10.50% to 24% per annum. Your interest rate will be determined by a number of factors, including your credit score, income, employer, age at the time of application, and so on.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq8">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq8" aria-controls="collapseFaq8">
                        8. Is 12.5% a good interest rate?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq8" class="collapse " aria-labelledby="faq8" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">A decent personal loan interest rate is one that is less than the national average, which is less than 12%<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq9">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq9" aria-controls="collapseFaq9">
                        9. Why do banks charge interest on loans?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq9" class="collapse " aria-labelledby="faq9" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">The principal source of revenue for most commercial banks is interest income. It is completed by removing money from depositors who do not want their funds right now. Depositors are compensated with a particular interest rate and the security of their savings in exchange for depositing their money.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq10">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq10" aria-controls="collapseFaq10">
                        10. What is the interest rate for a personal loan in India?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq10" class="collapse " aria-labelledby="faq10" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">There are various banks in India that offer the best personal loans to their customers. The rates offered by different banks vary between 8.30% p.a. and 49% p.a.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq11">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq11" aria-controls="collapseFaq11">
                        11. What is a typical interest rate on a personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq11" class="collapse " aria-labelledby="faq11" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">According to survey data from Q2 2021, the average interest rate on a personal loan is 9.4%. Personal loan interest rates can range from 6% to 36%, depending on the lender and the borrower's credit score and financial history.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq12">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq12" aria-controls="collapseFaq12">
                        12. How can I lower the interest rate on my loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq12" class="collapse " aria-labelledby="faq12" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">There are several ways to reduce the interest rate on loan amount such as maintaining a good credit score, having a good repayment history, working under a credible employer, etc.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq13">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq13" aria-controls="collapseFaq13">
                        13. Is a personal loan floating interest rate?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq13" class="collapse " aria-labelledby="faq13" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Interest rates on personal loans are available at both fixed and adjustable rates. A fixed-rate loan's interest rate will remain constant during the loan's term. A floating-rate loan, on the other hand, has interest rates that fluctuate with market movements.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq14">
                    <a class="collapsed" aria-expanded="false" data-toggle="collapse" data-target="#collapseFaq14" aria-controls="collapseFaq14">
                        14. Is bank loan interest monthly or yearly?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq14" class="collapse " aria-labelledby="faq14" data-parent="#faq-section">
                    <div class="card-body">
                        <p class="mv-why-us text-left">Because EMIs are paid monthly, the interest rate will be calculated monthly. As a result, if the interest rate is 10%, you must divide it by 12. In addition, the number of months will be the tenure. If you have a 20-year loan, the term will be 20x12 = 240 months.<br></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="faq15">
                    <a class="" aria-expanded="true" data-toggle="collapse" data-target="#collapseFaq15" aria-controls="collapseFaq15">
                        15. Is it legal to charge interest on a personal loan?
                        <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
                <div id="collapseFaq15" class="collapse show" aria-labelledby="faq15" data-parent="#faq-section" style="">
                    <div class="card-body">
                        <p class="mv-why-us text-left">It is completely legal for registered banks/lenders to charge interest on personal loans.<br></p>
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
</template>


<script>
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



<style scoped>
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
body>div:first-of-type {
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

ul.breadcrumb li+li:before {
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
    body>div:first-of-type {
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

    ul.breadcrumb li+li:before {
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
    body>div:first-of-type {
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

    ul.breadcrumb li+li:before {
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

@media screen and (min-width: 280px) and (max-width: 480px) {

    /* Breadcrumbs */
    body>div:first-of-type {
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

    ul.breadcrumb li+li:before {
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
</style>
