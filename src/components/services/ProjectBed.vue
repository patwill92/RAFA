<template>
  <div class="project">
    <div class="tabs">
      <ul>
        <li @click="active1 = !active1" :class="{'is-active': active1}">
          <a>
            <!--<span class="icon is-small"><i class="fa fa-image"></i></span>-->
            <span>Projects</span>
          </a>
        </li>
        <li @click="active2 = !active2" :class="{'is-active': active2}">
          <a>
            <!--<span class="icon is-small"><i class="fa fa-music"></i></span>-->
            <span>Picture Gallery</span>
          </a>
        </li>
        <li @click="active3 = !active3" :class="{'is-active': active3}">
          <a>
            <!--<span class="icon is-small"><i class="fa fa-film"></i></span>-->
            <span>Request Quote</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="description">
      <div class="card project-title">
        <div class="content">
        <div class="background">
          <h2>Placeholder</h2>
          <h3>Bedroom/Project 1 Image</h3>
          <h5>Image content: Final result</h5>
        </div>
      </div>
        <header class="card-header">
          <div class="card-header-title">
            <p>Project Footer Title</p>
          </div>
          <div class="footer-content">
            <p>Project Description</p>
          </div>
        </header>
      </div>

      <div class="card project-steps">
        <div class="content">
        <div class="background">
          <h2>Placeholder</h2>
          <h3>Bedroom/Project Week 1 Image</h3>
          <h5>Image content: Week 1 progress</h5>
        </div>
      </div>
        <header class="card-header">
          <div class="card-header-title">
            <p>Week 1</p>
          </div>
          <div class="footer-content">
            <p>Description</p>
          </div>
        </header>
      </div>

      <div class="card project-steps">
        <div class="content">
        <div class="background">
          <h2>Placeholder</h2>
          <h3>Bedroom/Project Week 2 Image</h3>
          <h5>Image content: Week 2 progress</h5>
        </div>
      </div>
        <header class="card-header">
          <div class="card-header-title">
            <p>Week 2</p>
          </div>
          <div class="footer-content">
            <p>Description</p>
          </div>
        </header>
      </div>

      <div class="card project-steps">
        <div class="content">
        <div class="background">
          <h2>Placeholder</h2>
          <h3>Bedroom/Project Final Image</h3>
          <h5>Image content: Final Result</h5>
        </div>
      </div>
        <header class="card-header">
          <div class="card-header-title">
            <p>Final Week</p>
          </div>
          <div class="footer-content">
            <p>Description</p>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active1: false,
        active2: false,
        active3: false
      }
    }
  }
</script>

<style scoped>

  .project{
    margin-left: 1%;
  }

  .tabs{
    align-items: flex-start;
    background-color: white;
    width: 80% !important;
    position: fixed;
    padding-top: 10px;
    z-index: 1000;
  }

  li:hover{
    /*border-bottom: 1px solid rgb(0, 71, 126);*/
    /*!*border-bottom-color: rgb(0, 71, 126);*!*/
  }

  a{
    color: #3c3f41 !important;
    margin-top: 0;
  }

  a:hover{
    color: rgb(0, 71, 126) !important;
    border-bottom-color: rgb(0, 71, 126);
  }

  .is-active a{
    color: rgb(0, 71, 126) !important;
  }

  .card-header{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  }

  .background{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: lightgray;
  }

  .description{
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
  }

  .footer-content{
    padding: 12px;
  }

  .project-title{
  width: 90% !important;
  margin-bottom: 3%;
  }

  .project-steps{
    width: 87% !important;
    margin-bottom: 3%;
  }

</style>