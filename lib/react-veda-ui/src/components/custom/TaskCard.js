import React from 'react'

function TaskCard() {
    return (
        <div className="card card-task">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="card-body">
                <div className="card-title">
                <a href="#"><h6>Task Name</h6></a>
                <span className="text-small">Due Tomorrow</span>
                </div>
                <div className="card-meta">
                <ul className="avatars">
                    <li>
                    <img alt="..." className="avatar" src="..." />
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <i className="material-icons">playlist_add_check</i>
                    <span>-/-</span>
                </div>
                <div className="dropdown card-options">
                    <button className="btn-options" type="button" id="task-dropdown-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">more_vert</i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                    ...
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
