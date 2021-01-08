import React from 'react'
import Avatar from './Avatar'

function AvatarList({source, size}) {

    const users = source.map(item=>{
        return <li><Avatar source={item.src} name={item.name}/></li>
    })

    return (
        <ul class="avatars">
            {users}
        </ul>
    )      
}

export default AvatarList
