<template>
<section>
    <h1 class="typography_h1">Happy to help you!</h1>
    <div class="faq-section">
        <div class="row d-flex margin0">
            <div class="faq-sub-section faq-border col-12 col-sm-6">
                <h3 class="typography_h3">FAQs</h3>
                <p class="typography-paragraph">
                    Please visit FAQs for the loan related queries
                </p>
                <a href="../../loans-faq-en" class="view-faq-button">View FAQs</a>
            </div>
            <div class="faq-sub-section col-12 col-sm-6">
                <h6 class="typography_h3">Customer support</h6>
                <p class="typography-paragraph">
                    If you have already raised a support request to our
                    customer support team, then please check the status of
                    your query on the moneyview app or the registered email
                    ID
                </p>
            </div>
        </div>
    </div>
    <div class="write-to-us-section">
        <p class="typography-paragraph">
            If you are not happy with the solution provided,
        </p>
        <a class="write-to-us-button" data-toggle="modal" data-target="#writeToUs">
            Write to us
        </a>
        <p class="typography-paragraph margin-bottom-24px">
            Or reach out to
            <br class="mobile-break" />
            <a href="#" class="grievance-officer" data-toggle="modal" data-target="#grievanceOfficerModal">
                Grievance Officer
            </a>
        </p>
        <p class="typography-paragraph">
            <b>Note:</b> The issue can be escalated to the Grievance Officer
            only after 7 days of raising it
        </p>
    </div>
</section>

<div class="modal fade grievanceOfficerModal" id="grievanceOfficerModal" role="dialog" aria-labelledby="exampleModalCenterTitle" tabindex="-1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered grievanceOfficerModalContent" role="document">
        <div class="modal-content grievanceOfficerContent">
            <div class="modal-header grievanceOfficerHeader">
                <h5 class="modal-title grievanceOfficerTitle" id="exampleModalLongTitle">Grievance officer details</h5>
                <button type="button" class="close modal-btn-close" data-dismiss="modal" aria-label="Close"> <img src="https://dugtmg0pklp2w.cloudfront.net/ic-close-v2.svg" class="grievanceOfficerClose"> </button>
            </div>
            <div class="modal-body grievanceOfficerBody">
                <p class="mv-why-us text-left">Name: Mr. Venkatraman Narayan</p>
                <p class="mv-why-us text-left">Address: No. 17, 3rd Floor, Survey, 1A, Dr Puneeth Rajkumar Rd, Kadubeesanahalli, Bellandur, Bengaluru, Karnataka 560087</p>
                <p class="mv-why-us text-left">Phone number: 080 6939 0476</p>
                <p class="mv-why-us text-left">Timings: 9:00AM to 6:00PM (Monday to Friday - Excluding public holidays)</p>
                <p class="mv-why-us text-left">Email ID: grievance@moneyview.in</p>
                <p class="grievanceOfficerNote"><span class="bold600">Note:</span> We strongly recommend to mention the loan ID in the email for faster resolution</p>
            </div>
            <div class="modal-footer grievanceOfficerFooter"><button type="button" class="btn cta_button grievanceOfficerButton" data-dismiss="modal">Got it</button></div>
        </div>
    </div>
</div>

