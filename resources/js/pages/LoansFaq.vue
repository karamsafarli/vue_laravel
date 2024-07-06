<template>
<div id="loans_faq_page">
    <div class="main">
    <div class="main_bg">
        <div class="container">
            <h1 class="mv-h1-text text-center p20-top space2">moneyview Loans FAQs</h1>
    
        </div>
    </div>
    <div class="container" style="padding-top: 2%;">
        <div class="row">
            <div class="col-lg-3 col-md-3">
                <div class="container" style="position: sticky; top: 66px;">
                    <div class="row">
                        <div class="col-6 col-md-12 col-sm-6 col-xs-6"><img src="https://moneyview.in/images/mvl_faq_icon.png" width="40%">
                            <p class="mv-why-us text-center">Loans FAQs</p>
                        </div>
                        <div class="col-6 col-md-12 col-sm-6 col-xs-6"><a href="../../pro-saver-banking-faq"><img src="https://moneyview.in/images/pro-saver-faq-icon.png" width="40%" class="gray"></a>
                            <p class="mv-why-us text-center">Pro Saver A/c FAQs</p>
                        </div>
                        <div class="col-6 col-md-12 col-sm-6 col-xs-6"><a href="../../credit-tracker-faq"> <img src="https://moneyview.in/images/credit-tracker-faq-icon.png" width="40%" class="gray"></a>
                            <p class="mv-why-us text-center">Credit Tracker FAQs</p>
                        </div>
                        <div class="col-6 col-md-12 col-sm-6 col-xs-6"><a href="../../money-view-app-faq"> <img src="https://moneyview.in/images/mv_faq_icon.png" class="gray money-manager-icon" width="40%"></a>
                            <p class="mv-why-us text-center">Money Manager FAQs</p>
                        </div>
                        <div class="col-6 col-md-12 col-sm-6 col-xs-6"><a href="../../banking-faq"><img src="https://moneyview.in/images/banking-faq-icon.png" width="40%" class="gray"></a>
                            <p class="mv-why-us text-center">Digital Savings A/c FAQs</p>
                        </div>
                    </div>
                    <div class="vl"></div>
                </div>
            </div>
            <div class="col-lg-9 col-md-9">
                <div class="row">
                    <div id="eligibility" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Eligibility" :class="{'active-btn': selectedCategory === '1'}" @click="selectCategory('1')">Eligibility</button></div>
                    <div id="application_process" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Application_Process" :class="{'active-btn': selectedCategory === '2'}" @click="selectCategory('2')">Application Process</button></div>
                    <div id="documents_related" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Documents_Related" :class="{'active-btn': selectedCategory === '3'}" @click="selectCategory('3')">Documents Related</button></div>
                    <div id="fee_and_charges" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Fee_and_Charges" :class="{'active-btn': selectedCategory === '4'}" @click="selectCategory('4')">Fee and Charges</button></div>
                    <div id="emi_related" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks EMI_Related" :class="{'active-btn': selectedCategory === '5'}" @click="selectCategory('5')">EMI Related</button></div>
                    <div id="credit_score" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Credit_Score" :class="{'active-btn': selectedCategory === '6'}" @click="selectCategory('6')">Credit Score</button></div>
                    <div id="auto_debit" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Auto_Debit" :class="{'active-btn': selectedCategory === '7'}" @click="selectCategory('7')">Auto Debit</button></div>
                    <div id="foreclosure" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Foreclosure" :class="{'active-btn': selectedCategory === '8'}" @click="selectCategory('8')">Foreclosure</button></div>
                    <div id="technical_issue" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Technical_Issue" :class="{'active-btn': selectedCategory === '9'}" @click="selectCategory('9')">Technical Issue</button></div>
                    <div id="security_privacy" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Security_Privacy" :class="{'active-btn': selectedCategory === '10'}" @click="selectCategory('10')">Security &amp; Privacy</button></div>
                    <div id="top_up_loan" class="col-6 col-md-3 col-sm-3 col-xs-6 tab"><button class="tablinks Top_Up_Loan" :class="{'active-btn': selectedCategory === '11'}" @click="selectCategory('11')">Top Up Loan</button></div>
                    
                    <div id="Eligibility" class="tabcontent" v-if="selectedCategory === '1'">
                        <div class="accordion text-left" id="accordionExample">
                            <div class="card" style="display: block;">
                                <div id="eligibility_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Who is eligible to apply for a loan from moneyview ?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The eligibility criteria to apply for a moneyview Personal Loans is transparent . Our basic eligibility criteria is</p>
                                        <p class="mv-why-us">A salaried or self-employed individual <br>Monthly in-hand income of ₹13,500 or more <br>Income should be received in a bank <br>Min CIBIL score of 650 or Experian score of 650 <br>Should be aged between 21 years and 57 years</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What is the maximum and minimum loan amount that I can apply for?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The minimum amount that you can borrow on moneyview loans is Rs.5,000. The maximum loan amount is calculated by our algorithm and can go up to Rs.10 Lakhs.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> I am a self-employed individual, am I eligible for a loan from moneyview? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, moneyview provides loans to self employed applicants as long as they fulfill the following eligibility criteria</p>
                                        <ul class="ul-check mv-why-us text-left">
                                            <li>
                                                <p class="mv-why-us text-left">Monthly in-hand income of ₹15,000 or more</p>
                                            </li>
                                            <li>
                                                <p class="mv-why-us text-left">Income must be credited to a bank account</p>
                                            </li>
                                            <li>
                                                <p class="mv-why-us text-left">Minimum CIBIL score of 650 or Experian score of 650</p>
                                            </li>
                                            <li>
                                                <p class="mv-why-us text-left">Should be aged between 21 years and 57 years</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Is there requirement of collateral/security for this loan? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, you don't need any collateral/security for this loan.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Will I get a loan if I get my salary in cash? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">At this point in time, we only give loans to those individuals who get their salary via bank transfer – directly from their employer. We will not be able to give loans to those individuals who get their salaries in cash.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> Am I allowed to change the loan amount once I’ve applied for it? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, you can’t change your loan amount on the app after you’ve submitted your application. If you’ve made any errors during the application process, please email us at <a href="mailto:care@moneyview.in">care@moneyview.in</a>, Do keep in mind that you can’t change the loan amount or the terms after you’ve reviewed and submitted the Loan Agreement.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">I received lesser salary for 1 month as compared to the minimum salary. Can I still apply?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, you could apply. Our verification team may approach you for verification of Salary slip at a later date.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_8" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"> My bank is not listed in the drop down list of supported banks in the application process. Can I still apply for the loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, we only support banks that are recognized by the moneyview as it ensures the authenticity of the bank account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_9" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">Can I borrow any amount that I require up till Rs 5lakh?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Our system generates the maximum amount you are eligible for based on various parameters like your credit score, income, other loans, etc. You will not be able to borrow a higher amount than this amount for this time. But, if you show consistent repayment record, we could offer you a Top-Up loan after sometime or you could be eligible for a higher amount next time.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_10" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen"> I have one loan running with moneyview. Can I apply for another loan? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, we don’t provide the option of applying for a new loan if a user already has an existing one. We may enable the option of a Top-up loan after 6 months for an user with a good repayment record.</p>
                                        <p class="mv-why-us p20-top">A top-up loan is an additional loan which you can club with your existing moneyview loan account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_11" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven"> More details on moneyview personal loan <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us">We provide personal loans ranging from Rs 5,000 - Rs 10 Lakh with a tenure from 3-60 months and monthly interest varying from 1.33% - 2.5%. Annual Interest rates vary from 16% - 36%. The processing fee varies from 2% to 5% of the loan amount.</p>
                                        <p class="mv-why-us">Benefits:</p>
                                        <ul class="mv-why-us text-left">
                                            <li>Check your eligibility for an instant loan in 2 minutes</li>
                                            <li>Loan amount is disbursed to your account in just 24 HOURS of approval</li>
                                            <li>From documentation to repayment, the entire process is done digitally</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="eligibility_12" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve"> More details on data deletion <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p class="mv-why-us">For any data deletion request, please reach out to our customer care support. Email at - care@moneyview.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Application_Process" class="tabcontent"  v-if="selectedCategory === '2'">
                        <div class="accordion text-left" id="accordionExample2">
                            <div class="card" style="display: block;">
                                <div id="application_process_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">What are the steps I’ll need to follow to get a loan from moneyview?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">You can get an instant loan on moneyview without any paperwork by following these steps:</p>
                                        <p class="mv-why-us">1.Complete and submit your loan application on the app/on our website by giving your personal and employment details, bank statements and submitting your KYC documents.</p>
                                        <p class="mv-why-us">2.Once you’ve submitted your loan application, we’ll go through your documents and assess your creditworthiness along with other important details on your application.</p>
                                        <p class="mv-why-us">3.Post the verification process, we’ll send you a NACH form, which you’re required to print, sign on, scan, and send back to us. This NACH form is to enable the auto-debit facility for your bank account so you can pay your EMIs on time automatically.</p>
                                        <p class="mv-why-us">4.On receiving your NACH form, we’ll send you a loan agreement on the app. You’ll need to review and submit the agreement. Post this, your loan amount will be credited into your bank account in a few hours.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve"> What are the documents required to apply for a loan from moneyview?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Here’s the list of documents you will need to apply for a loan on our app:</p>
                                        <p class="mv-why-us p20-top">For Salaried Applicants</p>
                                        <ul class="ul-check mv-why-us text-left">
                                            <li class="mv-why-us">Identity Proof – Aadhaar/PAN Card</li>
                                            <li class="mv-why-us">Current Address Proof – If Aadhaar Card doesn’t feature your current address</li>
                                            <li class="mv-why-us">Bank Statement (Salary A/C) – Last 3 months’ statement with salary credits</li>
                                        </ul>
                                        <p class="mv-why-us text-left"></p>
                                        <p class="mv-why-us">For Self Employed Applicants</p>
                                        <ul class="ul-check mv-why-us text-left">
                                            <li class="mv-why-us">Identity Proof – Aadhaar/PAN Card</li>
                                            <li class="mv-why-us">Current Address Proof – If Aadhaar Card doesn’t feature your current address</li>
                                            <li class="mv-why-us">Income Tax Return Verification Form for the last 2 years</li>
                                        </ul>
                                        <p class="mv-why-us p20-top">Please make sure that the documents listed above are valid at the time of submission of your loan application.</p>
                                        <p class="mv-why-us p20-top">Also, if you are able to clear the oKYC process during your application flow, the document requirement will be minimal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">How will I submit the documents that you require to process my loan? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The entire loan application process for getting a moneyview loan is digital. So you will have to submit all the required documents online either on our app or on the web application, depending on where your are applying from.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen"> Can I send the documents by email as I am not sure of submitting it online? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">As we follow a completely digital process, we will not be in a position to accept your documents on email. We have made our application process simple enough for everyone to follow. If you are still getting errors while uploading your documents, you can send us a screenshot of the problem to <a href="mailto:care@moneyview.in">care@moneyview.in</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFiveteen" aria-expanded="false" aria-controls="collapseFiveteen">How much time does moneyview take to disburse my loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFiveteen" class="collapse" aria-labelledby="headingFiveteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We try our best to process your loan within 24 hrs after the submission of your loan agreement. Steps such as filling out the application, approval of your NACH mandate, and eligibility check happens before the loan agreement stage and are not a part of this 24-hours period. To increase chances of faster disbursal, we would advise you to submit correct documents during your application process.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen"> How will I pay the EMIs for this loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">As a part of the loan application process, you would be submitting a NACH mandate, this will allow us to auto debit your EMIs. This is also a hassle free process as you need not remember EMI dates and do manual transfer each time.</p>
                                        <p class="mv-why-us p20-top">If the auto-debit feature for your loan account is not enabled or activated for some reason, you can still pay your monthly EMIs through the ‘Pay Now’ option on our app. You can either use your debit card or your netbanking account to make your payments with this option.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">How will the NACH form help my application process?Does my loan get disbursed immediately after I submit the NACH form?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeventeen" class="collapse" aria-labelledby="headingSeventeen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">To ensure timely repayment of all loan EMIs, you will have to enable an auto-debit facility from your bank account through NACH mandate. You will have to download, print and sign the NACH mandate and email it to us. After this we review your loan agreement which has your identity and address proof attached to it. If your Aadhaar Card is one of these attachments, the first 8 digits will be masked. You will then receive an OTP on your registered number, which you’ll need to enter to be able to submit the loan agreement. Your loan will be disbursed only after completion of this step.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_8" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEightteen" aria-expanded="false" aria-controls="collapseEightteen"> Can I cancel the loan at any stage?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEightteen" class="collapse" aria-labelledby="headingEightteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, you can cancel the loan only before you’ve submitted the Loan Agreement form. After you submit this Loan Agreement, you will not be able to cancel the loan.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_9" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">Is moneyview the lender of this loan? If not, does my data get shared with the lender when I apply for a loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseNineteen" class="collapse" aria-labelledby="headingNineteen" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, moneyview only facilitates the process of lending and repayment of the loans. Yes, your loan request data will be shared with the lender. This is done to facilitate the process of you getting the loan from the lender.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_10" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty"> I am unable to fill in my current address. What should I do? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwenty" class="collapse" aria-labelledby="headingTwenty" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Please ensure that you are filling in your current address in English, and you are not using any special keyboard or characters to enter your address. Please give your complete address with house number and street name (if applicable). Please make sure that your address matches the address specified on your documents.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="application_process_11" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwentyone" aria-expanded="false" aria-controls="collapseTwentyone"> What happens if the app crashes when I’m midway through my loan application process? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwentyone" class="collapse" aria-labelledby="headingTwentyone" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We have made sure that the loan request process on our app is smooth and bug-free. But, if your app crashes at any point in time, you will be able to restart from the same step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Documents_Related" class="tabcontent"  v-if="selectedCategory === '3'">
                        <div class="accordion text-left" id="accordionExample3">
                            <div class="card" style="display: block;">
                                <div id="documents_related_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">What are the documents required to apply for a loan from moneyview?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample3" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Here’s the list of documents you will need to apply for a loan on our app:</p>
                                        <p class="mv-why-us p20-top">For Salaried Applicants</p>
                                        <ul class="ul-check mv-why-us text-left">
                                            <li class="mv-why-us">Identity Proof – Aadhaar/PAN Card</li>
                                            <li class="mv-why-us">Current Address Proof – If Aadhaar Card doesn’t feature your current address</li>
                                            <li class="mv-why-us">Bank Statement (Salary A/C) – Last 3 months’ statement with salary credits</li>
                                        </ul>
                                        <p class="mv-why-us text-left"></p>
                                        <p class="mv-why-us p20-top">For Self Employed Applicants</p>
                                        <ul class="ul-check mv-why-us text-left">
                                            <li class="mv-why-us">Identity Proof – Aadhaar/PAN Card</li>
                                            <li class="mv-why-us">Current Address Proof – If Aadhaar Card doesn’t feature your current address</li>
                                            <li class="mv-why-us">Income Tax Return Verification Form for the last 2 years</li>
                                        </ul>
                                        <p class="mv-why-us p20-top">Please make sure that the documents listed above are valid at the time of submission of your loan application.</p>
                                        <p class="mv-why-us p20-top">Also, if you are able to clear the oKYC process during your application flow, the document requirement will be minimal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> I have uploaded all the required documents for the loan, then why have I received a mail asking for some documents?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample3" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Our internal team sends out emails to you only if there’s an issue with one or more of the documents you’ve uploaded. Please go through the email you’ve received for more details on what documents we require from you again. Be sure to follow the upload instructions clearly to avoid this situation again.To ensure quick processing, we request you to upload the required documents on our app.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">I am not registered for netbanking or if my netbanking ID is not valid, how can I send you my bank statement?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">To begin with, you’ll need to register yourself for the internet banking facility with your bank. Once you have a valid ID and a password, log in to your account and look for the option to download a pdf version of your account statement. If you’re unsure as to how you can do this, here’s a comprehensive guide to help you along.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> I don't have hard copy of my PAN with me. Can I make the video with the soft copy? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">If you do not have the hard copy of your PAN with you right now, you could make a video with your Original Aadhaar Card and upload the same. But a video with the soft copy is not permitted.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">I don't have any docs for Current Address Proof which are listed in your list. What can be done in such condition?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We would not be able to process your application without any one of the approved current address proof. Please try to arrange an address proof which is listed by us to ensure faster loan processing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">I received/Downloaded the Bank Statement in Email from my Bank. However, when I am trying to upload it's not getting accepted?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Many times the bank statement sent or downloaded is not in the right format. To ensure your loan is processed at the earliest, please download bank statement in PDF from your bank website or the one received in your registered email id and upload it on our app.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Recently, I changed my bank account. It shows income/salary credit of only 1/2 months. Can I upload bank statements from both the banks to meet the 3month bank statement requirement?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">As a policy we require minimum 3 months of bank statement for salaried applicants. Our system does not allow upload of more than 1 bank statement.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="documents_related_8" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"> I am not able to upload docs online or seeing errors. Can I send the docs directly in email and you can process the application?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, as we follow a completely digital process, we will not be able to accept any documents by email. Please upload them online for faster processing of your loan. If you are facing problems in uploading the docs, you could send us the screenshot at <a href="mailto:care@moneyview.in">care@moneyview.in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Fee_and_Charges" class="tabcontent"  v-if="selectedCategory === '4'">
                        <div class="accordion text-left" id="accordionExample4">
                            <div class="card" style="display: block;">
                                <div id="fee_and_charges_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">What is the Rate of Interest charged on moneyview Platform?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample4" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The rate of interest starts from 16% p.a and is based on the assessment of your details like credit score, income, other loans, obligations or the selected lender etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="fee_and_charges_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Do I have to pay a processing fee on the loan? At what rate will it be charged?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample4" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, we charge a small fee to process your loan. It starts from 2% of your loan amount and is decided by our system based on various factors. The applicable processing fee will be deducted from the loan amount while the remaining funds will be transferred to your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="fee_and_charges_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">I do not understand the interest rates. How much will I have to pay?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample4">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">On your screen, you should be able to see a column called "Monthly EMI". That is the amount you will be paying each month. The Loan term column tells you the duration of the loan, and you will have to pay your "Monthly EMI" every month for that duration.</p>
                                        <p class="mv-why-us p20-top">The Interest column is for your information only, and specifies the entire interest you are paying on that loan amount in the entire duration. It is not related to the amount you will be paying.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="fee_and_charges_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> How is EMI calculated on my loan? Do you follow the reducing balance method for interest calculation?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample4">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Your EMI which is also known as Equated Monthly Installment consists of a portion of principal repayment as well as interest payment on the loan. The EMI amount on your loan depends on the principal amount, the loan tenure and the rate of interest</p>
                                        <p class="mv-why-us p20-top">Yes, We follow the reducing balance method for interest calculation. We have added a small example here to make it more clear for you.</p>
                                        <p class="mv-why-us p20-top">Suppose you avail a loan for Rs 50000 for a term of 6 months at an interest rate of 16%. Your repayment schedule will look like the example below. You would see that your outstanding loan amount is reducing with payment of each EMI, which is why this method is called the reducing balance method for interest calculation.</p>
                                        <table class="table table-striped table-bordered mv-why-us text-left">
                                            <tbody style="border: 1px solid black;">
                                                <tr style="border: 1px solid black;">
                                                    <td style="border: 1px solid black;"></td>
                                                    <td style="border: 1px solid black;">Month 1</td>
                                                    <td style="border: 1px solid black;">Month 2</td>
                                                    <td style="border: 1px solid black;">Month 3</td>
                                                    <td style="border: 1px solid black;">Month 4</td>
                                                    <td style="border: 1px solid black;">Month 5</td>
                                                    <td style="border: 1px solid black;">Month 6</td>
                                                </tr>
                                                <tr style="border: 1px solid black;">
                                                    <td style="border: 1px solid black;">Principal Repaid</td>
                                                    <td style="border: 1px solid black;">8060</td>
                                                    <td style="border: 1px solid black;">8167</td>
                                                    <td style="border: 1px solid black;">8276</td>
                                                    <td style="border: 1px solid black;">8387</td>
                                                    <td style="border: 1px solid black;">8498</td>
                                                    <td style="border: 1px solid black;">8612</td>
                                                </tr>
                                                <tr style="border: 1px solid black;">
                                                    <td style="border: 1px solid black;">Interest Paid</td>
                                                    <td style="border: 1px solid black;">667</td>
                                                    <td style="border: 1px solid black;">559</td>
                                                    <td style="border: 1px solid black;">450</td>
                                                    <td style="border: 1px solid black;">340</td>
                                                    <td style="border: 1px solid black;">228</td>
                                                    <td style="border: 1px solid black;">115</td>
                                                </tr>
                                                <tr style="border: 1px solid black;">
                                                    <td style="border: 1px solid black;">EMI amount</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                    <td style="border: 1px solid black;">8727</td>
                                                </tr>
                                                <tr style="border: 1px solid black;">
                                                    <td style="border: 1px solid black;">Outstanding Principal</td>
                                                    <td style="border: 1px solid black;">41940</td>
                                                    <td style="border: 1px solid black;">33773</td>
                                                    <td style="border: 1px solid black;">25497</td>
                                                    <td style="border: 1px solid black;">17110</td>
                                                    <td style="border: 1px solid black;">8612</td>
                                                    <td style="border: 1px solid black;">0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="EMI_Related" class="tabcontent"  v-if="selectedCategory === '5'">
                        <div class="accordion text-left" id="accordionExample5">
                            <div class="card" style="display: block;">
                                <div id="emi_related_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> How do I repay the loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample5" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The loan will be repaid in EMIs which will be automatically deducted from your bank account. This is done only after you’ve authorized us to deduct the proposed EMI amount that’s specified during the loan request process in the app.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What is the minimum and maximum tenure that I can opt for moneyview loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample5" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We allow loan tenures anywhere between 6 months to 60months. You can choose the tenure that is most suitable to your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Can I make a manual payment of the EMI? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes. If the auto-debit facility is not activated for your linked account, you can pay the loan EMI manually through the ‘Pay Now’ button on our app.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Are there any late payment fees in case I miss an EMI?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We would advise you to make your monthly EMIs on time for your entire repayment tenure. However, if you end up missing any EMI payment and the auto-debit request gets declined, you’ll firstly have to bear with additional charges from your bank. This fee can vary from one bank to another. On the other hand, we give you a grace period of 2 days to make this payment. If you’re still unable to pay the EMI on time, you will have to pay cheque bounce charges and a separate penal charge – Rs.500 (NACH bounce charges) + Penal charges at 24% per annum plus applicable taxes, if any on overdue EMI for the period of delay in payment of EMI. This fee will add up until you make the payment for that month.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What happens if I’m not able to pay my EMI on time?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The loan amount gets automatically debited on the 5th of every month. If you don’t have the required funds in your account, we allow a grace period of up to 3 days during which you can request for a Loan EMI transfer through the app to avoid any late charges. Beyond this time period, a late payment fee will be charged.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> How many minimum EMIs should I have paid if I am looking to close the loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">You could foreclose/pay-off the loan amount anytime without penalty based on your loan's tenure.</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is upto 6 months - No Foreclosure allowed</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is from 7-18 months - Foreclosure allowed after making 6 EMI payments</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is &gt;18 month tenure - Foreclosure allowed only after making 12 EMI payments</p>
                                        <p class="mv-why-us p20-top">For any support, you can also reach out to us at <a href="mailto:care@moneyview.in">care@moneyview.in</a> ."</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="emi_related_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Can I make part-payments of the EMI amount?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Part payment of EMIs is not allowed. As per the terms of the loan, you are required to pay the full EMI on the due date.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Credit_Score" class="tabcontent"  v-if="selectedCategory === '6'">
                        <div class="accordion text-left" id="accordionExample6">
                            <div class="card" style="display: block;">
                                <div id="credit_score_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What do you mean by credit score?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample6" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Your credit score is a number that represents your creditworthiness. It is based on previous loans that you might have taken, your credit card usage patterns, as well as your promptness in paying back any loans/credit card bills on time.</p>
                                        <p class="mv-why-us p20-top">During the process of applying for a loan via moneyview, you will need to allow us to pull your credit report to assess your overall creditworthiness. This report will be kept private. It will not affect your credit score.</p>
                                        <p class="mv-why-us p20-top">At this point of time, we only give out loans to people with a credit score of 675 or higher.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="credit_score_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What is the minimum credit score requirement to avail a loan from moneyview?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample6" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The minimum credit score that we look for is a CIBIL score of 650 or an Experian Score of 650.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="credit_score_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Will there be a credit report enquiry when I apply for this loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample6">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, there will be a credit report enquiry made whenever you borrow from moneyview. This enquiry will only be made after you submit the loan application.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="credit_score_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How does my credit score get affected by this loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample6">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Your credit score gets affected only if you’re not able to pay back the loan EMIs on time or if you miss payments altogether. With consistent repayments, your credit score will only improve.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="credit_score_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Will my credit score be affected if I get rejected?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample6">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">No, your credit score will not be affected if your loan application is rejected. But if you have had several loan enquiries with multiple lenders, it can affect your credit score.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Auto_Debit" class="tabcontent"  v-if="selectedCategory === '7'">
                        <div class="accordion text-left" id="accordionExample7">
                            <div class="card" style="display: block;">
                                <div id="auto_debit_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What is NACH? Why do you need it from me?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample7" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">NACH stands for National Automated Clearing House (NACH). It is a centralised system that’s similar to ECS. It was launched with the aim of merging multiple ECS systems running across the country and to introduce higher efficiency. It has replaced ECS for auto-debit transactions in India and has been operational since May 2016. You can read more about NACH here(<a href="https://bit.ly/37cdQYQ">https://bit.ly/37cdQYQ</a>). We require your signed NACH mandate to auto-debit EMI payments from your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How does the EMI get automatically deducted from my bank account?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample7" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The last step of the loan request process includes you sending us a Loan Agreement form with the authorization of deducting a proposed EMI amount for a certain duration (depending on the loan plan). This Loan Agreement form will contain a NACH mandate, which will enable us to auto-debit the EMI amount directly from your bank account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> If I don't have auto-debit facility on my bank, what other options can I use to pay my EMIs? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">If the Auto-Debit feature for your loan account is not enabled or activated for some reason, you can still pay your monthly EMIs through the ‘Pay Now’ option on our app. Here, you can either use your Debit Card, NetBanking account, or UPI ID to make payments.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> If I pay for an EMI by using the Pay Now button on the app, will you deduct the EMI through auto-debit as well? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">If the ‘Pay Now’ option is visible on your app, you can go ahead and make a payment – advance or overdue instalments. If you’re paying an instalment in advance, we will not be initiating the auto-debit feature for the following month.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">I have signed and uploaded the NACH mandate. But the auto-debit feature is still disabled. What should I do about it?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Once you upload the NACH mandate form, we send a request to your bank to enable the auto-debit feature. Your bank will then verify your signature and other important details before enabling the auto-debit feature.If you continue to notice that this feature is still disabled after a couple of days, please get in touch with us at <a href="mailto:care@moneyview.in">care@moneyview.in</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> My EMI for the month has been auto-debited, but I am not seeing payment confirmation on your platform.Why is it so? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We usually get the monthly auto-debit report by the 7th or the 8th day of that month. Our internal team usually updates the platform once this report is checked and verified. So, there’s nothing for you to worry about as long as you’ve made the payment.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How can I cancel my NACH Mandate?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The cancellation of NACH mandate is an easy process. You can use the given link to raise a request for canceling the NACH mandate registered with moneyview. You'll be required to authenticate using your PAN number to proceed. <a href="https://moneyview.in/apply-loan/mandate/otp-login">Click here!</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_8" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"> What is the maximum amount shown at NACH screen? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The maximum amount shown at NACH is a system determined value which defines the amount till which auto-debits can be done.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_9" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"> Why Is My NACH Mandate Amount Higher Than The EMI For The Loan?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The NACH amount can go up to your loan <strong>amount</strong> or <strong>can be</strong> a bit higher. But don't worry, the monthly deduction <strong>remains</strong> the same as the EMI amount you chose on the app.</p>
                                        <p class="mv-why-us p20-top">We make it easy for you by using just one NACH authorization, so you won't have to deal with multiple NACH authorizations when taking another loan <strong>with us</strong> in the future.</p>
                                        <p class="mv-why-us p20-top">Next time you avail a top-up loan or credit line, we simplify things by using just one NACH mandate, avoiding the hassle of multiple authorizations due to changes in the tenure.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_10" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen"> Why is my NACH amount different from total loan amount?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The NACH amount might be different to help you easily avail a top-up loan or credit line with MoneyView. However, be rest assured, that the loan amount you applied for on the app will be processed.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_11" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven"> Why is my NACH amount changing at every attempt? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We change the NACH amount at every attempt to ensure seamless set up of NACH and to avoid any technical problems because of re-attempts.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_12" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">What is the end date for my NACH?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">The NACH registration end date is when the registration becomes invalid for auto-debits.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_13" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen"> Why is my NACH date later than my loan tenure?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Your NACH mandate date may extend beyond your loan tenure, but don't worry—your EMI will only be deducted for the actual loan period. We’ve simplified the process to help you easily avail a top-up loan or credit line with MoneyView in the future. With just one NACH mandate, the process is both fast and convenient</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="auto_debit_14" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">Why is my NACH end date changing at every attempt?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We change the NACH end date at every attempt to ensure seamless set up of NACH and to avoid any technical problems because of re-attempts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Foreclosure" class="tabcontent"  v-if="selectedCategory === '8'">
                        <div class="accordion text-left" id="accordionExample8">
                            <div class="card" style="display: block;">
                                <div id="foreclosure_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Can I Close My Loan Before The Repayment Period Ends?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample8" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">You could foreclose/pay-off the loan amount anytime without penalty based on your loan's tenure.</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is upto 6 months - No Foreclosure allowed</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is from 7-18 months - Foreclosure allowed after making 6 EMI payments</p>
                                        <p class="mv-why-us p20-top">If your loan's tenure is &gt;18 month tenure - Foreclosure allowed only after making 12 EMI payments</p>
                                        <p class="mv-why-us p20-top">For any support, you can also reach out to us at <a href="mailto:care@moneyview.in">care@moneyview.in</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="foreclosure_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Why Am I Not Able To See The “Foreclose Loan” Section?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample8" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">There can be 2 reasons why you’re unable to see the “Foreclose Loan” section on our app: You’ve still not paid the mandatory number of EMIs to be eligible.</p>
                                        <p class="mv-why-us p20-top">Loan foreclosures are only allowed after the 8th of every month.</p>
                                        <p class="mv-why-us p20-top">If you have any other questions regarding loan foreclosures, please contact us at:</p>
                                        <p class="mv-why-us p20-top">Phone: <a href="tel:08069390476">080 6939 0476</a></p>
                                        <p class="mv-why-us p20-top">Email: <a href="mailto:care@moneyview.in">care@moneyview.in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Technical_Issue" class="tabcontent"  v-if="selectedCategory === '9'">
                        <div class="accordion text-left" id="accordionExample9">
                            <div class="card" style="display: block;">
                                <div id="technical_issue_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What happens if your platform crashes when I’m midway through my loan application process?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample9" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We have made sure that the loan request process on our platforms is smooth and bug-free. If you are using our website for your loan application, we recommend that you save your application frequently. And if your app crashes at any point in time, you will be able to start from the same step where the app crashed previously. Still if you face any difficulty, please get in touch with us at <a href="mailto:care@moneyview.in">care@moneyview.in</a> along with the details of the issue.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="technical_issue_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Why can’t I see the loans section on my moneyview app whereas my friends can see such a section on theirs?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample9" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">If you can’t see the Loans tab on your moneyview app, please make sure to update the app to the latest version.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Security_Privacy" class="tabcontent"  v-if="selectedCategory === '10'">
                        <div class="accordion text-left" id="accordionExample10">
                            <div class="card" style="display: block;">
                                <div id="security_privacy_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Is it safe to apply for a loan on moneyview online?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample10" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">moneyview’s security systems are designed to be in line with those of the best banks in the country. Rest assured knowing that all your data is safe and secure as we use 256-bit data encryption for data management.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="security_privacy_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How safe is it to share my KYC Documents on your platform?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample10" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">KYC is a mandatory requirement in accordance with RBI regulations. We ask for minimal documents for your KYC process. All your personal and financial information are encrypted using SSL protocol. So all your information is completely safe with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="security_privacy_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> How safe is it to do OKYC/e-KYC Process on the moneyview platform? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample10">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">eKYC or oKYC service is regulated by the UIDAI and has stringent security measures in place. All your KYC data is encrypted and digitally-signed to ensure authenticity at every step.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="security_privacy_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">You have asked me to share the Internet banking details in the application process. Is it safe? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample10">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">We never store any password related information that you share with us. It is in encrypted format and will be used only to read your bank statements.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="security_privacy_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What if I change my phone or the SIM?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample10">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">If you change your phone or your SIM, you can download the moneyview app again and restart from where you left.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Top_Up_Loan" class="tabcontent"  v-if="selectedCategory === '11'">
                        <div class="accordion text-left" id="accordionExample11">
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_1" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> What Is A Top-Up Loan<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample11" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Top up loan is a feature by which you can get an extra loan amount on top of your existing loan. It is currently an invitation-only feature, and only users with good payment history are pre-qualified for it</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_2" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What Documents Do I Need?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample11" style="">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">You only need Aadhaar card for it. We will also pull your CIBIL score to assess if you can get a Top Up loan.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_3" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> What Happens To My Existing Loan? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">When you take a top-up loan, we generate a new loan account for you. This new loan account has the due amount of the existing loan along with the top up loan amount.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_4" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What Happens To My Existing EMI Auto Debit Instructions? <span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Your existing EMI Auto-Debit will stop, and a new Auto-Debit mandate is generated with a new EMI amount.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_5" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What Is Pre-EMI?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Pre-EMI amount is an upfront EMI amount that is deducted from your loan amount till the actual EMI Auto-Debit happens. It is done to make sure a monthly EMI is debited after you take a loan from us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_6" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Do I Have To Keep Paying My EMIs Until The Top-Up Amount Is Approved?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, you have to keep paying your existing EMIs till your new top-up loan amount is transferred to your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_7" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Do I Have To Keep Paying My EMIs Until The Top-Up Amount Is Approved?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">Yes, you have to keep paying your existing EMIs till your new top-up loan amount is transferred to your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_8" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">How Do I Cancel My Top-Up Process?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">You can cancel your Top-Up process anytime before submitting your new Loan agreement by dropping us a mail at care@moneyview.in</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_9" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">Why Do I Have To Sign Another Agreement?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">With a top-up loan, a new loan account is generated which contains your previous unpaid amount with the new top-up amount. This new loan account is created with a new lending partner; hence a new agreement is generated. This new agreement needs to be authorized by you to get the top up amount.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style="display: block;">
                                <div id="top_up_loan_10" class="card-header"><a class="collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">Why Do I Have To Pay Fee For Top Up ?<span class="pull-right"><i class="fa fa-angle-right"></i><i class="fa fa-angle-down"></i></span> </a></div>
                                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample11">
                                    <div class="card-body">
                                        <p class="mv-why-us p20-top">As a top-up loan is a primarily a new loan, standard processing fees apply to it as well.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="collapseFiveteen" class="collapse" aria-labelledby="headingFiveteen" data-parent="#accordionExample12">
                        <div class="card-body">
                            <p class="mv-why-us p20-top">To register any card related complaints or share feedback, please contact SBM Bank on their Toll Free number-<a href="tel:18001033817">18001033817</a> or send an email to <a href="mailto:customercare@sbmbank.co.in">customercare@sbmbank.co.in</a><a href="tel:18001033817"> </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="ele" class="no-result noResulText" style="display: none;">No Results. Please try with some other keyword!</div>
