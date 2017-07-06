<template>
  <div class="flex" :style="{height: windowHeight + 'px'}">
    <!--<div id="right">-->
      <!--<app-project-bed></app-project-bed>-->
    <!--</div>-->
    <app-project-bed></app-project-bed>
  </div>
</template>

<script>
  import ProjectBed from './ProjectBed.vue';
  import {mixin} from '../../mixin'
  export default {
    mixins: [mixin],
    data() {
      return {
        active1: false,
        active2: false,
        active3: false
      }
    },
    components: {
      appProjectBed: ProjectBed
    }
  }
</script>

<style scoped>

  .flex{
    position: absolute;
    top: 70px;
    width: 84%;
    left: 16%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
  }
  #right {
    width: 70%;
    height: auto;
    /*outline: 1px solid;*/
    position: absolute;
    left: 16%;
    top: 70px;
    margin-right: 3%;
  }
  .menu{
    margin-right: 1%;
  }

  a, a:hover{
    color: rgb(0, 71, 126) !important;
  }

  /*.tabs{*/
  /*margin-left: 3%;*/
  /*align-items: flex-start;*/
  /*width: 80%;*/
  /*}*/

  .is-active a{
    color: rgb(0, 71, 126) !important;
  }

</style>