import React from "react";
import PropTypes from "prop-types";

// Custom Component
import BookshelfChanger from "./BookshelfChanger";

const Book = ({book, shelf, onMove}) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "icons/book-placeholder.svg"
            })`
          }}
          ></div>
          <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(", ") : "unknown author"}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  onMove: PropTypes.func
}

export default Book