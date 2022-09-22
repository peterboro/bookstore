import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookId } from '../redux/books/books';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = (
  {id, title, author, category,}
) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBookId(id));
  const percentage = 60;

  return (
    <div className="containerBook">
      <div className="containerTitle">
        <p className="title">{title}</p>
        <p className="author">{ `${author}` }</p>
        <p className="category" value={category}>{category}</p>
        <button type="button" className="Remove" onClick={remove}>Remove</button>
      </div>
      <div className='progressContainer'>
        <div className='graph'>
        <CircularProgressbar value={percentage} styles={{ path: { stroke: `rgb(2, 144, 255, ${percentage / 100})`,},}} />
        </div>
        <div className="percentage"> {`${percentage}%`}
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="bookChapter">
        <h2 className="currentChapter">Current Chapter</h2>
        <h3 className="chapter">Chapter 17</h3>
        <button type="button" className="progressBtn">
          Update Progress
        </button>
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