<template>
    <div id="onboard-7">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-10.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">In My Own Words</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="7"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 8,
                        hobbies: hobbies,
                        personalStory: personalStory
                    }, 7)">
                        <div class="form-row">
                            <label>I enjoy spending my time... (choose up to 3)</label>
                            <av-multiselect
                                    :am-options="hobbyChoices"
                                    :am-value="hobbies"
                                    :max="3"
                                    :limit="3"
                                    @input="hobbies = $event">
                            </av-multiselect>
                        </div>
                        <div class="form-row">
                            <h5>In your own words (another chance to Freestyle).</h5>
                            <p>
                                We invite you to create a 1-2 min video sharing your own personal story. What drives you?
                                What problem are you committed to solving? What issues keep you up at night?
                                Feel free to see sample videos below for ideas. This video will help us to connect you with the right
                                people, opportunities and events.
                            </p>
                            <input v-model="personalStory" type="text" placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        </div>
                        <div class="form-row">
                            <router-link to="/onboard/6" class="button back-button">Back</router-link>
                            <input type="submit" class="button next-button" value="Next">
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
  import { hobbyChoices, infoBox } from '../../lib/constants';


  export default _.merge({
    name: 'onboard-7',

    data() {
      const questions = this.$store.state.global.user.questions;

      return {
        hobbies: _.get(questions, 'hobbies') ? questions.hobbies.split(',') : [],
        personalStory: _.get(questions, 'personalStory', ''),
      }
    },

    computed: {
      hobbyChoices: () => hobbyChoices,
      info: () => infoBox.questions,
    },

    components: {
      avMultiselect: () => import(/* webpackChunkName: "onboard-common" */ '../multiselect.vue'),
    },
  }, onboard);
</script>
