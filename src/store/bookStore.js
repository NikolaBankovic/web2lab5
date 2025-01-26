import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: JSON.parse(localStorage.getItem('books')) || [],
    }),
    actions: {
        addBook(book) {
            this.books.push(book);
            this.saveBooks();
        },
        markAsRead(index) {
            this.books[index].read = true;
            this.saveBooks();
        },
        saveBooks() {
            localStorage.setItem('books', JSON.stringify(this.books));
        },
    },
});
