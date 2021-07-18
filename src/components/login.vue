<template>
    <div id="login" class="grid-container onboard">

            <div class="grid-x grid-margin-x">
                <div class="cell">
                    <h4>User Login</h4>
                </div>
            </div>

            <div class="grid-x grid-margin-x">
                <div class="medium-8 medium-offset-2 cell">
                    <form class="onboard-form" v-on:submit.prevent="login">
                        <div class="form-row">
                            <label>Email address<input v-model.trim="email" type="email" placeholder="Your email"></label>
                        </div>
                        <div class="form-row">
                            <label>Password<input v-model="password" type="password" placeholder="Your password"></label>
                        </div>
                        <div class="form-row">
                            <input type="submit" class="button next-button" value="Submit">
                        </div>
                    </form>
                </div>
            </div>
    </div>
</template>

<script>
  import config from '../../config';

  export default {
    name: 'login',

    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login() {
        this.$store.dispatch('login', this)
          .then((data) => {
            this.$router.push({ name: 'profile' });
            this.$store.state.global.uid = data._id;
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';
</style>
