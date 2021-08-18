import React from 'react'

function KanbanCard() {
    return (
        <div className="card card-kanban">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="card-body">
                <div className="dropdown card-options">
                <button className="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    ...
                </div>
                </div>
                <div className="card-title">
                <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Task Title</h6></a>
                </div>
                <ul className="avatars">
                ...
                </ul>
                <div className="card-meta d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <i className="material-icons">playlist_add_check</i>
                    <span>-/-</span>
                </div>
                <span className="text-small">Due 2 days</span>
                </div>
            </div>
        </div>
    )
}

export default KanbanCard
