<template>
<div class="container">
    <div class="main contact_button">
        <h1 class="mv-h1-text p20-top">Our Digital Lead Partners</h1>
        <div class="row" style="padding-top: 10%;">
            <div v-for="partner in partners" :key="partner.name" class="col-lg-4 partner_logo">
                <img :src="partner.logo" :width="partner.logoWidth">
                <br>
                <a :href="partner.link" class="btn btn-lg cta-btn-outline">Contact {{ partner.name }}</a>
            </div>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            partners: [{
                    name: 'Tata Capital Moneyfy',
                    logo: 'https://moneyview.in/images/moneyfy-logo.png',
                    logoWidth: '60%',
                    link: 'https://www.tatacapitalmoneyfy.com/our-partners',
                },
                {
                    name: 'Banksathi',
                    logo: 'https://moneyview.in/images/BankSathi_Logomark.png',
                    logoWidth: '30%',
                    link: 'https://www.banksathi.com/',
                },
                {
                    name: 'WeCredit',
                    logo: 'https://moneyview.in/images/WeCredit-Logo.png',
                    logoWidth: '90%',
                    link: 'https://wecredit.co.in/',
                },
                {
                    name: 'Scapic Innovations Pvt Ltd',
                    logo: 'https://moneyview.in/images/supermoney-logo.png',
                    logoWidth: '80%',
                    link: 'https://www.super.money/',
                },
                {
                    name: 'My Teams/ZET',
                    logo: 'https://moneyview.in/images/Myteams-ZET-logo.jpg',
                    logoWidth: '50%',
                    link: 'https://zetapp.in/',
                },
                {
                    name: 'FI Money',
                    logo: 'https://moneyview.in/images/Fi-Money-Logo.png',
                    logoWidth: '55%',
                    link: 'https://fi.money/features/instant-loans',
                },
            ],
        };
    },
};
</script>

  
<style scoped>
.container {
    /* Your container styles */
}

.main {

    text-align: center;
}

.mv-h1-text {
    margin-top: 30px;
    text-align: center;

    font-size: 32px;
    font-weight: 700;

}

.p20-top {
    /* Your p20-top styles */
}

.partner_logo {
    padding: 30px;
}

.contact_button .cta-btn-outline {
    width: 300px;
}

.cta-btn-outline {
    padding: 12px 26px !important;
}

/* Button Styles */
.cta-btn {
    font-size: 14px;
    font-weight: 800 !important;
    width: 260px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 13px 31px;
    background-color: #144835 !important;
    color: white;
    cursor: pointer;
    background-image: none;
    border-style: solid;
    border-radius: 4px;
    margin-top: 18px;
}

.cta-btn:hover {
    background-color: transparent !important;
    border-color: #144835 !important;
    color: white;
}

.cta-btn-outline {
    font-size: 14px;
    font-weight: 800 !important;
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
    border-color: white !important;
    color: white;
}

.cta-btn-green {
    font-size: 14px;
    font-weight: 700 !important;
    width: 100%;
    max-width: 260px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 13px 13px !important;
    background-color: var(--primary-color) !important;
    color: white;
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
    background-color: white !important;
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
    background-color: white;
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
    font-weight: 700 !important;
    padding: 16px !important;
    height: 6rem;
    background-color: white !important;
    color: #777777;
    cursor: pointer;
    background-image: none;
    margin-top: 2rem;
}

.cta-btn-white {
    font-size: 14px;
    font-weight: 700 !important;
    width: 100%;
    max-width: 260px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 13px 31px !important;
    background-color: white !important;
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
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 39.1px;
}

.alignment {
    padding: 40px 0;
    margin-bottom: 24px !important;
}

.emiTitle {
    font-size: 15px;
    font-weight: 700;
}

/* Interlinks */
.interlinksSectionContainer {
    background-color: var(--grey01);
}

