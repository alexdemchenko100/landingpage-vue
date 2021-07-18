<template>
    <div id="onboard-2">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-12.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">The Nitty-Gritty</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="2"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 3,
                        yearsExperience: yearsExperience,
                        work: work,
                        title: title
                    }, 2)">
                        <div class="form-row">
                            <label>How many years of experience do you have in your current field?
                                <select v-model="yearsExperience">
                                    <option disabled value="">Select Value</option>
                                    <option v-for="choice in yearsExperienceChoices" :value="choice.value">{{choice.label}}</option>
                                </select>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>Current Employer<input v-model="work" type="text" placeholder="Awesome Company"></label>
                        </div>
                        <div class="form-row">
                            <label>My Job Title<input v-model="title" type="text" placeholder="CTO"></label>
                        </div>
                        <div class="form-row">
                            <router-link to="/onboard/1" class="button back-button">Back</router-link>
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
  import { yearsExperienceChoices, infoBox } from '../../lib/constants';

  export default _.merge({
    name: 'onboard-2',

    data() {
      return {
        yearsExperience: _.get(this, '$store.state.global.user.questions.yearsExperience', ''),
        work: _.get(this, '$store.state.global.user.questions.work', ''),
        title: _.get(this, '$store.state.global.user.questions.title', ''),
      }
    },

    computed: {
      info: () => infoBox.nittyGritty,
      yearsExperienceChoices: () => yearsExperienceChoices,
    },
  }, onboard);
</script>
