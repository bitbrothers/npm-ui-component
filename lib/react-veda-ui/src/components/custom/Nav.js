import React from 'react'

function Nav({titles}) {

    const headers = titles.map(item =>{
      return <li className="nav-item"><a className={`nav-link ${item.active?'active':null}`} data-toggle="tab" href={`#${item.name.toLowerCase()}`} role="tab" aria-controls="tasks" aria-selected="true">{item.name}</a></li>
    })
    return (
            <ul className="nav nav-tabs nav-fill" role="tablist">
                {headers}
            </ul>
    )
}

export default Nav
