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
                    If you have already raised a support request to our customer support
                    team, then please check the status of your query on the moneyview
                    app or the registered email ID
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
            <b>Note:</b> The issue can be escalated to the Grievance Officer only
            after 7 days of raising it
        </p>
    </div>
</section>
</template>

  
<script>
export default {
    name: 'SupportSection',
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
    color: #34353A !important;
}

.grievanceOfficerHeader {
    border-bottom: 0px;
    padding: 0px;
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
    margin-top: -20px !important;
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
    border-color: #09733E;
}

.form-control.invalid {
    border-color: #E12B1D;
}

.form-control+small {
    color: #E12B1D;
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
    color: #34353A !important;
}

.grievanceOfficerModal {
    z-index: 100002;
}

.typography_h1 {
    text-align: left;
    width: 100%;
}

@media (max-width:992px) {
    section {
        margin: 45px 60px 60px;
    }
}

@media (max-width:600px) {
    section {
        margin: 45px 30px 40px;
    }
}
</style>
