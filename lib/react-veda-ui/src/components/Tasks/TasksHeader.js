import React from 'react'

function ContentHeader() {
    return (
            <div className="row content-list-head">
                <div className="col-auto">
                <h3>Tasks</h3>
                <button className="btn btn-round" data-toggle="modal" data-target="#task-add-modal">
                    <i className="material-icons">add</i>
                </button>
                </div>
                <form className="col-md-auto">
                <div className="input-group input-group-round">
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="material-icons">filter_list</i>
                    </span>
                    </div>
                    <input type="search" className="form-control filter-list-input" placeholder="Filter tasks" aria-label="Filter Tasks" />
                </div>
                </form>
            </div>
    )
}

export default ContentHeader
