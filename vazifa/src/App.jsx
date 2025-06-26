import { useState } from "react";
import { books } from "./data.js";
import Navbar from "./components/Navbar.jsx";
import { BookItem } from "./components/BookItem.jsx";
import { BookInfo } from "./components/BookInfo.jsx";

function App() {
  const [_books, setBooks] = useState(books);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = _books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar searchText={search} setSearch={setSearch} />
      <main>
        <section className="books_container container mx-auto">
          <ul className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5">
            {filteredBooks.length ? (
              filteredBooks.map((book) => (
                <BookItem
                  key={book.id}
                  book={book}
                  onSelect={setSelectedBook}
                />
              ))
            ) : (
              <li className="col-span-full text-center text-gray-400 py-8">
                <img
                  src={require("./assets/jpg/default_image.png")}
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
    </>
  );
}

export default App;
