import React from "react";
import { Link } from 'react-router-dom';

const Header =() => {
    return (
        <>
            <h1>My Bookcase</h1>
            <Link to="/"className="coral-button">Home</Link>
            <br></br>
            <Link to="/bookcase" className="coral-button">Bookcase</Link>
            <br></br>
            <Link to="/About" className="coral-button">About</Link>
        </>
    )

}

export default Header;
