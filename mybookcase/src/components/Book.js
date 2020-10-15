import React from 'react';
import PropTypes from 'prop-types';
// import '/App.css';

const Book = (props) => {
    let {
        id,
        volumeInfo: {title, authors, description, imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
    } = props.book; 

    const clickHandler = () => props.addBook(title, id);

    return (
            <div className="book">
                <h2>{title}</h2>
                <p>{authors ? authors.join(', ') : 'No authors'}</p>
                <h4>{listPrice && listPrice.amount}</h4>
                <p className="description">{description}</p>
                <img src={smallThumbnail || thumbnail} alt={title} />
                {props.addBook && (
                    <button
                        onClick={clickHandler}
                        className="coral-button"
                    >
                            Add +
                        </button>
                )}
                {/* <button onClick={() => props.addBook(title, id)}>Add +</button> */}
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