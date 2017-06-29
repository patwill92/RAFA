<template>
    <div class = "column" style="margin-bottom: 0;" :style="{'height': width <= 768 ? '260px !important' : '260px !important'}">
      <h3 class="title is-3 is-marginless" style="padding-bottom: 10%; position: relative">{{title}} <i :class="icon"></i></h3>
      <div class = "info">
        <p>{{msg}}</p>
      </div>
    </div>
</template>

<script>
  import panel2 from '../../data/home/panel2.js';
  export default {
        props: ['icon', 'title', 'height', 'width','msg'],
        data(){
            return{
              myHeight: this.height,
              myWidth: this.width,
              content2: panel2
            }
        },
        methods: {
            getWidth(num){
                var ratio = num/1483;
                var mWidth = this.width * ratio;
                return Math.round(mWidth);
            }
        }
    }
</script>

<style scoped>

  i{
    position: absolute;
    right: 0;
    font-size: 3.0rem;
    color: #003691;
    margin-right: 10%;
  }

    .info{
        font-weight: 400;
        letter-spacing: 1.2px;
      color: #3c3f41;
    }

</style>