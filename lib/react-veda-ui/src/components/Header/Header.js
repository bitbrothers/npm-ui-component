import React from 'react';
import AvatarList from '../Custom/AvatarList';
import ProgressBar from '../Custom/ProgressBar';


function Header({users}) {
    return (
        <div className="page-header">
            <h1>Brand Concept and Design</h1>
            <p className="lead">Research, ideate and present brand concepts for client consideration</p>
            <div className="d-flex align-items-center">
                <AvatarList 
                source={users}/>
                <button className="btn btn-round flex-shrink-0" data-toggle="modal" data-target="#user-manage-modal">
                    <i className="material-icons">add</i>
                </button>
            </div>
            <div>
                <ProgressBar 
                style="bg-success"
                value="25"/>
                
                <div className="d-flex justify-content-between text-small">
                    <div className="d-flex align-items-center">
                      <i className="material-icons">playlist_add_check</i>
                      <span>3/12</span>
                    </div>
                    <span>Due 9 days</span>
                  </div>
            </div>
        </div>
    )
}

export default Header
