<template>
    <div class="container">
        <app-navbar></app-navbar>
        <div class="cp1">
            <div class="cp1-container" :style="{backgroundImage: `url('${image}')`}">
                <div class="cp1-background">
                    <div class="cp1-content">
                        <h2>Contact us</h2>
                        <h3>We look forward to working you</h3>
                    </div>
                </div>
            </div>
            <h3 style="color: black;">Get in touch</h3>
            <div class="form-container">
                <app-form style="width: 40%;"></app-form>
                <div class="info">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mixin} from '../../mixin';
    import Navbar from './Navbar.vue';
    import Form from './Form.vue';

    import images from '../../data/home/images.js';

    export default {
        mixins: [mixin],
        data(){
            return {
                image: images.contact,
                pos: false
            }
        },
        components: {
            appNavbar: Navbar,
            appForm: Form
        }
    }
</script>

<style  scoped>

    .info{
        height: 400px;
        width: 40%;
        background: white;
    }

    .cp1{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;

    }

    h2,h3 {
        margin-bottom: 1%;
        color: white;
        text-align: center;
    }

    h2{
        font-size: 3.5vw;
        font-weight: 300;
        text-transform: uppercase;
    }

    h3{
        font-size: 2.9vw;
        font-weight: 100;
    }


    .cp1-container{
        height: 400px;
        width: 100%;
        background-size: cover;
        margin-top: 71px;
    }

    .cp1-background{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: inherit;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .form-container{
        display: flex;
        justify-content: space-around;
    }


</style>