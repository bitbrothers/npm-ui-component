import React from 'react'

function Button({message, type}) {
    return <button type="button" class={`btn btn-${type}`}>{message}</button>
}

export default Button;
