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
                        We Believe
                    </span>
                </div>
                <div class="message-text">
                    <p>
                        Talented founders solving hard problems. Wherever and whoever they are – we endeavor to find them.
                    </p>
                    <p>
                        Solutions to hard problems are more likely to come from diverse teams. Although we partner with exceptional founders regardless of race or gender, we actively seek out unrecognized talent, especially from teams with diverse backgrounds.
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
            <featured-company />
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
      'featured-company': () => import(/* webpackChunkName: "founder-common" */ './featured-company.vue'),
      values: () => import(/* webpackChunkName: "home" */ './values.vue')
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';
</style>
