import React from 'react'

function TeamCard() {
    return (
        <div class="card card-team">
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
                <a href="#"><h5>Team Name</h5></a>
                <span># Projects, # Members</span>
                </div>
                <ul class="avatars">
                ...
                </ul>
            </div>
        </div>
    )
}

export default TeamCard
