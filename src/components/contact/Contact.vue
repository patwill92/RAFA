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
            <h3 style="color: black; margin-bottom: 3%;">Get in touch</h3>
            <div class="form-container">
                <app-form style="width: 40%;"></app-form>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem error harum modi molestiae
                        placeat provident sit? At cupiditate, delectus id laborum
                        laudantium omnis, sunt temporibus tenetur velit veritatis vero voluptas.</p>
                    <p style="font-weight: 500;">Not sure what to say?</p >
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae culpa
                            cupiditate magnam neque quo? Animi dicta et ipsam.</li>
                        <li>Dolore error fugiat itaque iure iusto laboriosam modi quas quis quod quos,
                            sapiente temporibus ut veniam.</li>
                        <li>Ipsum dolor sit amet, upiditate delectus eligendi ipsum libero maxime
                            reiciendis saepe sequi voluptas?</li>
                    </ul>
                </div>
            </div>
        </div>
        <app-map></app-map>
    </div>
</template>

<script>
    import { mixin} from '../../mixin';
    import Navbar from './Navbar.vue';
    import Form from './Form.vue';
    import Map from './Map.vue'

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
            appForm: Form,
            appMap: Map
        }
    }
</script>

<style  scoped>

    p, li{
        color: #555555;
        margin-bottom: 5%;
        line-height: 150%;
    }

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