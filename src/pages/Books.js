import React from 'react';
import BookItem from '../components/BookItem';
import AddBook from '../components/AddBook';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {
        books.map(
          (book) => (<BookItem key={book.id} id={book.id} title={book.title} author={book.author}/>),
        )
      }
      <AddBook />
    </div>
  );
}

export default Books;