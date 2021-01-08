import React from 'react';
import Link from 'react-router-dom';
import Button from './Button';

function Breadcrumbs() {
    return (
        <div class="navbar bg-white breadcrumb-bar">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Overview</a>
              </li>
              <li class="breadcrumb-item"><a href="pages-app.html#">App Pages</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Project</li>
            </ol>
          </nav>

          <div class="dropdown">
            <button class="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
              <i class="material-icons">settings</i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">

              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#project-edit-modal">Edit Project</a>
              <a class="dropdown-item" href="#">Share</a>
              <a class="dropdown-item" href="#">Mark as Complete</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#">Archive</a>

            </div>
          </div>

        </div>
    )
}

export default Breadcrumbs;
