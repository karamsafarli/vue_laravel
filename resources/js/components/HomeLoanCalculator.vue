<template>
<section>
    <div class="mainContainer sliderSectionContainer marginTop0">
        <h1 class="fullRowClass sectionTitle">Home Loan EMI Calculator</h1>
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
                                    <input id="amount" class="inputContainer loanAmountContainer" v-model.number="loanAmount" @input="updateEMI" min="100000" max="100000000" step="5000" type="number">
                                </span>
                            </div>
                        </div>
                        <input id="inputRange" ref="loanRange" type="range" min="100000" max="100000000" v-model.number="loanAmount" step="5000" class="calculatorSlider" @input="updateEMI">
                        <div class="range d-flex justify-content-between">
                            <p class="rangeValue">Min ₹1L</p>
                            <p class="rangeValue">Max ₹10Cr</p>
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
                        <input id="interestRange" ref="interestRange" class="calculatorSlider" type="range" min="6" max="15" v-model.number="interestRate" step="0.25" @input="updateEMI">
                        <div class="range d-flex justify-content-between">
                            <p class="rangeValue">Min 6%</p>
                            <p class="rangeValue">Max 15%</p>
                        </div>
                    </div>
                    <div class="tenure">
                        <div class="d-flex justify-content-between">
                            <h6 class="sliderTitle">Loan Tenure</h6>
                            <div class="text-right d-flex">
                                <span class="position-relative align-self-center">
                                    <input id="tenure" class="inputContainer tenureInputContainer" v-model.number="tenure" @input="updateEMI" min="1" max="30" type="number">
                                </span>
                                <div class="select monthdropdown align-self-center">years</div>
                            </div>
                        </div>
                        <input id="tenureRange" ref="tenureRange" class="calculatorSlider" min="1" max="30" v-model.number="tenure" step="1" @input="updateEMI" type="range">
                        <div class="range d-flex justify-content-between">
                            <p class="rangeValue minDuration">Min 1 year</p>
                            <p class="rangeValue maxDuration">Max 30 years</p>
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
            <h4 class="sectionTitle cardSectionTitle">Benefits of Moneyview Home Loan EMI Calculator</h4>
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
        <h4 class="fullRowClass sectionTitle">How to Get a Home Loan from moneyview</h4>
        <div class="fullRowClass">
            <p class="loanSteps">You can easily get a personal loan and fund your home loan downpayment or even renovation. All you need to do is follow the steps below -</p>
            <ol class="roundedList">
                <li>
                    <p class="loanSteps">Sign up using your mobile number</p>
                </li>
                <li>
                    <p class="loanSteps">Enter the required information</p>
                </li>
                <li>
                    <p class="loanSteps">Upload the necessary documents</p>
                </li>
                <li>
                    <p class="loanSteps">Select the loan amount and tenure from the given options</p>
                </li>
                <li>
                    <p class="loanSteps">Get the loan credited to your account within a few hours!</p>
                </li>
            </ol>
        </div>
        <a href="https://moneyview.in/personal-loan?utm_source=Hl_calc&amp;utm_medium=footerapply&amp;utm_campaign=home-loan-emi-calculator" class="colspan-xs-1-6"><button class="applyNowButton sliderButton">Apply Now</button></a>
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
        <h4 class="sectionTitle fullRowClass">Formula to Calculate Home Loan EMI</h4>
        <div class="fullRowClass">
            <p class="calculatorPageContent">In case you are interested to know the formula that all house loan calculators use, here it is -<br><span class="font-weight-600">E =&nbsp; P x R x (1+R)^N&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;————————<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(1+R)^N-1]</span></p>
            <p class="calculatorPageContent"><span class="font-weight-600">P - the principal amount</span> that is borrowed<br><span class="font-weight-600">R - the rate of interest</span> imposed<br><span class="font-weight-600">N - tenure in the number of months</span></p>
            <p class="calculatorPageContent">Here is an example -</p>
            <p class="calculatorPageContent">Let Rs.10,00,000 be the amount borrowed (P), the annual rate of interest (R) be 8% , and 3 years or 36 months be the tenure (N)</p>
            <p class="calculatorPageContent">Then the EMI to be paid using the above formula will be:</p>
            <p class="calculatorPageContent">E = [10,00,000 x 0.00666 x (1+0.00666)^36] / [(1+0.00666)^36-1] = Rs. 31,336</p>
            <p class="calculatorPageContent">Therefore, the EMI for a Rs.10 Lakh home loan would be Rs.31,336.</p>
            <p class="calculatorPageContent">The rate of interest (R) is calculated monthly i.e. it is calculated as (Annual Rate of interest/12/100). In this case, it is 8/12/100 = 0.00666.</p>
            <p class="calculatorPageContent">The above formula can be used to calculate EMIs for all types of loans and not just home loans, unless mentioned otherwise.</p>
        </div>
    </div>
