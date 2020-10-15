
import React from 'react';
import Book from './Book';


const BookList = ({books, addBook, removeBook}) => {
    return (
            <div>
                {books.map(book => (
                    <Book 
                    key={book.id}
                    book={book} 
                    addBook={addBook}
                    removeBook={removeBook}
                />
            ))}
        </div>
    ); 
}


export default BookList;
