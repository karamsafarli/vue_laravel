<template>
<div bis_skin_checked="1">
<h1 class="fullRowClass mv-h1-text text-center">Other Disclosures</h1>
<div class="personal-loans" bis_skin_checked="1">
<div class="loan-item" bis_skin_checked="1"><strong><a href="https://moneyview.in/images/MV-DLAI-Code-of-Conduct-for-Responsible-Digital+Lending.pdf" class="loan-title" target="_blank" rel="noopener">DLAI Code of Conduct for Responsible Digital Lending</a></strong></div>
<div class="loan-item" bis_skin_checked="1"><strong><a href="https://moneyview.in/images/Model-Code-of-Conduct-for-Recovery-Agents.pdf" class="loan-title" target="_blank" rel="noopener">Model Code of Conduct for Collections &amp; Recovery Agency</a></strong></div>
</div>
<div class="personal-loans" bis_skin_checked="1">
<div class="loan-item" bis_skin_checked="1"><strong><a href="https://moneyview.in/annual-return-form-mgt-7" class="loan-title" target="_blank" rel="noopener">Annual Return (Form MGT-7)</a></strong></div>
<div class="loan-item" bis_skin_checked="1"><strong><a href="https://moneyview.in/dlg-disclosure" class="loan-title" target="_blank" rel="noopener">DLG Disclosure</a></strong></div>
</div>
<div class="personal-loans" bis_skin_checked="1">
<div class="loan-item" bis_skin_checked="1"><strong><a href="https://moneyview.in/corporate-social-responsibility" class="loan-title" target="_blank" rel="noopener">Corporate Social Responsibility</a></strong></div>
</div>
</div>
</template>

<style scoped>

  .mv-h1-text {
     margin-top: 40px;
     font-weight:bold;
     font-size:32px;
  }

  .personal-loans {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      grid-gap: 40px;
      padding: 40px;
  }

  .loan-item {
      background-color: #f4f4f4;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      transition: background-color 0.3s ease; /* Adding transition effect */
  }

  .loan-item:hover {
      background-color: #144835;
  }

  .loan-title {
      font-size: 14px;
      margin-bottom: 10px;
      font-weight:800 !important;
      color: #333; /* Default color for loan title */
      transition: color 0.3s ease; /* Adding transition effect for color change */
  }

  .loan-item:hover .loan-title {
      color: white; /* Changing loan title color on hover */
  }
</style>
