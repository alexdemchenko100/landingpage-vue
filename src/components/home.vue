<template>
    <div id="home-content" class="no-pad">
        <header class="hero">
            <h1 class="hero-header">
                <span class="hero-header--big">Look</span>
                <span class="hero-header--small">Beyond The</span>
                <span class="hero-header--big">Visible</span>
            </h1>
        </header>
        <div class="wrapper home-wrapper">
            <div class="message">
                <div class="sideways-heading">
                    <span class="sideways-heading--text">
                        Message
                    </span>
                </div>
                <div class="message-text">
                    <p>
                        Great founders solving hard problems, might be the single greatest challenge of our generation. Wherever and whoever they are – we endeavor to find them. Solutions to hard problems are more likely to come from diverse teams. Our mission is to seek out unrecognized talent, especially with respect to women and people of color. To many, this talent is invisible. But they exist. And we believe that the next world changing idea will, in fact, come from one of them.
                    </p>
                </div>
            </div>

            <div class="quote">
                <blockquote>
                    “Talent is equally distributed. Opportunity is not.”
                </blockquote>
                <cite class="uc">
                    <span class="dash">–</span> Darren Walker, CEO, Ford Foundation
                </cite>
            </div>
            <featured-founder />
             <div class="quote">
                <blockquote>
                    “Growing up in a creative household, I learned to be a creative thinker.”
                </blockquote>
                <cite class="uc">
                    <span class="dash">–</span> Camille Hearst, Co-founder and CEO, Kit
                </cite>
            </div>
            <values />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
      'founder-grid': () => import(/* webpackChunkName: "founder-common" */ './founder-grid.vue'),
      'featured-founder': () => import(/* webpackChunkName: "founder-common" */ './featured-founder.vue'),
      values: () => import(/* webpackChunkName: "home" */ './values.vue')
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';
</style>
