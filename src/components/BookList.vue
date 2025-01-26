<template>
  <ul>
    <li v-for="(book, index) in books" :key="index">
      <BookItem :book="book" />
      <button v-if="!book.read" @click="$emit('mark-read', index)">Označi kao pročitano</button>
    </li>
  </ul>
</template>

<script>
import BookItem from './BookItem.vue';

export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  components: { BookItem },
};
</script>
