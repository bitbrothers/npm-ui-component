import React from 'react'

function Dropwdown() {
    return (
        <div class="dropdown js-dropdown">
            <button class="btn btn-primary js-dropdown-toggle dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
            </button>
            <div class="dropdown-menu js-dropdown-list" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    )
}

export default Dropwdown
