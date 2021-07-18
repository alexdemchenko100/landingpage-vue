<template>
    <div id="onboard-8">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-17.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Before we Forget...</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="8"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form"v-on:submit.prevent="update(
                    {
                        introductions: introductions
                    }, 8)">
                        <div class="form-row">
                            <p>If you have an idea or existing business that fits our <a href="/#values">investment criteria</a>
                                We would love to hear about it - and explore ways we can help. Please feel free to send an executive summary or fundraising deck to
                                <a><i>info@authentic-ventures.com</i></a>
                            </p>
                        </div>
                        <div class="form-row">
                            <p>If you know a super talented founder or would be founder (irrespective of identity) that we should know, please introduce us.</p>
                            <textarea rows="6" cols="64" v-model="introductions"></textarea>
                        </div>
                        <div class="form-row">
                            <router-link to="/onboard/7" class="button back-button">Back</router-link>
                            <input type="submit" class="button next-button" value="Complete">
                        </div>
                    </form>
                </div>

                <div class="medium-5 cell">
                    <div class="grid-x fluid">
                        <div class="onboard-text wide-margin-right" v-html="info"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash';
  import onboard from './onboard.js';
  import { infoBox } from '../../lib/constants';


  export default _.merge({
    name: 'onboard-8',

    computed: {
        info: () => infoBox.nextInvestment,
    },

    data() {
      return {
        introductions: this.$store.state.global.user.questions.introductions || '',
      }
    },
  }, onboard);
</script>
