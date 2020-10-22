import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect, fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import BookList from './components/BookList';
import Search from './components/Search';
import About from './pages/About';
import Bookcase from './pages/Bookcase';
import data from './models/books.json';

const App = () => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('');
    const [bookcase, setBookcase] = useState([]);
    // Destructuring - Below has been simplified
    // const keyWordState = useState('');
    // const keyword = keyWordState[0];
    // const setKeyword = keyWordState[1];

// Use this code example for such this as loading animations after page has loaded the above.
// useEffect(()=> {
//     //
// });

function addBook(title, id) {
    const newBookList = books.filter(book => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]);
    console.log(`The Book ${title} was clicked`)
}

function removeBook(title, id) {
    const removeBookList = books.filter(book => book.id !== id);
    const removeBook = books.filter(book => book.id === id);
    setBooks(removeBookList);
    setBookcase('');
}

async function findBooks (term) {
const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`
).then(res => res.json());
    setBooks(results.items);
}

    return (
        <Router>
        <>    
            <Route exact path="/" render={() => (
                <>
                    <Header />
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={books} addBook={addBook} />
                </>
            )} />

            <Route exact path="/Bookcase" render={() => (
                <>
                    <Header />
                    <BookList books={bookcase} removeBook={(removeBook)} />
                </>
            )} />
            

            <Route exact path="/About" render={() => (
                <>
                    <Header />
                    <About books={books} addBook={addBook} />
                </> 
            )} />
        </>        
        </Router>
    ); }




export default App;
