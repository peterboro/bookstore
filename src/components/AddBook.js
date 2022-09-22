import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookId } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const fetchTitle = (e) => setTitle(e.target.value);
  const fetchAuthor = (e) => setAuthor(e.target.value);
  const fetchCategory = (e) => setCategory(e.target.value);

  const submitBook = () => {
    if (title && author && category) {
      const newBook = {item_id: uuidv4(), title, author, category,};

    dispatch(addBookId(newBook));
    setTitle('');
    setAuthor('');
    }
  }

  return (
    <div>
    <form className="AddNew">
      <label htmlFor="book-title">
      <input type="text" className='book-title' placeholder="Book Title" onChange={fetchTitle} value={title} required />
      </label>
      <label htmlFor="book-author">
      <input type="text" className='book-author' placeholder="Book Author" onChange={fetchAuthor} value={author} required />
      </label>
      <label htmlFor="book-categories">
        <select className="categories" id="category" onChange={fetchCategory} value={category} required>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
          <option value="fiction">Fiction</option>
          <option value="self-help">Self-Help</option>
        </select>
      </label>
      <button type="submit" className='Add' onClick={() => submitBook()}>Add Book</button>
    </form>
  </div>
);
}

export default AddBook;