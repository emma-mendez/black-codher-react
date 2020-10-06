import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    let {
        volumeInfo: {title, authors, description, imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
    } = props.book; 

function addBook(title) {
    console.log(`The Book ${title} was clicked`)
}
    return (
        <div>
            <h2>{title}</h2>
            <p>{authors ? authors.join(', ') : 'No authors'}</p>
            <p>{listPrice && listPrice.amount}</p>
            <p>{description}</p>
            <img src={smallThumbnail || thumbnail} alt={title} />
            <button onClick={() => addBook(title)}>Add +</button>
    </div> 
);
}

// Book.propTypes = {
//     book: PropTypes.shape({
//         id: PropTypes.string,
//         volumeInfo: PropTypes.shape({
//             title: PropTypes.string.isRequired,
//         }),
//         saleInfo: PropTypes.shape({
//             listPrice: PropTypes.shape({
//                 amount:PropTypes.number
//             })
//         })
//     })
// };


export default Book;