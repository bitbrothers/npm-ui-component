import React from 'react';
import Link from 'react-router-dom';
import Button from './Button';

function Breadcrumbs() {
    return (
        <div class="navbar bg-white breadcrumb-bar">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
            <Button 
            type="round"
            toggle="dropdown"
            aria="false"
            icon="settings"/>
        </div>
    )
}

export default Breadcrumbs;