<div class="modal fade grievanceOfficerModal" id="writeToUs" role="dialog" aria-labelledby="exampleModalLabel" tabindex="-1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered grievanceOfficerModalContent" role="document">
        <div class="modal-content grievanceOfficerContent">
            <div class="modal-header grievanceOfficerHeader">
                <h5 class="modal-title grievanceOfficerTitle" id="exampleModalLabel">Write to us</h5>
                <button type="button" class="close modal-btn-close" data-dismiss="modal" aria-label="Close"> <img src="https://dugtmg0pklp2w.cloudfront.net/ic-close-v2.svg" class="grievanceOfficerClose"> </button>
            </div>
            <div class="modal-body writeToUsBody">
                <div class="alert alert-danger writeToUsError" role="alert">
                    <p id="writeToUsErrorText">We’re sorry! We could not save your data due to some technical issue. Please retry</p>
                </div>
                <form class="writeToUsForm needs-validation" novalidate="" id="grievanceForm">
                    <div class="form-group"><input type="text" class="form-control invalid writeToUsEmail" id="email" placeholder="Your registered email ID" value="" required="" autocomplete="off"> <small id="emailHelp" class="form-text errorHelperText">Email ID is required</small></div>
                    <div class="form-group"><textarea class="form-control invalid writeToUsTextBox" id="message-text" placeholder="Explain your issue here" value="" required=""></textarea> <small id="textBoxHelp" class="form-text errorHelperText">Please enter the issue</small></div>
                </form>
                <p class="writeToUsNote"><span class="bold600">Note:</span> We strongly recommend to mention the loan ID in the issue for faster resolution</p>
            </div>
            <div class="modal-footer grievanceOfficerFooter"><button type="submit" class="btn cta_button grievanceOfficerButton" id="myBtn" onclick="validateFields()">Send</button></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "SupportSection",
};
</script>

<style scoped>
::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #717371;
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #717371;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #717371;
}

section {
    margin: 75px 160px 70px;
}

@media (max-width: 959px) {
    body>div:first-of-type {
        padding-top: 0px;
    }
}

input,
textarea {
    border-radius: 8px !important;
}

.margin0 {
    margin: 0px !important;
}

.margin-bottom-24px {
    margin-bottom: 24px;
}

.typography_h5 {
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    color: #28292d;
    margin: 0px;
}

.typography_h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #28292d;
    margin-bottom: 16px;
}

.typography-paragraph {
    font-weight: 400;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #34353a !important;
}

.faq-section {
    background: #ffe5db;
    border-radius: 8px !important;
    padding: 32px 0px;
    margin-top: 40px;
    margin-bottom: 32px;
}

.faq-sub-section p {
    margin-bottom: 16px !important;
}

.view-faq-button {
    width: 160px;
    height: 56px;
    background: #144835;
    box-shadow: 0px 4.75px 23.75px 4.75px rgba(38, 38, 38, 0.24);
    border-radius: 12px;
    font-weight: 600;
    font-size: 18px !important;
    line-height: 28px;
    text-align: center;
    color: #ffffff !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.write-to-us-section {
    background: #ffffff;
    border: 1px solid #dcdcde;
    width: 100%;
    border-radius: 24px;
    display: block;
    padding: 32px 40px 16px !important;
}

.write-to-us-button {
    width: 160px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #144835;
    border-radius: 4px !important;
    font-weight: 500;
    font-size: 20px !important;
    line-height: 28px;
    text-align: center;
    color: #144835;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
}

.grievance-officer {
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline !important;
    color: #34353a !important;
    cursor: pointer;
}

.grievance-officer:hover {
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline !important;
    color: #34353a !important;
    cursor: pointer;
}

.grievanceOfficerText {
    color: #34353a !important;
    cursor: pointer;
}

.grievanceOfficerModalContent {
    width: 480px;
}

.grievanceOfficerContent {
    padding: 32px 24px 24px 24px;
    border-radius: 8px !important;
    width: 480px;
}

.grievanceOfficerBody {
    padding-block: 24px 16px;
    padding-inline: 0px;
    flex: 0;
}

.grievanceOfficerBody p {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    color: #34353a;
}

.grievanceOfficerNote {
    padding-top: 8px;
    color: #34353a !important;
}

