import React from 'react';

import 'stylesheets/modules/book_details';

const BookDetails = ({selectedBook}) => {
  return (
    <div className="book-details">
      {selectedBook}
    </div>
  );
}

export default BookDetails;