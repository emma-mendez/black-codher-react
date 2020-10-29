import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Button } from 'react-bootstrap';


// const returnButton=({ props }) => {
//     return (
//         <>
//             <Link to="/Bookcase" className="button-color">Return Home</Link>
//         </>
        
//     )
// }

// const moreBooksButton=({ props }) => {
//     return (
//         <>
//             <Link to="/Dynamic" className="button-color">+ Dynamic Case</Link>
//         </>
        
//     )
// }
{/* <Link to="/About" className="button-color">Guidance</Link> */}



const Pagination = (props) => {
    let {
        

    const clickHandler = () => props.addBook(title, id);
    const clickHandlerRemove = () => props.removeBook(title, id);

    return (
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

export default Pagination