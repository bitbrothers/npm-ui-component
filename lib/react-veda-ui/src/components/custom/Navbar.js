import React from 'react'
import Search from './Search'

function Navbar({logo, user}) {
    return (
<div className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">

<a className="navbar-brand" href="index.html">
  <img alt="Pipeline" src={logo} />
</a>
<div className="d-flex align-items-center">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="d-block d-lg-none ml-2">
    <div className="dropdown">
      <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img alt="Image" src={user} className="avatar" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a href="#" className="dropdown-item">Profile</a>
        <a href="#" className="dropdown-item">Account Settings</a>
        <a href="#" className="dropdown-item">Log Out</a>
      </div>
    </div>
  </div>
</div>
<div className="collapse navbar-collapse flex-column" id="navbar-collapse">
  <ul className="navbar-nav d-lg-block">

    <li className="nav-item">

      <a className="nav-link" href="#">Overview</a>

    </li>

    <li className="nav-item">

      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">Pages</a>
      <div id="submenu-2" className="collapse">
        <ul className="nav nav-small flex-column">

          <li className="nav-item">
            <a className="nav-link" href="#">App Pages</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Utility Pages</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Layouts</a>
          </li>

        </ul>
      </div>

    </li>

    <li className="nav-item">

      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">Components</a>
      <div id="submenu-3" className="collapse">
        <ul className="nav nav-small flex-column">

          <li className="nav-item">
            <a className="nav-link" href="#">Bootstrap</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Pipeline</a>
          </li>

        </ul>
      </div>

    </li>

    <li className="nav-item">

      <a className="nav-link" href="#">Documentation</a>

    </li>

    <li className="nav-item">

      <a className="nav-link" href="#">Changelog</a>

    </li>

  </ul>
  <hr />
  <div className="d-none d-lg-block w-100">
    <span className="text-small text-muted">Quick Links</span>
    <ul className="nav nav-small flex-column mt-2">
      <li className="nav-item">
        <a href="#" className="nav-link">Team Overview</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Project</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Single Task</a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">Kanban Board</a>
      </li>
    </ul>
    <hr />
  </div>
  <div>
    <Search />
    <div className="dropdown mt-2">
      <button className="btn btn-primary btn-block dropdown-toggle" type="button" id="newContentButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Add New
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Team</a>
        <a className="dropdown-item" href="#">Project</a>
        <a className="dropdown-item" href="#">Task</a>
      </div>
    </div>
  </div>
</div>
<div className="d-none d-lg-block">
  <div className="dropup">
    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img alt="Image" src={user} className="avatar" />
    </a>
    <div className="dropdown-menu">
      <a href="#" className="dropdown-item">Profile</a>
      <a href="#" className="dropdown-item">Account Settings</a>
      <a href="#" className="dropdown-item">Log Out</a>
    </div>
  </div>
</div>

</div>
    )
}

export default Navbar
