import React, { useState } from 'react';
import BookList from './components/BookList';
import data from './models/books.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'; 
import About from './pages/About';

const App = (props) => {
    const [books, setBooks] = useState(data);

function addBook(title, id) {
    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} was clicked`)
}
    return (
        <Router>
        <>    
            <Route exact path="/" render={() => (
                <>
                    <Header />
                    <BookList books={books} addBook={addBook} />
                </>
            )} />

            <Route exact path="/booklist" render={() => (
                <>
                    <Header />
                    <BookList books={books} addBook={addBook} />
                </>
            )} />
            

            <Route exact path="/about" render={() => (
                <>
                    <Header />
                    <About books={books} addBook={addBook} />
                </> 
            )} />
        </>        
        </Router>
    ); }




export default App;
