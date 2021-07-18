<template>
    <div id="onboard-6">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-9.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Your Passions</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="6"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 7,
                        passions: passions,
                        passionsOther: passionsOther,
                        supportOrgs: supportOrgs,
                        orgsOther: orgsOther
                    }, 6)">
                        <div class="form-row">
                            <label>I am most passionate about... (choose up to 5)</label>
                            <av-multiselect
                                    :am-options="causeChoices"
                                    :am-value="passions"
                                    :max="5"
                                    :limit="3"
                                    :other="passionsOther"
                                    @input="passions = $event"
                                    @updateTag="passionsOther = $event">
                            </av-multiselect>
                        </div>
                        <div class="form-row">
                            <label>Organizations I want to support (choose up to 3)</label>
                            <av-multiselect
                                    :am-options="orgChoices"
                                    :am-value="supportOrgs"
                                    :max="3"
                                    :limit="3"
                                    :other="orgsOther"
                                    @input="supportOrgs = $event"
                                    @updateTag="orgsOther = $event">
                            </av-multiselect>
                        </div>
                        <div class="form-row">
                            <router-link to="/onboard/5" class="button back-button">Back</router-link>
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
  import { causeChoices, infoBox, orgChoices } from '../../lib/constants';

  export default _.merge({
    name: 'onboard-6',

    data() {
      const questions = this.$store.state.global.user.questions;

      return {
        passions:  _.get(questions, 'passions', '') ? questions.passions.split(',') : [],
        passionsOther: _.get(questions, 'passionsOther', ''),
        supportOrgs:  _.get(questions, 'supportOrgs') ? questions.supportOrgs.split(',') : [],
        orgsOther: _.get(questions, 'orgsOther', ''),
      }
    },

    computed: {
      causeChoices() {
        return updateOptions(this.passionsOther, causeChoices);
      },
      orgChoices() {
        return updateOptions(this.orgsOther, orgChoices);
      },
      info: () => infoBox.questions,
    },

    components: {
      avMultiselect: () => import(/* webpackChunkName: "onboard-common" */ '../multiselect.vue'),
    },
  }, onboard);

  function updateOptions(label, choices) {
    if (label.length > 0) {
      const other = {label: label, value: 'other'};
      const otherNdx = _.findIndex(choices, (o) => (o.value === 'other'));
      otherNdx >= 0 ? choices[otherNdx] = other : choices.push(other);
    }
    return choices;
  }
</script>
