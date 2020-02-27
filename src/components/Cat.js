import React from 'react'

export default function Cat({breed, id, selected, onClickCat, index}) {
    const css = {
        backgroundColor: selected ? "lightblue" : ""
    }
    return (
        <div style={css} onClick={() => {onClickCat(id)}}>
            {breed}           
        </div>
    )
}
