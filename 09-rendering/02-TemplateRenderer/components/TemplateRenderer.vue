<script>
import { compile, computed, h } from 'vue';

export default {
  name: 'TemplateRenderer',

  props: {
    template: {
      type: String,
      required: true,
    },

    bindings: {
      type: Object,
      default: () => ({}),
    },

    components: {
      type: [Object, Array],
      default: () => [],
    },
  },

  data() {
    return {
      renderFunction: computed(() => compile(this.template)),
    }
  },

  render(...args) {
    return [this.renderFunction.apply(this, args), h(this.components)];
  },

};
</script>
