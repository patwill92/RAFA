<template>
    <!--<div class="hp3">-->
        <!--<h1 style="margin-top: 0;">Bring Your Ideas to Life</h1>-->
        <!--<h3>Home Remodeling</h3>-->
        <!--<div class = "hp3-container">-->
            <!--<div class="services">-->
                <!--<div class="top" >-->
                    <!--<div class="image" v-on:mouseenter="item.selected = true" v-on:mouseleave="item.selected = false"-->
                         <!--v-for="item in data.fir"  :style="{backgroundImage: 'url(' + item.pic + ')', width: (400/1483)*width + 'px',-->
                    <!--height: 0.75*((400/1483)*width) + 'px'}">-->
                        <!--<div class="image-background"  >-->
                            <!--<div class="content">-->
                                <!--<p>{{item.type}}</p>-->
                                <!--<i :class="item.icon"></i>-->
                                <!--<transition name="slide" mode="out-in">-->
                                    <!--<button class="btn" v-if="item.selected"><span>View Projects</span></button>-->
                                <!--</transition>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<hr style="width: 70%;">-->
                <!--<div class="bottom">-->
                    <!--<div class="image" v-on:mouseenter="item.selected = true" v-on:mouseleave="item.selected = false"-->
                         <!--v-for="item in data.two" :style="{backgroundImage: 'url(' + item.pic + ')', width: (400/1483)*width + 'px',-->
                    <!--height: 0.75*((400/1483)*width) + 'px'}">-->
                        <!--<div class="image-background"  >-->
                            <!--<div class="content">-->
                                <!--<p>{{item.type}}</p>-->
                                <!--<i :class="item.icon"></i>-->
                                <!--<transition name="slide" mode="out-in">-->
                                    <!--<button class="btn" v-if="item.selected"><span>View Projects</span></button>-->
                                <!--</transition>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <div class="container">
        <h1 class="title has-text-centered is-2" >Bring Your ideas to life</h1>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">Vertical...</p>
                            <p class="subtitle">Top tile</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">...tiles</p>
                            <p class="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">Middle tile</p>
                            <p class="subtitle">With an image</p>
                            <figure class="image is-4by3">
                                <img src="http://bulma.io/images/placeholders/640x480.png">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <p class="title">Wide tile</p>
                        <p class="subtitle">Aligned with the right tile</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Tall tile</p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import panel3 from '../../data/home/panel3.js';

    export default{
        props: ['height', 'width'],
        data(){
            return {
                data: panel3
            }
        }
    }
</script>

<style scoped>

    /*i{*/
        /*color: white;*/
        /*text-align: center;*/
        /*font-size: 3.5vw;*/
        /*margin-bottom: 6%;*/
    /*}*/

    /*.slide-enter-active {*/
        /*animation: slide-in 400ms ease-out forwards;*/
    /*}*/

    /*.slide-leave-active {*/
        /*animation: slide-out 400ms ease-out forwards;*/
    /*}*/

    /*@keyframes slide-in {*/
        /*from {*/
            /*transform: translateY(-30px);*/
            /*opacity: 0;*/
        /*}*/
        /*to {*/
            /*transform: translateY(0);*/
            /*opacity: 1;*/
        /*}*/
    /*}*/

    /*@keyframes slide-out {*/
        /*from {*/
            /*transform: translateY(0);*/
            /*opacity: 1;*/
        /*}*/
        /*to {*/
            /*transform: translateY(-30px);*/
            /*opacity: 0;*/
        /*}*/
    /*}*/

    /*.hp3{*/
        /*padding-top: 3%;*/
        /*padding-bottom: 3%;*/
        /*background-color: whitesmoke;*/
    /*}*/

    /*h1{*/
        /*font-weight: 300;*/
        /*text-align: center;*/
        /*font-size: 3.0vw;*/
        /*color: black;*/
    /*}*/

    /*h3{*/
        /*font-weight: 300;*/
        /*text-align: center;*/
        /*font-size: 1.7vw;*/
        /*color: black;*/
    /*}*/

   /*.hp3-container{*/
       /*margin-top: 3%;*/
   /*}*/

   /*.services{*/
       /*display: flex;*/
       /*justify-content: space-between;*/
       /*flex-direction: column;*/
   /*}*/

   /*hr{*/
       /*margin-top: 40px;*/
       /*margin-bottom: 40px;*/
       /*background-color: rgb(0, 71, 126);*/
       /*padding-top: 1px;*/
       /*height: 0px;*/
       /*border: none;*/
   /*}*/

   /*.top{*/
       /*display: flex;*/
       /*justify-content: space-around;*/
   /*}*/

   /*.bottom{*/
       /*display: flex;*/
       /*justify-content: space-around;*/
   /*}*/

   /*.image{*/
       /*background-size: cover;*/
       /*background-repeat: no-repeat;*/
   /*}*/

   /*.image-background{*/
       /*height:inherit;*/
       /*width: inherit;*/
       /*background-color: rgba(0, 0, 0, 0.5);*/
       /*display: flex;*/
       /*justify-content: space-around;*/
       /*flex-direction: column;*/

   /*}*/

   /*.image-background:hover{*/
       /*background-color: rgba(0, 71, 126, 0.7);*/
       /*cursor: pointer;*/
   /*}*/

   /*.content{*/
       /*width: inherit;*/
       /*height: 85%;*/
       /*display: flex;*/
       /*justify-content: flex-start;*/
       /*flex-direction: column;*/
   /*}*/

    /*.content p{*/
        /*margin-top: 3%;*/
        /*margin-bottom: 14%;*/
        /*font-size: 2.0vw;*/
        /*color: white;*/
        /*display: inline;*/
        /*text-align: center;*/
        /*font-weight: 300;*/
    /*}*/

    /*.btn {*/
        /*letter-spacing: 2px;*/
        /*text-transform: uppercase;*/
        /*background-color: transparent;*/
        /*border: 1px solid white;*/
        /*color: white;*/
        /*text-align: center;*/
        /*width: 55%;*/
        /*transition: all 0.5s;*/
        /*cursor: pointer;*/
        /*margin-left: auto;*/
        /*margin-right: auto;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*padding-bottom: 5%;*/
        /*padding-top: 5%;*/
        /*font-size: 1.0vw;*/
    /*}*/

    /*.btn span {*/
        /*color: white;*/
        /*cursor: pointer;*/
        /*display: inline-block;*/
        /*position: relative;*/
        /*transition: 0.5s;*/
    /*}*/

    /*.btn span:after {*/
        /*content: '\00bb';*/
        /*position: absolute;*/
        /*opacity: 0;*/
        /*top: 0;*/
        /*right: -20px;*/
        /*transition: 0.5s;*/
    /*}*/

    /*.btn:hover span {*/
        /*padding-right: 25px;*/
    /*}*/

    /*.btn:hover span:after {*/
        /*opacity: 1;*/
        /*right: 0;*/
    /*}*/
</style>