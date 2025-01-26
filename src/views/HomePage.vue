<template>
  <div>
    <h2>{{ naslov }}</h2>
    <input v-model="newBookTitle" placeholder="Unesite naziv knjige" />
    <button @click="addBook">Dodaj knjigu</button>

    <h2>Vaš popis knjiga</h2>
    <BookList :books="books" @mark-read="markBookAsRead" />
  </div>
</template>

<script>
import { useBookStore } from '@/store/bookStore';
import BookList from '../components/BookList.vue';

export default {
  mounted() {
    this.loadBooksFromLocalStorage();
    console.log('Home page mounted.');
  },
  components: { BookList },
  data() {
    return {
      naslov: 'Dodajte knjige na popis',
      newBookTitle: '',
    };
  },
  computed: {
    books() {
      return useBookStore().books;
    },
  },
  methods: {
    addBook() {
      if (this.newBookTitle) {
        const store = useBookStore();
        store.addBook({ title: this.newBookTitle, read: false });
        this.newBookTitle = '';
      }
    },
    markBookAsRead(index) {
      const store = useBookStore();
      store.markAsRead(index);
    },
    async loadBooksFromLocalStorage() {
      const store = useBookStore();
      if (!store.books) {
        try {
          const storedBooks = await this.getBooksFromLocalStorage();
          if (storedBooks) {
            storedBooks.forEach(book => store.addBook(book));
          }
        } catch (error) {
          console.error('Error loading books from localStorage', error);
        }
      }
    },
    getBooksFromLocalStorage() {
      return new Promise((resolve, reject) => {
        try {
          const books = JSON.parse(localStorage.getItem('books')) || [];
          resolve(books);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
</script>

<style scoped>
div {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  font-size: 1em;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 + h2 {
  margin-top: 20px;
}
</style>