<template>
    <nav class="nav is-fullwidth has-shadow" >
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
  import { mixin } from '../mixin';

  export default {
      mixins: [mixin],
      data(){
        return {
          active: false,
          myWidth: this.width
        }
      }
    }
</script>

<style scoped>

    .nav{
      height: 70px !important;
    }

    .nav-toggle{
      height: 70px !important;
    }

    .nav-toggle:hover{
      background-color: white !important;
    }

    .nav-toggle span{
      background-color: rgb(0, 71, 126) !important;
    }

    a{
        margin-top: 0 !important;
        color: rgb(0, 71, 126) !important;
        text-transform: uppercase !important;
    }

    a:hover{
     text-decoration: none;
    }

    /*.navbar{*/
        /*background: white;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*width: 100%;*/
        /*border-bottom: 1px solid lightgray;*/
        /*align-items: center;*/
        /*height: 70px;*/
        /*transition: height .5s, background-color .5s;*/
        /*position: fixed;*/
    /*}*/

    /*.right{*/
        /*transition: font-size .5s, font-weight .5s, background-color .5s;*/
        /*font-size: 0.9rem;*/
    /*}*/

    /*.navbar .nav-left{*/
        /*font-size: 1.2rem;*/
        /*letter-spacing: 1px;*/
        /*transition: font-size .5s, font-weight .5s;*/
    /*}*/

</style>