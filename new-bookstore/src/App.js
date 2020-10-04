import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Product 
        name='Name of book Here'
        price='£9.99'
        description='etc etc'
      image='https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1460727454046618&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fhiphiphooraynz%2F&tbnid=uf6ZmaunpJUuVM&vet=12ahUKEwi9m73F_5nsAhXm1-AKHQ93DSQQMygFegUIARClAQ..i&docid=fWmBuZCwSuEngM&w=960&h=960&q=hip%20hip%20hooray&ved=2ahUKEwi9m73F_5nsAhXm1-AKHQ93DSQQMygFegUIARClAQ'
      alt=''
    />
      <Product 
        name='Name of book Here'
        price='£9.99'
        description='etc etc'
      image='/assests/image.jpg'
      alt=''
      />
      <Product 
      name='Name of book Here'
      price='£9.99'
      description='etc etc'
      image='link'
      alt=''
      />
      <Product 
      name='Name of book Here'
      price='£9.99'
      description='etc etc'
      image='link'
      alt=''
      />
      <Product 
      name='Name of book Here'
      price='£9.99'
      description='etc etc'
      image='link'
      alt=''/>
    </div>
  );
}

export default App;
