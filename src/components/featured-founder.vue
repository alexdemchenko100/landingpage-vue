<template>
  <div class="featured-founder">
    <h2>Featured Founder</h2>
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
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'featured-founder',
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';
</style>