</section>

<section class="seo_section">
    <div class="mainContainer">
        <h4 class="fullRowClass sectionTitle">Factors that Affect Home Loan EMI</h4>
        <div class="accordion text-left fullRowClass" id="accordionExample">
            <div class="card">
                <div class="card-body">
                    <p class="content">You must be searching for ‘home loan calculator India’ to understand how much your monthly installments will be. But there are multiple factors that impact your interest rate and thus, also affect your EMI amount.</p>
                    <p class="content">Take a look at some such factors-</p>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingOne"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style="text-transform: none !important; display: flex; justify-content: space-between;">Credit Score<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i> </span> </a></div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="content">Your credit score is a numerical representation of your creditworthiness. The higher the score, the better are your chances of availing of a loan. A higher credit score may also help you to negotiate a lower interest rate or a longer loan tenure.</p>
                        <p class="content">Thus, if you are planning to take a housing loan in the future, it is advisable to start working on improving your credit score.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="headingTwo"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-transform: none !important; display: flex; justify-content: space-between;">Location and Value of the House<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="mv-p">Houses that are in newer or upcoming areas are considered to be more valuable. Loans for such homes can generally be availed at a lower interest rate.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="headingThree"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="text-transform: none !important; display: flex; justify-content: space-between;">MCLR Rates<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="content">The Marginal Cost of Funds based Lending Rate is the minimum that a bank or financial institution can lend at.</p>
                        <p class="content">This is decided annually and depends on various factors such as operating cost, the marginal cost of funds, etc. The interest rate imposed will increase or decrease based on variations in the MCLR rate.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="headingFour"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="text-transform: none !important; display: flex; justify-content: space-between;">Loan to Value or LTV Ratio<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="content">This is essentially the percentage of the property value that the loan can finance. The higher the loan amount availed, the higher is the rate of interest. This is because the risk of the lender increases with higher loan amounts.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="headingFive"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style="text-transform: none !important; display: flex; justify-content: space-between;">Employment Status of Applicant<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="content">Salaried employees or those with a steady stream of income can generally avail loans at a relatively lower rate of interest as the risk is much lower for the lender as compared to applicants who are self-employed.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="headingSix"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style="text-transform: none !important; display: flex; justify-content: space-between;">Repayment Tenure<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                    <div class="card-body">
                        <p class="content">In addition to all of the above factors, the repayment term can determine the rate of interest imposed. Generally, a shorter repayment term leads to a lower rate of interest and vice versa.</p>
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
        <h4 class="fullRowClass sectionTitle">Home Loan EMI Related FAQs</h4>
        <div class="accordion text-left fullRowClass" id="FAQExample">
            <div class="card">
                <div class="card-header" id="faqHeadingOne"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseOne" aria-expanded="false" aria-controls="faqCollapseOne" style="text-transform: none !important; display: flex; justify-content: space-between;">What is a home loan?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i> </span> </a></div>
                <div id="faqCollapseOne" class="collapse" aria-labelledby="faqHeadingOne" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="text-left">A home loan is a sum of money borrowed from banks or other financial institutions to fund the construction or purchase of a house. Certain home loans can also be used for home repairs or renovation. Home loans are a type of secured loan.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingTwo"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo" style="text-transform: none !important; display: flex; justify-content: space-between;">How do banks calculate interest on home loans?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseTwo" class="collapse" aria-labelledby="faqHeadingTwo" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="text-left">There are many factors which affect the calculation of interest rate on home loans. Some of the factors are mentioned here-</p>
                        <ul class="content">
                            <li>Applicant’s credit scor</li>
                            <li>Valuation of the house</li>
                            <li>Age and income of the applicant</li>
                            <li>Repayment tenure</li>
                            <li>Principal amount borrowed</li>
                            <li>Debt-to-income rati</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingThree"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree" style="text-transform: none !important; display: flex; justify-content: space-between;">What is the EMI for a Rs. 40 Lakh home loan?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseThree" class="collapse" aria-labelledby="faqHeadingThree" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="text-left">If you are searching ‘what is the EMI for 40 Lakhs home loan’, this formula may help you-</p>
                        <p class="text-left">EMI = [P x R x (1+R)^N ] / [(1+R)^N-1]</p>
                        <p class="text-left">Let’s say that the tenure of your 40 Lakh loan is 6 years and the rate of interest is 8%. Then, your monthly EMI will be -<br>E = [40,00,000 x 0.00666 x (1+0.00666)^72] / [(1+0.00666)^72-1] = Rs. 70,133/-</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingFour"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseFour" aria-expanded="false" aria-controls="faqCollapseFour" style="text-transform: none !important; display: flex; justify-content: space-between;">What is the difference between flat balance and reducing balance interest calculation?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseFour" class="collapse" aria-labelledby="faqHeadingFour" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="content">EMI calculation can be made in two ways i.e., the flat balance or reducing balance interest method.</p>
                        <ul class="content">
                            <li>If the interest amount payable is based on the entire loan amount for the full duration of loan repayment, it is known as flat balance interest calculation. In this case, the EMI amount remains the same during the tenure.</li>
                            <li>In case of the reducing balance interest rate calculation method, the interest is calculated on the outstanding principal amount each time after the payment of an installment. In this method, the EMI keeps changing throughout the tenure.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingFive"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive" style="text-transform: none !important; display: flex; justify-content: space-between;">What is the EMI for a 20 Lakh home loan?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseFive" class="collapse" aria-labelledby="faqHeadingFive" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="content">You can use moneyview’s housing loan interest calculator to check how much your EMI would be. Let’s say that the tenure for your 20 Lakh loan is 3 years and the rate of interest is 8%. Then the EMI will be - <br>EMI = [P x R x (1+R)^N ] / [(1+R)^N-1] {where, P is the principal amount, R is the rate of interest, and N is the number of months in your tenure}</p>
                        <p class="content">Thus, EMI = [20,00,000 x 0.00666 x (1+0.00666)^36] / [(1+0.00666)^36-1] = Rs.62,673/-</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingSix"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix" style="text-transform: none !important; display: flex; justify-content: space-between;">How much home loan can I get on Rs.25,000 salary?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseSix" class="collapse" aria-labelledby="faqHeadingSix" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="content">The amount you can avail as home loan depends on multiple factors as mentioned previously. These include -</p>
                        <ul class="content">
                            <li>Your credit score</li>
                            <li>Monthly income</li>
                            <li>Debt-to-income ratio i.e., the amount of debt you are paying off with your existing salary</li>
                            <li>The cost of your home also matters. Generally, lenders offer up to 90% of the price of the property as loan</li>
                            <li>The amount you pay as down payment. Higher the down payment amount, lower will be the loan to be availed</li>
                            <li>The repayment term and interest rate imposed. Remember, higher the repayment tenure, higher is the overall interest amount paid.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingSeven"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven" style="text-transform: none !important; display: flex; justify-content: space-between;">Can you get a home loan if you are retired?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseSeven" class="collapse" aria-labelledby="faqHeadingSeven" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="content">If you are searching for ‘can you get a home loan if retired’, the answer is yes! It will depend on your age, your credit score, and many other factors. The only thing to note is as your age increases, you will have to opt for shorter tenures. It will also depend on the assets you have.</p>
                    </div>
                </div>
            </div>
            <hr class="hrAccordian">
            <div class="card">
                <div class="card-header" id="faqHeadingEight"><a class="collapsed" data-toggle="collapse" data-target="#faqCollapseEight" aria-expanded="false" aria-controls="faqCollapseEight" style="text-transform: none !important; display: flex; justify-content: space-between;">Can you get a home loan if you are retired?<span class="pull-right"><i class="fa fa-angle-down">&nbsp;</i><i class="fa fa-angle-up">&nbsp;</i></span> </a></div>
                <div id="faqCollapseEight" class="collapse" aria-labelledby="faqHeadingEight" data-parent="#FAQExample">
                    <div class="card-body">
                        <p class="content">You can definitely have more than one home loan at the time. There is no law in India that states that you can only have one home loan at a time. Taking multiple home loans will depend on a lot of factors, the most important being -</p>
                        <ul class="content">
                            <li>Your credit score</li>
                            <li>Your debt-to-income ratio</li>
                            <li>Your income and age</li>
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

