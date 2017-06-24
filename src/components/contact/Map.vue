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
                :draggable="true"
                @click="getInfo"
        >
            <gmap-info-window
                    v-if="infoWindow"
                    @click="!infoWindow">

                <div id="iw-container">
                    <div class="iw-title"><p>Tua construction</p></div>
                    <div class="iw-content">
                        <div class="iw-subTitle"><p><strong>Address: </strong> 7301 NW 32nd Ave, Miami, FL 33147</p></div>
                        <div class="iw-subTitle"><p><strong>Phone: </strong> <a>(305) 639-1100</a></p></div>
                        <div class="iw-subTitle"><p><strong>Email: </strong><a>info@tuagroup.net</a></p></div>
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
        },
        created(){
        }
    }
</script>

<style>

    #iw-container  .iw-title {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 22px;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 0;
        padding-right: 0;
        background-color: rgb(0, 71, 126);
        color: white;
        margin: 0;
        border-radius: 2px 2px 0 0; /* In accordance with the rounding of the default infowindow corners. */
    }

    .iw-title p{
        margin: 0;
    }

    #iw-container p{
        padding-left: 10px;
    }

    .iw-content p{
        margin-top: 8px !important;
        margin-bottom: 8px !important;
    }

    .iw-content{
        padding-top: 3%;
    }

    .gm-style-iw {
        width: 300px !important;
        top: 15px !important;
        left: 0 !important;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(178, 178, 178, 0.6);
        border-radius: 2px 2px 0 0;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(2) div:nth-child(1){
        width: 100%;
    }

    .gm-style div:nth-child(1) div:nth-child(4) div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(2){
        background-color: transparent !important;
        box-shadow: none !important;
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
    }

</style>