import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { bookSelected } from '../actions/index';

import 'stylesheets/modules/book_item';

const BookItem = ({book, bookSelected}) => {
  return (
    <li className="book-item list-group-item"
        onClick={() => bookSelected(book)}>
        {book}</li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    bookSelected: bookSelected
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookItem);