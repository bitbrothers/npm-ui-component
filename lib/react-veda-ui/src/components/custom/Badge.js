import React from 'react'

function Badge({message, type}) {
    return <span className={`badge badge-${type}`}>{message}</span>
}

export default Badge;
