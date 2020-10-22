import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const About = () => {
    return(
        <>
        <h1>Welcome to the Bookcase App </h1>

        <p>
        The following application was created by Emma Mendez. 
        </p>
        <p>This bookcase app displays a list of books that 
        a user can save to a local bookcase.
        </p>

        <p>Click on the "Add + " button to add a book to your bookcase.</p>
        <p>
        *Use the search bar to 
        find the latest books by name, author or description.
        </p>
        </>
    );
}


export default About;