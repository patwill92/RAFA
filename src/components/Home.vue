<template>
    <div class="home-container">
        <app-header :scroll="scrolled" :height="windowHeight" :width="windowWidth" :style="{zIndex: 1}"></app-header>

        <div class="hp1" v-bind:style="{height: windowHeight + 'px'}">

            <app-home-one :height="windowHeight" :width="windowWidth" :scroll="scrolled"
                              v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}"></app-home-one>
                <app-arrow :height="windowHeight" :width="windowWidth"
                           v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 400}"></app-arrow>
        </div>
        <div class="hp2">
            <div class="hp2-container" :style="{flexDirection: windowWidth < 900 ? 'column' : ''}">
                <app-home-two  v-for="each in content2" :height="windowHeight" :width="windowWidth"
                               :icon="each.icon" :title="each.title"></app-home-two>
            </div>
        </div>
            <app-home-three :height="windowHeight" :width="windowWidth"></app-home-three>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import HomeOne from './homepage/HomeOne.vue';
    import HomeTwo from './homepage/HomeTwo.vue';
    import HomeThree from './homepage/HomeThree.vue';
    import Arrow from './homepage/Arrow.vue';

    import images from '../data/home/images.js';
    import panel2 from '../data/home/panel2.js';



    export default {
        data(){
            return {
                image: images,
                scrolled: 0,
                content2: panel2,
                windowWidth: 0,
                windowHeight: 0
            }
        },
        methods: {
            handleScroll () {
                this.scrolled = window.scrollY;
            },
            getWindowWidth(event) {
                this.windowWidth = document.documentElement.clientWidth;
            },
            getWindowHeight(event) {
                this.windowHeight = document.documentElement.clientHeight;
            }
        },
        computed: {
            myFunc(){
                return `Height: ${Math.round(this.windowHeight)}px \n Width: ${Math.round(this.windowWidth)}px`
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        mounted(){
            this.$nextTick(() => {
                window.addEventListener('resize', this.getWindowWidth);
                window.addEventListener('resize', this.getWindowHeight);

                this.getWindowWidth();
                this.getWindowHeight();
            });
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.getWindowWidth);
            window.removeEventListener('resize', this.getWindowHeight);
        },
        destroyed () {
            window.addEventListener('scroll', this.handleScroll);
        },
        components: {
            appHeader: Header,
            appHomeOne: HomeOne,
            appHomeTwo: HomeTwo,
            appHomeThree: HomeThree,
            appArrow: Arrow
        }
    }
</script>

<style scoped>
    .hp1{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }

    .home-container{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: inherit;
        width: inherit;
        background-color: rgba(0, 71, 126, 0.7);
        position: relative;
    }

    .hp2{
        padding-top: 50px;
        padding-bottom: 50px;
        background: #f2f2f2;
        border-bottom: 0.5px solid rgb(0, 71, 126);
    }

    .hp2-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
