import React from 'react'
//import PropTypes from 'prop-types'
import Cat from './Cat'

export const CatList = ({ cats, onClickCat }) => {
    console.log('cats:' + cats);
    return (
        <div>
            <div>catReducer: {JSON.stringify(cats)}</div>            
        <ul>
            {cats.map((cat, index) => (
                <Cat key={index} {...cat} onClickCat={onClickCat} index={index} />
            ))}
        </ul>
    </div>
)}

// CatList.propTypes = {
//     cats: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.string.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired        
//     ).isRequired,
//     onClickCat: PropTypes.func.isRequired
// }

export default CatList;