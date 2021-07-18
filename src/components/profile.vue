<template>
    <div id="profile">
        <header class="hero hero__founder" style="background-image: url(/public/img/av-profile.jpg);">
            <div class="grid-container profile-header--info">
                <a v-if="user.canAccessKeystone" href="/keystone/signin" class="button">Admin Dashboard</a>
                <h5 v-if="!onboardComplete">
                    You haven't completed onboarding, <router-link :to="onboardCurrentStep">go here to finish</router-link>.
                </h5>
                <div class="profile-image small-11 medium-8 medium-offset-2 cell">
                    <img src="/public/img/avatar-placeholder.png"/>
                </div>
                <div class="profile-image-upload small-1 medium-2 cell">
                    <p v-if="featureFlags.canUploadProfilePhoto">Upload</p>
                </div>
                <div class="personal">
                    <div v-if="!isEditingPersonal">
                        <h1 class="hero-header">
                            <span class="founder-header--name">{{fullName}}</span>
                        </h1>
                        <h5>email: {{user.email}}</h5>
                        <h5>phone: {{user.phone}}</h5>
                    </div>
                    <div id="personal-form" v-if="isEditingPersonal">
                        <form v-on:submit.prevent="update(
                            {
                                name: {
                                    first: edit.fullName.split(' ')[0] || user.name.first,
                                    last: edit.fullName.split(' ').slice(1).join(' ') || user.name.last,
                                },
                                email: edit.email || user.email,
                                phone: edit.phone || user.phone,
                            })">
                            <label>Name<input v-model="edit.fullName"/></label>
                            <label>Email<input v-model="edit.email"/></label>
                            <label>Phone<input v-model="edit.phone"/></label>
                            <input type="submit" class="button" style="margin-right: 10px;" value="Save">
                            <a class="button" v-if="isEditingPersonal" v-on:click="isEditingPersonal = false">Cancel</a>
                        </form>
                    </div>
                    <a class="button" v-if="!isEditingPersonal" v-on:click="isEditingPersonal = true">Edit</a>
                </div>
                <div class="medium-4 cell">
                    <div class="personal-story">
                        <iframe
                            v-if="personalStoryLink"
                            :src="personalStoryLink"
                            height="180"
                            style="width:100%"
                        />
                    </div>
                </div>
            </div>
        </header>
        <!-- TODO: make a profile-data-inline component for use by each <class="inline grid-x" element> -->
        <div class="grid-container onboard onboard-offset">
            <div id="profile-content" class="grid-x grid-margin-x">
                <div class="medium-8 cell">
                    <div class="grid-x">
                        <div class="small-12 cell">
                            <div class="profile-section">
                                <div class="header grid-x">
                                    <div class="small-10 cell">
                                        <h4>Background Info</h4>
                                    </div>
                                    <div class="small-2 cell">
                                        <router-link to="/onboard/1" v-if="featureFlags.canEditBackgroundInfo">Edit</router-link>
                                    </div>
                                </div>
                                <div class="content grid-x">
                                    <div class="cell">

                                        <div v-if="backgroundInfoData.highSchoolName.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{backgroundInfoData.highSchoolName.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{backgroundInfoData.highSchoolName.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="backgroundInfoData.highSchoolLocation.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{backgroundInfoData.highSchoolLocation.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{backgroundInfoData.highSchoolLocation.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="backgroundInfoData.undergrad.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{backgroundInfoData.undergrad.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{backgroundInfoData.undergrad.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="backgroundInfoData.grad.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{backgroundInfoData.grad.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{backgroundInfoData.grad.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="small-12 cell">
                            <div class="profile-section">
                                <div class="header grid-x">
                                    <div class="small-10 cell">
                                        <h4>Professional Info</h4>
                                    </div>
                                    <div class="small-2 cell">
                                        <router-link to="/onboard/2" v-if="featureFlags.canEditProfessionalInfo">Edit</router-link>
                                    </div>
                                </div>

                                <div class="content grid-x">
                                    <div class="cell">
                                        <div v-if="professionalInfoData.yearsInField.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.yearsInField.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.yearsInField.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.company.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.company.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.company.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.title.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.title.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.title.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.role.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.role.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.role.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.accomplishments.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.accomplishments.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.accomplishments.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.idealRole.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.idealRole.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.idealRole.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="professionalInfoData.professionalGoals.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{professionalInfoData.professionalGoals.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{professionalInfoData.professionalGoals.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="small-12 cell">
                            <div class="profile-section">
                                <div class="header grid-x">
                                    <div class="small-10 cell">
                                        <h4>Community Connections</h4>
                                    </div>
                                    <div class="small-2 cell">
                                        <router-link to="/onboard/5" v-if="featureFlags.canEditCommunityConnections">Edit</router-link>
                                    </div>
                                </div>

                                <div class="content grid-x">
                                    <div class="cell">
                                        <div v-if="communityConnectionsData.communityHelp.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.communityHelp.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.communityHelp.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.joinBoard.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.joinBoard.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.joinBoard.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.volunteerOpps.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.volunteerOpps.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.volunteerOpps.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.volunteerPref.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.volunteerPref.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.volunteerPref.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.successfulConnections.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.successfulConnections.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.successfulConnections.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.passions.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.passions.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.passions.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="communityConnectionsData.orgs.content" class="inline grid-x">
                                            <div class="medium-3 cell">
                                                <p class="label">{{communityConnectionsData.orgs.label}}</p>
                                            </div>
                                            <div class="medium-9 cell">
                                                <p class="answer">{{communityConnectionsData.orgs.content}}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="medium-4 cell">
                    <div class="grid-x">
                        <div class="small-12 cell">
                            <div class="profile-section">
                                <div class="header grid-x">
                                    <div class="small-10 cell">
                                        <h4>Skills + Interests</h4>
                                    </div>
                                    <div class="small-2 cell">
                                        <router-link to="/onboard/4" v-if="featureFlags.canEditSkillsInterests">Edit</router-link>
                                    </div>
                                </div>

                                <div class="content grid-x">
                                    <div class="cell">

                                        <div v-if="skillsInterestsData.interests.content" class="inline grid-x">
                                            <div class="medium-12 cell">
                                                <p class="label">{{skillsInterestsData.interests.label}}</p>
                                            </div>
                                            <div class="medium-12 cell">
                                                <p class="answer">{{skillsInterestsData.interests.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="skillsInterestsData.beMentor.content" class="inline grid-x">
                                            <div class="medium-8 cell">
                                                <p class="label">{{skillsInterestsData.beMentor.label}}</p>
                                            </div>
                                            <div class="medium-4 cell">
                                                <p class="answer">{{skillsInterestsData.beMentor.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="skillsInterestsData.beMentored.content" class="inline grid-x">
                                            <div class="medium-8 cell">
                                                <p class="label">{{skillsInterestsData.beMentored.label}}</p>
                                            </div>
                                            <div class="medium-4 cell">
                                                <p class="answer">{{skillsInterestsData.beMentored.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="skillsInterestsData.skills.content" class="inline grid-x">
                                            <div class="medium-12 cell">
                                                <p class="label">{{skillsInterestsData.skills.label}}</p>
                                            </div>
                                            <div class="medium-12 cell">
                                                <p class="answer">{{skillsInterestsData.skills.content}}</p>
                                            </div>
                                        </div>

                                        <div v-if="skillsInterestsData.superpower.content" class="inline grid-x">
                                            <div class="medium-12 cell">
                                                <p class="label">{{skillsInterestsData.superpower.label}}</p>
                                            </div>
                                            <div class="medium-12 cell">
                                                <p class="answer">{{skillsInterestsData.superpower.content}}</p>
                                            </div>
                                        </div>


                                        <div v-if="skillsInterestsData.hobbies.content" class="inline grid-x">
                                            <div class="medium-12 cell">
                                                <p class="label">{{skillsInterestsData.hobbies.label}}</p>
                                            </div>
                                            <div class="medium-12 cell">
                                                <p class="answer">{{skillsInterestsData.hobbies.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="small-12 cell">
                            <div class="profile-section">
                                <div class="header grid-x">
                                    <div class="small-10 cell">
                                        <h4>Our Next Investment</h4>
                                    </div>
                                    <div class="small-2 cell">
                                        <router-link to="/onboard/8" v-if="featureFlags.canEditOurNextInvestment">Edit</router-link>
                                    </div>
                                </div>

                                <div class="content grid-x">
                                    <div class="cell">
                                        <div v-if="nextInvestmentData.introductions.content" class="inline grid-x">
                                            <div class="medium-12 cell">
                                                <p class="label">{{nextInvestmentData.introductions.label}}</p>
                                            </div>
                                            <div class="medium-12 cell">
                                                <p class="answer">{{nextInvestmentData.introductions.content}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import _ from 'lodash';

  import * as constants from '../lib/constants';
  import { TOTAL_STEPS } from './onboard/onboard';

  const _formatSelectValues = (vals, optionsCollection, otherVal) => {
    if (!vals) {
        return otherVal ? otherVal : '';
    }
    return vals.split(',').map((v) => {
        if (v === 'other' && otherVal) {
            return otherVal;
        }
        const option = _.find(optionsCollection, (o) => o.value === v);
        return option ? option.label : null;
    }).filter((e) => !!e).join(', ');
  };

  const _formatVideoLink = (link) => {
    return link.replace('watch?v=', 'embed/'); // replace for youtube link
  }

  export default {
    name: 'profile',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        id: store.state.global.user._id,
        endpoint: 'users',
        namespace: 'user',
        global: true
      });
    },

    data() {
        return {
            isEditingPersonal: false,
            edit: {
                fullName: `${_.get(this, '$store.state.global.user.name.first', '')} ${_.get(this, '$store.state.global.user.name.last', '')}`.trim(),
                email: _.get(this, '$store.state.global.user.email', ''),
                phone: _.get(this, '$store.state.global.user.phone', ''),
            },
        };
    },

    // TODO: think about use of computed properties, right now there's too many
    computed: {
      user () {
        return this.$store.state.global.user;
      },

      onboardComplete() {
        return _.get(this.$store, 'state.global.user.questions.currentStep', 0) >= TOTAL_STEPS;
      },

      onboardCurrentStep() {
        return `/onboard/${_.get(this.$store, 'state.global.user.questions.currentStep', 1)}`;
      },

      fullName() {
        const name = this.$store.state.global.user.name;

        if (name) {
          return name.first + ' ' + name.last;
        }

        return '';
      },

      personalStoryLink() {
        return _formatVideoLink(_.get(this.$store, 'state.global.user.questions.personalStory', ''));
      },

      featureFlags() {
        return {
          canUploadProfilePhoto: false,
          canEditBackgroundInfo: true,
          canEditCommunityConnections: true,
          canEditProfessionalInfo: true,
          canEditSkillsInterests: true,
          canEditOurNextInvestment: true,
        };
      },

      backgroundInfoData() {
        const _getUndergradData = () => {
          const name = _.get(this.$store, 'state.global.user.questions.undergradSchoolName', '');
          const major = _.get(this.$store, 'state.global.user.questions.undergradSchoolMajor', '');
          const year = _.get(this.$store, 'state.global.user.questions.undergradSchoolYear', '');
          return `${name ? name + ', ' : ''}${major ? major + ', ' : ''}${year ? year : ''}`.trim();
        };

        const _getGradData = () => {
          const name = _.get(this.$store, 'state.global.user.questions.gradSchoolName', '');
          const year = _.get(this.$store, 'state.global.user.questions.gradSchoolYear', '');
          return `${name ? name + ', ' : ''}${year ? year : ''}`.trim();
        };

        return {
          highSchoolName: {
            label: 'High School:',
            content: _.get(this.$store, 'state.global.user.questions.highSchoolName', ''),
          },
          highSchoolLocation: {
            label: 'High School Location:',
            content: _.get(this.$store, 'state.global.user.questions.highSchoolLocation', ''),
          },
          undergrad: {
            label: 'Undergrad:',
            content: _getUndergradData(),
          },
          grad: {
            label: 'Graduate:',
            content: _getGradData(),
          },
        };
      },

      professionalInfoData() {
        return {
          yearsInField: {
            label: 'Years in field:',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.yearsExperience', ''),
                constants.yearsExperienceChoices,
            ),
          },
          company: {
            label: 'Current Company:',
            content: _.get(this.$store, 'state.global.user.questions.work', ''),
          },
          title: {
            label: 'Job Title:',
            content: _.get(this.$store, 'state.global.user.questions.title', ''),
          },
          role: {
            label: 'Current Responsibilities:',
            content: _.get(this.$store, 'state.global.user.questions.role', ''),
          },
          accomplishments: {
            label: 'Professional Accomplishments:',
            content: _.get(this.$store, 'state.global.user.questions.accomplishments', ''),
          },
          idealRole: {
            label: 'Ideal Role',
            content: _.get(this.$store, 'state.global.user.questions.idealRole', ''),
          },
          professionalGoals: {
            label: 'Career Goals',
            content: _.get(this.$store, 'state.global.user.questions.professionalGoals', ''),
          },
        };
      },

      communityConnectionsData() {
        return {
          communityHelp: {
            label: 'How can the Community Help You:',
            content: _.get(this.$store, 'state.global.user.questions.communityHelp', ''),
          },
          joinBoard: {
            label: 'Interest in Joining a Board:',
            content: _.get(this.$store, 'state.global.user.questions.joinBoard', ''),
          },
          volunteerOpps: {
            label: 'Length of Volunteer Opportunities:',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.volunteerOpps', ''),
                constants.volunteerTimeChoices,
            ),
          },
          volunteerPref: {
            label: 'Volunteer Preference:',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.volunteerType', ''),
                constants.volunteerTypeChoices,
            ),
          },
          successfulConnections: {
            label: 'Successful Connections:',
            content: _.get(this.$store, 'state.global.user.questions.volunteerSuccess', ''),
          },
          passions: {
            label: 'Passions:',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.passions', ''),
                constants.causeChoices,
                _.get(this.$store, 'state.global.user.questions.passionsOther', ''),
            ),
          },
          orgs: {
            label: 'Orgs to Support:',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.supportOrgs', ''),
                constants.orgChoices,
                _.get(this.$store, 'state.global.user.questions.orgsOther', ''),
            ),
          },
        };
      },

      skillsInterestsData() {
        return {
          interests: {
            label: 'Interests',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.interests', ''),
                constants.skillChoices,
                _.get(this.$store, 'state.global.user.questions.interestsOther', ''),
            ),
          },
          beMentored: {
            label: 'Be Mentored:',
            content: !!_.get(this.$store, 'state.global.user.questions.beMentored', false) ? 'Yes' : 'No',
          },
          beMentor: {
            label: 'Be a Mentor:',
            content: !!_.get(this.$store, 'state.global.user.questions.beMentor', false) ? 'Yes' : 'No',
          },
          skills: {
            label: 'Expertise',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.skills', ''),
                constants.skillChoices,
                _.get(this.$store, 'state.global.user.questions.skillsOther', ''),
            ),
          },
          superpower: {
            label: 'Superpower',
            content: _.get(this.$store, 'state.global.user.questions.superpower', ''),
          },
          hobbies: {
            label: 'Hobbies',
            content: _formatSelectValues(
                _.get(this.$store, 'state.global.user.questions.hobbies', ''),
                constants.hobbyChoices,
            ),
          },
        };
      },

      nextInvestmentData() {
        return {
          introductions: {
            label: 'Introductions:',
            content: _.get(this.$store, 'state.global.user.questions.introductions', ''),
          },
        };
      },
    },

    methods: {
        update(data) {
            this.$store.dispatch('update', {
                endpoint: 'user',
                id: this.$store.state.global.user._id,
                namespace: 'user',
                body: {
                    data,
                },
                global: true,
            })
            .then(() => {
                this.isEditingPersonal = false;
            })
            .catch(error => console.error(error));
        }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';

    #profile-header {
        margin-bottom: 20px;
    }

    .personal-story {
        margin-top: 30px;
    }

    .profile-image {
        margin: auto;
    }
    .profile-image img {
        height: 150px !important;
        display: block;
        border-radius: 999em;
        border: 5px solid white;
        box-shadow: 0 0 12px rgba(0,0,0,.9);
        box-sizing: padding-box;
        margin: auto;
    }

    .personal {
        margin-left: 20px;
    }

    #personal-form label {
        margin: 10px 0;
        color: white;
        font-size: 20px;
    }
    #personal-form label input {
        margin: 0 10px;
    }

    .profile-section {
        background-color: rgba(0,0,0,.5);
        min-height: 100px;
        margin-bottom: 20px;
        h4 {
            font-size: 15px;
            text-align: left;
            padding-top: 0.5rem;
            padding-left: 20px;
            color: white;
        }
    }

    .header {
        padding: 10px;
        border-bottom: 1px solid;
        line-height: 35px;
        h4 {
            margin: 0;
            color: white;
        }
        a {
            padding-right: 10px;
            color: white;
            float: right;
        }
    }

    .content {
        padding: 20px 30px 10px;
        background-color: rgba(0,0,0,.5);
        color: white;
    }

    .inline {
        margin-bottom: 10px;
    }

    .answer {
        color: white;
        background-color: inherit;
        border: none;
        padding-bottom: 0;
    }

    .label {
        color: white;
        font-weight: bold;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    .profile-header--info {
        z-index: 999;
        text-align: center;
    }

</style>
