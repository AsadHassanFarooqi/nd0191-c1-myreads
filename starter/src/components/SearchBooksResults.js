import React from "react";
import Book from './Book'

const SearchBooksResults = ({onSearch, onMove, books}) => {

  const updatedBooks = onSearch.map(book => {
    books.map(b => {
      if(b.if === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    })
    return book;
  })

  return (
    <div className="search-books-results">
      <ol className="books-grid">
      {
        updatedBooks && updatedBooks.map(book => (
          <Book key={book.id} book={book} onMove={onMove} shelf={book.shelf ? book.shelf : 'none'} />
        ))
      }
      </ol>
    </div>
  )
}

export default SearchBooksResults