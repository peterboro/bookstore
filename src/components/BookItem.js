import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { id, title, author, category} = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));

  return (
    <div className="containerBook">
      <div className="containerTitle">
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <p className="category" value={category}>{category}</p>
        <button type="button" className="Remove" onClick={remove}>Remove</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;