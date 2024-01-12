<script>
import { compile, computed, defineComponent, h} from 'vue';

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
    const tmpComponent = defineComponent({
      components: this.components,

      computed: {
        renderFunction() {
          return compile(this.template)
        }
      },

    });
    return {tmpComponent: tmpComponent}
  },

  render(...args) {
    return this.tmpComponent.renderFunction.apply(this, args)
}
};
</script>
