import React from 'react'

function AvatarChecklist({users}) {
    let count = 0
    const userlist = users.map(user => {
        count+=1
        return <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id={`user-manage-${count}`}/>
                    <label class="custom-control-label" for={`user-manage-${count}`}>
                        <span class="d-flex align-items-center">
                        <img alt={user.name} src={user.src} class="avatar mr-2"/>
                        <span class="h6 mb-0 SPAN-filter-by-text" data-filter-by="text">{user.name}</span>
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
