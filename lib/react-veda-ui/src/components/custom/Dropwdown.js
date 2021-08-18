import React from 'react'

function Dropwdown() {
    return (
        <div className="dropdown js-dropdown">
            <button className="btn btn-primary js-dropdown-toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
            </button>
            <div className="dropdown-menu js-dropdown-list" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    )
}

export default Dropwdown
