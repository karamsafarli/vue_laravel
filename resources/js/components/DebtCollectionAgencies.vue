<template>
<div>
    <h1 class="mv-h1-text text-center">Collection Agencies</h1>
    <div class="personal-loans">
        <div class="loan-item">
            <strong>
                <router-link to="/debt-collection-agencies" class="loan-title">
                    List of Active Debt Recovery Agencies
                </router-link>
            </strong>
        </div>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'CollectionAgencies',
};
</script>

  
<style scoped>
.mv-h1-text {
    margin-top: 40px;
    font-size: 32px;
    font-weight: 700;
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
    transition: background-color 0.3s ease;
    /* Adding transition effect */
}

.loan-item:hover {

    background-color: #144835;
}

.loan-title {
    font-family: "AtAero";
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 10px;
    color: #333;
    /* Default color for loan title */
    transition: color 0.3s ease;
    /* Adding transition effect for color change */
}

.loan-item:hover .loan-title {
    color: white;
    /* Changing loan title color on hover */
}
</style>
