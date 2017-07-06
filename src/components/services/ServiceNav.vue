<template>
  <nav class="nav short" style="border-bottom: 0.5px solid lightgray !important"
       :style="{'width': windowWidth + 'px'}">
    <div class="nav-left short" style="border-bottom: 0.5px solid lightgray !important">
      <router-link to="/" activeClass="active" class="nav-item is-marginless" tag="a">
        <a style="font-size: 1.5rem" class="bl">tua group</a>
      </router-link>
    </div>
    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span id="nav-toggle" class="nav-toggle" @click="active = !active"
          style="box-shadow: none; border-bottom: 0.5px solid lightgray !important"
          :class="{'is-active': active}">
                          <span class="b"></span>
                          <span class="b"></span>
                          <span class="b"></span>
                        </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu" :class="{'is-active': active}"
         style="box-shadow: none;">
      <router-link to="/" activeClass="active" tag="a" class="nav-item">
        <a class="bl">Home</a>
      </router-link>
      <router-link to="/services" activeClass="active" tag="a" class="nav-item">
        <a class="bl">Services</a>
      </router-link>
      <router-link to="about" activeClass="active" tag="a" class="nav-item">
        <a class="bl">About</a>
      </router-link>
      <router-link to="/contact" activeClass="active" tag="a" class="nav-item">
        <a class="bl">Contact</a>
      </router-link>
      <router-link to="/contact" activeClass="active"
                   tag="a" class="nav-item">
        <a  class="fa fa-facebook bl"></a>
      </router-link>
    </div>
  </nav>
</template>

<script>
  import { mixin } from '../../mixin';
  export default {
    mixins: [mixin],
    data(){
      return {
        active: false
      }
    }
  }
</script>

<style scoped>

  .nav-right{
    /*border: none !important;*/
  }

  .nav-left{
    transition: height 0.5s !important;
  }

  .nav-toggle:hover{
    background-color: inherit !important;
    transition: height 0.5s !important;
    /*border: none !important;*/
  }

  .nav-toggle:focus{
    /*border: none !important;*/
  }

  #nav-toggle{
    transition: height 0.5s !important;
    /*border: none !important;*/
  }

  .nav-toggle{
    transition: height 0.5s !important;
    /*border: none !important;*/
  }

  h1, h2{
    text-transform: uppercase !important;
  }

  a{
    margin-top: 0 !important;
    text-transform: uppercase !important;
  }

  a:hover{
    text-decoration: none !important;
  }

  .nav{
    border-bottom: 0.5px solid white;
    transition: height 0.5s !important;
    position: fixed !important;
    top: 0; left: 0; right: 0;
  }

  .bl{
    color: rgb(0, 71, 126) !important;

  }

  .w{
    color: white !important;
  }

  .short{
    height: 70px !important;
  }

  .tall{
    height: 90px !important ;
  }

  .b{
    background-color: rgb(0, 71, 126) !important;
  }

  .x{
    background-color: white !important;
  }
</style>