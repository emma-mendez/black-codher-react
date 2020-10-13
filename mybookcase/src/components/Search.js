import React, { useState } from 'react';

const Search = (props) => {


    function handleSubmit (event) {
        event.preventDefault();
        props.findBooks(props.keyword);
    }
    return (
    <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)} />
        <input type="Submit" value="Search" />
    </form>
    );
}



export default Search;