import React from 'react';

function Avatar({source, name, style,  size}) {
    return <img alt="User" src={source} className={`avatar ${style}`} data-title={name} data-toggle="tooltip" title={name}/>
}

export default Avatar;
