import React from 'react'

function AvatarList({source}) {
    return (
        <ul class="avatars">
            <li>
            <img alt="..." class="avatar" src={source} />
            <img alt="..." class="avatar" src={source} />
            <img alt="..." class="avatar" src={source} />
            </li>
        </ul>
    )
}

export default AvatarList