</div>
</div>
</template>


<script>
import '../../css/loans_faq.css';
export default {
  data() {
    return {
      selectedCategory: '1',
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      console.log(this.selectedCategory)
    },
  },
};
</script>

<!-- 
<style scoped>


.mv-why-us {
    text-align: left;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #66cc66;
    background-color: #ffffff;
}

.nav-link {
    color: gray;
}

.table {
    text-align: center;
}

.redfamily {
    color: red;
}

.search-box {
    position: relative;
    padding: 10px;
    width: 80%;
    border: 1px solid #777;
    border-radius: 4px;
    outline: 0;
}

.search-wrapper {
    width: 500px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 30px;
}

.close-icon {
    border: 1px solid transparent;
    background-color: transparent;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 1;
    right: 80px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 2px;
    border-radius: 50%;
}



/* Style the tab */
.tab {
    overflow: hidden;
}

/* Style the buttons inside the tab */
.tab button {
    background-color: #ffffff;
    border: 0.5px solid #a7a9ac;
    display: inline-block;
    padding: 10px 0;
    width: 100%;
    margin-right: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
}

/* Style the tab content */
.tabcontent {
    padding: 6px 12px;
    border-top: none;
    width: 100%;
}

.noResulText {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    font-size: x-large;
}

.main_bg {
    background-image: url(https://moneyview.in/images/faq_loan.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -16px;
    padding: 25px 0;
}

.padding_right {
    padding-right: 11%;
}

.vl {
    border-left: 2px solid #a7a9ac;
    height: 492px;
    position: absolute;
    left: 90%;
    margin-left: -3px;
    top: 0;
}

.mobile {
    display: block;
}

.desktop {
    display: none;
}

.space2 {
    padding-top: 20px;
}

.card-header a {
    text-transform: none !important;
}

.card-header a:hover {
    text-transform: none !important;
}

@media only screen and (max-width: 768px) {
    .space2 {
        padding-top: 10px;
    }

    .mv-h1-text {
        font-size: 20px;
    }

    .mobile {
        display: none;
    }

    .desktop {
        display: block;
    }

 
    .search-wrapper {
        margin-bottom: 20px;
    }

    .padding_right {
        padding-right: 19%;
    }

    .vl {
        display: none;
    }
}

.card-header {
    border-bottom: 0;
}

.gray {
    -webkit-filter: grayscale(100%);
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.gray:hover {
    -webkit-filter: grayscale(0%);
    /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
}

.accordion .card-header>a[aria-expanded="false"] .fa-angle-down {
    display: none;
}

.accordion .card-header>a[aria-expanded="true"] .fa-angle-right {
    display: none;
}

.table_margin {
    margin: 15px 25px 0px 25px;
}

@media (max-width: 600px) {
    .table_margin {
        margin: 10px !important;
    }
}


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
</style> -->
