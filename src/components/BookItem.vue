<template>
  <span>
    <strong>{{ book.title }}</strong>
    <span v-if="book.read">(pročitano)</span>
  </span>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
