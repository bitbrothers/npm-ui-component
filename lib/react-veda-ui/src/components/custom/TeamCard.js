import React from 'react'

function TeamCard() {
    return (
        <div className="card card-team">
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
                <a href="#"><h5>Team Name</h5></a>
                <span># Projects, # Members</span>
                </div>
                <ul className="avatars">
                ...
                </ul>
            </div>
        </div>
    )
}

export default TeamCard
