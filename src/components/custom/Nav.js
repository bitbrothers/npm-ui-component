import React from 'react'

function Nav({titles}) {

    const headers = titles.map(item =>{
      return <li class="nav-item"><a class={`nav-link ${item.active?'active':null}`} data-toggle="tab" href={`#${item.name.toLowerCase()}`} role="tab" aria-controls="tasks" aria-selected="true">{item.name}</a></li>
    })
    return (
            <ul class="nav nav-tabs nav-fill" role="tablist">
                {headers}
            </ul>
    )
}

export default Nav
