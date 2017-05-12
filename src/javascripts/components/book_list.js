import React from 'react';

import BookItem from './book_item';

import 'stylesheets/modules/book_list';

const BookList = ({books}) => {
  const bookList = books.map(book => (
    <BookItem book={book}></BookItem>
  ));

  return (
    <ul className="book-list list-group">
      {bookList}
    </ul>
  );
}

export default BookList;