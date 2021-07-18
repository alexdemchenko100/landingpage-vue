<template>
    <div>
        <multiselect
                :value="selectedItems" :options="options"
                :multiple="true" :close-on-select="false"
                :clear-on-select="false" :hide-selected="false"
                :max="max" :limit="limit"
                @input="onUpdate" :taggable="taggable" @tag="addTag"
                placeholder="" label="label" track-by="value">
        </multiselect>
    </div>
</template>

<script>
  import _ from 'lodash';
  import Multiselect from 'vue-multiselect';
  export default _.extend({}, {
    name: 'av-multiselect',

    data: function() {
      return {
        items: this.amValue,
        options: this.amOptions,
      }
    },

    computed: {
      selectedItems: function () {
        if (this.items.length) {
          const selected = [];
          this.items.forEach((val) => {
            selected.push(this.options.find(o => o.value === val));
          });

          return selected;
        }
      },

      taggable: function () {
        return !_.isUndefined(this.other);
      }
    },

    components: { Multiselect },

    methods: {
      // Function utilized in multiselect component
      onUpdate(items) {
        this.$emit('input', items.map(o => o.value));
      },

      addTag (newItem) {
        const tag = {
          label: newItem,
          value: 'other'
        };

        const itemOther = _.findIndex(this.amValue, (item) => (item === 'other'));
        // add if 'other' doesn't exist in array
        if (itemOther < 0) {
          this.amValue.push(tag.value);
          this.items = this.amValue;
        }

        this.$emit('updateTag', tag.label);
      }
    },

    props: ['amOptions', 'amValue', 'max', 'limit', 'other']
  });
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .multiselect__tag {
        background: #EEBC57;
    }

    .multiselect__input {
        color: black !important;
    }
</style>
