import React from 'react'

export default function Animal({breed, id, selected, onClickAnimal, index}) {
    const css = {
        backgroundColor: selected ? "lightblue" : ""
    }
    return (
        <div style={css} onClick={() => {onClickAnimal(id)}}>
            {breed}           
        </div>
    )
}
