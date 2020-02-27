import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <button style={{border:'none',backgroundColor:'transparent'}}
            href=""
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}            
        </button>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link