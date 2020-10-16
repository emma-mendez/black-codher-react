import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header'; 
import BookList from './components/BookList';
import Search from './components/Search';
import About from './pages/About';
import data from './models/books.json';

const App = () => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('');

function addBook(title, id) {
    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} was clicked`)
}

async function findBooks (value) {
const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`
).then(res => res.json());
    setBooks(results.item);
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
