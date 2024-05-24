<template>
<div class="mainTopImageHeight55 bg_career" bis_skin_checked="1">
    <div class="container" bis_skin_checked="1">
        <div class="text-justify padding_top_h2" bis_skin_checked="1">
            <div bis_skin_checked="1">
                <h1 class="textAlign-sm-center-lg-left text-white font-weight-bold responsiveTextH1 career">Join us in redefining <br class="mobile">financial <br class="desktop">inclusivity <br class="mobile">for a billion Indians!</h1>
            </div>
        </div>
    </div>
</div>
<div class="container" bis_skin_checked="1">
    <div class="main" bis_skin_checked="1">
        <p class="mv-why-us text-left"><strong>About Us:</strong> Did you know just under 10% of Indians have access to formal credit? That means there are at least 1 billion people who're underserved. The main reason for this is the limited availability of bureau data, which makes it harder for conventional banks/NBFCs to assess their creditworthiness</p>
        <p class="mv-why-us text-left"><strong>Our Mission</strong>: To provide world-class financial products to every deserving Indian having a Smartphone and help them succeed.</p>
        <p class="mv-why-us text-left">The moneyview App offers a full suite of personalized credit products such as instant personal loans, cards, BNPL products, and personal financial management solutions. Our proprietary data models provide a 360-degree risk assessment, enabling credit for the underserved segments.</p>
        <p class="mv-why-us text-left">Join us to create world-class financial products for the deserving Indians while building a financially inclusive and self-reliant India.</p>
        <p class="mv-why-us text-left"><i>Our vision is shared by our marquee investors like Tiger Global, Accel India, Ribbit Capital, Winter Capital, Evolvence India, etc.</i></p>
        <div class="container m60-top text-center" style="background-color: #ebf3ff; padding: 30px;" bis_skin_checked="1">
            <h2 class="mvl-h2 text-center">Our Values</h2>
            <p class="text-center mv-why-us" style="margin-bottom: 0px;">We firmly believe that our work culture is an intangible ecosystem where leaders and employees maintain a clear and inclusive relationship, making work more satisfying.</p>
            <div id="dots" bis_skin_checked="1"></div>
            <div id="more" bis_skin_checked="1" v-show="showMore">
                <div class="row" style="margin-top: 3%;" bis_skin_checked="1">
                    <div class="col-lg-4" bis_skin_checked="1"><img src="https://moneyview.in/images/customer.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Customer Driven</strong></p>
                        <p class="text-center mv-why-us">Have a customer-first approach with a passion to solve problems</p>
                    </div>
                    <div class="col-lg-4" bis_skin_checked="1"><img src="https://moneyview.in/images/bold.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Being Bold</strong></p>
                        <p class="text-center mv-why-us">Should think big &amp; out-of-the box and, take calculated risks</p>
                    </div>
                    <div class="col-lg-4" bis_skin_checked="1"><img src="https://moneyview.in/images/well_manage.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Being Nimble</strong></p>
                        <p class="text-center mv-why-us">Should not be afraid to try &amp; fail</p>
                    </div>
                    <div class="col-lg-4 p40-top" bis_skin_checked="1"><img src="https://moneyview.in/images/team.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Team First</strong></p>
                        <p class="text-center mv-why-us">Should work and collaborate with seamlessly across functions</p>
                    </div>
                    <div class="col-lg-4 p40-top" bis_skin_checked="1"><img src="https://moneyview.in/images/founder.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Founder Mindset</strong></p>
                        <p class="text-center mv-why-us">Highly ownership driven individual with a never give up attitude.</p>
                    </div>
                    <div class="col-lg-4 p40-top" bis_skin_checked="1"><img src="https://moneyview.in/images/nimble.png" width="100px">
                        <p class="text-center" style="margin: 10px 0px 0px 0px;"><strong>Well Managed </strong></p>
                        <p class="text-center mv-why-us">Data oriented, who can foresee and plan accordingly to make a holistic decision in a fast paced environment</p>
                    </div>
                </div>
                <h2 class="mvl-h2 text-center p60-top">Why Join Us?</h2>
                <div class="row row-eq-height text-center" bis_skin_checked="1">
                    <div class="col-md-4" style="margin-top: 30px;" bis_skin_checked="1">
                        <div class="section_join" bis_skin_checked="1">
                            <h5 style="padding-bottom: 12px;">Become Tomorrow's<br>Leader Today</h5>
                            <p class="mv-why-us text-center" style="margin-bottom: 0px;">Work closely with the domain experts to elevate your skills &amp; expertise; get easy access to top management &amp; founders. Be the leader of tomorrow, today!</p>
                        </div>
                    </div>
                    <div class="col-md-4" style="margin-top: 30px;" bis_skin_checked="1">
                        <div class="section_join" bis_skin_checked="1">
                            <h5 style="padding-bottom: 12px;">Solve Problems<br>Cross-functionally</h5>
                            <p class="mv-why-us text-center">Collaborate with stakeholders across pods to look at problems through various dimensions. We encourage an open, seamless work environment.</p>
                        </div>
                    </div>
                    <div class="col-md-4" style="margin-top: 30px;" bis_skin_checked="1">
                        <div class="section_join" bis_skin_checked="1">
                            <h5 style="padding-bottom: 12px;">Innovation is Your <br>Calling</h5>
                            <p class="mv-why-us text-center">Challenge conventional, age-old credit problems through innovations in tech, product, credit underwriting and customer experience. We pride ourselves in thinking big &amp; out-of-the box!</p>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="toggleMore" id="myBtn" class="btn btn-lg cta-btn-green" style="margin-top: 40px;">
                {{ showMore ? 'Read less' : 'Read more' }}
            </button>
        </div>
        <h2 class="mvl-h2 text-center p60-top">Perks &amp; Benefits</h2>
        <div class="container p40-top text-center" bis_skin_checked="1">
            <div class="row" bis_skin_checked="1">
                <div class="col-lg-1 col-md-1" bis_skin_checked="1"></div>
                <div class="col-lg-2 col-md-2 col-6" bis_skin_checked="1"><img src="https://moneyview.in/images/Top-of-the-line hardware (Mac).png" width="100px">
                    <p class="text-center mv-why-us">Top-of-the-line hardware (Mac)</p>
                </div>
                <div class="col-lg-2 col-md-2 col-6" bis_skin_checked="1"><img src="https://moneyview.in/images/Fully flexible attendance policy.png" width="100px" height="93">
                    <p class="text-center mv-why-us">Fully flexible attendance policy</p>
                </div>
                <div class="col-lg-2 col-md-2 col-6" bis_skin_checked="1"><img src="https://moneyview.in/images/Comprehensive insurance.png" width="100px" height="93">
                    <p class="text-center mv-why-us">Comprehensive insurance</p>
                </div>
                <div class="col-lg-2 col-md-2 col-6" bis_skin_checked="1"><img src="https://moneyview.in/images/Regular off-site excursions.png" width="100px" height="93">
                    <p class="text-center mv-why-us">Regular off-site excursions</p>
                </div>
                <div class="col-3 mobile" bis_skin_checked="1"></div>
                <div class="col-lg-2 col-md-2 col-6" bis_skin_checked="1"><img src="https://moneyview.in/images/On-the-house snacks _ drinks!.png" width="100px" height="93">
                    <p class="text-center mv-why-us">On-the-house snacks &amp; drinks!</p>
                </div>
                <div class="col-lg-1 col-md-1" bis_skin_checked="1"></div>
            </div>
        </div>
        <div class="downloder" bis_skin_checked="1">
            <div class="container" bis_skin_checked="1">
                <div class="main" style="margin-bottom: 0px;" bis_skin_checked="1">
                    <div class="row" bis_skin_checked="1">
                        <div class="col-lg-12" bis_skin_checked="1">
                            <p style="font-size: 22px; font-weight: bold; margin: 30px 0px 25px;" class="text-center">We're on a mission to create the most loved &amp; rewarding workplace! Join us &amp; grow with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

    
