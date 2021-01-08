import React from 'react'

function FilesHeader() {
    return (
        <div class="row content-list-head">
            <div class="col-auto">
                <h3>Files</h3>
                </div>
                <form class="col-md-auto">
                <div class="input-group input-group-round">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="material-icons">filter_list</i>
                    </span>
                    </div>
                    <input type="search" class="form-control filter-list-input" placeholder="Filter files" aria-label="Filter Tasks" />
                </div>
                </form>
            </div>
    )
}

export default FilesHeader
