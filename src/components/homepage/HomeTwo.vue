<template>
        <div class = "hp2-content" :style="{width: width > 900 ? getWidth(350) + 'px' : 350 + 'px'}">
            <div class = "heading">
                <p>{{title}}</p>
                <p :class="icon"></p>
            </div>
            <div class = "info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['icon', 'title', 'height', 'width'],
        data(){
            return{
                myHeight: this.height,
                myWidth: this.width,
            }
        },
        methods: {
            getWidth(num){
                var ratio = num/1483;
                var mWidth = this.width * ratio;
                return Math.round(mWidth);
            }
        }
    }
</script>

<style scoped>
    .hp2-content{
        position: relative;
    }

    .i{
        font-size: 3.0rem;
        color: #003691;
        margin-right: 10%;
    }

    .heading p{
        margin-top: 0;
        margin-bottom: 0;
    }
    .heading{
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info{
        font-weight: 300;
        letter-spacing: 1.5px;
        font-size: 1.0rem;
    }

</style>