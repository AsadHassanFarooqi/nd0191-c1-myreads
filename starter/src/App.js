import { useState, useEffect } from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";

// Custom Components
import * as BooksAPI from "./api/BooksAPI";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import NotFound from "./components/NotFound";

// shelves
const BOOK_SHELVES = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
]

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBookData = async () => {
      try {
        const res = await BooksAPI.getAll();
        setMyBooks(res);
      } catch(err) {
        console.log(err);
        setError(true);
      }
    }
    
    getBookData();
  },[])

  const moveBook = (book, shelf) => {
    try {
      BooksAPI.update(book, shelf);
      const filteredBooks = myBooks.filter(b => b.id !== book.id);
      if (shelf === "none") {
        setMyBooks(filteredBooks);
      } else {
        book.shelf = shelf;
        setMyBooks([...filteredBooks, book]);
      }
    } catch(err) {
      console.log(err);
      setError(true);
    }
  };

  if(error) return (<h1>netwrork error</h1>);

  return (
    <Routes>
      <Route exact path="/" element={<ListBooks bookshelves={BOOK_SHELVES} books={myBooks} onMove={moveBook} /> } />
      <Route exact path="/search" element={<SearchBooks books={myBooks}  onMove={moveBook} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
