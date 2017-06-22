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

<style>
    body{
        margin: 0;
        font-family: Roboto;
        background-image: url('../dist/home.jpg');
        background-size: cover;
        background-attachment: fixed;
    }
</style>
