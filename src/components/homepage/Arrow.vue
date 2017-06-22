<template>
    <div class="arrow bounce">
        <a class="fa fa-angle-double-down" aria-hidden="true"></a>
    </div>
</template>

<style scoped>
    .arrow {
        text-align: center;
        color: white;
        opacity: 1;
        font-size: 2.0rem;
        margin: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
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