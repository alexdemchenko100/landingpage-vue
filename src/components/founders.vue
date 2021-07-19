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
        <h3 class="text-center">In their own words</h3>
        <div class="featured-founder clearfix">
            <div class="featured-founder--images">
                <div class="featured-founder--images--large">
                    <router-link :to="{ name: 'camille-hearst' }">
                    <img src="public/img/camille.jpg" />
                    </router-link>
                </div>
                <div class="featured-founder--images--small">
                    <a href="https://patreon.com"><img src="public/img/kit-patreon.png" /></a>
                    <router-link :to="{ name: 'camille-hearst' }" class="view-link">View Profile</router-link>
                </div>
            </div>
            <div class="featured-founder--bio">
                <h3>CAMILLE HEARST</h3>
                <p>
                    Camille believes that by leveraging all kinds of people, thoughts, ideas, opinions and backgrounds, we can help and learn from each other.
                </p>
                <p>
                    Camille co-founded KIT, a company that helps creators share products they love with their followers.
                </p>
                <p>
                    Kit was acquired in 2018 by Patreon, where Camille now serves as head of product. Patreon is the leading platform for creators to connect directly with their fans and followers.
                </p>
            </div>
        </div>
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
