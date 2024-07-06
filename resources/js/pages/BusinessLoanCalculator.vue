<template>
<div class="calculator_page">
    <section>
        <div class="mainContainer sliderSectionContainer marginTop0">
            <h1 class="fullRowClass sectionTitle">Business Loan EMI Calculator</h1>
            <div class="calculatorSection fullRowClass">
                <div class="mainContainer margin0">
                    <div class="loanDetails colspan-xl-1-5 colspan-xs-1-6 justify-content-center">
                        <p class="emiText">Your monthly EMI is</p>
                        <p id="yourEMI" class="emiAmount">₹{{ emi.toLocaleString('en-IN') }}</p>
                        <p id="dynamicIRate" class="emiContent">{{ interestRate }}% interest rate per annum</p>
                        <div class="d-flex">
                            <div>
                                <p class="subContentText">Total Interest</p>
                                <p id="totalInterest" class="subContentAmount">₹{{ totalInterest.toLocaleString('en-IN') }}</p>
                            </div>
                            <div class="vl"></div>
                            <div>
                                <p class="subContentText">Total Amount</p>
                                <p id="principalandinterest" class="subContentAmount">₹{{ totalAmount.toLocaleString('en-IN') }}</p>
                            </div>
                        </div>
                        <div class="displayDesktop" style="height: 270px;  width: 270px;">
                            <div class="chartContainer">
                                <Doughnut id="myChart" class="chartClass" width="270" height="270" :data="chartDataUpdate" :options="chartOptions" style="margin: auto; display: block; height: 180px !important; width: 180px !important;" />
                            </div>
                            <div class="d-flex justify-content-between">
                                <ul class="ChartList">
                                    <li class="d-flex">
                                        <div>
                                            <p class="chartText">Loan Amount</p>
                                            <p class="rec chartAmount" id="loanAmountChart">₹ {{ loanAmount.toLocaleString('en-IN') }}</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="ChartList">
                                    <li class="d-flex">
                                        <div>
                                            <p class="chartText">Total interest</p>
                                            <p class="can chartAmount" id="totalInterestChart">₹ {{ totalInterest.toLocaleString('en-IN') }}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="displayMobile">
                            <router-link to="/personal-loan">
                                <button class="applyNowButton">Apply Now</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="colspan-xl-6-11 colspan-xs-1-6 sliderSection">
                        <div class="loan">
                            <div class="d-flex justify-content-between">
                                <h6 class="sliderTitle">Loan Amount</h6>
                                <div class="text-right">
                                    <span class="position-relative inputSymbolRupee">
                                        <input id="amount" class="inputContainer loanAmountContainer" v-model.number="loanAmount" @input="updateEMI" min="20000" max="50000000" step="5000" type="number">
                                    </span>
                                </div>
                            </div>
                            <input id="inputRange" ref="loanRange" type="range" min="20000" max="50000000" v-model.number="loanAmount" step="5000" class="calculatorSlider" @input="updateEMI">
                            <div class="range d-flex justify-content-between">
                                <p class="rangeValue">Min ₹20K</p>
                                <p class="rangeValue">Max ₹5Cr</p>
                            </div>
                        </div>
                        <div class="rateOfInterest">
                            <div class="d-flex justify-content-between">
                                <h6 class="sliderTitle">Rate of Interest</h6>
                                <div class="text-right">
                                    <span class="position-relative inputSymbolPercent">
                                        <input id="interest" class="inputContainer interestContainer" v-model.number="interestRate" @input="updateEMI" pattern="^\d{1,2}(\.\d{1,2})?" type="number" step="0.01">
                                    </span>
                                </div>
                            </div>
                            <input id="interestRange" ref="interestRange" class="calculatorSlider" type="range" min="8" max="36" v-model.number="interestRate" step="0.25" @input="updateEMI">
                            <div class="range d-flex justify-content-between">
                                <p class="rangeValue">Min 8%</p>
                                <p class="rangeValue">Max 36%</p>
                            </div>
                        </div>
                        <div class="tenure">
                            <div class="d-flex justify-content-between">
                                <h6 class="sliderTitle">Loan Tenure</h6>
                                <div class="text-right d-flex">
                                    <span class="position-relative align-self-center">
                                        <input id="tenure" class="inputContainer tenureInputContainer" v-model.number="tenure" @input="updateEMI" min="1" max="5" type="number">
                                    </span>
                                    <div class="select monthdropdown align-self-center">years</div>
                                </div>
                            </div>
                            <input id="tenureRange" ref="tenureRange" class="calculatorSlider" min="1" max="5" v-model.number="tenure" step="1" @input="updateEMI" type="range">
                            <div class="range d-flex justify-content-between">
                                <p class="rangeValue minDuration">Min 1 year</p>
                                <p class="rangeValue maxDuration">Max 5 years</p>
                            </div>
                        </div>
                        <div class="displayDesktop text-center align-flex-end">
                            <router-link to="/personal-loan">
                                <button class="applyNowButton sliderButton">Apply Now</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="mainContainer">
            <h4 class="sectionTitle fullRowClass">EMI Schedule</h4>
            <div class="scrollTable fullRowClass" id="Result" v-html="emiScheduleTable"></div>
        </div>
    </section>

    <section class="what_makes_us_better ">
        <div class="mainContainer">
            <div class="fullRowClass">
                <h4 class="sectionTitle cardSectionTitle">Benefits of Moneyview Business Loan EMI Calculator</h4>
            </div>
            <div class="colspan-xl-1-6 colspan-xs-1-6 betterCard card1Margin">
                <div class="cardSection">
                    <div class="paddingDiv">
                        <p class="cardTitle removeBr">Hassle free, easy to use</p>
                        <p class="cardDescription">Our EMI calculator is easy-to-use and intuitive.</p>
                    </div>
                    <div class="cardAnimation displayDesktop">
                        <dotlottie-player class="cardAnimationLottie1" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
                    </div>
                </div>
            </div>
            <div class="colspan-xl-7-12 colspan-xs-1-6 colspan betterCard cardMarginTop cardMarginTopDesktop">
                <div class="cardSection">
                    <div class="paddingDiv">
                        <p class="cardTitle removeBr">Most affordable offers</p>
                        <p class="cardDescription">Enjoy flexible loan tenures from 3M to 60M; choose a plan you like!</p>
                    </div>
                    <div class="cardAnimation displayDesktop">
                        <dotlottie-player class="cardAnimationLottie2" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
                    </div>
                </div>
            </div>
            <div class="colspan-xl-1-6 colspan-xs-1-6 betterCard cardMarginTop">
                <div class="cardSection">
                    <div class="paddingDiv">
                        <p class="cardTitle removeBr">Plan Ahead</p>
                        <p class="cardDescription">Calculate your EMI beforehand to manage your finances in a better way</p>
                    </div>
                    <div class="cardAnimation displayDesktop">
                        <dotlottie-player class="cardAnimationLottie3" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
                    </div>
                </div>
            </div>
            <div class="colspan-xl-7-12 colspan-xs-1-6 betterCard cardMarginTop">
                <div class="cardSection">
                    <div class="paddingDiv">
                        <p class="cardTitle removeBr">100% Transparent</p>
                        <p class="cardDescription">Check interest rate, total repayment &amp; terms beforehand - leave no room for doubt or surprises!</p>
                    </div>
                    <div class="cardAnimation displayDesktop">
                        <dotlottie-player class="cardAnimationLottie4" autoplay="autoplay" loop="" mode="normal" background="transparent"></dotlottie-player>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="mainContainer">
            <h4 class="fullRowClass sectionTitle">How to Get a Business Loan from moneyview</h4>
            <div class="fullRowClass">
                <p class="loanSteps">Fund your business dreams with moneyview’s instant personal loans. Follow the simple steps given below -</p>
                <ol class="roundedList">
                    <li>
                        <p class="loanSteps">Sign up using your mobile number</p>
                    </li>
                    <li>
                        <p class="loanSteps">Check your eligibility after entering the necessary details</p>
                    </li>
                    <li>
                        <p class="loanSteps">Provide the necessary documents</p>
                    </li>
                    <li>
                        <p class="loanSteps">Choose the loan amount and tenure</p>
                    </li>
                    <li>
                        <p class="loanSteps">Get the loan credited directly to your account</p>
                    </li>
                </ol>
            </div>
            <a href="../../personal-loan?utm_source=loan_calc&amp;utm_medium=organic_channel&amp;utm_campaign=business-loan-emi-calculator" class="colspan-xs-1-6"><button class="applyNowButton sliderButton">Apply Now</button></a>
        </div>
    </section>

    <section>
        <div class="mainContainer">
            <h2 class="sectionTitle fullRowClass">Popular Loan EMI Calculators</h2>
            <router-link to="/emi-calculator/personal-loan-emi-calculator" class="colspan-xl-1-6 colspan-xs-1-6 loanEmiCalculator">Personal Loan EMI Calculator</router-link>
            <router-link to="/emi-calculator/bike-loan-emi-calculator" class="colspan-xl-7-12 colspan-xs-1-6 loanEmiCalculator"> Bike Loan EMI Calculator</router-link>
            <router-link to="/emi-calculator/car-loan-emi-calculator" class="colspan-xl-1-6 colspan-xs-1-6 loanEmiCalculator"> Car Loan EMI Calculator </router-link>
            <router-link to="/emi-calculator/gold-loan-emi-calculator" class="colspan-xl-7-12 colspan-xs-1-6 loanEmiCalculator"> Gold Loan EMI Calculator</router-link>
            <router-link to="/emi-calculator/education-loan-emi-calculator" class="colspan-xl-1-6 colspan-xs-1-6 loanEmiCalculator"> Education Loan Emi Calculator </router-link>
            <router-link to="/emi-calculator/home-loan-emi-calculator" class="colspan-xl-7-12 colspan-xs-1-6 loanEmiCalculator"> Home Loan EMI Calculator </router-link>
            <router-link to="/emi-calculator/business-loan-emi-calculator" class="colspan-xl-1-6 colspan-xs-1-6 loanEmiCalculator"> Business Loan EMI Calculator </router-link>
            <router-link to="/emi-calculator/mortgage-loan-emi-calculator" class="colspan-xl-7-12 colspan-xs-1-6 loanEmiCalculator"> Mortgage Loan EMI Calculator</router-link>
        </div>
    </section>

    <section>
        <div class="mainContainer">
            <h4 class="sectionTitle fullRowClass">Formula to calculate business loan EMI</h4>
            <div class="fullRowClass">
                <p class="calculatorPageContent">If you are interested in knowing the formula that is used to calculate EMI, you can check it out here-<br><span class="font-weight-600">E =&nbsp; P x R x (1+R)^N&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;————————<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(1+R)^N-1]</span></p>
                <p class="calculatorPageContent"><span class="font-weight-600">P - the principal amount</span> that is borrowed<br><span class="font-weight-600">R - the rate of interest</span> imposed<br><span class="font-weight-600">N - tenure in the number of months</span></p>
                <p class="calculatorPageContent">For example, if <span class="font-weight-600">Rs.110 Lakhs</span> is the amount borrowed (P), <span class="font-weight-600">18%</span> is the rate of interest imposed (R), and <span class="font-weight-600">36 months</span> is the tenure (n), the EMI to be paid using the above formula will be:</p>
                <p class="calculatorPageContent">110 Lakhs x 0.015 x (1+0.015)36 / [(1+0.015)^36-1] = Rs. 54,229 (per month)</p>
                <p class="calculatorPageContent font-weight-600">Thus, the EMI for a Rs.110 Lakhs loan on 18% interest will be Rs.54,229.</p>
                <p class="calculatorPageContent">The rate of interest (R) is calculated monthly i.e. it is calculated as (Annual Rate of interest/12/100) in this case (18/12/100 = 0.015)</p>
            </div>
        </div>
    </section>

    <section class="seo_section">
        <div class="mainContainer">
            <h4 class="fullRowClass sectionTitle">Factors Affecting Business Loan Interest Rates</h4>
            <div class="accordion text-left fullRowClass" id="accordionExample">
                <div class="card">
                    <div class="card-body">
                        <p class="content">The rate of interest depends on a variety of factors. It is important to have a knowledge of what affects your ROI. Take a look at some of the major factors that impact the ROI for your business loan-</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingOne"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style="text-transform: none !important; display: flex; justify-content: space-between;">Credit Score<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i> </span> </a></div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <p class="content">Your credit score is a number that portrays your credit behavior. The higher the number, the better are your chances of getting a lower rate of interest. This is because a high credit score indicates good creditworthiness and lower risk of default.</p>
                            <p class="content">What credit score is considered high might again depend on your loan provider. You can show either your CIBIL or your Experian score as your credit score.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="headingTwo"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-transform: none !important; display: flex; justify-content: space-between;">Type of Business <span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <p class="mv-p">When it comes to a business loan, obviously the type of your business will affect your interest rate. The riskier the business, the higher is the rate of interest charged. If the business you wish to undertake guarantees early profits with lesser risks, you might get the loan at a lower rate of interest.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="headingThree"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="text-transform: none !important; display: flex; justify-content: space-between;">Business Experience <span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <p class="content">If the businessman has prior experience of running a business, they may be able to avail loans at lower interest rates. This is because an experienced entrepreneur will be better equipped to deal with unpredictable challenges that might come up.</p>
                            <p class="content">Whether the business itself is new or old will also play a significant role in deciding the rate of interest. If it is a new business, there will be significantly higher chances of it not doing so well, as compared to an up and running business.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="headingFour"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="text-transform: none !important; display: flex; justify-content: space-between;">Loan Amount and Repayment Tenure<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            <p class="content">As is the case with every other loan, the amount and repayment term will impact the rate of interest. A lower loan amount and a shorter repayment period will attract lower rates of interest as the perceived risk for defaulting is low.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="headingFive"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style="text-transform: none !important; display: flex; justify-content: space-between;">Existing Debts <span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                        <div class="card-body">
                            <p class="content">If you already have existing debts, your debt to income ratio will be higher. In that case, you might not be able to get loans at low interest rates. But if your debt to income ratio is below the recommended level, you might easily get loans at competitive interest rates.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
            </div>
        </div>
    </section>

    <section>
        <div class="mainContainer">
            <h4 class="fullRowClass sectionTitle">Personal Loan Related Links</h4>
            <div class="colspan-xl-1-2 colspan-xs-1-3 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../loans/instant-cash-loan-on-aadhar-card-and-pan-card"><img src="https://moneyview.in/images/ic-interlinks-1.webp" class="interlinksImageContainer"><span class="interlinksContent">Loan on Aadhaar &amp; PAN Card</span></a></div>
            <div class="colspan-xl-3-4 colspan-xs-4-6 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../personal-loan-interest-rates-and-charges"><img src="https://moneyview.in/images/ic-interlinks-2.webp" class="interlinksImageContainer"> <span class="interlinksContent">Personal Loan Interest Rates</span></a></div>
            <div class="colspan-xl-5-6 colspan-xs-1-3 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../personal-loan-eligibility-check"><img src="https://moneyview.in/images/ic-interlinks-3.webp" class="interlinksImageContainer"> <span class="interlinksContent">Personal Loan Eligibility</span></a></div>
            <div class="colspan-xl-7-8 colspan-xs-4-6 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../personal-loan-documents"><img src="https://moneyview.in/images/ic-interlinks-4.webp" class="interlinksImageContainer"> <span class="interlinksContent">Personal Loan Documents</span></a></div>
            <div class="colspan-xl-9-10 colspan-xs-1-3 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../loans/instant-personal-loan-for-self-employed"><img src="https://moneyview.in/images/ic-interlinks-5.webp" class="interlinksImageContainer"> <span class="interlinksContent">Personal Loan for Self-Employed</span></a></div>
            <div class="colspan-xl-11-12 colspan-xs-4-6 calculatorInterlinks"><a class="text-center d-flex flex-column" href="../../loans/instant-personal-loan-for-salaried-employee"><img src="https://moneyview.in/images/ic-interlinks-6.webp" class="interlinksImageContainer"> <span class="interlinksContent">Personal Loan for Salaried</span></a></div>
        </div>
    </section>

    <section class="seo_section faqSection">
        <div class="mainContainer">
            <h4 class="fullRowClass sectionTitle">Business Loan EMI Related FAQs</h4>
            <div class="accordion text-left fullRowClass" id="FAQExample">
                <div class="card">
                    <div class="card-header" id="faqHeadingOne"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseOne" aria-expanded="false" aria-controls="faqCollapseOne" style="text-transform: none !important; display: flex; justify-content: space-between;">What is a business loan?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i> </span> </a></div>
                    <div id="faqCollapseOne" class="collapse" aria-labelledby="faqHeadingOne" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="text-left">A business loan often referred to as a commercial loan, may be a secured or an unsecured loan. It is taken to help one’s business in some form. It may be used to fund a new business, or as working capital for an already established one.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingTwo"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo" style="text-transform: none !important; display: flex; justify-content: space-between;">Are business loans secured loans?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseTwo" class="collapse" aria-labelledby="faqHeadingTwo" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">Most business loans are secure i.e., they are provided against collateral. This can also reduce the interest rate charged on the loan.</p>
                            <p class="content">However, if you are looking for an unsecured loan for your business wherein you do not have to provide collateral, you can apply for a personal loan from moneyview at competitive rates.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingThree"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree" style="text-transform: none !important; display: flex; justify-content: space-between;">Can I foreclose my business loan?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseThree" class="collapse" aria-labelledby="faqHeadingThree" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">Yes, you can foreclose your business loan; but the terms and conditions depend on your lender. Certain loan providers allow borrowers to foreclose their loans only after a certain number of EMIs have been paid. Additionally, you may have to pay foreclosure charges for the same.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingFour"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseFour" aria-expanded="false" aria-controls="faqCollapseFour" style="text-transform: none !important; display: flex; justify-content: space-between;">How does a Business Loan EMI Calculator work? <span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseFour" class="collapse" aria-labelledby="faqHeadingFour" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">It is very easy to use a business loan EMI calculator. You just have to follow these steps-</p>
                            <ul class="content">
                                <li>Enter your principal loan amount</li>
                                <li>Enter your rate of interest</li>
                                <li>Enter your repayment tenure</li>
                            </ul>
                            <p class="content">The moneyview commercial loan calculator will display your monthly EMI amount as well as the total interest amount to be paid.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingFive"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive" style="text-transform: none !important; display: flex; justify-content: space-between;">How is commercial loan EMI calculated?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseFive" class="collapse" aria-labelledby="faqHeadingFive" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">A commercial loan or a business loan EMI is calculated just like any other loan EMI. The formula is-</p>
                            <p class="content">Where P is the principal loan amount, R is the monthly rate of interest, and N is the tenure in number of months. <br>For example, if you have taken a loan of Rs.210 Lakhs at 18% rate of interest for 3 years(36 months), your EMI = <span class="font-weight-600">[210 Lakhs x 0.015 x (1+0.015)^36] /[(1+0.015)^36-1] = Rs.90,381</span></p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingSix"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix" style="text-transform: none !important; display: flex; justify-content: space-between;">How much business loan can I get on an income of Rs.40000?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseSix" class="collapse" aria-labelledby="faqHeadingSix" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">The amount you can get as a personal loan depends on multiple factors, and not just your income. The main factors are -</p>
                            <ul class="content">
                                <li>Your credit score - Higher the credit score, higher is the loan amount you are eligible for</li>
                                <li>Age and experience - As an entrepreneur, both your experience and age would play a role in getting a loan. The stage your business is in will also be important</li>
                                <li>Type of business - If your business is low risk, you might be able to get a bigger loan amount easily</li>
                                <li>Debt-to-income ratio - If you have multiple loans running at the same time then the loan amount you get will be less</li>
                            </ul>
                            <p class="content">Depending on the above factors, your loan eligibility will be determined.</p>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <div class="card">
                    <div class="card-header" id="faqHeadingSeven"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven" style="text-transform: none !important; display: flex; justify-content: space-between;">What is the maximum loan amount for business?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                    <div id="faqCollapseSeven" class="collapse" aria-labelledby="faqHeadingSeven" data-parent="#FAQExample">
                        <div class="card-body">
                            <p class="content">The maximum loan amount that you can get as a business loan will depend on multiple factors. Some of them are-</p>
                            <ul class="content">
                                <li>Your credit score</li>
                                <li>Your experience</li>
                                <li>Your age</li>
                                <li>Your income-to-debt ratio</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="hrAccordian">
                <h5 class="moreFaqs">For More FAQs - <a href="../../loans-faq-en" class="moreFaqs moreFaqButton" target="_blank" rel="noopener">Click Here</a></h5>
                <hr class="hrAccordian">
            </div>
        </div>
    </section>

    <section class="bottom_banner_section" style="position: relative;">
        <div class="bottomBanner displayDesktop">
            <div class="mainContainer margin0" style="margin-inline: 0px !important;">
                <div class="colspan-xl-1-4 colspan-xs-1-3 colspan-md-1-5 bottomBannerTextPadding">
                    <p class="bottomBannerTitle">Get an instant personal loan from moneyview</p>
                    <p class="bottomBannerSubTitle">Download the app now from Google Play</p>
                    <div class="playstoreButton"><a href="https://moneyviewloans.app.link/rRV8PCXi8ub?%243p=a_custom_1123172339713770468" class="emi_calc_banner"> <img loading="lazy" src="https://moneyview.in/images/GooglePlayButton.png" width="100%" height="100%"> </a></div>
                </div>
            </div>
        </div>
        <div class="mainContainer bottomBannerBackdrop" style="cursor: pointer; position: absolute; bottom: unset;"><a href="https://moneyviewloans.app.link/rRV8PCXi8ub?%243p=a_custom_1123172339713770468" class="emi_calc_banner backdropBtn" style="display: grid; width: 100%; height: 100%; position: absolute;">&nbsp;</a></div>
    </section>
