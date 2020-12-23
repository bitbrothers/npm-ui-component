import React from 'react'

function NoteCard() {
    return (
        <div class="card card-note">
            <div class="card-header">
                <div class="media align-items-center">
                <img alt=".." src="..." class="avatar" />
                <div class="media-body">
                    <h6 class="mb-0">...</h6>
                </div>
                </div>
                <div class="d-flex align-items-center">
                <span>...</span>
                <div class="ml-1 dropdown card-options">
                    <button class="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">more_vert</i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item text-danger" href="#">Delete</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="card-body">
                ...
            </div>
        </div>
    )
}

export default NoteCard
