<template>
  <div class="grid-container onboard">

    <div class="grid-x grid-margin-x">
      <div class="cell" style="margin-bottom:20px;">
        <h4>Prior Investments</h4>
      </div>
    </div>

    <div class="investments-grid" >
      <a href="https://www.applovin.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/applovin.png" alt="AppLovin" >
      </a>
      <a href="https://guardanthealth.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/guardant.png" alt="Guardant health" >
      </a>
      <a
        href="https://www.sisense.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/periscope-acq.png" alt="Periscope Data" >
      </a>
      <a href="https://gametime.co/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/gametime.png" alt="Game Time" >
      </a>
      <a href="https://www.apartmentlist.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/apartmentlist.png" alt="Apartment List" >
      </a>
      <a href="https://www.cambly.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/cambly.png" alt="Cambly" >
      </a>
      <a href="https://www.fugue.co/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/fugue.png" alt="Fugue" >
      </a>
      <a href="https://www.chatsports.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/chatsports.png" alt="Chat Sports" >
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'investments',
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';

  .investments-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .investment-item {
    min-height: 290px;
    border: 1px solid hsla(0,0%,100%,.1);
    justify-content: center;
    align-items: center;
    display: flex;
    
    img {
      max-width: 50%;
      display: block;
    }
  }
</style>
