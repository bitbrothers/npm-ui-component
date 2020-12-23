import React from 'react'

function ProjectCard() {
    return (
        <div class="card card-project">
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                <a href="#"><h5>Project Name</h5></a>
                </div>
                <ul class="avatars">
                ...
                </ul>
                <div class="card-meta d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <i class="material-icons mr-1">playlist_add_check</i>
                    <span class="text-small">-/-</span>
                </div>
                <span class="text-small">Due date</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