ChartJS.register(ArcElement, Tooltip)

export default {
    name: 'EMICalculator',
    components: {
        Doughnut
    },
    data() {
        return {
            loanAmount: 20000000,
            interestRate: 9,
            tenure: 2,
            emi: 0,
            totalInterest: 0,
            totalAmount: 0,
            emiScheduleTable: '',
            chartData: {
                labels: ['Loan Amount', 'Interest'],
                datasets: [{
                    data: [0, 0],
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
            this.updateRangeBackground('interestRange', this.interestRate, 6, 15);
            this.updateRangeBackground('loanRange', this.loanAmount, 100000, 100000000);
            this.updateRangeBackground('tenureRange', this.tenure, 1, 30);
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


<style scoped>
.marginTop0 {
    margin-top: 20px !important;
}

@keyframes chartjs-render-animation {
    from {
        opacity: .99
    }

    to {
        opacity: 1
    }
}

.chartjs-render-monitor {
    animation: chartjs-render-animation 1ms
}

.chartjs-size-monitor,
.chartjs-size-monitor-expand,
.chartjs-size-monitor-shrink {
    position: absolute;
    direction: ltr;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    visibility: hidden;
    z-index: -1
}

.chartjs-size-monitor-expand>div {
    position: absolute;
    width: 1000000px;
    height: 1000000px;
    left: 0;
    top: 0
}

.chartjs-size-monitor-shrink>div {
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0
}

/* Slider Section */
#inputRange {
    background: linear-gradient(to right, #FF7F4C 0%, #FF7F4C 2%, rgba(221, 221, 221, 1) 20.8417%, rgba(221, 221, 221, 1) 100%)
}

/* 
#interestRange {
    background: linear-gradient(to right, #FF7F4C 0%, #FF7F4C 33%, rgba(221, 221, 221, 1) 33%, rgba(221, 221, 221, 1) 100%);
} */

#tenureRange {
    background: linear-gradient(to right, #FF7F4C 6%, #FF7F4C 6%, rgba(221, 221, 221, 1) 0%, rgba(221, 221, 221, 1) 100%);
}

.inputContainer {
    width: 96px;
}

.loanAmountContainer {
    width: 154px !important;
}

/* CALCULATOR STYLES */

section {
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sectionTitle {
    text-align: left !important;
    color: rgba(0, 0, 0, 1);
}

.calculatorPageContent {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-regular);
    color: rgba(67, 64, 97, 1);
}

h6 {
    padding-top: 0px !important;
}

/* Slider Section */
.calculatorSlider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 82px;
    background: rgba(221, 221, 221, 1);
    outline: none;
    transition: background 450ms ease-in;
}

.calculatorSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px !important;
    height: 28px !important;
    border-radius: 50%;
    background: linear-gradient(228.37deg, var(--orange05) 16.67%, var(--orange05) 87.75%) !important;
    cursor: pointer;
    border: 8px solid var(--white-color) !important;
    box-shadow: 0px 3px 12px 0px #00000029 !important;
}

.calculatorSlider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
}

.emiText {
    font-size: 24px;
    font-weight: var(--font-weight-semibold);
    line-height: 36px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    margin-bottom: 28px;
}

.emiAmount {
    font-size: 32px;
    font-weight: var(--font-weight-bold);
    line-height: 48px;
    letter-spacing: 0px;
    color: var(--orange05);
    text-align: center;
    margin-bottom: 12px;
}

.emiContent {
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(130, 132, 157, 1);
    margin-bottom: 20px;
}

.subContentText {
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    letter-spacing: 0em;
    color: rgba(67, 64, 97, 1);
    text-align: center;
    margin-bottom: 4px;
}

.subContentAmount {
    font-size: 16px;
    font-weight: var(--font-weight-semibold);
    line-height: 22px;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
}

.vl {
    color: rgba(220, 220, 222, 1);
    border-left: 1px solid rgba(220, 220, 222, 1);
    height: 38px;
    margin: 0 32px;
}

.rec:before {
    color: #0b864c;
}

.can:before {
    color: #f3aaa5;
}

.inputContainer {
    border: 1px solid rgba(185, 186, 189, 1) !important;
    color: rgba(0, 0, 0, 1);
    width: 96px;
    height: 48px;
    padding: 13px 16px 13px 16px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
}

.sliderTitle {
    font-size: 18px;
    font-weight: var(--font-weight-semibold);
    line-height: 24px;
    align-self: center;
    color: var(--black-color);
    margin-block: auto;
}

.rangeValue {
    font-size: 12px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
    color: var(--grey07);
}

.sliderSection {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.sliderButton {
    width: 270px !important;
    height: 56px;
    margin-top: 12px;
}

.ChartList {
    list-style: none !important;
    padding-left: 0px;
}

.ChartList li:before {
    content: "•";
    padding-right: 8px;
    vertical-align: middle;
    font-size: 2em;
    line-height: 20px;
}

.ChartList:nth-child(1) li:before {
    color: var(--primary-color);
}

.ChartList:nth-child(2) li:before {
    color: var(--magenta03);
}

.chartContainer {
    padding-block: 32px 32px;
}

.chartText {
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    color: var(--grey09);
    margin-bottom: 4px;
}

.chartAmount {
    font-size: 16px;
    font-weight: var(--font-weight-semibold);
    line-height: 22px;
    color: var(--black-color);
    margin-bottom: 0px;
}

.loanAmountContainer {
    width: 154px !important;
    padding-left: 32px;
    text-align: left;
}

.interestContainer {
    text-align: right;
    padding-right: 32px;
}

.tenureInputContainer {
    margin-right: 4px;
}

.loanEmiCalculator {
    border-radius: 12px;
    border: 1px solid var(--primary-color);
    gap: 10px;
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-regular);
    letter-spacing: 0em;
    text-align: center;
    color: var(--primary-color) !important;
    background: var(--grey01);
    padding-block: 8px;
    margin-bottom: 16px;
}

.inputSymbolRupee::after {
    position: absolute;
    top: 0;
    content: "₹";
    left: 16px;
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
}

.inputSymbolPercent:after {
    position: absolute;
    top: 0;
    content: "%";
    right: 16px;
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 22px;
}

/* EMI Table */

.emiTable {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid rgba(220, 220, 222, 1);
    width: 100%;
}

.emiTable tr.header {
    background-color: var(--orange01);
    padding: 10px;
}

.emiTable th {
    font-size: 24px;
    font-weight: var(--font-weight-semibold);
    line-height: 20px;
    letter-spacing: 0em;
    color: rgba(0, 0, 0, 1);
    padding-block: 14px;
    text-align: center;
}

.emiTable td {
    font-size: 18px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
    letter-spacing: 0em;
    color: rgba(0, 0, 0, 1);
    padding-block: 12px;
}

.viewButton {
    font-size: 20px;
    font-weight: var(--font-weight-semibold);
    line-height: 24px;
    text-align: center;
    color: var(--primary-color);
    padding-top: 24px;
    background: none;
    border: none;
    text-decoration: underline;
}

.font-weight-600 {
    font-weight: var(--font-weight-semibold) !important;
}

/* Introduction */
.roundedList {
    list-style-type: none;
    padding-left: 0;
}

/*what makes mv better section*/
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

/* Steps to apply */
.roundedList li {
    position: relative;
    padding-left: 48px;
    counter-increment: item;
    margin-bottom: 24px;
}

.roundedList li::before {
    content: counter(item);
    border-radius: 50%;
    width: 32px !important;
    height: 32px !important;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #DCDCDE;
    color: var(--grey09);
    font-size: 20px;
    font-weight: var(--font-weight-regular);
    line-height: 32px;
    text-align: center;
}

.loanSteps {
    font-size: 20px;
    font-weight: var(--font-weight-regular);
    line-height: 32px;
    color: var(--grey07) !important;
}

.applyNowButton {
    height: 56px;
    border-radius: 4px;
    background: var(--primary-color);
    font-size: 20px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    text-align: center;
    padding-block: 16px;
    color: rgba(255, 255, 255, 1);
    border: none;
    width: 100%;
}

/* Interlinks */
.calculatorInterlinks {
    border-radius: 12px;
    background: var(--orange01);
    padding: 24px 28px;
}

.interlinksContent {
    font-size: 14px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
    padding-top: 16px;
}

.interlinksImageContainer {
    width: 64px;
    height: 64px;
    text-align: center;
    margin-inline: auto;
}

/*Bottom-banner*/
.bottomBanner {
    background-image: url(https://d31bgfoj87qaaj.cloudfront.net/banner-bottom-1400.webp);
    background-repeat: no-repeat;
    background-position: right 0% top 48%;
    background-size: 100%;
    padding-top: 292px !important;
}

.bottomBannerTitle {
    font-weight: var(--font-weight-semibold);
    color: var(--black-color);
}

.bottomBannerSubTitle {
    font-weight: var(--font-weight-regular);
    color: var(--black-color);
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

.accordion .card .card-body {
    color: var(--grey07);
    text-align: left;
}

.accordion .card .card-header a {
    font-weight: var(--font-weight-regular) !important;
    color: var(--black-color);
    padding: 0px;
    letter-spacing: unset;
}

.accordion .card .card-body ul,
ol {
    padding-left: 2.5rem;
}

.accordion .card .card-body strong {
    color: var(--black-color) !important;
}

.accordion .card .card-body table {
    margin-top: 20px;
    border: 1px solid var(--grey07);
    text-align: center;
}

.accordion .card .card-body .table th {
    color: var(--black-color);
    padding: 8px;
}

.accordion .card .card-body .table td {
    padding: 8px;
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
}

.accordion .card .card-body p,
ul,
ol,
table,
strong {
    font-weight: var(--font-weight-regular) !important;
    color: var(--grey07) !important;
    margin: 0px;
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

.moreFaqs {
    font-weight: var(--font-weight-regular) !important;
}

.moreFaqButton {
    color: var(--primary-color) !important;
    text-decoration: underline !important;
}

/* RESPONSIVE STYLES */

@media screen and (min-width: 1440px) {

    /* Slider Section*/
    .sliderSectionContainer {
        margin-top: 96px;
    }

    .calculatorSection {
        box-shadow: 4px 4px 72px 0px rgba(165, 167, 195, 0.4);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        width: fit-content;
        padding-block: 80px;
    }

    .sectionTitle {
        font-size: 44px;
        line-height: 64px;
        margin-bottom: 64px;
        font-weight: var(--font-weight-bold);
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 32px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
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
        width: 362px;
        margin-bottom: 24px;
    }

    .cardDescription {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        width: 448px;
        min-height: 0px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 16px;
    }

    .cardSectionTitle {
        width: 60%;
    }

    /*EMI Calculator*/
    .loanEmiCalculator {
        font-size: 16px;
        line-height: 24px;
        font-weight: var(--font-weight-regular);
        margin-bottom: 24px;
        padding-block: 13px;
    }

    /*Bottom-banner*/
    .bottomBanner {
        min-height: 260px;
        border-radius: 10px;
        margin-top: 64px;
        padding-top: 234px !important;
        margin: 90px 130px 120px 130px;
    }

    .bottomBannerTitle {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 12px;
    }

    .bottomBannerSubTitle {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-bottom: 32px;
    }

    .bottomBannerTextPadding {
        bottom: 52px;
        position: relative;
        left: 36px;
    }

    .bottomBannerBackdrop {
        height: 260px;
        bottom: 26px;
    }

    .playstoreButton {
        width: 165px;
        height: 48px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 80px !important;
    }

    .accordion .card {
        padding: 24px 0px !important;
    }

    .accordion .card .card-body {
        padding: 16px 0px 0px 0px !important;
    }

    .accordion .card .card-header a {
        font-size: var(--body-font-size) !important;
        line-height: var(--body-line-height) !important;
        padding: 0px;
    }

    .accordionCardHeader {
        font-size: var(--body-font-size) !important;
        line-height: var(--body-line-height) !important;
        padding: 0px;
    }

    .accordion .card .card-body p,
    ul,
    ol,
    table,
    strong {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    /* FAQ */
    .moreFaqs {
        padding: 24px 0px;
        margin: 0px;
        font-size: var(--body-font-size) !important;
        line-height: var(--body-line-height);
    }

    .accordion .card .card-body .FaqContent {
        margin-bottom: 24px;
    }

}

@media screen and (min-width: 960px) and (max-width: 1439px) {

    /* Slider Section*/
    .sliderSectionContainer {
        margin-top: 80px;
    }

    .calculatorSection {
        box-shadow: 4px 4px 72px 0px rgba(165, 167, 195, 0.4);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        width: fit-content;
        padding-block: 80px;
    }

    .sectionTitle {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 40px;
        font-weight: var(--font-weight-bold);
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 12px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
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
        width: 230px;
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

    .cardSectionTitle {
        width: 60%;
    }

    /*Bottom-banner*/
    .bottomBanner {
        min-height: 186px;
        border-radius: 6px;
        margin-top: 40px;
        padding-top: 163px !important;
        margin: 60px 60px 60px 60px;
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
        bottom: 38px;
        position: relative;
        left: 24px;
    }

    .playstoreButton {
        width: 116px;
        height: 34px;
    }

    .bottomBannerBackdrop {
        height: 186px;
        bottom: 20px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 60px !important;
    }

    .accordion .card {
        padding: 16px 0px !important;
    }

    .accordion .card .card-body {
        padding: 16px 0px 0px 0px !important;
    }

    .accordion .card .card-header a {
        font-size: 14px !important;
        line-height: 20px !important;
        padding: 0px;
    }

    .accordionCardHeader {
        font-size: 14px !important;
        line-height: 20px !important;
        padding: 0px;
    }

    .accordion .card .card-body p,
    ul,
    ol,
    table,
    strong {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    /* FAQ */
    .moreFaqs {
        padding: 16px 0px;
        margin: 0px;
        font-size: 14px !important;
        line-height: 20px;
    }

    .accordion .card .card-body .FaqContent {
        margin-bottom: 20px;
    }

}

@media screen and (min-width: 768px) and (max-width: 959px) {

    /* Slider Section*/
    .sliderSectionContainer {
        margin-top: 70px;
    }

    .calculatorSection {
        box-shadow: 4px 4px 72px 0px rgba(165, 167, 195, 0.4);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        width: fit-content;
        padding-block: 80px;
    }

    /*Section styles*/
    .sectionTitle {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 40px;
        font-weight: var(--font-weight-bold);
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 12px;
    }

    .cardMarginTopDesktop {
        margin-top: 0px;
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
    }

    .cardAnimation {
        width: 100%;
        margin-top: 20px;
    }

    .cardSectionTitle {
        width: 70%;
    }

    /*Steps to apply*/
    .loanSteps {
        font-size: 14px !important;
        font-weight: var(--font-weight-regular);
        line-height: 24px !important;
        padding-block: 4px !important;
    }

    /*Interlinks*/
    .calculatorInterlinks {
        padding: 12px 12px;
    }

    /*Bottom-banner*/
    .bottomBanner {
        min-height: 186px;
        border-radius: 6px;
        padding-top: 136px !important;
        margin: 60px 30px 60px 30px;
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
        bottom: 38px;
        position: relative;
        left: 24px;
    }

    .playstoreButton {
        width: 116px;
        height: 34px;
    }

    .bottomBannerBackdrop {
        height: 157px;
        bottom: 20px;
    }

    /*Accordian*/
    .benefitsMargin {
        margin-block: 40px !important;
    }

    .accordion .card {
        padding: 16px 0px !important;
    }

    .accordion .card .card-body {
        padding: 16px 0px 0px 0px !important;
    }

    .accordion .card .card-header a {
        font-size: 14px !important;
        line-height: 20px !important;
        padding: 0px;
    }

    .accordionCardHeader {
        font-size: 14px !important;
        line-height: 20px !important;
        padding: 0px;
    }

    .accordion .card .card-body p,
    ul,
    ol,
    table,
    strong {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
        margin: 0px;
    }

    /* FAQ */
    .moreFaqs {
        padding: 16px 0px;
        margin: 0px;
        font-size: 14px !important;
        line-height: 20px;
    }

    .accordion .card .card-body .FaqContent {
        margin-bottom: 16px;
    }

}

@media screen and (min-width: 480px) and (max-width: 767px) {
    section {
        align-items: unset;
    }

    .sectionTitle {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 24px;
        /*check this*/
        font-weight: var(--font-weight-bold);
    }

    /*Slider Section*/
    .sliderSectionContainer {
        margin-top: 66px;
    }

    .loanDetails {
        box-shadow: 4px 4px 72px 0px rgba(165, 167, 195, 0.4);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        width: 100%;
        padding: 24px 16px 16px;
        margin-bottom: 28px;
    }

    .emiText {
        font-size: 16px;
        font-weight: var(--font-weight-semibold);
        line-height: 22px;
        padding-bottom: 2px;
    }

    .emiAmount {
        font-size: 24px;
        font-weight: var(--font-weight-bold);
        ;
        line-height: 34px;
        margin-bottom: 2px;
    }

    .emiContent {
        font-size: 14px;
        font-weight: var(--font-weight-regular);
        line-height: 20px;
        margin-bottom: 16px;
    }

    .sliderSection {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .inputContainer {
        height: 32px;
    }

    .roundedList li::before {
        width: 32px !important;
        height: 32px !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-semibold);
    }

    .roundedList li {
        position: relative;
        padding-left: 48px !important;
        counter-increment: item;
        margin-bottom: 8px !important;
        min-height: 32px !important;
    }

    .applyNowButton {
        font-size: 16px;
    }

    /*EMI Table*/
    .emiTable th {
        font-size: 12px;
        font-weight: var(--font-weight-semibold);
        line-height: 24px;
        padding-block: 4px;
    }

    .emiTable td {
        font-size: 12px;
        font-weight: var(--font-weight-regular);
        line-height: 20px;
        padding-block: 6px;
    }

    th:last-child,
    td:last-child {
        display: none;
    }

    .viewButton {
        font-size: 16px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 24px;
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
        min-height: 0px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 8px;
    }

    .cardSectionTitle {
        width: 70%;
    }

    /*Steps to apply*/
    .loanSteps {
        font-size: 14px !important;
        font-weight: var(--font-weight-regular);
        line-height: 24px !important;
        padding-block: 0px !important;
    }

    .sliderButton {
        width: 100% !important;
        margin-top: 24px;
    }

    /*Interlinks*/
    .calculatorInterlinks {
        margin-bottom: 16px;
    }

    .interlinksContent {
        font-size: 14px;
        line-height: 20px;
        font-weight: var(--font-weight-regular);
    }

    .interlinksImageContainer {
        width: 48px;
        height: 48px;
        margin: auto;
    }

    /*FAQ*/
    .faqSection {
        margin-bottom: 100px;
    }

    /*Accordian*/
    .accordion .card {
        padding: 16px 0px !important;
    }

    .accordion .card .card-body {
        padding: 8px 0px 0px !important;
    }

    .accordion .card .card-header a {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .accordionCardHeader {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .accordion .card .card-body p,
    ol,
    ul,
    table,
    strong {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    /* FAQ */
    .moreFaqs {
        padding: 16px 0px;
        margin: 0px;
        font-size: 14px !important;
        line-height: 20px;
    }

    .accordion .card .card-body .FaqContent {
        margin-bottom: 12px;
    }

    .benefitsMargin {
        margin-block: 40px !important;
    }
}

@media screen and (min-width: 280px) and (max-width: 480px) {
    section {
        align-items: unset;
    }

    .sectionTitle {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 24px;
        /*check this*/
        font-weight: var(--font-weight-bold);
    }

    /*Slider Section*/
    .sliderSectionContainer {
        margin-top: 66px;
    }

    .loanDetails {
        box-shadow: 4px 4px 72px 0px rgba(165, 167, 195, 0.4);
        background: rgba(255, 255, 255, 1);
        border-radius: 20px;
        width: 100%;
        padding: 24px 16px 16px;
        margin-bottom: 28px;
    }

    .emiText {
        font-size: 16px;
        font-weight: var(--font-weight-semibold);
        line-height: 22px;
        margin-bottom: 2px;
    }

    .emiAmount {
        font-size: 24px;
        font-weight: var(--font-weight-bold);
        line-height: 34px;
        margin-bottom: 2px;
    }

    .emiContent {
        font-size: 14px;
        font-weight: var(--font-weight-regular);
        line-height: 20px;
        margin-bottom: 16px;
    }

    .sliderSection {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .inputContainer {
        height: 32px;
    }

    .roundedList li::before {
        width: 32px !important;
        height: 32px !important;
        font-size: 14px !important;
        font-weight: var(--font-weight-semibold);
    }

    .roundedList li {
        position: relative;
        padding-left: 48px !important;
        counter-increment: item;
        margin-bottom: 8px !important;
        min-height: 32px !important;
    }

    .applyNowButton {
        font-size: 16px;
    }

    /*EMI Table*/
    .emiTable th {
        font-size: 12px;
        font-weight: var(--font-weight-semibold);
        line-height: 24px;
        padding-block: 4px;
    }

    .emiTable td {
        font-size: 12px;
        font-weight: var(--font-weight-regular);
        line-height: 20px;
        padding-block: 6px;
    }

    th:last-child,
    td:last-child {
        display: none;
    }

    .viewButton {
        font-size: 16px;
    }

    /* what makes mv better section */
    .cardMarginTop {
        margin-top: 24px;
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
        min-height: 0px;
    }

    .cardAnimation {
        width: 100%;
        margin-top: 8px;
    }

    /*Steps to apply*/
    .loanSteps {
        font-size: 14px !important;
        font-weight: var(--font-weight-regular);
        line-height: 24px !important;
        padding-block: 0px !important;
    }

    .sliderButton {
        width: 100% !important;
        margin-top: 24px;
    }

    /*Interlinks*/
    .calculatorInterlinks {
        margin-bottom: 16px;
    }

    .interlinksContent {
        font-size: 14px;
        line-height: 20px;
        font-weight: var(--font-weight-regular);
    }

    .interlinksImageContainer {
        width: 48px;
        height: 48px;
        margin: auto;
    }

    /*FAQ*/
    .faqSection {
        margin-bottom: 100px;
    }

    /*Accordian*/
    .accordion .card {
        padding: 16px 0px !important;
    }

    .accordion .card .card-body {
        padding: 8px 0px 0px !important;
    }

    .accordion .card .card-header a {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .accordionCardHeader {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .accordion .card .card-body p,
    ol,
    ul,
    table,
    strong {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    .cardLinks {
        font-size: 12px !important;
        line-height: var(--body-line-height) !important;
    }

    /* FAQ */
    .moreFaqs {
        padding: 16px 0px;
        margin: 0px;
        font-size: 14px !important;
        line-height: 20px;
    }

    .accordion .card .card-body .FaqContent {
        margin-bottom: 12px;
    }

    .benefitsMargin {
        margin-block: 40px !important;
    }
}
</style>