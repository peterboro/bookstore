import { addBookApi, removeBookApi, loadBooksApi, } from "../../Api/Api";
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const getBooksApi = () => async (dispatch) => {
  const bookItems = await loadBooksApi();
  const books = [];
  Object.keys(bookItems).forEach((id) => {
    books.push({item_id: id, title: bookItems[id][0].title, author: bookItems[id][0].author, category: bookItems[id][0].category,});
  });
  dispatch(getBook(books));
};

export const addBookId = (newBook) => async (dispatch) => {
  await addBookApi(newBook);
  dispatch(addBook(newBook));
};

export const removeBookId = (item_id) => async (dispatch) => {
  await removeBookApi(item_id);
  dispatch(removeBook(item_id));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;