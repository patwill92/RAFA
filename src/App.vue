<template>
    <router-view></router-view>
</template>

<script>
    import Home from './components/Home.vue';
    import images from './data/home/images.js';

    export default {
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/_all";

   body{
       margin: 0;
       background: transparent;
       font-family: Roboto;
       height: 100%;
       width: 100%;
   }
</style>
