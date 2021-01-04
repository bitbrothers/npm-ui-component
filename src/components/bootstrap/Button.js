import React from 'react'

function Button({message, type, toggle, aria, icon}) {
    return <button type="button" data-toggle={''} aria-expanded={''} class={`btn btn-${type}`}>{message}<i class="material-icons">
    {icon}
    </i></button>
}

export default Button;
