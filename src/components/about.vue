<template>
  <div id="about" class="no-pad">
    <header class="hero hero__team" style="background-image: none;">
      <h1 class="hero-header">
        <img data-v-6a232478="" src="/public/img/logos/av.png">
      </h1>
    </header>
    <div class="wrapper inner-wrapper">
      <div class="about-bio grid-container clearfix">
        <div class="grid-x grid-margin-x">
          <div class="about-bio--image medium-5 cell">
            <img src="public/img/founders/lindsay-sq.jpg" />
          </div>
          <div class="about-bio--text medium-7 cell">
            <h3>LINDSAY LEE – MANAGING MEMBER</h3>
            <p>
                Over his nearly 20 years as an investor in Silicon Valley, Lindsay has served as CIO for an investment management firm he helped grow to almost $1B and managed a family office where he built and managed an extremely successful seed and early-stage venture portfolio. He also co-founded a financial services software company and ran a direct investment fund.
            </p>
            <p>
              Lindsay holds an MBA from Stanford’s Graduate School of Business and a J.D. from Stanford Law School. He also graduated Phi Beta Kapa in Economics from the University of Florida.
            </p>
            <p><router-link :to="{ name: 'investments'}">Prior Investments</router-link></p>
          </div>
        </div>
      </div>

      <div class="about-bio grid-container clearfix">
        <div class="grid-x grid-margin-x">
          <div class="about-bio--image medium-5 cell">
            <img src="public/img/founders/lisa.jpg" />
          </div>
          <div class="about-bio--text medium-7 cell">
            <h3>Lisa Riedmiller – Chief Financial Officer</h3>
            <p>
                Lisa has over 27 years of venture capital fund accounting, investor relations and fund administration experience. Lisa specializes in developing and emerging venture capital funds.
            </p>
            <p>
              Prior clients have included: Amplify.LA, BioStar Ventures, Blade Ventures, Crosscut Ventures, Lagunita Biosciences LLC, Millennium Life Sciences Fund, MuckerLabs, Palomar Ventures, and Windward Ventures.
            </p>
          </div>
        </div>
      </div>

      <div class="about-bio grid-container clearfix">
        <div class="grid-x grid-margin-x">
          <div class="about-bio--image medium-5 cell">
            <img src="public/img/founders/michael.jpg" />
          </div>
          <div class="about-bio--text medium-7 cell">
            <h3>MICHAEL NICHOLS, DIRECTOR OF OPERATIONS AND CHIEF COMPLIANCE OFFICER</h3>
            <p>
                Michael has served startup and other clients as an attorney and operations lead for 20 years. He has worked at leading international law firms, including Morrison and Foerster, and has served as General Counsel and in-house counsel at startup companies funded by VC firms including Khosla Ventures and the Mayfield Fund.
            </p>
            <p>
                Michael holds a J.D. from the Yale Law School and A.B. (Honors) and M.A. degrees from Stanford University.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'about',
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';

  .hero-header img {
    max-width: 440px;
  }
</style>
