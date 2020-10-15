import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function Search (props) {
    function handleSubmit (event) {
        event.preventDefault();
        props.findBooks(props.keyword);
    }

    return (
    // <form className="search-form" onSubmit={handleSubmit}>
    //     <input type="text" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)} />
    //     <input type="Submit" value="Search" />
    // </form>
    <Form onSubmit={handelSubmit}>
        <Form.Group controlID="searchKeyword">
            <Form.Label>Enter Search</Form.Label>
            <Form.Control type="keyword" placeholder="Enter Keyword"></Form.Control>
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>    

    );
}



export default Search;