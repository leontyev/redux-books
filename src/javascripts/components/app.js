import React from 'react';
import { connect } from 'react-redux';

import BookList from './book_list';
import BookDetails from './book_details';

const App = ({books, selectedBook}) => {
  return (
    <div className="app">
      <BookList books={books}/>
      <BookDetails selectedBook={selectedBook}/>
    </div>
  );
}

const mapStateToProps = ({books, selectedBook}) => ({
  books, selectedBook
});

export default connect(mapStateToProps)(App);