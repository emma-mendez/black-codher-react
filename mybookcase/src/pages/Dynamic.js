import React from 'react';
import dynamicApp from 'react-router-dom';
import { Link } from 'react-router-dom';


const Dynamic = () => {
    return(
        <>
        <h1>Welcome To Your Personalised Bookcase  </h1>
        <p>Here you will find your books organised into genres on the "Add + " 
            or "Remove" buttons 
            to add a book to your bookcase.</p>
        <p>
        *Tip - Use the search bar above to 
        find the latest books by name, author or description.
        </p>
        <Link to="/About"><button>Guidance</button></Link>
        <Link to="/BookList"><button>Add More Books</button></Link>
        </>
    );
}

export default Dynamic