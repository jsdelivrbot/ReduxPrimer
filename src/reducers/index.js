import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

console.log('BooksReducer =', BooksReducer);

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
