import React from 'react'

function FilesHeader() {
    return (
        <div className="row content-list-head">
            <div className="col-auto">
                <h3>Files</h3>
                </div>
                <form className="col-md-auto">
                <div className="input-group input-group-round">
                    <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="material-icons">filter_list</i>
                    </span>
                    </div>
                    <input type="search" className="form-control filter-list-input" placeholder="Filter files" aria-label="Filter Tasks" />
                </div>
                </form>
            </div>
    )
}

export default FilesHeader
