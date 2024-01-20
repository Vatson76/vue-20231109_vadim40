<template>
  <div class="pagination-container">
    <slot v-for="itemInPage in itemsInPage" :item="itemInPage"></slot>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    itemsInPage() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;

      return this.items.slice(start, end);
    },
  },
};
</script>

<style></style>
