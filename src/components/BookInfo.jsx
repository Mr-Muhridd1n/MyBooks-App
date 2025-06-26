export const BookInfo = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl w-[95vw] max-w-lg sm:max-w-2xl shadow-2xl text-left relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gray-100 hover:bg-gray-200 w-8 h-8 sm:w-9 sm:h-9 text-xl sm:text-2xl cursor-pointer rounded-full text-gray-700 flex items-center justify-center transition"
          aria-label="Yopish"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-28 h-40 sm:w-40 sm:h-[220px] object-cover rounded-lg sm:rounded-xl shadow-md flex-shrink-0 mx-auto sm:mx-0"
        />
        <div className="flex-1 w-full">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-2 text-[#222] tracking-wide">
            {book.title}
          </h2>
          <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
            <b>Muallif:</b> {book.author}
          </p>
          <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
            <b>Yili:</b> {book.year}
          </p>
          <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
            <b>Janri:</b> {book.genre}
          </p>
          <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
            <b>Reyting:</b>{" "}
            <span className="text-yellow-500">
              {book.rating}{" "}
              <span aria-label="star" role="img">
                ⭐
              </span>
            </span>
          </p>
          <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
            <b>Narxi:</b>{" "}
            <span className="text-green-600 font-semibold">{book.price}</span>
          </p>
          <div className="mt-3 sm:mt-4 bg-gray-100 rounded-lg p-3 sm:p-4 text-gray-800 text-xs sm:text-[15px] leading-relaxed shadow">
            {book.description}
          </div>
        </div>
      </div>
    </div>
  );
};
