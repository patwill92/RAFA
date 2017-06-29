<template>
    <nav class="nav is-fullwidth has-shadow"
         :class="{'before': scroll < 550, 'scroll': scroll >= 550}"
         :style="{zIndex: 1, backgroundColor: scroll < 550 ? 'transparent': 'rgba(0, 71, 126,0.95)'}">
        <div class="nav-left">
            <router-link to="/" activeClass="active" class="nav-item is-marginless" tag="a"><a style="font-size: 1.3rem">tua construction</a></router-link>
        </div>
        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span id="nav-toggle" class="nav-toggle" :class="{'is-active': active}" @click="active = !active">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div class="nav-right nav-menu" :class="{'is-active': active}">
            <router-link to="/" activeClass="active" tag="a" class="nav-item">
                <a>Home</a>
            </router-link>
            <router-link to="/services" activeClass="active" tag="a" class="nav-item">
                <a>Services</a>
            </router-link>
            <router-link to="about" activeClass="active" tag="a" class="nav-item">
                <a>About</a>
            </router-link>
            <router-link to="/contact" activeClass="active" tag="a" class="nav-item">
                <a>Contact</a>
            </router-link>
            <router-link to="/contact" activeClass="active" tag="a" class="nav-item">
                <a class="fa fa-facebook"></a>
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ['scroll']
    }
</script>

<style scoped>
    .nav{
        position: fixed !important;
    }
    .nav .before{
        height: 70px !important;
    }

    .nav-toggle .before{
        height: 70px !important;
    }

    .nav-toggle:hover .before{
        background-color: white !important;
    }

    .nav-toggle .before span{
        background-color: rgb(0, 71, 126) !important;
    }

    .nav .after{
        height: 70px !important;
    }

    .nav-toggle .after{
        height: 70px !important;
    }

    .nav-toggle:hover .after{
        background-color: white !important;
    }

    .nav-toggle .after span{
        background-color: rgb(0, 71, 126) !important;
    }

    a{
        margin-top: 0 !important;
        color: white !important;
        text-transform: uppercase !important;
    }

    a:hover{
        text-decoration: none !important;
    }

    /*a{*/
        /*text-decoration: none;*/
        /*color: white;*/
        /*text-transform: uppercase;*/
        /*padding-right: 15px;*/
        /*padding-left: 15px;*/
        /*font-weight: 300;*/
    /*}*/

    /*.navbar{*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*width: 100%;*/
        /*border-bottom: 0.5px solid white;*/
        /*align-items: center;*/
        /*height: 90px;*/
        /*transition: height .5s, background-color .5s;*/
        /*position: fixed;*/
    /*}*/

    /*.right{*/
        /*transition: font-size .5s, font-weight .5s, background-color .5s;*/
    /*}*/

    /*.navbar .nav-left{*/
        /*font-size: 1.6rem;*/
        /*letter-spacing: 1px;*/
        /*transition: font-size .5s, font-weight .5s;*/
    /*}*/

    /*.navbar a{*/
        /*line-height: 90px;*/
    /*}*/

    /*.nav-scroll{*/
        /*width: 100%;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
        /*height: 70px;*/
        /*border-bottom: 0.5px solid rgba(217,217,217,0.5);*/
        /*transition: height .5s, background-color .5s;*/
        /*position: fixed;*/
    /*}*/

    /*.nav-scroll .right{*/
        /*font-size: 0.9rem;*/
        /*transition: font-size .5s, font-weight .5s;*/
    /*}*/

    /*.nav-scroll a{*/
        /*line-height: 70px;*/
    /*}*/

    /*.nav-scroll .nav-left{*/
        /*font-size: 1.2rem;*/
        /*letter-spacing: 1px;*/
        /*transition: font-size .5s, font-weight .5s;*/
    /*}*/
</style>