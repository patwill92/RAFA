<template>
    <div class="is-fullwidth" id="background-pic">
        <div class="is-fullwidth" style="background-color: rgba(0, 71, 126, 0.7) !important;">
            <nav class="nav" style="position: fixed; z-index: 1000 !important; border-bottom: 0.5px solid white !important"
                 :style="{width: '100% !important', 'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}"
                 :class="{'before': scrolled < 550, 'after': scrolled >= 550}">
                <div class="nav-left">
                    <router-link to="/" activeClass="active" class="nav-item is-marginless" tag="a"><a style="font-size: 1.3rem">tua group</a></router-link>
                </div>
                <span id="nav-toggle" class="nav-toggle" @click="active = !active"
                      :class="{'is-active': active}"
                      :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important',
                      'height': scrolled < 550 ? '90px !important': '70px !important'}"
                      style="border-bottom: 0.5px solid white !important; ">
                    <span style="background-color: white !important"></span>
                    <span style="background-color: white !important"></span>
                    <span style="background-color: white !important"></span>
                </span>
                <div class="nav-right nav-menu"
                     :class="{'is-active': active, 'before': scrolled < 550, 'after': scrolled >= 550}"
                      :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}"
                      style="overflow-y: visible !important; overflow-x: visible !important; border-bottom: none;
                      transition: background-color 0.5s !important">
                    <router-link to="/" activeClass="active" tag="a" class="nav-item" :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}">
                        <a>Home</a>
                    </router-link>
                    <router-link to="/services" activeClass="active" tag="a" class="nav-item" :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}">
                        <a>Services</a>
                    </router-link>
                    <router-link to="about" activeClass="active" tag="a" class="nav-item" :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}">
                        <a>About</a>
                    </router-link>
                    <router-link to="/contact" activeClass="active" tag="a" class="nav-item" :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}">
                        <a>Contact</a>
                    </router-link>
                    <router-link to="/contact" activeClass="active" tag="a" class="nav-item" :style="{'background-color': scrolled < 550 ? 'transparent !important': 'rgb(0, 71, 126) !important'}">
                        <a class="fa fa-facebook"></a>
                    </router-link>
                </div>
            </nav>
            <section class="hero is-success is-fullheight" style="background-color: transparent !important;"
                     v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}">
                <!-- Hero header: will stick at the top -->
                <div class="hero-head">

                </div>

                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            let tua do the <span>heavy</span> lifting
                        </h1>
                        <h2 class="subtitle">
                            commercial and residential contracting services
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <app-arrow v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 400}"></app-arrow>
                </div>
            </section>
            <div class="is-fullwidth" style="background-color: #f1f1f1 !important;" :style="{'padding-top': windowWidth > 768 ? '2% !important' :
                    '5% !important'}">
                <div class="columns" style="width: 90%; margin: auto">
                    <app-home-two  v-for="each in content2" :icon="each.icon" :title="each.title"></app-home-two>
                </div>
            </div>
        </div>
      <!--<app-home-three></app-home-three>-->
        <h1 class="title has-text-centered is-2" >Bring Your ideas to life</h1>
        <div class="level">
          <div class="level-left"
               :style="{backgroundImage: `url(${content3.fir[0].pic})`}">
            <div class="level-item">

            </div>
          </div>
          <div class="level-left"
               :style="{backgroundImage: `url(${content3.fir[0].pic})`}">
            <div class="level-item">

            </div>
          </div>
          <div class="level-left"
               :style="{backgroundImage: `url(${content3.fir[0].pic})`}">
            <div class="level-item">

            </div>
          </div>
        </div>
      </div>
</template>

<script>
    import HomeOne from './homepage/HomeOne.vue';
    import HomeTwo from './homepage/HomeTwo.vue';
    import Arrow from './homepage/Arrow.vue';

    import images from '../data/home/images.js';
    import panel2 from '../data/home/panel2.js';
    import panel3 from '../data/home/panel3.js';
    import { mixin } from '../mixin';

    export default {
        mixins: [mixin],
        data(){
            return {
                image: images,
                content2: panel2,
                content3: panel3,
                active: false
            }
        },
        components: {
            appHomeOne: HomeOne,
            appHomeTwo: HomeTwo,
            appHomeThree: HomeThree,
            appArrow: Arrow
        }
    }
</script>

<style scoped>

  .parent-flex{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .child-flex{
    width: 90%;
    margin:auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .level-left, .level-right{
    width: 400px !important;
    height: 300px !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  .nav-right a{
    color: white !important;
  }

  .is-active{
    background-color: transparent !important;
  }

    #background-pic{
        background-image: url('../../dist/home.jpg') !important;
        background-size: cover !important;
        background-attachment: fixed !important;
    }

    .nav{
        transition: height .5s;
        position: fixed !important;
        border-bottom: 0.5px solid white;
    }

    .before{
        height: 90px !important;
        transition: height .5s;

    }

    .after{
        height: 70px !important;
        transition: height .5s;
    }

    h1, h2{
        text-transform: uppercase !important;

    }

    .nav-toggle{
        height: 90px !important;
        transition: height .5s;
    }

    .nav-toggle:hover{
        background-color: white !important;
    }

    .nav-toggle span{
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
</style>
