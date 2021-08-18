import React from 'react'

function Button({message, type, toggle, aria, icon}) {
    return <button type="button" data-toggle={''} aria-expanded={''} className={`btn btn-${type}`}>{message}<i className="material-icons">
    {icon}
    </i></button>
}

export default Button;
