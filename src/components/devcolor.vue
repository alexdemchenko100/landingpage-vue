<template>
    <div id="register">
      <header class="hero hero__founder hero__onboard" style="background-image: url(/public/img/av-13.jpg);">
          <h1 class="hero-header">
              <span class="founder-header--name">Welcome DevColor Member</span>
          </h1>
      </header>
      <div class="grid-container onboard">
        <div class="grid-x grid-margin-x">
            <div class="cell">
                <form v-on:submit.prevent="register" class="onboard-form register-form">
                    <div class="form-row">
                      <label class="medium-6 half">First Name<input v-model.trim="name.first" type="text" placeholder="Lovely"></label>
                      <label class="medium-6 half">Last Name<input v-model.trim="name.last" type="text" placeholder="Person"></label>
                    </div>
                    <div class="form-row">
                      <label>Email address<input v-model.trim="email" type="email" placeholder="example@founder.co"></label>
                    </div>
                    <div class="form-row">
                      <label>Phone Number<input v-model.trim="phone" type="tel" placeholder="234-235-5678"></label>
                    </div>
                    <div class="form-row">
                      <label>Password<input v-model="password" type="password"></label>
                    </div>
                    <div class="form-row">
                      <label>Confirm Password<input v-model="passwordConfirmation" type="password"></label>
                    </div>
                    <div class="form-row">
                      <input type="submit" class="button next-button" value="Next">
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  import config from '../../config';

  export default {
    name: 'register',

    data() {
      return {
        name: {
          first: '',
          last: '',
        },
        email: '',
        phone: '',
        password: '',
        passwordConfirmation: ''
      }
    },

    methods: {
      register() {
        if (this.password !== this.passwordConfirmation) {
          alert('Passwords don\'t match');
          return;
        }

        this.$store.dispatch('register', this)
          .then((data) => {
            this.$router.push({ name: 'onboard-1' });
            this.$store.state.global.uid = data._id;
          })
          .catch(err => {
            if (err.response.status === 401) {
              alert('Please enter an email address and password');
              return;
            }

            throw new Error(err);
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';
</style>
