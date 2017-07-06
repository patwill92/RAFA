<template>
  <div class="flex">
    <div id="left">
      <aside class="menu">
        <p class="menu-label">
          General contracting
        </p>
        <ul class="menu-list">
          <li><a>Photo Gallery</a></li>
          <li><a>Bathrooms</a></li>
          <li><a>Living Rooms</a></li>
          <li><a>Kitchens</a></li>
          <li><a>Bedrooms</a></li>
        </ul>
        <p class="menu-label">
          Structural steel
        </p>
        <ul class="menu-list">
          <li><a>Photo Gallery</a></li>
          <li><a>Columns</a></li>
          <li><a>Beams</a></li>
          <li><a>Girders</a></li>
          <li><a>Metal Decks</a></li>
          <li><a>Canopies</a></li>
          <li><a>Request Quote</a></li>
        </ul>
      </aside>
    </div>

    <div id="right">
      <app-project-bed></app-project-bed>
    </div>


  </div>
</template>

<script>
  import ProjectBed from './ProjectBed.vue';
  export default {
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

  #left {
    width: 15%;
    height: 100%;
    position: fixed;
    top: 78px;
    /*outline: 1px solid;*/
    margin-left: 1%;
    overflow-y: visible;
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

  /*.flex{*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
  /*}*/


  /*.container{*/
  /*display: flex;*/
  /*justify-content: flex-start;*/
  /*width: 99%;*/
  /*margin-top: 3%;*/
  /*}*/

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