import React from "react";

const Input = ({searchBooksData}) => {

  const handleInputChange = (e) => {
    e.preventDefault();
    searchBooksData(e.target.value);
  }

  return (
    <form className="search-books-input-wrapper" >
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Input