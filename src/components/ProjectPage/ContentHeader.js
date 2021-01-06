import React from 'react'

function ContentHeader() {
    return (
            <div class="row content-list-head">
                <div class="col-auto">
                <h3>Tasks</h3>
                <button class="btn btn-round" data-toggle="modal" data-target="#task-add-modal">
                    <i class="material-icons">add</i>
                </button>
                </div>
                <form class="col-md-auto">
                <div class="input-group input-group-round">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="material-icons">filter_list</i>
                    </span>
                    </div>
                    <input type="search" class="form-control filter-list-input" placeholder="Filter tasks" aria-label="Filter Tasks" />
                </div>
                </form>
            </div>
    )
}

export default ContentHeader
