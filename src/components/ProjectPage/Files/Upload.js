import React from 'react'

function Upload() {
    return (
            <ul class="d-none dz-template">
                <li class="list-group-item dz-preview dz-file-preview">
                <div class="media align-items-center dz-details">
                    <ul class="avatars">
                        <li>
                            <div class="avatar bg-primary dz-file-representation">
                            <i class="material-icons">attach_file</i>
                            </div>
                        </li>
                        <li>
                            <img alt="David Whittaker" src="assets/img/avatar-male-4.jpg" class="avatar" data-title="David Whittaker" data-toggle="tooltip" />
                        </li>
                    </ul>
                    <div class="media-body d-flex justify-content-between align-items-center">
                        <div class="dz-file-details">
                            <a href="#" class="dz-filename">
                            <span data-dz-name=""></span>
                            </a>
                            <br />
                            <span class="text-small dz-size" data-dz-size=""></span>
                        </div>
                        <img alt="Loader" src="assets/img/loader.svg" class="dz-loading" />
                        <div class="dropdown">
                            <button class="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="material-icons">more_vert</i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Download</a>
                            <a class="dropdown-item" href="#">Share</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#" data-dz-remove="">Delete</a>
                            </div>
                        </div>
                        <button class="btn btn-danger btn-sm dz-remove" data-dz-remove="">
                            Cancel
                        </button>
                    </div>
                </div>
                <div class="progress dz-progress">
                    <div class="progress-bar dz-upload" data-dz-uploadprogress=""></div>
                </div>
                </li>
            </ul>
    )
}

export default Upload
