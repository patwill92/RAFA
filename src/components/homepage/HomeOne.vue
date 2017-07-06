<template>
    <div class="background" :style="{'background-image': 'url(../../../dist/home.jpg)'}">
        <section class="hero is-large" style="background-color: rgba(255,255,255, 0.1) !important;">
            <!-- Hero header: will stick at the top -->
            <div class="hero-head">
                <app-home-nav></app-home-nav>
            </div>
            <!-- Hero content: will be in the middle -->
            <div class="hero-body"v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}">
                <div :class="{'middle': windowWidth > 768, 'pc': windowWidth > 768}" class="container has-text-centered">
                    <div class="top">
                        <div v-if="windowWidth > 768" class="child center">
                            <h2>kairos</h2>
                            <h2> construction</h2>
                        </div>
                        <div class="tua center">
                            <h1>tua</h1>
                            <h1>group</h1>
                        </div>
                        <div v-if="windowWidth > 768" class="child center">
                            <h2>tua</h2>
                            <h2>steel</h2>
                        </div>
                    </div>
                    <div v-if="windowWidth > 768" class="child center">
                        <h2>emenco</h2>
                        <h2>services</h2>
                    </div>

                </div>
            </div>
            <!-- Hero footer: will stick at the bottom -->
        </section>
    </div>
</template>

<script>
    import HomeNav from './Homenav.vue'
    import {mixin} from '../../mixin'
    import Arrow from './Arrow.vue'
    export default {
      mixins: [mixin],
      components: {
        appHomeNav: HomeNav,
        appArrow: Arrow
      }
    }

</script>

<style scoped>

    .background{
        background-size: cover !important;
        /*background-attachment: fixed !important;*/
    }

    .pc{
        width: 70% !important;
    }

    .line{
        width: 30%;
        padding-top: 2px;
        background-color: white;
    }

    .top{
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        margin-bottom: 7%;
    }

    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-transform: uppercase !important;
    }

    .child:hover{
        cursor: pointer;
        font-size: 1.1rem;
    }

    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-transform: uppercase !important;
    }

    .tua{
        border-radius: 50%;
        background-color: rgba(0, 71, 126, 0.9) !important;
        font-size: 3.2rem;
        width: 240px;
        height: 240px;
        color: white;
    }

    .tua:hover{
        cursor: pointer;
        font-size: 3.3rem;
    }
    .child{
        border-radius: 3%;
        background-color: rgba(255,255,255, 0.9) !important;
        width: 135px;
        height: 80px;
        font-size: 1.0rem;
    }

    .hero-body{
        padding-top: 140px !important;
        padding-bottom: 70px !important;
    }

    h1{
        font-weight: 300 !important;
    }

    h2{
        font-weight: 400 !important;
        color: rgb(0, 71, 126) !important;
    }

    a{
        margin-top: 0 !important;
        color: white !important;
        text-transform: uppercase !important;
    }

    a:hover{
        text-decoration: none !important;
    }
</style>