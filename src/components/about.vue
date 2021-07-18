<template>
  <div id="about" class="no-pad">
    <header class="hero hero__founder" style="background-image: url(/public/img/av-1.jpg);">
      <h1 class="hero-header">
        <span class="founder-header--name">About</span>
      </h1>
    </header>
    <div class="wrapper inner-wrapper">
      <div class="message clearfix message--only">
        <div class="sideways-heading">
            <span class="sideways-heading--text">
                Mission
            </span>
        </div>
        <div class="message-text">
            <p>
              Authentic Ventures (AV) is a seed and early stage Venture Capital Firm that believes that a strong, inclusive network of founders, operators and investors can accomplish great things. We have a particular interest in women and minority founders that are solving hard problems. We use our diverse network of talent to help our companies and each other succeed.
            </p>
            <p>
              Find out more about who we invest in on our <router-link :to="{ name: 'founders' }">Founders’ Page</router-link>.
            </p>
        </div>
      </div>

      <div class="about-bio grid-container clearfix">
        <div class="grid-x grid-margin-x">
          <div class="about-bio--image medium-5 cell">
            <img src="public/img/founders/lindsay.jpg" />
          </div>
          <div class="about-bio--text medium-7 cell">
            <h3>Lindsay lee – Managing Member</h3>
            <p>
                Lindsay has been an investor in technology for almost 16 years and has developed a strong network in Silicon Valley over the last 20+ years. Lindsay started his career at Merrill Lynch. Immediately following graduate school at Stanford, he co-founded a financial services software company.  He subsequently served as CIO for an investment management firm he helped to grow to almost $1B. He then started a small direct investment fund that invested primarily in public technology companies. Most recently, he managed a family office where he built and managed a very successful seed and early stage venture portfolio. Lindsay received his BA in Economics (Phi Beta Kappa) from the University of Florida where he was awarded Outstanding Male Graduate. He received his JD and MBA degrees from Stanford University.
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
                Lisa has over 27 years of venture capital fund accounting, investor relations and fund administration experience. Lisa successfully built her specialized venture capital services business to target the niche market of smaller and developing funds by offering her clients high-level financial support without the burden of full-time overhead. Some of Lisa’s current clients include: Amplify.LA, BioStar Ventures, Blade Ventures, Crosscut Ventures, Lagunita Biosciences LLC, Millennium Life Sciences Fund, MuckerLabs, Palomar Ventures, and Windward Ventures.
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
</style>
