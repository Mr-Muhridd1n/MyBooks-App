import { BookInfo } from "./BookInfo.jsx";

export const BookItem = ({ book, onSelect }) => {
  return (
    <li
      className="item bg-white shadow-lg rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-2xl flex flex-col gap-3"
      onClick={() => onSelect(book)}
    >
      <div className="w-full h-60 overflow-hidden rounded-lg mb-3">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="line-clamp-1 text-xl font-semibold text-gray-800">
        {book.title}
      </h3>
      <p className="text-gray-500 text-base mb-1">{book.author}</p>
      <div className="flex items-center gap-4 mt-auto">
        <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
          </svg>
          {book.rating}
        </span>
        <span className="text-gray-400 text-sm">{book.year}</span>
      </div>
    </li>
  );
};
