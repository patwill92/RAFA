<template>
    <div class="left" id="style-2" :style="{height: windowHeight - 78 + 'px'}">
      <aside class="menu">
        <p class="menu-label">
          General contracting
        </p>
        <ul class="menu-list">
          <li><a>Photo Gallery</a></li>
          <li><a>Bathrooms</a></li>
          <li><a>Living Rooms</a></li>
          <li><a>Kitchens</a></li>
          <li><a>Bedrooms</a></li>
        </ul>
        <p class="menu-label">
          Structural steel
        </p>
        <ul class="menu-list">
          <li><a>Photo Gallery</a></li>
          <li><a>Columns</a></li>
          <li><a>Beams</a></li>
          <li><a>Girders</a></li>
          <li><a>Metal Decks</a></li>
          <li><a>Canopies</a></li>
          <li><a>Request Quote</a></li>
        </ul>
      </aside>
    </div>
</template>

<script>
import {mixin} from '../../mixin';
export default {
  mixins: [mixin]
}
</script>

<style scoped>

  .left {
    width: 15%;
    position: fixed;
    top: 71px;
    margin-left: 1%;
    overflow-y: auto;
    margin-top: 20px;
  }

  #style-2::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  #style-2::-webkit-scrollbar
  {
    width: 6px;
    background-color: #F5F5F5;
  }

  #style-2::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgba(0, 71, 126, 0.8);
  }

  .menu{
    height: inherit;
  }

  a, a:hover{
    color: rgb(0, 71, 126) !important;
  }

  .is-active a{
    color: rgb(0, 71, 126) !important;
  }

</style>