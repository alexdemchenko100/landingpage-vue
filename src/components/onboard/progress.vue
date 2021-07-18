<template>
    <div class="progress cell small-10 small-offset-1">
        <progress :value="percent" max="100" style="width: 100%">{{percent}}%</progress>
        Progress: {{percent}}%
    </div>
</template>

<script>
  import { TOTAL_STEPS } from './onboard.js';

  export default {
    name: 'progress-bar',

    computed: {
      percent: function() {
        return ((this.$attrs.step - 1) / TOTAL_STEPS * 100).toFixed();
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../css/settings';

    .progress {
      margin-top: -24px;
      padding-bottom: 16px;
    }
</style>
