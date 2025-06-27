import { useState } from "react";
import { books } from "./data.js";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { BookItem } from "./components/BookItem";
import { BookInfo } from "./components/BookInfo";
import defaulImage from "./assets/jpg/default_image.png";

function App() {
  const [_books, setBooks] = useState(books);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  let filteredBooks = _books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const onDelete = (book) =>
    setBooks(_books.filter((_book) => _book.id !== book.id));

  return (
    <>
      <Navbar searchText={search} setSearch={setSearch} />
      <main className="mb-5">
        <section className="books_container container mx-auto px-2">
          <h2 className="mb-3 text-base sm:text-lg md:text-xl">
            Books count: {filteredBooks.length}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {filteredBooks.length ? (
              filteredBooks.map((book) => (
                <BookItem
                  key={book.id}
                  book={book}
                  onSelect={setSelectedBook}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <li className="col-span-full text-center text-gray-400 py-8">
                <img
                  src={defaulImage}
                  alt=""
                  className="w-60 sm:w-80 md:w-96 mx-auto"
                />
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Kitoblar topilmadi !
                </h2>
                <p>
                  Hech qanday kitob topilmadi. Qidiruv so‘rovini o‘zgartirib
                  ko‘ring.
                </p>
              </li>
            )}
          </ul>
        </section>
      </main>
      {selectedBook && (
        <BookInfo book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
      <Footer />
    </>
  );
}

export default App;
