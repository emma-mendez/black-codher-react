import React from "react";
import { Link } from 'react-router-dom';

const Header =() => {
    return (
        <>
            <h1>The Modern Bookstore</h1>
            <Link to="/"className="button-color">Home</Link>
            
            <Link to="/bookcase" className="button-color">Bookcase</Link>
            
            <Link to="/About" className="button-color">About</Link>
        </>
        
    )
}


export default Header;
