import React from 'react'

function ProjectCard() {
    return (
        <div className="card card-project">
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                <a href="#"><h5>Project Name</h5></a>
                </div>
                <ul className="avatars">
                ...
                </ul>
                <div className="card-meta d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <i className="material-icons mr-1">playlist_add_check</i>
                    <span className="text-small">-/-</span>
                </div>
                <span className="text-small">Due date</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
