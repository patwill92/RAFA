<template>
    <div :class="{navbar: scroll < 550, 'nav-scroll': scroll >= 550}">
        <div class="nav-left">
            <a href="#">tua construction</a>
        </div>
        <div>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#"><i class = "fa fa-facebook"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['scroll']
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: transparent;
        border-bottom: 0.5px solid white;
        align-items: center;
        height: 90px;
        transition: height .5s, background-color .5s;
        position: fixed;
    }

    .navbar .nav-left{
        font-size: 1.6rem;
        font-weight: 300;
        letter-spacing: 1px;
        transition: font-size .5s, font-weight .5s;
    }

    .navbar a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding-right: 30px;
        padding-left: 30px;
        line-height: 90px;
    }

    .nav-scroll{
        width: 100%;
        background-color: rgb(0, 71, 126);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        border-bottom: 0.5px solid rgba(217,217,217,0.5);
        transition: height .5s, background-color .5s;
        position: fixed;
    }

    .nav-scroll a{
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding-right: 30px;
        padding-left: 30px;
        line-height: 70px;
    }

    .nav-scroll .nav-left{
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 1px;
        transition: font-size .5s, font-weight .5s;
    }
</style>