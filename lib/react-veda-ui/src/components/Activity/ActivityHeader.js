import React from 'react'

function ActivityHeader() {
    return (
        <div className="row content-list-head">
            <div className="col-auto">
            <h3>Activity</h3>
            </div>
            <form className="col-md-auto">
            <div className="input-group input-group-round">
                <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="material-icons">filter_list</i>
                </span>
                </div>
                <input type="search" className="form-control filter-list-input" placeholder="Filter activity" aria-label="Filter activity" />
            </div>
            </form>
        </div>
    )
}

export default ActivityHeader
