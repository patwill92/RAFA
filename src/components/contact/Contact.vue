<template>
    <div class="is-fullwidth">
        <app-navbar style="width: 100% !important"></app-navbar>
        <app-banner></app-banner>
        <div style="background-color: white; padding-bottom: 4%">
            <h1 class="title has-text-centered" style="margin-bottom: 4%; padding-top: 4%" :class="{'is-3': windowWidth > 768, 'is-4': windowWidth <= 768}">We're quick to respond</h1>
            <app-form></app-form>
        </div>
        <app-map style="margin-top: 4%"></app-map>
    </div>
</template>

<script>
    import { mixin} from '../../mixin';
    import Navbar from '../Navbar.vue';
    import Form from './Form.vue';
    import Map from './Map.vue'
    import Banner from './Banner.vue'

    export default {
        mixins: [mixin],
        data(){
            return {
                pos: false
            }
        },
        components: {
            appNavbar: Navbar,
            appForm: Form,
            appMap: Map,
            appBanner: Banner
        }
    }
</script>

<style scoped>

    /*p, li{*/
        /*color: #555555;*/
        /*margin-bottom: 5%;*/
        /*line-height: 150%;*/
    /*}*/

    /*.info{*/
        /*height: 400px;*/
        /*width: 40%;*/
        /*background: white;*/
    /*}*/

    /*.cp1{*/
        /*display: flex;*/
        /*justify-content: flex-start;*/
        /*flex-direction: column;*/

    /*}*/

    /*h2,h3 {*/
        /*margin-bottom: 1%;*/
        /*color: white;*/
        /*text-align: center;*/
    /*}*/

    /*h2{*/
        /*font-size: 3.5vw;*/
        /*font-weight: 300;*/
        /*text-transform: uppercase;*/
    /*}*/

    /*h3{*/
        /*font-size: 2.9vw;*/
        /*font-weight: 100;*/
    /*}*/


    /*.cp1-container{*/
        /*height: 400px;*/
        /*width: 100%;*/
        /*background-size: cover;*/
        /*margin-top: 71px;*/
    /*}*/

    /*.cp1-background{*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*flex-direction: column;*/
        /*height: inherit;*/
        /*background-color: rgba(0, 0, 0, 0.4);*/
    /*}*/

    /*.form-container{*/
        /*display: flex;*/
        /*justify-content: space-around;*/
    /*}*/


</style>