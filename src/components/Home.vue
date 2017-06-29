<template>
    <div class="background-pic" style="background-color: rgba(0, 71, 126, 0.7) !important;">
        <nav class="nav" style="border-bottom: 0.5px solid rgba(219, 219, 219, 0.5) !important; position: relative;"
             :style="{'height': scrolled < 400 ? '90px' : '70px', 'width': windowWidth + 'px', 'top': scrolled + 'px'}"
        :class="{'tr': scrolled < 400, 'b': scrolled >= 400}">
            <div class="nav-left" >
                <router-link to="/" activeClass="active" class="nav-item is-marginless" tag="a"><a style="font-size: 1.3rem">tua construction</a></router-link>
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
        <div >
            <section class="hero is-success is-fullheight" style="background-color: transparent !important;"
                     v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 550}">
                <!-- Hero header: will stick at the top -->
                <div class="hero-head">

                </div>

                <!-- Hero content: will be in the middle -->
                <div class="hero-body">
                    <div class="container has-text-centered" style="height: 300px">
                        <h1 class="title" :class="{'is-1': windowWidth > 768}">
                            let tua do the <span>heavy</span> lifting
                        </h1>
                        <h2 class="subtitle" :class="{'is-4': windowWidth > 768}" style="margin-top: 6%">
                            commercial and residential contracting services
                        </h2>
                    </div>
                </div>
                <!-- Hero footer: will stick at the bottom -->
                <div class="hero-foot">
                    <app-arrow style="color: white !important" v-on:scroll="handleScroll" :style="{opacity: 1 - scrolled / 400}"></app-arrow>
                </div>
            </section>
        </div>


        <div class="is-fullwidth" style="background-color: #f1f1f1 !important;" :style="{'padding-top': windowWidth > 768 ? '4% !important' :
                    '12% !important', 'padding-bottom': windowWidth > 768 ? '0 !important' :
                    '0 !important'}">
            <div class="columns" style="width: 90%; margin: auto;">
                <app-home-two  v-for="each in content2" :icon="each.icon" :title="each.title" :msg="each.ms" :width="windowWidth"></app-home-two>
            </div>
        </div>

      <!--<app-home-three></app-home-three>-->

        <div style="background-color: white">
            <h1 class="title has-text-centered is-2" style="margin: 0" :style="{'padding': windowWidth < 768 ? '10%' : '3%'}"
             :class="{'is-3': windowWidth <= 768}">Bring Your ideas to life</h1>
            <div class="columns">
                <div class="column"
                     :style="{backgroundImage: `url(${content3.fir[0].pic})`}"
                        v-on:mouseenter="content3.fir[0].selected = true" v-on:mouseleave="content3.fir[0].selected = false">
                    <div class="item">
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.fir[0].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.fir[0].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button class="btn" v-if="content3.fir[0].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
                </div>
                <div class="column"
                     :style="{backgroundImage: `url(${content3.fir[1].pic})`}"
                        v-on:mouseenter="content3.fir[1].selected = true" v-on:mouseleave="content3.fir[1].selected = false">
                    <div class="item">
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.fir[1].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.fir[1].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button  class="btn" v-if="content3.fir[1].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
                </div>
                <div class="column"
                     :style="{backgroundImage: `url(${content3.fir[2].pic})`}"
                        v-on:mouseenter="content3.fir[2].selected = true" v-on:mouseleave="content3.fir[2].selected = false">
                    <div class="item">
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.fir[2].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.fir[2].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button  class="btn" v-if="content3.fir[2].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column"
                     :style="{backgroundImage: `url(${content3.two[0].pic})`}"
                        v-on:mouseenter="content3.two[0].selected = true" v-on:mouseleave="content3.two[0].selected = false">
                    <div class="item" >
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.two[0].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.two[0].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button  class="btn" v-if="content3.two[0].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
                </div>
                <div class="column"
                     :style="{backgroundImage: `url(${content3.two[1].pic})`}"
                        v-on:mouseenter="content3.two[1].selected = true" v-on:mouseleave="content3.two[1].selected = false">
                    <div class="item">
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.two[1].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.two[1].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button  class="btn" v-if="content3.two[1].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
                </div>
                <div class="column"
                     :style="{backgroundImage: `url(${content3.two[2].pic})`}"
                        v-on:mouseenter="content3.two[2].selected = true" v-on:mouseleave="content3.two[2].selected = false">
                    <div class="item">
                        <div class="content" :class="{'btw': windowWidth <= 768}">
                            <h1 class="title is-1">{{content3.two[2].type}}</h1>
                            <h3 class="subtitle is-1" :class="content3.two[2].icon"></h3>
                            <transition name="slide" mode="out-in">
                                <button  class="btn" v-if="content3.two[2].selected"><span class="title is-5">View Projects</span></button>
                            </transition>
                            <button style="justify-content: space-between; padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
                        </div>
                    </div>
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
            appArrow: Arrow
        }
    }
</script>

<style scoped>

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

    .item{
        height: inherit;
        width: inherit;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .item:hover{
        background-color: rgba(0, 71, 126, 0.7);
        cursor: pointer;
    }

  .columns{
      width: 95%;
      margin: auto;
  }

  .column{
    height: 300px !important;
    padding: 0;
    margin-bottom: 3%;
    margin-right: 1%;
    margin-left: 1%;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }
    .background-pic{

    }

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

    .content{
        width: inherit;
        height: 85%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .content h1{
        margin-top: 3%;
        margin-bottom: 10%;
        color: white;
        display: inline;
        text-align: center;
        font-weight: 300;
    }

    .content h3{
        color: white;
        text-align: center;
        margin-bottom: 10%;
        display: block;
        width: 100%;
    }

    .content h3:before{
        color: white;
        text-align: center;
        margin-bottom: 10%;
        display: block;
        width: 100%;
    }

    .btw{
        justify-content: space-between !important;
    }

    .btn {
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        text-align: center;
        width: 55%;
        transition: all 0.5s;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        padding-bottom: 5%;
        padding-top: 5%;
    }

    .btn span {
        color: white;
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .btn span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    .btn:hover span {
        padding-right: 25px;
    }

    .btn:hover span:after {
        opacity: 1;
        right: 0;
    }

    button{
        text-align: center !important;
    }

    .slide-enter-active {
        animation: slide-in 400ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 400ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
