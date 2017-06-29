<template>
  <div class="hero is-medium" :class="{'height': windowWidth < 769}" :style="{backgroundImage: `url('${image}')`, backgroundSize: 'cover'}">
    <div class="hero is-medium" :class="{'height': windowWidth < 769}" :style="{backgroundColor: 'rgba(0, 0, 0, 0.4)'}">
      <div class="hero-body has-text-centered" :class="{'center': windowWidth < 769}">
            <h1 class="title column has-text-centered"
                style="color: white"
                :style="{'margin-bottom': windowWidth >= 769 ? '4%' : '0', fontSize: windowWidth > 768 ? '3.0rem' : ''}">
              CONTACT US
            </h1>
            <h2 class="subtitle column has-text-centered"  :style="{fontSize: windowWidth > 768 ? '1.6rem' : ''}" style="color: white">
              WE LOOK FORWARD TO WORKING WITH YOU
            </h2>
      </div>
    </div>
  </div>
</template>

<script>
  import images from '../../data/home/images.js';
  import { mixin} from '../../mixin';
  export default {
    mixins: [mixin],
    data(){
      return {
        image: images.contact
      }
    }
  }
</script>

<style>

  .height{
    height: 300px !important;
  }

  .center{
    display: flex !important;
    justify-content: center !important;
    flex-direction: column !important;
  }

  h1,h2{
    color: white;
  }
</style>