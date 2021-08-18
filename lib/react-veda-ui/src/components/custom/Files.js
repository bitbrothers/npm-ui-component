import React from 'react'
import Aux from '../hoc/Aux'

function Files() {
    return (
        <Aux>
            <div className="d-none dz-template">
                <li className="list-group-item dz-preview dz-file-preview">
                    <div className="media align-items-center dz-details">
                    <ul className="avatars">
                        <li>
                        <div className="avatar bg-primary dz-file-representation">
                            <img className="avatar" data-dz-thumbnail />
                            <i className="material-icons">attach_file</i>
                        </div>
                        </li>
                        <li>
                        <img alt="..." src="..." className="avatar" data-title="..." data-toggle="tooltip" />
                        </li>
                    </ul>
                    <div className="media-body d-flex justify-content-between align-items-center">
                        <div className="dz-file-details">
                        <a href="#" className="dz-filename"><span data-dz-name></span></a><br></br>
                        <span className="text-small dz-size" data-dz-size></span>
                        </div>
                        <img alt="Loader" src="assets/img/loader.svg" className="dz-loading" />
                        <div className="dropdown">
                        <button className="btn-options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Download</a>
                            <a className="dropdown-item" href="#">Share</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#" data-dz-remove>Delete</a>
                        </div>
                        </div>
                        <button className="btn btn-danger btn-sm dz-remove" data-dz-remove>
                        Cancel
                        </button>
                    </div>
                    </div>
                    <div className="progress dz-progress">
                    <div className="progress-bar dz-upload" data-dz-uploadprogress></div>
                    </div>
                </li>
            </div>
            <form className="dropzone" action="...">
                <span className="dz-message">Drop files or click here to upload</span>
            </form>
            <ul className="list-group list-group-activity dropzone-previews flex-column-reverse">
            </ul>
        </Aux>
    )
}

export default Files
