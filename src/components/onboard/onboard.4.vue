<template>
    <div id="onboard-4">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-4.jpg);">
            <h1 class="hero-header">
                <span class="founder-header--name">Better Together</span>
            </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="4"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 5,
                        beMentored: beMentored,
                        interests: interests,
                        interestsOther: interestsOther,
                        beMentor: beMentor,
                        skills: skills,
                        skillsOther: skillsOther,
                        superpower: superpower
                    }, 4)">
                        <div class="form-row">
                            <label>I'm interested in being mentored!</label>
                            <input type="radio" v-model="beMentored" :value="true" id="menteeY"><label for="menteeY">Yes</label>
                            <input type="radio" v-model="beMentored" :value="false" id="menteeN"><label for="menteeN">No</label>
                        </div>
                        <div class="form-row">
                            <label>My areas of interest include (choose up to 3):</label>
                            <av-multiselect
                                    :am-options="interestsChoices"
                                    :am-value="interests"
                                    :max="3"
                                    :limit="3"
                                    :other="interestsOther"
                                    @input="interests = $event"
                                    @updateTag="interestsOther = $event">
                            </av-multiselect>
                        </div>
                        <div class="form-row">
                            <label>
                                Sign me up to mentor someone else! (Don't worry, we will contact you
                                directly before assigning anyone to you
                            </label>
                            <input type="radio" v-model="beMentor" :value="true" id="mentorY"><label for="mentorY">Yes</label>
                            <input type="radio" v-model="beMentor" :value="false" id="mentorN"><label for="mentorN">No</label>
                        </div>
                        <div class="form-row">
                            <label>My expertise includes (choose up to 3):</label>
                            <av-multiselect
                                    :am-options="skillsChoices"
                                    :am-value="skills"
                                    :max="3"
                                    :limit="3"
                                    :other="skillsOther"
                                    @input="skills = $event"
                                    @updateTag="skillsOther = $event">
                            </av-multiselect>
                        </div>
                        <div class="form-row">
                          <label>
                            Share with us more about your "superpower" -- the thing(s) you do like no other.
                            What is a superpower you would like to share with the community?
                            <textarea rows="6" cols="64" v-model="superpower"></textarea>
                          </label>
                        </div>
                        <div class="form-row">
                            <router-link to="/onboard/3" class="button back-button">Back</router-link>
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
  import { infoBox, skillChoices } from '../../lib/constants';

  // Separated these to ensure custom tags would remain separate
  let intChoices = _.slice(skillChoices);
  let expChoices = _.slice(skillChoices);

  export default _.merge({
    name: 'onboard-4',

    data() {
      const questions = this.$store.state.global.user.questions;

      return {
        beMentored: _.get(questions, 'beMentored', false),
        interests: _.get(questions, 'interests') ? questions.interests.split(',') : [],
        interestsOther: _.get(questions, 'interestsOther', ''),
        beMentor: _.get(questions, 'beMentor', false),
        skills: _.get(questions, 'skills') ? questions.skills.split(',') : [],
        skillsOther: _.get(questions, 'skillsOther', ''),
        superpower: _.get(questions, 'superpower', ''),
      }
    },

    computed: {
      info: () => infoBox.aspirations,
      interestsChoices() {
        return updateOptions(this.interestsOther, intChoices);
      },
      skillsChoices() {
        return updateOptions(this.skillsOther, expChoices);
      },
    },

    components: {
      avMultiselect: () => import(/* webpackChunkName: "onboard-common" */ '../multiselect.vue')
    },
  }, onboard);
  // TODO (kenugo) - Needs a refactor (identical function in onboard.6)
  function updateOptions(label, choices) {
    if (label.length > 0) {
      const other = {label: label, value: 'other'};
      const otherNdx = _.findIndex(choices, (o) => (o.value === 'other'));
      otherNdx >= 0 ? choices[otherNdx] = other : choices.push(other);
    }
    return choices;
  }
</script>
