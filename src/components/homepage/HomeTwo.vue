<template>
    <div>
        <div class = "hp2-content">
            <p :class = 'icon'></p>
            <div class = "heading">
                <p>{{title}}</p>
            </div>
            <div class = "info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'title']
    }
</script>

<style scoped>
    .hp2-content{
        width: 80%;
        margin: auto;
    }

    .i{
        font-size: 3.0rem;
        margin-top: 0;
        margin-bottom: 20px;
        color: #003691;
    }

    .heading{
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.6rem;
    }

    .info{
        font-weight: 300;
        letter-spacing: 1.5px;
    }
</style>