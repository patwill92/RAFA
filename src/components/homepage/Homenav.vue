<template>
  <nav class="nav" style="border-bottom: 0.5px solid rgba(219, 219, 219, 0.5) !important; position: relative;"
       :style="{'height': scrolled < 400 ? '90px' : '70px', 'width': windowWidth + 'px', 'top': scrolled + 'px'}"
       :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
    <div class="nav-left" >
      <router-link to="/" activeClass="active" class="nav-item is-marginless" tag="a"><a style="font-size: 1.3rem">tua group</a></router-link>
    </div>
    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span id="nav-toggle" class="nav-toggle" @click="active = !active" :style="{'height': scrolled < 400 ? '90px' : '70px'}"
          :class="{'is-active': active, 'tr': scrolled < 400, 'b': scrolled >= 400, 'bd': scrolled >= 400}">
                          <span class="x"></span>
                          <span class="x"></span>
                          <span class="x"></span>
                        </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu" :class="{'is-active': active, 'tr': scrolled < 400, 'b': scrolled >= 400}"
         style="box-shadow: none;">
      <router-link to="/" activeClass="active" tag="a" class="nav-item" :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
        <a>Home</a>
      </router-link>
      <router-link to="/services" activeClass="active" tag="a" class="nav-item" :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
        <a>Services</a>
      </router-link>
      <router-link to="about" activeClass="active" tag="a" class="nav-item" :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
        <a>About</a>
      </router-link>
      <router-link to="/contact" activeClass="active" tag="a" class="nav-item" :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
        <a>Contact</a>
      </router-link>
      <router-link to="/contact" style="border-bottom: 0.5px solid rgba(219, 219, 219, 0.5)" activeClass="active"
                   tag="a" class="nav-item" :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
        <a class="fa fa-facebook"></a>
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

  .bd{
    border-bottom: 0.5px solid rgba(219, 219, 219, 0.5) !important
  }

  .nav{
    border-bottom: 0.5px solid white;
    transition: height 0.5s !important;
  }

  .tr{
    background-color: transparent;
  }

  .t{
    background-color: rgba(0, 71, 126, 0.7);
  }

  .b{
    background-color: rgb(0, 71, 126);
  }

  .x{
    background-color: white !important;
  }
</style>