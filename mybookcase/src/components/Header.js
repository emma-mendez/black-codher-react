import React from "react";
import { Link } from 'react-router-dom';

const Header =() => {
    return (
        <>
            <h1>My Bookcase</h1>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/bookcase">Bookcase</Link>
            <br></br>
            <Link to="/About">About</Link>
        </>
    )

}

export default Header;