.grievanceOfficerHeader {
    border-bottom: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grievanceOfficerFooter {
    border-top: 0px;
    padding: 0px;
}

.grievanceOfficerButton {
    width: 100%;
    margin: 0px;
    padding: 0px;
}

.grievanceOfficerClose {
    height: 24px;
    width: 24px;
}

.close {
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    background-color: transparent;
    appearance: none;
    border: none;
    padding: 5px;
}

.cta_button {
    width: 100%;
    height: 56px;
    background: #09733e;
    box-shadow: 0px 4.75px 23.75px 4.75px rgba(38, 38, 38, 0.24);
    border-radius: 12px;
    color: #fff;
}

.cta_button:hover {
    color: #fff;
}

.bold600 {
    font-weight: 600;
}

.grievanceOfficerTitle {
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #34353a;
}

button:focus {
    outline: 0 !important;
}

.modal-btn-close {
    opacity: 1 !important;
}

.writeToUsBody {
    padding-inline: 0px;
    padding-block: 24px 0px;
    flex: 0;
}

.writeToUsForm div {
    padding-bottom: 24px;
}

.writeToUsEmail {
    min-height: 56px;
    padding: 16px;
}

.writeToUsTextBox {
    min-height: 128px;
    padding: 16px;
}

.alert-danger {
    border: 0px !important;
}

.writeToUsError {
    margin-bottom: 24px;
    background-color: #fce9e8;
    padding: 16px;
    display: none;
    border-radius: 8px !important;
}

.writeToUsError p {
    color: #34353a;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
}

.errorHelperText {
    color: #e12b1d;
    font-size: 12px;
    font-weight: 500;
    display: none;
    padding-top: 4px;
}

.form-control.valid {
    border-color: #09733e;
}

.form-control.invalid {
    border-color: #e12b1d;
}

.form-control+small {
    color: #e12b1d;
    opacity: 0;
    height: 0;
    transition: opacity 0.4s ease-out;
}

.form-control.invalid+small {
    opacity: 1;
    height: auto;
    transition: opacity 0.4s ease-out;
    display: block;
}

.form-control {
    border-color: #a7b6ca;
}

.form-control:focus {
    border-color: #a7b6ca;
    box-shadow: none;
}

@media screen and (max-width: 601px) {
    section {
        margin: 105px 24px 24px;
    }

    .typography_h5 {
        font-size: 26px;
        line-height: 32px;
    }

    .typography_h3 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }

    .typography-paragraph {
        font-weight: 400;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 24px;
        color: #34353a !important;
    }

    .faq-section {
        padding: 0px 24px;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .faq-sub-section {
        padding: 24px 0px !important;
    }

    .write-to-us-section {
        padding: 24px 24px 16px;
    }

    .faq-border {
        border-bottom: 1px solid #bbdfcd;
    }
}

@media screen and (min-width: 601px) {
    .faq-sub-section {
        padding-left: 40px !important;
        padding-right: 40px !important;
    }

    .faq-border {
        border-right: 1px solid #bbdfcd;
    }

    .mobile-break {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .grievanceOfficerModalContent {
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    .grievanceOfficerContent {
        height: 100%;
        border-radius: 0px;
    }

    .grievanceOfficerModal {
        z-index: 100005;
    }
}

@media screen and (max-width: 600px) {
    .successContent {
        height: 100% !important;
        border-radius: 0px !important;
        padding-top: 76px !important;
    }

    .successBody {
        flex: 0;
    }
}

.successContent {
    max-width: 480px;
    height: 265px;
    background-clip: padding-box;
    border: 0px solid #fff !important;
    border-radius: 8px !important;
    outline: 0;
    padding: 32px 24px 24px;
}

.successClose {
    width: 432px;
    height: 56px;
    padding-block: 14px;
    background: #09733e;
    box-shadow: 0px 4.75px 23.75px 4.75px rgba(38, 38, 38, 0.24);
    border-radius: 12px;

    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;

    margin: 0px;
    border: 0px;
}

.successClose:hover,
.successClose:focus,
.successClose:active {
    color: #fff;
    background: #09733e;
    outline: none;
}

.successBody {
    padding: 0px;
}

.successTitle {
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #34353a;
    margin-block: 16px 12px;
}

.successModal-text-content {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #34353a;
    margin-bottom: 24px;
}

.writeToUsNote {
    margin-bottom: 24px;
    color: #34353a !important;
}

.grievanceOfficerModal {
    z-index: 100002;
}

.typography_h1 {
    text-align: left;
    width: 100%;
}

@media (max-width: 992px) {
    section {
        margin: 45px 60px 60px;
    }
}

@media (max-width: 600px) {
    section {
        margin: 45px 30px 40px;
    }
}
</style>
