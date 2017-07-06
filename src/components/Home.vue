<template>
    <div class="background-pic">
        <app-home-one></app-home-one>
        <app-home-two></app-home-two>
        <app-home-three></app-home-three>
    </div>
</template>

<script>
    import HomeOne from './homepage/HomeOne.vue';
    import HomeTwo from './homepage/HomeTwo.vue';
    import HomeThree from './homepage/HomeThree.vue';
    import images from '../data/home/images.js';
    import panel2 from '../data/home/panel2.js';
    import { mixin } from '../mixin';

    export default {
        mixins: [mixin],
        data(){
            return {
                image: images,
                content2: panel2
            }
        },
        components: {
            appHomeOne: HomeOne,
            appHomeTwo: HomeTwo,
            appHomeThree: HomeThree,
        }
    }
</script>

<style scoped>


</style>
