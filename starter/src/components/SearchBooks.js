import React, { useState } from "react";
import { Link } from "react-router-dom";

// HOC
import debouce from "../hoc/helper";

// Custom components
import * as BooksAPI from "../api/BooksAPI";
import Input from "./Input";
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks = ({books, onMove }) => {
  const [searchBooks, setSearchBooks] = useState([]);

  const searchAPI = async (query) => {
    console.log(query);
    if(query.length > 0) {
      const results = await BooksAPI.search(query);
      if(!results.error) {
        setSearchBooks(results);
      } 
    } else {
      setSearchBooks([]);
    }
  }

  const searchBooksData = debouce(searchAPI);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
        >
          Close
        </Link>
        <Input searchBooksData={searchBooksData} />
      </div>
      <SearchBooksResults books={books} onMove={onMove} onSearch={searchBooks}/>
    </div>
  );
};

export default SearchBooks;