.wrapper {
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: white !important;
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
    background: white;
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
    font-weight: 700;
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
    font-weight: 600 !important;
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
    font-weight: 600 !important;
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
.scrollTable {
    width: 100%;
    overflow: scroll;
}

/* mvl/loan-partner */
.img-mv-loans {
    width: 112px;
    padding-bottom: 20px;
}

/* used in so many pages */
.mv-h4 {
    font-size: 24px;
    font-weight: 800;
    padding: 25px 0px 5px 0px;
}

.mv-h5 {
    font-size: 15px !important;
    font-weight: 700 !important;
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
    font-weight: 700;
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
    background-image: url("/img/icon_check.png");
    background-repeat: no-repeat;
    line-height: 30px;
    padding-left: 35px;
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
    font-weight: 700 !important;
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
    font-weight: 700 !important;
}

.mv-h2-text {
    display: block;
    font-size: 26px;
    font-weight: 700 !important;
}

.mv-h3-text {
    display: block;
    font-size: 22px;
    font-weight: 600 !important;
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
    font-weight: 800;
    padding: 50px;
}

.mv-h3 {
    font-size: 28px;
    font-weight: 800;
    padding: 40px 0px;
}

.couponlink a:hover {
    color: var(--primary-color);
    text-decoration: none !important;
    font-size: 24px;
    font-weight: 800;
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
    color: white !important;
}

.active-btn {
    background-color: var(--primary-color) !important;
    color: white !important;
}

.tab button:active {
    background-color: var(--primary-color) !important;
    color: white !important;
}

.tab button:focus {
    background-color: var(--primary-color) !important;
    color: white;
}

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
    font-weight: 700 !important;
}

.loan-item {
    border-radius: 4px !important;
}

.loan-item:hover {
    background-color: var(--primary-color) !important;
}

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
    color: white !important;
}

@media (max-width:480px) {

    /* Breadcrumbs */
    body>div:first-of-type {
        padding-top: 25px;
    }

    ul.breadcrumb {
        padding: 10px 1px;
        list-style: none;
        background-color: white !important;
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
        color: white;
        text-align: center;
    }

    .mvl-h2-white {
        color: white;
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
        font-weight: 800;
        padding: 20px;
        margin-top: 100px;
    }

    .mv-h3 {
        font-size: 24px;
        font-weight: 800;
        padding: 20px 0px;
    }

    .mv-h1-text {
        display: block;
        font-size: 27px;
        font-weight: 700 !important;
    }

    .mv-h2-text {
        display: block;
        font-size: 24px;
        font-weight: 700 !important;
    }

    .mv-h3-text {
        display: block;
        font-size: 21px;
        font-weight: 600 !important;
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
        font-weight: 800 !important;
        color: white !important;
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

@media (max-width:768px) {

    /* Breadcrumbs */
    body>div:first-of-type {
        padding-top: 25px;
    }

    ul.breadcrumb {
        padding: 10px 1px;
        list-style: none;
        background-color: white !important;
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
            color: white;
            text-align: center;
        }

        .mvl-h2-white {
            color: white;
            font-size: 22px;
            margin-bottom: 29px !important;
        }

        .feedbackHelpfulButton {
            width: 120px !important;
        }
    }

    @media (max-width:960px) {

        /* Breadcrumbs */
        body>div:first-of-type {
            padding-top: 25px;
        }

        ul.breadcrumb {
            padding: 10px 1px;
            list-style: none;
            background-color: white !important;
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
            font-weight: 800;
            padding: 20px;
            margin-top: 100px;
        }

        .mv-h3 {
            font-size: 24px;
            font-weight: 800;
            padding: 20px 0px;
        }

        .mv-h1-text {
            display: block;
            font-size: 27px;
            font-weight: 700 !important;
        }

        .mv-h2-text {
            display: block;
            font-size: 24px;
            font-weight: 700 !important;
        }

        .mv-h3-text {
            display: block;
            font-size: 21px;
            font-weight: 600 !important;
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
            font-weight: 800 !important;
            color: white !important;
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

}
</style>
