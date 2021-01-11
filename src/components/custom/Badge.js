import React from 'react'

function Badge({message, type}) {
    return <span class={`badge badge-${type}`}>{message}</span>
}

export default Badge;
