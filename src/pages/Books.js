import React, {useEffect} from 'react';
import BookItem from '../components/BookItem';
import AddBook from '../components/AddBook';
import { useSelector, useDispatch } from 'react-redux';
import {getBooksApi} from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooksApi());}, [dispatch]);

  return (
    <div>
      {
        books.map(
          (book) => (<BookItem key={book.item_id} id={book.item_id} title={book.title} author={book.author} category={book.category}/>),
        )
      }
      <AddBook />
    </div>
  );
}

export default Books;