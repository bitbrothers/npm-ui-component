import React from 'react'

function KanbanCard() {
    return (
        <div class="card card-kanban">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card-body">
                <div class="dropdown card-options">
                <button class="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">more_vert</i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    ...
                </div>
                </div>
                <div class="card-title">
                <a href="#" data-toggle="modal" data-target="#task-modal"><h6>Task Title</h6></a>
                </div>
                <ul class="avatars">
                ...
                </ul>
                <div class="card-meta d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <i class="material-icons">playlist_add_check</i>
                    <span>-/-</span>
                </div>
                <span class="text-small">Due 2 days</span>
                </div>
            </div>
        </div>
    )
}

export default KanbanCard
