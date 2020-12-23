import React from 'react'

function CardList({icon, title}) {
    return (
        <div class="card-list">
            <div class="card-list-head">
                <h6>{title}</h6>
                <div class="dropdown">
                <button class="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">{icon}</i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    ...
                </div>
                </div>
            </div>
            <div class="card card-task">...</div>
            <div class="card card-task">...</div>
        </div>
    )
}

export default CardList
