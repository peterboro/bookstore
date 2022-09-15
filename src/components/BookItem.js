import React from 'react';

const BookItem = () => {
  return (
    <div className="containerBook">
      <div className="containerTitle">
        <p className="category">Action</p>
        <p className="titleOne"> Hunger Games</p>
        <p className="author">Suzanne Collins</p>
        <p className="category">Science Fiction</p>
        <p className="titleTwo"> Dune</p>
        <p className="author">Frank Herbert</p>
        <p className="category">Economy</p>
        <p className="titleThree"> Capital in the Twenty-First Century</p>
        <p className="author">Suzanne Collins</p>
        <button type="button" className="Remove">Remove</button>
      </div>
    </div>
  );
}

export default BookItem;