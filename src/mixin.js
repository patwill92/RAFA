

export const mixin = {
    data(){
        return {
            scrolled: 0,
            windowWidth: 0,
            windowHeight: 0,
        }
    },
    methods: {
        handleScroll () {
            this.scrolled = window.scrollY;
        },
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth;
        },
        getWindowHeight(event) {
            this.windowHeight = document.documentElement.clientHeight;
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted(){
        this.$nextTick(() => {
            window.addEventListener('resize', this.getWindowWidth);
            window.addEventListener('resize', this.getWindowHeight);

            this.getWindowWidth();
            this.getWindowHeight();
        });
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
    },
    destroyed(){
        window.addEventListener('scroll', this.handleScroll);
    }
};