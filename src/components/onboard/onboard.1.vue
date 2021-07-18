<template>
    <div id="onboard-1">
        <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-7.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Education – What’s Your Story?</span>
          </h1>
        </header>
        <div class="grid-container onboard onboard-offset">
            <div class="grid-x grid-margin-x">
                <progress-bar class="cell" step="1"/>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="medium-7 cell">
                    <form class="onboard-form" v-on:submit.prevent="update(
                    {
                        currentStep: 2,
                        highSchoolLocation: highSchoolLocation,
                        highSchoolName: highSchoolName,
                        undergradSchoolName: undergradSchoolName,
                        undergradSchoolMajor: undergradSchoolMajor,
                        undergradSchoolYear: undergradSchoolYear,
                        gradSchoolName: gradSchoolName,
                        gradSchoolYear: gradSchoolYear
                    }, 1)">
                        <div class="form-row">
                            <label>I attended high school in<input v-model.trim="highSchoolLocation" type="text" placeholder="e.g. Orlando, FL"></label>
                        </div>
                        <div class="form-row">
                            <label>I went to<input v-model.trim="highSchoolName" type="text" placeholder="e.g. Orlando High School"></label>
                        </div>
                        <div class="form-row">
                            <label>I attended undergrad at<input v-model.trim="undergradSchoolName" type="text" placeholder="e.g. Stanford"></label>
                        </div>
                        <div class="form-row">
                            <label>I majored in<input v-model.trim="undergradSchoolMajor" type="text" placeholder="e.g. Computer Science"></label>
                        </div>
                        <div class="form-row">
                            <label>I graduated
                                <select v-model="undergradSchoolYear">
                                    <option disabled value="">Select Year</option>
                                    <option v-for="year in years" :value="year">{{year}}</option>
                                </select>
                            </label>
                        </div>
                        <div class="form-row">
                            <label>I attended graduate school at<input v-model="gradSchoolName" type="text" placeholder="e.g. MIT"></label>
                        </div>
                        <div class="form-row">
                            <label>I graduated from graduate school in
                                <select v-model="gradSchoolYear">
                                    <option disabled value="">Select Year</option>
                                    <option v-for="year in years" :value="year">{{year}}</option>
                                </select>
                            </label>
                        </div>
                        <div class="form-row">
                            <input type="submit" class="button next-button" value="Next">
                        </div>
                    </form>
                </div>

                <div class="medium-5 cell">
                    <div class="grid-x fluid">
                        <p class="wide-margin-right onboard-text" v-html="info"></p>
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
    name: 'onboard-1',

    data() {
      return {
        highSchoolName: _.get(this, '$store.state.global.user.questions.highSchoolName', ''),
        highSchoolLocation: _.get(this, '$store.state.global.user.questions.highSchoolLocation', ''),
        undergradSchoolName: _.get(this, '$store.state.global.user.questions.undergradSchoolName', ''),
        undergradSchoolMajor: _.get(this, '$store.state.global.user.questions.undergradSchoolMajor', ''),
        undergradSchoolYear: _.get(this, '$store.state.global.user.questions.undergradSchoolYear', ''),
        gradSchoolName: _.get(this, '$store.state.global.user.questions.gradSchoolName', ''),
        gradSchoolYear: _.get(this, '$store.state.global.user.questions.gradSchoolYear', ''),
      }
    },

    computed: {
      years: () => _.range(1960, 2017),
      info: () => infoBox.general,
    }
  }, onboard);
</script>

<style lang="scss" scoped>
    @import '../../css/settings';
</style>