<script>
export default {
  data() {
    return {
      showMore: false
    };
  },
  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    }
  }
};
</script>

    
<style scoped>
.main {
    text-align: left !important;
}

.showBanner {
    display: none;
}

.mvl-h2 {
    font-size: 32px;
    font-weight: 700;
}

.owl-theme .owl-nav.disabled+.owl-dots {
    margin-top: 10px;
    margin-bottom: 30px;
}

.m60-top {
    margin-top: 60px;
}

.cta-btn-green {
    font-size: 14px;
    font-weight: 700 !important;
    width: 100%;
    max-width: 260px;
    font-family: "Open Sans" !important;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 13px 13px !important;
    background-color: #09733e !important;
    color: white;
    cursor: pointer;
    background-image: none;
    border-style: solid;
    border-radius: 2px;
}

.downloder {
    background-color: #e7f4ed;
    margin-top: 60px;
}

.pointers {
    background-color: #f7f7f7;
    padding-top: 18px;
    padding: 0px 25px 35px 35px;
}

.padding_top_h2 {
    padding-top: 12rem !important;
}

.carousel-item {
    height: 100%;
}

.carousel-item img {
    height: 500px;
}

.spc {
    padding-top: 0px;
}

.section_join {
    background-color: #ffffff;
    padding: 30px 20px 20px 20px;
    height: 100%;
    border-radius: 20px;
}

