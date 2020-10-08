
import React, { useState } from 'react';
import Book from './Book';



const BookList = (props) => {
return (
        <div>
            {props.books.map(book => (
                <>
                    <Book key={book.id} addBook={props.addBook} book={book}/>
                </>
            ))}
        </div>
    ); 
}


export default BookList;
