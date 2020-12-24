import React from 'react';

function Avatar({source, size}) {
    return <img alt="..." class={`avatar avatar-${size}`} src={source} />
}

export default Avatar
