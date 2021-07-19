<template>
  <div class="featured-founder">
    <h2>Featured Company</h2>
    <div class="featured-founder--images">
        <div class="featured-founder--images--large">
            <router-link :to="{ name: 'founders' }">
              <img src="public/img/founders/pilot.jpg" />
            </router-link>
        </div>
        <div class="featured-founder--images--small">
            <router-link :to="{ name: 'camille-hearst' }"><img src="public/img/pilot-logo.png" /></router-link>
            <router-link :to="{ name: 'founders' }" class="view-link">VIEW COMPANIES AND FOUNDERS</router-link>
        </div>
    </div>
    <div class="featured-founder--bio">
        <h3>PILOT</h3>
        <p>
          Pilot Software automates bookkeeping (with limited human involvement) for businesses. Pilot’s software powers the most error-prone parts of bookkeeping workflow, resulting in incredibly accurate books.
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