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
        <section className="books_container container mx-auto">
          <h2 className="mb-3">Books count: {filteredBooks.length}</h2>
          <ul className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5">
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
                  className="w-96 ml-auto mr-auto"
                />
                <h2 className="text-white text-3xl font-bold mb-2">
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
