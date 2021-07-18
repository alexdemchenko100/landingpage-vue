<template>
    <div id="onboard-3">

        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-6.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Now It’s Your Turn To Freestyle</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="3"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 4,
                        role: role,
                        accomplishments: accomplishments,
                        superpower: superpower,
                        idealRole: idealRole,
                        professionalGoals: professionalGoals
                    }, 3)">
                        <div class="form-row">
                            <label>
                                What duties are you responsible for in your current role?
                                How have your responsibilities evolved?
                                <textarea rows="6" cols="64" v-model="role"></textarea>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>
                                What professional accomplishments are you most proud of?
                                <textarea rows="6" cols="64" v-model="accomplishments"></textarea>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>If you could change your professional role or responsibilities, what would you change?</label>
                            <textarea rows="6" cols="64" v-model="idealRole"></textarea>
                        </div>
                        <div class="form-row">
                            <label>Are there specific professional goals that we can help you achieve? If so, what are they?</label>
                            <textarea rows="6" cols="64" v-model="professionalGoals"></textarea>
                        </div>
                        <router-link to="/onboard/2" class="button back-button">Back</router-link>
                        <input type="submit" class="button next-button" value="Next">
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
    name: 'onboard-3',

    data() {
      return {
        role: _.get(this, '$store.state.global.user.questions.role', ''),
        accomplishments: _.get(this, '$store.state.global.user.questions.accomplishments', ''),
        idealRole: _.get(this, '$store.state.global.user.questions.idealRole', ''),
        professionalGoals: _.get(this, '$store.state.global.user.questions.professionalGoals', ''),
        superpower: _.get(this, '$store.state.global.user.questions.superpower', ''),
      }
    },

    computed: {
      info: () => infoBox.nittyGritty,
    },
  }, onboard);
</script>
