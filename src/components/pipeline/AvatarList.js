import React from 'react'
import Avatar from './Avatar'

function AvatarList({source, size}) {

    return (
        <ul class="avatars">
            <li><Avatar source={source}/></li>
            <li><Avatar source={source}/></li>
            <li><Avatar source={source}/></li>
        </ul>
    )      
}

export default AvatarList
