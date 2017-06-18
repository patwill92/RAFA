<template>
    <div class="hp1-container" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <div class="hp1-background">
            <app-header :scroll="scrolled"></app-header>
            <app-home-one :scroll="scrolled" v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}"></app-home-one>
            <app-arrow v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 400}"></app-arrow>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import HomeOne from './homepage/HomeOne.vue';
    import Arrow from './homepage/Arrow.vue';
    import home from '../assets/Images/home.jpg';

    export default {
        data(){
            return{
                image: home,
                scrolled: 0
            }
        },
        components: {
            appHeader: Header,
            appHomeOne: HomeOne,
            appArrow: Arrow
        },
        methods: {
            handleScroll () {
                this.scrolled = window.scrollY;
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .hp1-container{
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    .hp1-background{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: inherit;
        width: inherit;
        background-color: rgba(0, 71, 126, 0.6);

    }
</style>
