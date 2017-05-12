import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import selectedBookReducer from './selected_book_reducer';

const rootReducer = combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer
});

export default rootReducer;