import React from 'react';
import AvatarList from '../pipeline/AvatarList';
import ProgressBar from '../bootstrap/ProgressBar';
import user from "../../assets/avatar-male-3.jpg"; //Props


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
                <ProgressBar />
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
