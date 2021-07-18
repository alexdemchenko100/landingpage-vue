export const TOTAL_STEPS = 8;

export default {
  components: {
    progressBar: () => import(/* webpackChunkName: "onboard-common" */ './progress.vue')
  },

  asyncData ({ store }) {
    // TODO - We should only make an http request if the user hasn't already been fetched
    return store.dispatch('fetch', {
      id: store.state.global.user._id,
      endpoint: 'users',
      namespace: 'user',
      global: true
    })
  },

  methods: {
    update(data, step) {
      this.$store.dispatch('update', {
        endpoint: 'user',
        id: this.$store.state.global.user._id,
        namespace: 'user',
        body: {
          field: 'questions',
          data,
        },
        global: true,
      }).then(() => {
        this.$router.push({ name: step === TOTAL_STEPS ? 'profile' : `onboard-${step + 1}` });
      }).catch(error => console.error(error));
      // TODO - Display some error to the user if we receive any
    }
  }
}
