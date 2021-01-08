import React from 'react'

function ActivityHeader() {
    return (
        <div class="row content-list-head">
            <div class="col-auto">
            <h3>Activity</h3>
            </div>
            <form class="col-md-auto">
            <div class="input-group input-group-round">
                <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="material-icons">filter_list</i>
                </span>
                </div>
                <input type="search" class="form-control filter-list-input" placeholder="Filter activity" aria-label="Filter activity" />
            </div>
            </form>
        </div>
    )
}

export default ActivityHeader
