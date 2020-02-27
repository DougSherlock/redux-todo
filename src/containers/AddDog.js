import React from 'react'
import { connect } from 'react-redux'
import { addDog } from '../actions'

let AddDog = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    console.log('AddDog.onSubmit')
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addDog(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add Dog</button>
            </form>
        </div>
    )
}
AddDog = connect()(AddDog)

export default AddDog