<template>
  <div class="grid-container onboard no-hero">
    <div class="grid-x grid-margin-x">
      <div class="cell" style="margin-bottom:20px;">
        <h4>Current Investments</h4>
      </div>
    </div>

    <div class="investments-grid" >
      <a href="https://www.aiinsurance.io/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/ai.png" alt="AI Insurance" >
      </a>
      <a href="https://inaccord.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/accord.svg" alt="Accord" >
      </a>
      <a class="investment-item" target="_blank" href="https://www.amiralearning.com">
        <img src="/public/img/logos/AmiraLogo.svg" alt="Amira Learning" >
      </a>
      <a href="https://www.datatron.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/datatron.png" alt="Datatron" >
      </a>
      <a class="investment-item" >
        <img src="/public/img/logos/HDP_Health.png" alt="HDP Health" >
        <h4>(INACTIVE)</h4>
      </a>
      <a href="https://patreon.com/" target="_blank" class="investment-item kit" >
        <img src="/public/img/logos/kit-patreon.png" alt="Kit Acq. Patreon" >
      </a>
      <a href="https://www.kulikulifoods.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/kulikuli.png" alt="kuli kuli" >
      </a>
      <a href="https://cloud.name-coach.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/namecoach.png" alt="namecoach" >
      </a>
      <a href="https://newdayimpact.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/newday.png" alt="newday" >
      </a>
      <a href="https://www.offsight.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/offsight.svg" alt="offsight" >
      </a>
      <a href="https://pilot.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/pilot.png" alt="pilot" >
      </a>
      <a href="https://trysparrow.com/" target="_blank" class="investment-item" >
        <img src="/public/img/logos/sparrow.svg" alt="Sparrow" >
      </a>
      <a class="investment-item" >
        <img src="/public/img/logos/SuperHeroic.png" alt="Superheroic" >
        <h4>(INACTIVE)</h4>
      </a>
      <a class="investment-item" >
        <img src="/public/img/logos/wizely.png" alt="wizely finance" >
        <h4>(INACTIVE)</h4>
      </a>
      <a class="investment-item">
        <h4>Stealth Company</h4>
      </a>
    </div>

    <div id="prior" class="prior-investments">
      <div class="grid-x grid-margin-x">
        <div class="cell" style="margin-bottom:20px;">
          <h4>Prior Investments</h4>
        </div>
      </div>

      <div class="investments-grid" >
        <a href="https://www.apartmentlist.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/apartment-list.png" alt="Apartment List" >
        </a>
        <a href="https://www.applovin.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/applovin.png" alt="AppLovin" >
          <h4>(NYSE: APP)</h4>
        </a>
        <a href="https://basket.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/basket.svg" alt="Basket" >
        </a>
        <a class="investment-item" >
          <img src="/public/img/logos/bracket-computing.png" alt="Bracket Computing" >
          <h4>(INACTIVE)</h4>
        </a>
        <a href="https://www.cambly.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/cambly.png" alt="Cambly" >
        </a>
        <a href="https://www.chatsports.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/chatsports.png" alt="Chat Sports" >
        </a>
        <a href="https://fixed.net/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/fixed-logo.svg" alt="Fixed" >
          <h4>(INACTIVE)</h4>
        </a>
        <a href="https://www.fugue.co/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/fugue.png" alt="Fugue" >
        </a>
        <a href="https://gametime.co/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/gametime.png" alt="Game Time" >
        </a>
        <a href="https://guardanthealth.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/guardant.png" alt="Guardant health" >
          <h4>(NYSE: GH)</h4>
        </a>
        <a href="https://imprint.us/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/imprint.svg" alt="Imprint" >
          <h4>(INACTIVE)</h4>
        </a>
        <a href="http://www.lumenetix.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/lumenetix.png" alt="Lumenetix" >
        </a>
        <a href="https://www.sisense.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/periscope-acq.png" alt="Periscope Data" >
        </a>
        <a href="https://www.therapydia.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/therapydia.png" alt="Therapydia" >
        </a>
        <a href="https://vacatia.com/" target="_blank" class="investment-item" >
          <img src="/public/img/logos/vacatia.png" alt="Vacatia" >
        </a>
      </div>
      <p>*Note: Prior Investments refers to investments by the team prior to Authentic Ventures</p>
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
    margin-bottom: 20px;

    @media (max-width: 680px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .investment-item {
    min-height: 290px;
    border: 1px solid hsla(0,0%,100%,.1);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    h4 {
      margin: 0;
      font-size: 12px;
      letter-spacing: 3px;
      position: absolute;
      bottom: 30px;
    }
    
    img {
      max-width: 50%;
      display: block;
    }

    @media (max-width: 680px) {
      min-height: 220px;

      h4 {
        bottom: 15px;
      }

      img {
        max-width: 70%;
      }

      &.kit {
        img {
          max-width: 90%;
        }
      }
    }
  }
  .prior-investments {
    padding-top: 5em;
  }
</style>
