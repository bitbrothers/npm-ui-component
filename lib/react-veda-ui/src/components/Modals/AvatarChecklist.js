import React from 'react'
import Avatar from '../Custom/Avatar'

function AvatarChecklist({users}) {
    let count = 0
    const userlist = users.map(user => {
        count+=1
        return <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={`user-manage-${count}`}/>
                    <label className="custom-control-label" for={`user-manage-${count}`}>
                        <span className="d-flex align-items-center">
                        <Avatar 
                        name={user.name}
                        source={user.src}
                        style="mr-2"/>
                        <span className="h6 mb-0 SPAN-filter-by-text" data-filter-by="text">{user.name}</span>
                        </span>
                    </label>
                </div>
    })

    return (
        <div>
            {userlist}
        </div>   
    )
}

export default AvatarChecklist
