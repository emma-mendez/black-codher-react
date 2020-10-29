import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Book = (props) => {
    let {
        id,
        volumeInfo: {title, authors, description, imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
    } = props.book; 

    const clickHandler = () => props.addBook(title, id);
    const clickHandlerRemove = () => props.removeBook(title, id);

    return (
            <div className="book">
                <h2 className="description-text">{title}</h2>
                <img className="image" src={smallThumbnail || thumbnail} alt={title} />
                <p className="description-text">{authors ? authors.join(', ') : 'No authors'}</p>
                <h4 className="description-text">£{listPrice && listPrice.amount}</h4>
                <p className="description-text">{description}</p>
                {props.addBook && (
                    <Button 
                        onClick={clickHandler}
                        className="btn-light">
                            Add +
                        </Button>
                )}
                {props.removeBook && (
                    <Button 
                        onClick={clickHandlerRemove}
                        className="btn-light">
                            Remove
                        </Button>
                )}
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