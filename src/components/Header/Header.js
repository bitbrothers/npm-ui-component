import React from 'react';
import AvatarList from '../Custom/AvatarList';
import ProgressBar from '../Custom/ProgressBar';


function Header({users}) {
    return (
        <div class="page-header">
            <h1>Brand Concept and Design</h1>
            <p class="lead">Research, ideate and present brand concepts for client consideration</p>
            <div class="d-flex align-items-center">
                <AvatarList 
                source={users}/>
                <button class="btn btn-round flex-shrink-0" data-toggle="modal" data-target="#user-manage-modal">
                    <i class="material-icons">add</i>
                </button>
            </div>
            <div>
                <ProgressBar 
                style="bg-success"
                value="25"/>
                
                <div class="d-flex justify-content-between text-small">
                    <div class="d-flex align-items-center">
                      <i class="material-icons">playlist_add_check</i>
                      <span>3/12</span>
                    </div>
                    <span>Due 9 days</span>
                  </div>
            </div>
        </div>
    )
}

export default Header
