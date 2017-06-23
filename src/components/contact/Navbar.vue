<template>
    <div class="navbar">
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

    }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: rgb(0, 71, 126);
        text-transform: uppercase;
        padding-right: 15px;
        padding-left: 15px;
        line-height: 70px;
    }

    .navbar{
        background: white;
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid lightgray;
        align-items: center;
        height: 70px;
        transition: height .5s, background-color .5s;
        position: fixed;
    }

    .right{
        transition: font-size .5s, font-weight .5s, background-color .5s;
        font-size: 0.9rem;
    }

    .navbar .nav-left{
        font-size: 1.2rem;
        letter-spacing: 1px;
        transition: font-size .5s, font-weight .5s;
    }

</style>