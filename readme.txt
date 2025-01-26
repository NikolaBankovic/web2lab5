Pokretanje aplikacije:
u terminalu postaviti pokazivac u direktorij web2lab5 i pokrenuti naredbu:
	npm run dev

1. interpolation/one-way binding - Da, src/views/HomePage.vue, :3

2. two-way binding - Da, src/views/HomePage.vue, :4, :22-26, :34-39,
		varijabla newBookTitle dvosmjerno je povezana s poljem za unos (<input>),
		kad korisnik unese tekst u polje za unos, vrijednost varijable newBookTitle se automatski ažurira,
		kad se vrijednost varijable newBookTitle promijeni unutar komponente (npr., kad korisnik doda knjigu i varijabla se resetira na prazan string),
		vrijednost <input> polja se automatski ažurira kako bi odražavala promjenu.

3. methods - Da, src/views/HomePage.vue, :33-68, 
		metode su addBook() :34-40,
		markBookAsRead() :41-44,
		loadBooksFromLocalStorage() :45-57,
		getBooksFromLocalStorage() :58-67

4. computed properties - Da, src/views/HomePage.vue, :29-31, computed svojstvo books dohvaća podatke iz Pinia storea

5. barem jedan scoped style - Da, src/views/HomePage.vue, :72-109, zaseban style za homepage

6. koristiti barem jedan lifecycle hook - Da, src/views/HomePage.vue, :17-19, lifecycle hook mounted koristim za učitavanje iz localstoragea

7. routing (više stranica) - Da, src/router/index.js, :7-11, koristi se '/' za početnu stranicu i '/about' za about stranicu
         
8. aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
   	Da, src/router/index.js, :13-16, createWebHistory() omogućava korištenje bookmarkable svojstva za '/' i '/about'
         
9. dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, src/router/index.js, :10
         
10. (barem) dvije komponente - Da, 
											src/views/HomePage.vue, :8, :21, koristi se komponenta BookList
                                 src/components/BookList.vue, :4, :20, koristi se komponenta BookItem

11. komponenta bez stanja, koristiti properties - Da, src/components/BookList.vue, :14-19, BookList koristi property books
																		src/components/BookItem.vue, :10-15, BookItem koristi property book

12. komponenta sa stanjem - Da, src/views/HomePage.vue, :22-27, koristi se lokalno stanje za upravljanje unosom knjige (newBookTitle)

13. barem jedna komponenta mora emitirati barem jedan event - Da, src/components/BookList.vue, :5, emitira event mark-read koji označava knjgu pročitanom
																						src/views/HomePage.vue, :8, :41-44, obrađuje emitirani event

14. store (Pinia) - Da, src/views/HomePage.vue, :30, :36-37, :42-43, :46-52, HomePage.vue koristi pinia store (useBookStore()) koji je implementiran u 
								src/store/bookStore.js, :3
         
15. asinkroni dohvat podataka s backenda - Da, src/views/HomePage.vue, :45-57, asinkrono se dohvacaju podaci iz localstoragea i ucitavaju u pinia store
   koristiti Firebase ili Back4App, Mocky, itd. (ne)
   vlastiti storage, ili (ne)
   možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis (da)
   ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente) (ne)




