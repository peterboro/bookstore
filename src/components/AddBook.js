import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const fetchTitle = (e) => setTitle(e.target.value);
  const fetchAuthor = (e) => setAuthor(e.target.value);
  const fetchCategory = (e) => setCategory(e.target.value);

  const submitBook = (title, author) => {
    const newBook = {id: uuidv4(), title, author, category,};

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
    <form className="AddNew">
      <label htmlFor="book-title">
      <input type="text" placeholder="Book Title" onChange={fetchTitle} value={title} required />
      </label>
      <label htmlFor="book-author">
      <input type="text" placeholder="Book Author" onChange={fetchAuthor} value={author} required />
      </label>
      <label htmlFor="book-categories">
        <select className="categories" id="category" onChange={fetchCategory} value={category} required>
          <option value="action">Action</option>
          <option value="science">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
      </label>
      <button type="submit" onClick={() => submitBook(title, author)}>Add Book</button>
    </form>
  </div>
);
}

export default AddBook;