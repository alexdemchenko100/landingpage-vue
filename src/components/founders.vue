<template>
  <div id="about" class="no-pad">
    <header class="hero hero__founder hero__founders-page" style="background-image: url(/public/img/founders/pilot.jpg);">
      <h1 class="hero-header">
        <span class="founder-header--name">OUR PORTFOLIO COMPANY FOUNDERS</span>
      </h1>
    </header>
    <div class="wrapper inner-wrapper">
        <div class="message clearfix">
            <div class="sideways-heading long">
                <span class="sideways-heading--text">
                    Portfolio Company Founders
                </span>
            </div>
            <div class="message-text long">
                <h3>Distance Traveled</h3>
                <p>
                    We invest in early stage companies solving big problems with exceptional teams.
                </p>
                <p>
                    We believe that where you come from is just as important as where you’re headed and that nothing is more authentic than growth that comes from overcoming long odds.
                </p>
                <p>
                    Learn more about some of our portfolio companies and their founders, below.
                </p>
            </div>
        </div>
        <founder-grid />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'founders',
    components: {
      'founder-grid': () => import(/* webpackChunkName: "founder-common" */ './founder-grid.vue'),
      'featured-founder': () => import(/* webpackChunkName: "founder-common" */ './featured-founder.vue')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';
</style>
