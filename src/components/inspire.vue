<template>
    <div id="inspire-content" class="no-hero">
      <div class="wrapper home-wrapper">
        <div class="message">
          <div class="sideways-heading med">
            <span class="sideways-heading--text">
              What inspires us
            </span>
          </div>
          <div class="message-text med">
            <h3>What we look for</h3>
            <p>
              Authentic manages a concentrated portfolio, and makes just 4-6 new investments each year.
            </p>
            <p>
              We are hands-on and work closely with our companies. With the help of the Authentic Network, we work partner
              with exceptional founders to help them succeed.
            </p>
          </div>
        </div>
        <values />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'inspire',
    components: {
      values: () => import(/* webpackChunkName: "home" */ './values.vue')
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';
</style>
