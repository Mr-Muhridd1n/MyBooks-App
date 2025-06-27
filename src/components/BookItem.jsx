import { BookInfo } from "./BookInfo.jsx";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export const BookItem = ({ book, onSelect, onDelete }) => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  return (
    <li className="item bg-white shadow-lg rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-2xl flex flex-col gap-3">
      <div className="w-full h-60 overflow-hidden rounded-lg mb-3 relative">
        {like == 0 ? (
          <button
            className="absolute  right-1 top-1 cursor-pointer"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            <FaRegHeart className="w-[30px] h-[30px] text-pink-600" />
          </button>
        ) : (
          <button
            className="absolute  right-1 top-1 cursor-pointer"
            onClick={() => {
              setLike(like - 1);
            }}
          >
            <FaHeart className="w-[30px] h-[30px] text-pink-600" />
          </button>
        )}
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
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
      <div className="flex justify-between items-center mt-2">
        <button className="btn btn-error btn-sm" onClick={() => onDelete(book)}>
          Delete
        </button>
        {count === 0 ? (
          <button
            className="btn btn-accent btn-sm"
            onClick={() => setCount(count + 1)}
          >
            <FaShoppingBag />
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              className="btn btn-success btn-sm px-2"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <span className="font-semibold text-gray-700">{count}</span>
            <button
              className="btn btn-warning btn-sm px-2"
              onClick={() => setCount(count - 1)}
            >
              &minus;
            </button>
          </div>
        )}
      </div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onSelect(book)}
      >
        View
      </button>
    </li>
  );
};
