<template>
  <div class="hero is-small" :class="{'height': windowWidth < 769}" :style="{backgroundImage: `url('${image}')`, backgroundSize: 'cover'}"
       style="margin-bottom: 3%">
    <div class="hero is-small" :class="{'height': windowWidth < 769}" :style="{backgroundColor: 'rgba(0, 0, 0, 0.4)'}">
      <div class="hero-body has-text-centered" :class="{'center': windowWidth < 769}">
        <h1 class="title column has-text-centered upper"
            style="color: white"
            :style="{'margin-bottom': windowWidth >= 769 ? '4%' : '0', fontSize: windowWidth > 768 ? '3.0rem' : ''}">
          services
        </h1>
        <h2 class="subtitle column has-text-centered upper"  :style="{fontSize: windowWidth > 768 ? '1.6rem' : ''}" style="color: white">
          quality from start to finish
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
        image: images.steel
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

  .upper{
    text-transform: uppercase;
  }

  h1, h2{
    color: white;
  }
</style>