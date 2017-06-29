<template>
    <div class="background-pic" style="background-color: rgba(0, 71, 126, 0.7) !important;">
        <app-home-one></app-home-one>
        <div class="is-fullwidth" style="background-color: #f1f1f1 !important;" :style="{'padding-top': windowWidth > 768 ? '4% !important' :
                    '12% !important', 'padding-bottom': windowWidth > 768 ? '0 !important' :
                    '0 !important'}">
            <div class="columns" style="width: 90%; margin: auto;">
                <app-home-two  v-for="each in content2" :icon="each.icon" :title="each.title" :msg="each.ms" :width="windowWidth"></app-home-two>
            </div>
        </div>
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
