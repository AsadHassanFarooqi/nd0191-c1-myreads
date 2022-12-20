import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Custom Component
import BookShelf from "./BookShelf";

const ListBooks = ({bookshelves, books, onMove }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      {bookshelves.map((shelf) => (
        <BookShelf key={shelf.key} shelf={shelf} books={books} onMove={onMove} />
      ))}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  bookshelves: PropTypes.array,
  books: PropTypes.array,
  onMove: PropTypes.func
}

export default ListBooks