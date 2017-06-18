<template>
    <app-home></app-home>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        components: {
            appHome: Home
        }
    }
</script>

<style>
    html{
        width: 100%;
        min-height: 100%;
    }

    body{
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: Roboto;
    }
</style>
