<template>
  <div style="background-color: white">
    <h1 class="title has-text-centered is-2" style="margin: 0" :style="{'padding': windowWidth < 768 ? '10%' : '3%'}"
        :class="{'is-3': windowWidth <= 768}">Bring Your ideas to life</h1>
    <div class="columns">
      <div class="column" v-for="(each, index) in content3.fir" :style="{backgroundImage: `url(${each.pic})`}"
      v-on:mouseenter="content3.fir[index].selected = true" v-on:mouseleave="content3.fir[index].selected = false">
        <div class="item">
          <div class="content" :class="{'btw': windowWidth <= 768}">
            <h1 class="title is-1">{{each.type}}</h1>
            <h3 class="subtitle is-1" :class="each.icon"></h3>
            <transition name="slide" mode="out-in">
              <button class="btn" v-if="content3.fir[index].selected"><span class="title is-5">View Projects</span></button>
            </transition>
            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column" v-for="(each, index) in content3.two" :style="{backgroundImage: `url(${each.pic})`}"
      v-on:mouseenter="content3.two[index].selected = true" v-on:mouseleave="content3.two[index].selected = false">
        <div class="item">
          <div class="content" :class="{'btw': windowWidth <= 768}">
            <h1 class="title is-1">{{each.type}}</h1>
            <h3 class="subtitle is-1" :class="each.icon"></h3>
            <transition name="slide" mode="out-in">
              <button class="btn" v-if="content3.two[index].selected"><span class="title is-5">View Projects</span></button>
            </transition>
            <button style="justify-content: space-between;padding-left: 15px;" class="btn" v-if="windowWidth <= 768"><span class="title is-5">View Projects</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import panel3 from '../../data/home/panel3.js';
  import { mixin } from '../../mixin';
  export default {
    mixins: [mixin],
    data(){
      return {
        content3: panel3
      }
    }
  }
</script>

<style scoped>


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