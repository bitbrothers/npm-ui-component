import React from 'react';
import Link from 'react-router-dom';
import Button from './Button';

function Breadcrumbs() {
    return (
        <div className="navbar bg-white breadcrumb-bar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Overview</a>
              </li>
              <li className="breadcrumb-item"><a href="pages-app.html#">App Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Project</li>
            </ol>
          </nav>

          <div className="dropdown">
            <button className="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
              <i className="material-icons">settings</i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">

              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#project-edit-modal">Edit Project</a>
              <a className="dropdown-item" href="#">Share</a>
              <a className="dropdown-item" href="#">Mark as Complete</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="#">Archive</a>

            </div>
          </div>

        </div>
    )
}

export default Breadcrumbs;
