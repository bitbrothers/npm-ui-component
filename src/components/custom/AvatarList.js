import React from 'react'
import Avatar from './Avatar'

function AvatarList({source, size, style}) {

    const users = source.map(item=>{
        return <li><Avatar source={item.src} name={item.name}/></li>
    })

    return (
        <ul class={`avatars ${style}`}>
            {users}
        </ul>
    )      
}

export default AvatarList
