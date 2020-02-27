import React from 'react'
import PropTypes from 'prop-types'
import Animal from './Animal'

export const AnimalList = ({ animals, onClickAnimal, species }) => {
    console.log('animals:' + animals);
    return (
        <div>
            <div><h3>AnimalList component</h3></div>
            <div>Species: {species}</div>
            {/* <div>reducer data: {JSON.stringify(animals)}</div>             */}
        <ul>
            {animals.map((animal, index) => (
                <Animal key={index} {...animal} onClickAnimal={onClickAnimal} index={index} />
            ))}
        </ul>
    </div>
)}

AnimalList.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            breed: PropTypes.string.isRequired,
            selected: PropTypes.bool.isRequired
        }).isRequired        
    ).isRequired,
    onClickAnimal: PropTypes.func.isRequired
}

export default AnimalList;