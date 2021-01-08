import React from 'react';

function Avatar({source, name, size}) {
    return <img alt="User" src={source} class="avatar" data-title={name} data-toggle="tooltip" title={name}/>
}

export default Avatar;
