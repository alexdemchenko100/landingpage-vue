<template>
    <div id="register" class="grid-container onboard">
        <div class="grid-x grid-margin-x">
            <div class="small-10 small-offset-1 medium-offset-3 medium-6 cell">
                <h4>Get Access</h4>
                <h5>
                    This area of the site is for members of the network,
                    you'll need an access token to continue.
                    Contact us for an <a href="mailto:info@authentic-ventures.com">invite</a>
                </h5>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <div class="small-10 small-offset-1 medium-offset-3 medium-6 cell">
                <form v-on:submit.prevent="access">
                    <label>Enter Access Token<input v-model.trim="token" type="text"></label>
                    <input type="submit" class="button" value="Submit">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import config from '../../config';

  const accessToken = config.accessToken;

  export default {
    name: 'access',

    data() {
      return {
        token: '',
      }
    },

    methods: {
      access() {
        if (this._data.token === accessToken) {
            this.$store.state.global.access = true;
            this.$router.push({ name: 'register' });
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';

    .shaded {
        background-color: #e0ba5c;
    }

    #register .cell {
        text-align: center;
    }
</style>
