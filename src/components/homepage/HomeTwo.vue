<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column" v-for="(each, index) in content2">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  {{each.title}}
                </p>
                <a class="card-header-icon">
                <span class="icon">
                  <i :class="each.icon" :style="{'color': each.color}"></i>
                </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content" :class="'hello' + index" :style="{'height':windowWidth > 768 ? myHeight + 'px !important' : 'auto'}">
                  {{each.ms}}
                </div>
              </div>
              <footer class="card-footer">
                <!--<a class="card-footer-item" style="text-transform: uppercase">{{each.line}}</a>-->
                <a class="card-footer-item" style="text-transform: uppercase">{{each.line}}</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import panel2 from '../../data/home/panel2.js';
  import { mixin } from '../../mixin'
  import 'jquery';
  export default {
        mixins: [mixin],
        data(){
            return{
              content2: panel2,
              myHeight: ''
            }
        },
        methods: {
            getWidth(num){
                var ratio = num/1483;
                var mWidth = this.width * ratio;
                return Math.round(mWidth);
            },
            getHeight(){
              this.myHeight = document.getElementsByClassName('hello1')[0].clientHeight;
            }
        },
        mounted(){
          this.$nextTick(() => {
            window.addEventListener('resize', this.getHeight);
            this.getHeight();
          });
        },
        created(){
          window.addEventListener('resize', this.getHeight);
        }
    }
</script>

<style scoped>

  .card-header{
    background-color: #f0f4f7;
  }

  .card{
    box-shadow: 0 2px 3px rgba(0, 71, 126, 0.1), 0 0 0 1px rgba(0, 71, 126, 0.1);
  }

  .card-header-title{
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase !important;
  }

  .card-header-icon{
    margin-right: 30px !important;
    background-color: white;
    padding: 20px !important;
    border-radius: 50%;
  }

  .card-footer-item{
    height: 60px !important;
    color: black;
    background-color: rgba(240,244,247,0.3) !important;
  }

  .card-footer-item:hover{
    color: rgb(0, 71, 126) !important;
    font-weight: 400;
    font-size: 1.1rem;
  }

  .hero{
    background-color: white;
  }

  i{
    font-size: 2.5rem;
  }

  .card-content{
    background-color: rgba(240,244,247,0.3) !important;
  }

  .content{
    font-size: 1.0rem;
  }

  .card-header{
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .hero-body{
    padding-top: 6% !important;
    padding-bottom: 6% !important;
  }

  .container{
    /*margin-left: 10% !important;*/
    /*margin-right: auto;*/
  }
</style>