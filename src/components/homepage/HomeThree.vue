<template>
  <section class="hero is-medium">
    <div class="hero-head">
      <h1 class="title is-2">General contracting</h1>
      <h3 class="subtitle is-4">Residential</h3>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column" v-for="(each, index) in content3">
            <div class="card">
              <div class="content" :style="{backgroundImage: `url('${each.pic}')`}"
                   v-on:mouseenter="content3[index].selected = true" v-on:mouseleave="content3[index].selected = false">
                <div class="background">
                  <transition name="slide" mode="out-in">
                    <button class="btn" v-if="content3[index].selected && windowWidth > 768"><span>View Projects</span></button>
                  </transition>
                  <button class="bt" v-if="windowWidth <= 768">View Projects</button>
                </div>
              </div>
              <header class="card-header">
                <a class="card-header-icon">
                <span class="icon">
                  <i :class="each.icon"></i>
                </span>
                </a>
                <div class="card-header-title">
                  <span>{{each.type}}</span>
                </div>
              </header>
              <!--<footer class="card-footer">-->
                <!--<a class="card-footer-item" style="text-transform: uppercase">View projects</a>-->
              <!--</footer>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

  .hero{
    padding-top: 4rem !important;
    background-color: #f0f4f7 !important;
  }

  .hero-body{
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .title, h3{
    text-transform: uppercase;
    text-align: center;
  }

  h3{
    margin-top: 3% !important;
  }

  .content{
    margin: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content:hover{
    cursor: pointer;
  }
  .background{
    background-color: rgba(0, 71, 126, 0.3);
    height: 280px !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .card-footer-item{
    height: 60px !important;
    color: rgb(0, 71, 126) !important;
    background-color: #f0f4f7	 !important;
  }

  .card-footer-item:hover {
    font-weight: 400;
    font-size: 1.1rem;
  }

  i{
    font-size: 2.5rem;
  }
  .icon{
   color: rgb(0, 71, 126);
  }

  .card-header{
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .card-header-title{
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase !important;
    text-align: right;
  }

  .card-header-title span{
    display: inline-block;
    width: 95%;
  }

  .card-header-icon{
    background-color: #f0f4f7;
    padding: 20px !important;
    border-radius: 50%;
    margin-left: 20px !important;
  }

  /*.item{*/
    /*height: inherit;*/
    /*width: inherit;*/
    /*background-color: rgba(0, 0, 0, 0.5);*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*flex-direction: column;*/
  /*}*/

  /*.item:hover{*/
    /*background-color: rgba(0, 71, 126, 0.7);*/
    /*cursor: pointer;*/
  /*}*/

  /*.columns{*/
    /*width: 95%;*/
    /*margin: auto;*/
  /*}*/

  /*.column{*/
    /*height: 300px !important;*/
    /*padding: 0;*/
    /*margin-bottom: 3%;*/
    /*margin-right: 1%;*/
    /*margin-left: 1%;*/
    /*background-size: cover !important;*/
    /*background-repeat: no-repeat !important;*/
  /*}*/

  /*h1, h2{*/
    /*text-transform: uppercase !important;*/
  /*}*/

  /*a{*/
    /*margin-top: 0 !important;*/
    /*color: white !important;*/
    /*text-transform: uppercase !important;*/
  /*}*/

  /*a:hover{*/
    /*text-decoration: none !important;*/
  /*}*/

  /*.content{*/
    /*width: inherit;*/
    /*height: 85%;*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*flex-direction: column;*/
  /*}*/

  /*.content h1{*/
    /*margin-top: 3%;*/
    /*margin-bottom: 10%;*/
    /*color: white;*/
    /*display: inline;*/
    /*text-align: center;*/
    /*font-weight: 300;*/
  /*}*/

  /*.content h3{*/
    /*color: white;*/
    /*text-align: center;*/
    /*margin-bottom: 10%;*/
    /*display: block;*/
    /*width: 100%;*/
  /*}*/

  /*.content h3:before{*/
    /*color: white;*/
    /*text-align: center;*/
    /*margin-bottom: 10%;*/
    /*display: block;*/
    /*width: 100%;*/
  /*}*/

  /*.btw{*/
    /*justify-content: space-between !important;*/
  /*}*/

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

  .bt {
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    width: 55%;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 5%;
    padding-top: 5%;
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
    /*text-align: center !important;*/
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