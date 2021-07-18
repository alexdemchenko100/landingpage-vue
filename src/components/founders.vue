<template>
  <div id="about" class="no-pad">
    <header class="hero hero__founder hero__founders-page" style="background-image: url(/public/img/founders/jason-header.jpg);">
      <h1 class="hero-header">
        <span class="founder-header--name">Our Founders</span>
      </h1>
    </header>
    <div class="wrapper inner-wrapper">
        <div class="message clearfix">
            <div class="sideways-heading">
                <span class="sideways-heading--text">
                    Founders
                </span>
            </div>
            <div class="message-text">
                <p>
                    We believe that where you come from is just as important as where you’re headed. We love curious, ambitious founders that inspire us.  Get to know the work of some of founders of our portfolio companies, by visiting their websites.
                </p>
            </div>
        </div>
        <founder-grid />
        <h3 class="text-center">In their own words</h3>
        <p class="text-center">We have profiled two of our founders below.</p>
        <div class="featured-founder clearfix">
            <div class="featured-founder--images">
                <div class="featured-founder--images--large">
                    <router-link :to="{ name: 'jason-mayden' }">
                        <img src="public/img/founders/jason-header.jpg" />
                    </router-link>
                </div>
                <div class="featured-founder--images--small">
                    <router-link :to="{ name: 'jason-mayden' }"><img src="public/img/super.png" /></router-link>
                    <router-link :to="{ name: 'jason-mayden' }" class="view-link">View Profile</router-link>
                </div>
            </div>
            <div class="featured-founder--bio">
                <h3>Jason Mayden</h3>
                <p>
                    A designer of iconic products and technology worn by athletes and superheroes around the world, Jason is armed with a superpower knowledge of advanced materials and processes that can unleash the potential of every child in the world through play.
                </p>
            </div>
        </div>

        <div class="featured-founder clearfix">
            <div class="featured-founder--images">
                <div class="featured-founder--images--large">
                    <router-link :to="{ name: 'camille-hearst' }">
                        <img src="public/img/camille.jpg" />
                    </router-link>
                </div>
                <div class="featured-founder--images--small">
                    <router-link :to="{ name: 'camille-hearst' }"><img src="public/img/kit-logo.png" /></router-link>
                    <router-link :to="{ name: 'camille-hearst' }" class="view-link">View Profile</router-link>
                </div>
            </div>
            <div class="featured-founder--bio">
                <h3>Camille Hearst</h3>
                <p>
                    Camille believes that by leveraging all kinds of people, thoughts, ideas, opinions and backgrounds, we can help and learn from each other. She is CEO and co-founder of KIT, a company that helps creators share products they love with their followers.
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
