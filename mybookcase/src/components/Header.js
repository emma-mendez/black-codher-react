import React from "react";
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const Header =({ props }) => {
    return (
        <>
            <h1>The Modern Bookstore</h1>

            <Link to="/About" className="button-color">Guidance</Link>

            <Link to="/"className="button-color">Book Lists</Link>
            
            <Link to="/Bookcase" className="button-color">Bookcase</Link>
        </>
        
    )
}


export default Header;
