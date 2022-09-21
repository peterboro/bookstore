import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookId } from '../redux/books/books';

const BookItem = (
  {id, title, author, category,}
) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBookId(id));

  return (
    <div className="containerBook">
      <div className="containerTitle">
        <p className="title">{title}</p>
        <p className="author">{ `${author}` }</p>
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