// import React from 'react';
// import ReactDom from 'react-dom'
// import App from './App'

// const name = 'Emma'
// const element = <h1>{name}'s Reading List</h1>

// console.log(element);

// ReactDom.render(<App />, document.getElementById('root'));








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import BookCounter from './BookCounter';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
})
const book = books[0];
let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
const element = <Fragment>
    <h1 id={id}>{title} = {formatter.format(amount)}</h1>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));


// function allBooks() {
//   let elements =[]
//   let i 
//   for(i=0; i < books, length, i++) {
//     let book = books[i];

    
    const element = <Fragment>
      {books.map((book) => {
        let {id, volumeInfo: {title, authore, description}, saleInfo:  = book;
        return (<div></div>)
    </Fragment>;

    elements.push(element)
  }

  return elements
}

ReactDOM.render(element,document.getElementById('root'));






// const element = <Fragment>
//      <h1>Welcome to My Library</h1>
//      <BookCounter library={{name:"Sarah",theme:"Modern"}}/>
//  </Fragment>;
 
//  ReactDOM.render(element,document.getElementById('root'));