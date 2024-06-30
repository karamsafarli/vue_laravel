<template>
<div class="container">
    <div class="main contact_button">
        <h1 class="mv-h1-text p20-top">Our Media Coverages</h1>
        <div class="row" style="padding-top: 10%;">
            <div v-for="(link, index) in mediaLinks" :key="index" class="col-lg-3 col-6 partner_logo">
                <a :href="link.url" target="_blank">
                    <img :src="link.imgSrc" width="80%" />
                </a>
            </div>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    data() {
        return {
            mediaLinks: [{
                    url: "https://bfsi.economictimes.indiatimes.com/news/fintech/fintech-startup-money-view-raises-75-million-in-series-d-funding/90105251",
                    imgSrc: "https://moneyview.in/images/logo_et.png"
                },
                {
                    url: "https://www.livemint.com/companies/start-ups/tiger-global-backed-fintech-startup-money-view-secures-75-mn-in-series-d-round-11646809971831.html",
                    imgSrc: "https://moneyview.in/images/logo-mint.png"
                },
                {
                    url: "https://www.business-standard.com/content/press-releases-ani/fintech-startup-money-view-raises-usd-75-million-in-series-d-funding-122030901016_1.html",
                    imgSrc: "https://moneyview.in/images/logo-business-standard.png"
                },
                {
                    url: "https://timesofindia.indiatimes.com/fintech-startup-money-view-raises-75-million-in-series-d-funding/articleshow/90100227.cms",
                    imgSrc: "https://moneyview.in/images/logo-toi.png"
                },
                {
                    url: "https://yourstory.com/hindi/funding-alert-bengaluru-based-fintech-startup-money-view-series-d-round/amp",
                    imgSrc: "https://moneyview.in/images/logo-yourstory.png"
                },
                {
                    url: "https://inc42.com/buzz/fintech-startup-money-view-raises-75-mn-from-tiger-global-other-valuation-reaches-625-mn/amp/",
                    imgSrc: "https://moneyview.in/images/logo-inc42.png"
                },
                {
                    url: "https://www.cnbctv18.com/startup/funding-rundown-tiger-global-backs-money-view-nothing-gets-70-mn-jiffyai-secures-53-mn--ethsign-catches-sequoia-capitals-eye-12769152.htm/amp",
                    imgSrc: "https://moneyview.in/images/logo-cnbc.png"
                },
                {
                    url: "https://www.theweek.in/wire-updates/business/2022/03/09/pwr20-money-view.html",
                    imgSrc: "https://moneyview.in/images/logo-theweek.png"
                },
                {
                    url: "https://techstory.in/money-view-bags-75m-at-625m-valuation-in-series-d-round/",
                    imgSrc: "https://moneyview.in/images/logo-techstory.png"
                },
                {
                    url: "https://theprint.in/ani-press-releases/fintech-startup-money-view-raises-usd-75-million-in-series-d-funding/865432/",
                    imgSrc: "https://moneyview.in/images/logo-theprint.png"
                }
            ]
        };
    }
};
</script>
  
<style>
.partner_logo {
    padding-bottom: 40px;
}
</style>
