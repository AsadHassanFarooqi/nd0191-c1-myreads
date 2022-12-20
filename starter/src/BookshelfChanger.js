import React from "react";
import PropTypes from "prop-types";

const BookshelfChanger = ({shelf, book, onMove}) => {

  // function for selecting option
  const handleChange = (e) => {
    const { value } = e.target;
    onMove(book, value);
  }

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

BookshelfChanger.propTypes = {
  shelf: PropTypes.string,
  book: PropTypes.object,
  onChange: PropTypes.func
}

export default BookshelfChanger