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


