<template>
    <gmap-map
            :center="center"
            :zoom="12"
            style="width: 100%; height: 400px;"
    >
        <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="getInfo"
        >
            <gmap-info-window
                    v-if="infoWindow"
                    >
                <div id="iw-container">
                    <div class="iw-title"><p>Tua construction</p><a @click="getInfo" class="close-thik"></a></div>
                    <div class="iw-content">
                        <p><strong>Address </strong> <a href="https://goo.gl/maps/fJ1yssENGmL2">7301 NW 32nd Ave, Miami, FL 33147</a></p>
                        <p><strong>Phone </strong> <a href="tel:1-305-639-1100">(305) 639-1100</a></p>
                        <p style="margin-bottom: 5px !important;"><strong>Email </strong><a href="#" rel="nofollow" onclick="this.href='mailto:' +
                        'tuagroup' + '@' + 'tuagroup.net'">info@tuagroup.net</a></p>
                    </div>
                </div>
            </gmap-info-window>
        </gmap-marker>
    </gmap-map>
</template>

<script>

    import * as VueGoogleMaps from 'vue2-google-maps';

    export default {
        data () {
            return {
                center: {lat: 25.840503, lng: -80.249016},
                markers: [{
                    position: {lat: 25.840503, lng: -80.249016}
                }],
                gestureHandling: 'cooperative',
                infoWindow: false,
            }
        },
        methods: {
            getInfo(){
                this.infoWindow = !this.infoWindow;
            }
        }
    }
</script>

<style>

    .vue-map-container{
        margin-top: 0 !important;
    }

    a{
        color: #0000EE !important;
        display: block;
        margin-top: 1%;
    }

    .close-thik{
        color: white !important;
        font: 14px/100% arial, sans-serif;
        position: absolute;
        right: 4px;
        top: 5px;
        text-decoration: none;
        width: 16px;
        height: 16px;
        text-align: center;
        text-shadow: 0 1px 0 #fff;
    }

    .close-thik:after {
        content: '✖';
        color: white !important;
        width: 16px !important;
        height: 16px !important;
    }

    .close-thik:hover{
        cursor: pointer;
        color: white !important;
        text-decoration: none;
    }

    #iw-container  .iw-title {
        text-transform: uppercase;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 0;
        background-color: rgb(0, 71, 126);
        color: white;
        margin: 0;
        border-radius: 2px 2px 0 0;
        position: relative;
    }

    .iw-title p{
        margin: 0;
    }

    #iw-container p{
        padding-left: 10px;
    }

    .iw-content p{
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }

    .iw-content{
        visibility: visible !important;
        z-index: 100000 !important;
    }

    .gm-style-iw {
        width: 270px !important;
        top: 15px !important;
        left: 0 !important;
        background-color: white;
        box-shadow: 0 1px 6px rgba(178, 178, 178, 0.6);
        border-radius: 2px 2px 0 0;
        z-index: 1;
        display: flex !important;
        justify-content: space-between !important;
        flex-direction: column !important;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(2) div:nth-child(1){
        width: 100%;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(2){
        visibility: hidden;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(4){
        display: none !important;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(3){
        display: none !important;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(3) {
        display: block !important;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(3) div:nth-child(1) div{
        display: block !important;
        background-color: white;
        z-index: 1000000;
        box-shadow: none !important;
    }
    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(3) div:nth-child(2) div{
        display: block !important;
        background-color: white;
        z-index: 1000000;
        box-shadow: none !important;
        visibility: visible !important;
    }

</style>