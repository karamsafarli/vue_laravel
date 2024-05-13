<template>
    <slot name="items" />
</template>

<script>
import OwlCarousel from 'vue-owl-carousel';

export default {
    name: 'Carousel',
    components: { OwlCarousel },
    props: {
        options: {
            type: Object,
            default: () => ({
                items: 2,
                loop: true, 
                autoplay: false, 
                nav: false, 
                dots: true, 
            }),
        },
    },
};
</script>