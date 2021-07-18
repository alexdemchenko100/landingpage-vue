<template>
    <div id="onboard-5">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-16.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Do Something Great</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="5"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 6,
                        communityHelp: communityHelp,
                        joinBoard: joinBoard,
                        volunteerOpps: volunteerOpps,
                        volunteerType: volunteerType,
                        volunteerSuccess: volunteerSuccess
                    }, 5)">
                        <div class="form-row">
                            <h5>Volunteer Opportunities</h5>

                            <label>I prefer volunteer opportunities that are:
                                <select v-model="volunteerOpps">
                                    <option disabled value="">Select Value</option>
                                    <option v-for="choice in volunteerTimeChoices" :value="choice.value">{{choice.label}}</option>
                                </select>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>I prefer to volunteer: </label>
                            <div style="display: inline;" v-for="choice in volunteerTypeChoices">
                                <input type="radio" v-model="volunteerType" :value="choice.value">
                                <label>{{choice.label}}</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <h5>Successful Connections</h5>
                            <label>
                                How can we be most helpful to you? Are there specific types of content, events or
                                people you would like to be connected with?
                                <textarea rows="6" cols="64" v-model="communityHelp"></textarea>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>
                                Are you interested in joining a board of directors or advisory board? Non-profit
                                or for profit? What would an ideal fit for you be?
                                <textarea rows="6" cols="64" v-model="joinBoard"></textarea>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>
                                Ideally, what does success look like from your participation in the Authentic
                                Venture Network? (In your own words)
                                <textarea rows="6" cols="64" v-model="volunteerSuccess"></textarea>
                            </label>
                        </div>
                        <div>
                            <router-link to="/onboard/4" class="button back-button">Back</router-link>
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
  import { infoBox, volunteerTimeChoices, volunteerTypeChoices } from '../../lib/constants';

  export default _.merge({
    name: 'onboard-5',

    data() {
      return {
        communityHelp: _.get(this, '$store.state.global.user.questions.communityHelp', ''),
        joinBoard: _.get(this, '$store.state.global.user.questions.joinBoard', ''),
        volunteerOpps: _.get(this, '$store.state.global.user.questions.volunteerOpps', ''),
        volunteerType: _.get(this, '$store.state.global.user.questions.volunteerType', ''),
        volunteerSuccess: _.get(this, '$store.state.global.user.questions.volunteerSuccess', ''),
      }
    },

    computed: {
      info: () => infoBox.aspirations,
      volunteerTimeChoices: () => volunteerTimeChoices,
      volunteerTypeChoices: () => volunteerTypeChoices,
    },
  }, onboard);
</script>
