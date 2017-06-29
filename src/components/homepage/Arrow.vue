<template>
    <div class="columns arrow bounce">
        <a style="font-size: 2.0rem !important" class="column fa fa-angle-double-down" aria-hidden="true"></a>
    </div>
</template>

<style scoped>
    .arrow {
        text-align: center !important;
        color: white !important;
        opacity: 1;
        margin: 0 !important;
        width: 100% !important;
        position: absolute !important;
        bottom: 0 !important;
    }
    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
</style>