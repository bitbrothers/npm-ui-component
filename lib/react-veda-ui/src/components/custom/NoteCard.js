import React from 'react'

function NoteCard() {
    return (
        <div className="card card-note">
            <div className="card-header">
                <div className="media align-items-center">
                <img alt=".." src="..." className="avatar" />
                <div className="media-body">
                    <h6 className="mb-0">...</h6>
                </div>
                </div>
                <div className="d-flex align-items-center">
                <span>...</span>
                <div className="ml-1 dropdown card-options">
                    <button className="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Edit</a>
                    <a className="dropdown-item text-danger" href="#">Delete</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-body">
                ...
            </div>
        </div>
    )
}

export default NoteCard
