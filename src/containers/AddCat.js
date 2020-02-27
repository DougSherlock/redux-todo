import React from 'react'
import { connect } from 'react-redux'
import { addCat } from '../actions'

let AddCat = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    console.log('AddCat.onSubmit')
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addCat(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add Cat</button>
            </form>
        </div>
    )
}
AddCat = connect()(AddCat)

export default AddCat