h5 {
    font-weight: 700 !important;
}

.career {
    font-size: 2.8rem !important;
    line-height: 1.4;
    font-weight: 600;
}

.icon_margin {
    margin-top: 20px;
}

.bg_career {
    background-image: url(https://moneyview.in/images/career_bg_new-min.png);
    background-repeat: no-repeat;
    background-position: right;
    background-attachment: scroll;
    background-size: cover;
    margin-top: -16px;
}

.section-1 {
    padding-top: 60px;
}

.div60-top {
    padding-top: 60px;
}

.mobile {
    text-align: left;
}

.mainTopImageHeight55 {
    height: 60vh;
}


.mobile {
    display: none !important;
}

.desktop {
    display: flex !important;
}

.people {
    background-color: #ffffff;
    margin: 0px 30px;
    padding: 30px;
    border-radius: 20px;
}

@media only screen and (max-width: 600px) {
    .mvl-h2 {
        font-size: 22px;
        font-weight: 700;
    }

    .people {
        margin: 0px 0px;
    }

    .m60-top {
        margin-top: 40px;
    }

    .mobile {
        display: flex !important;
    }

    .desktop {
        display: none !important;
    }

    .mobile {
        text-align: center;
    }

    i {
        text-align: center !important;
    }

    .div60-top {
        padding-top: 20px;
    }

    .p40-top {
        padding-top: 10px !important;
    }

    .p60-top {
        padding-top: 20px;
    }

    .padding_top_h2 {
        padding-top: 36vh !important;
    }

    .career {
        font-size: 1.8rem !important;
    }

    .carousel-item {
        height: 100%;
        width: 100%;
        max-width: 400px;
        max-height: 440px;
    }

    .carousel-item img {
        height: 100%;
        width: 100%;
        max-width: 400px;
        max-height: 440px;
    }

    .bg_career {
        background-image: url(https://moneyview.in/images/career_bg_new-min.png);
        background-position: 60%;
    }

    .mainTopImageHeight55 {
        height: 68vh;
    }

    .pointers {
        padding-top: 25px;
    }

    .pointers2 {
        padding-left: 30px;
    }

    .spc {
        padding-top: 20px;
    }

    .section-1 {
        padding-top: 0px;
    }
}
</style>