</div>
</template>

<script>
import {
    Doughnut
} from 'vue-chartjs'
import {
    Chart as ChartJS,
    Tooltip,
    ArcElement
} from 'chart.js'

import '../../css/calculators.css';

ChartJS.register(ArcElement, Tooltip)

export default {
    name: 'EMICalculator',
    components: {
        Doughnut
    },
    data() {
        return {
            loanAmount: 10000000,
            interestRate: 15,
            tenure: 3,
            emi: 0,
            totalInterest: 0,
            totalAmount: 0,
            emiScheduleTable: '',
            chartData: {
                labels: ['Loan Amount', 'Interest'],
                datasets: [{
                    data: [50, 10],
                    backgroundColor: ['#144835', '#D8AAF3']
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        };
    },
    computed: {
        chartDataUpdate() {
            return {
                labels: ['Loan Amount', 'Interest'],
                datasets: [{
                    data: [this.loanAmount, this.totalInterest],
                    backgroundColor: ['#144835', '#D8AAF3']
                }]
            };
        }
    },
    methods: {
        updateEMI() {
            const loanAmount = this.loanAmount;
            const interestRate = this.interestRate / 100 / 12;
            const tenure = this.tenure * 12;
            const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);
            const totalInterest = emi * tenure - loanAmount;
            const totalAmount = loanAmount + totalInterest;

            this.emi = Math.round(emi);
            this.totalInterest = Math.round(totalInterest);
            this.totalAmount = Math.round(totalAmount);

            this.chartData.datasets[0].data = [loanAmount, this.totalInterest];
            this.generateEMISchedule();
            this.updateRangeBackground('interestRange', this.interestRate, 8, 36);
            this.updateRangeBackground('loanRange', this.loanAmount, 20000, 50000000);
            this.updateRangeBackground('tenureRange', this.tenure, 1, 5);
        },

        generateEMISchedule() {
            const amount = this.loanAmount;
            const interest = this.interestRate / 100 / 12;
            const tenure = this.tenure * 12;
            this.emiScheduleTable = this.amortYear(amount, interest, tenure);
        },

        amort(amount, interest, tenure) {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let curYear = new Date().getFullYear() % 100;
            const curMonth = new Date().getMonth();

            var emi = ((amount * interest * Math.pow(1 + interest, tenure)) / (Math.pow(1 + interest, tenure) - 1)).toFixed();

            var result = "";

            result += `<table id='firstTable' border='1' class='emiTable'>
                <tr class='header'>
                  <th scope='col' class='text-center'>Month</th>
                  <th class='text-center' scope='col'>Opening Balance</th>
                  <th class='text-center' scope='col'>Interest</th>
                  <th class='text-center' scope='col'>Principal</th>
                  <th class='text-center' scope='col'>Closing Balance</th>`;

            for (var count = curMonth; count < tenure + curMonth; ++count) {
                if (count % 12 == 0) {
                    curYear = curYear + 1;
                }
                result += `<tr align=center class='text-dark'>`;

                result += `
              <td class='text-center'> 
                ${monthNames[count % 12]} '${curYear} 
              </td>`;

                result += `<td> ₹ 
                ${Math.floor(amount).toLocaleString("en-IN")}
              </td>`;

                var amortIntrest = amount * interest;

                result += `<td> ₹ 
              ${amortIntrest.toString().split(".")[1]
        ? amortIntrest.toString().split(".")[1][0] >= 5
          ? Math.ceil(amortIntrest).toLocaleString("en-IN")
          : Math.floor(amortIntrest).toLocaleString("en-IN")
        : amortIntrest
      }
              </td>`;

                var amortPrincipal = emi - amortIntrest;
                result += `<td>  ₹
              ${Math.floor(amortPrincipal).toLocaleString("en-IN")}
              </td>`;

                var closingBalance = amount - amortPrincipal;
                result += `<td id='lastEle'>  ₹ 
              ${tenure + curMonth === count + 1 ? '0.00': Math.floor(closingBalance).toLocaleString("en-IN")}
              </td>`;

                result += `</tr>`;

                amount = amount - amortPrincipal;
            }

            result += `</table></div>`;
            return result;
        },

        amortYear(amountyear, interestyear, tenureyear) {
            var emi = (
                (amountyear * interestyear * Math.pow(1 + interestyear, tenureyear)) /
                (Math.pow(1 + interestyear, tenureyear) - 1)
            ).toFixed();

            var result = "";

            result += `<table id='firstTable' border='1' class='emiTable'>
                <tr class='header'>
                  <th scope='col' class=' text-center'>Year</th>
                  <th class='text-center' scope='col'>Opening Balance</th>
                  <th class='text-center' scope='col'>Interest</th>
                  <th class='text-center' scope='col'>Principal</th>
                  <th class='text-center' scope='col'>Closing Balance</th>`;
            // constant upto this stage

            // get current month and current year
            const curMonth = new Date().getMonth() + 1;
            let curYear = new Date().getFullYear();

            const originalAmount = amountyear;

            // get total of all
            let principalSum = 0;
            let interestSum = 0;
            let yearlyAmount = originalAmount;

            for (var count = curMonth; count < tenureyear + curMonth; ++count) {
                // calculation
                var amortIntrest = amountyear * interestyear;

                interestSum += amortIntrest.toString().split(".")[1] ?
                    amortIntrest.toString().split(".")[1][0] >= 5 ?
                    Math.ceil(amortIntrest) :
                    Math.floor(amortIntrest) :
                    amortIntrest;

                // calculation
                var amortPrincipal = Math.floor(emi - amortIntrest);
                principalSum += amortPrincipal;

                // calculation
                var closingBalance = amountyear - amortPrincipal;

                // calculation
                amountyear = amountyear - amortPrincipal;

                //
                // PRINT ROWS EVERY YEAR
                //

                if (count % 12 === 0) {
                    result += `<tr align=center class='text-dark'>`;

                    // column 1 - Year
                    result += `
                <td> 
                  ${curYear} 
                </td>`;

                    // column 2 - Opening Balance
                    result += `
                <td> 
                  ₹ ${yearlyAmount.toLocaleString("en-IN")} 
                </td>`;

                    // column 3 - Interest
                    result += `
                <td> 
                  ₹ ${interestSum.toLocaleString("en-IN")} 
                </td>`;

                    // column 4 - Principal
                    result += `
                <td> 
                  ₹ ${principalSum.toLocaleString("en-IN")} 
                </td>`;

                    yearlyAmount = yearlyAmount - principalSum;

                    // column 5 - Closing Balance
                    result += `
                <td id='lastEle'>  
                  ₹ ${yearlyAmount.toLocaleString("en-IN")}
                </td>`;

                    result += "</tr>";

                    interestSum = 0;
                    principalSum = 0;
                    curYear++;
                }
            }
            result += `<tr align=center class='text-dark'>`;

            // column 1 - Year
            result += `
            <td> 
              ${curYear} 
            </td>`;

            // column 2 - Opening Balance
            result += `
            <td> 
              ₹ ${yearlyAmount.toLocaleString("en-IN")} 
            </td>`;

            // column 3 - Interest
            result += `
            <td> 
              ₹ ${interestSum.toLocaleString("en-IN")} 
            </td>`;

            // column 4 - Principal
            result += `
            <td> 
              ₹ ${principalSum.toLocaleString("en-IN")} 
            </td>`;

            yearlyAmount = yearlyAmount - principalSum;

            // column 5 - Closing Balance
            result += `
            <td id='lastEle'>  
              ₹ 0
            </td>`;

            result += `
                </tr>
              </table>
            </div>`;
            return result;
        },
        updateRangeBackground(refName, value, min, max) {
            const range = this.$refs[refName];
            const percentage = ((value - min) / (max - min)) * 100;
            range.style.background = `linear-gradient(to right, #FF7F4C 0%, #FF7F4C ${percentage}%, rgba(0, 0, 0, 0.12) ${percentage}%, rgba(0, 0, 0, 0.12) 100%)`;
        }
    },
    mounted() {
        this.updateEMI();
    }
};
</script>
