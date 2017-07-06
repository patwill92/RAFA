<template>
  <div class="is-fullwidth">
    <app-service-nav></app-service-nav>
    <app-menu-left></app-menu-left>
    <app-content-right></app-content-right>
  </div>
</template>

<script>
  import { mixin} from '../../mixin';
  import ServiceNav from './ServiceNav.vue';
  import MenuLeft from './MenuLeft.vue';
  import ContentRight from './ContentRight.vue'

  export default {
    mixins: [mixin],
    data(){
      return {
        pos: false
      }
    },
    components: {
      appServiceNav: ServiceNav,
      appMenuLeft: MenuLeft,
      appContentRight: ContentRight
    }
  }
</script>

<style scoped>

</style>