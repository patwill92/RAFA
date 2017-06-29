<template>
    <section class="hero is-success is-fullheight" style="background-color: transparent !important;">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <app-home-nav></app-home-nav>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero-body" style="padding: 0" v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}">
            <div class="container has-text-centered" style="height: 300px">
                <h1 class="subtitle" :class="{'is-3': windowWidth > 768}" >
                    tua steel | Emenco services | Kairos construction
                </h1>
                <h2 class="title" :class="{'is-2': windowWidth > 768}" style="margin-top: 6%">
                    together we're <span style="font-weight: 400">Tua group</span>
                </h2>
                <h3 class="subtitle" :class="{'is-4': windowWidth > 768}" style="text-transform: uppercase;"
                    :style="{'margin-top': windowWidth > 768 ? '4%' : '2%'}">
                    Commercial and residential contracting services</h3>
            </div>
        </div>
        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot" style="position: relative">
            <app-arrow style="color: white !important; position: absolute; bottom: 0" v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 400}"></app-arrow>
        </div>
    </section>
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
    h1, h2{
        text-transform: uppercase !important;
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