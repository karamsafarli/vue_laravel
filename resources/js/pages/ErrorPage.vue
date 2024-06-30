<template>
<div class="errorContainer text-center" bis_skin_checked="1">
    <img src="https://moneyview.in/images/404-Banner.png" alt="404-image" width="100%">
    <div class="errorTextContainer" bis_skin_checked="1">
        <h4 class="errorTitle errorTitleBottomMargin"> Oops! Something went wrong </h4>
        <h3 class="errorSubTitle">This page is currently not available</h3>
    </div>
    <router-link to="/">
        <button class="goToHomeBtn">Go to homepage</button>
    </router-link>
</div>
</template>

    
<style scoped>
.errorContainer {
    width: 480px;
    margin: 0 auto;
    margin-top: 83px;
}

.errorTextContainer {
    margin: 24px 0;
}

.errorTitle {
    font-size: 18px;
    font-weight: var(--font-weight-semibold);
    line-height: 26px;
    letter-spacing: 0.3px;
    color: #28292d;
}

.errorTitleBottomMargin {
    margin-bottom: 12px;
}

.errorSubTitle {
    font-size: 12px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
    letter-spacing: 0.3px;
    color: var(--grey07);
}

.goToHomeBtn {
    width: 100%;
    color: var(--white-color);
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    padding: 16px 24px;
    height: 56px;
    background: var(--primary-color);
    border: none;
    border-radius: 8px;
    margin-bottom: 120px;
}

@media screen and (min-width: 480px) and (max-width: 767px) {
    .errorContainer {
        width: 100%;
        margin-top: 73px;
        padding: 0px 24px;
    }

}

@media screen and (min-width: 200px) and (max-width: 479px) {
    .errorContainer {
        width: 100%;
        margin-top: 73px;
        padding: 0px 24px;
    }
}
</style>