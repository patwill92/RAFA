<template>
    <div :class="{navbar: scroll < 550, 'nav-scroll': scroll >= 550}"
         :style="{zIndex: 1, backgroundColor: scroll < 550 ? 'transparent': 'rgba(0, 71, 126,0.95)'}">
        <div class="nav-left">
            <router-link to="/" activeClass="active" tag="a"><a>tua construction</a></router-link>
        </div>
        <div class="right">
            <a>Services</a>
            <a>About Us</a>
            <router-link to="/contact" activeClass="active" tag="a"><a>Contact</a></router-link>
            <a><i class = "fa fa-facebook"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['scroll']
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        padding-right: 15px;
        padding-left: 15px;
        font-weight: 300;
    }

    .navbar{
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 0.5px solid white;
        align-items: center;
        height: 90px;
        transition: height .5s, background-color .5s;
        position: fixed;
    }

    .right{
        transition: font-size .5s, font-weight .5s, background-color .5s;
    }

    .navbar .nav-left{
        font-size: 1.6rem;
        letter-spacing: 1px;
        transition: font-size .5s, font-weight .5s;
    }

    .navbar a{
        line-height: 90px;
    }

    .nav-scroll{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        border-bottom: 0.5px solid rgba(217,217,217,0.5);
        transition: height .5s, background-color .5s;
        position: fixed;
    }

    .nav-scroll .right{
        font-size: 0.9rem;
        transition: font-size .5s, font-weight .5s;
    }

    .nav-scroll a{
        line-height: 70px;
    }

    .nav-scroll .nav-left{
        font-size: 1.2rem;
        letter-spacing: 1px;
        transition: font-size .5s, font-weight .5s;
    }
</style>