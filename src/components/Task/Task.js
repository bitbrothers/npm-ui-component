import React from 'react';
import Sidebar from '../menu/Sidebar';
import data from '../../Data'; // Props
import Breadcrumbs from '../bootstrap/Breadcrumbs';
import Navbar from '../bootstrap/Navbar';
import Header from './Header'
import Nav from '../bootstrap/Nav';
import Dropwdown from '../bootstrap/Dropwdown';

function Task() {
    return (
        <div class="layout layout-nav-side">
            <Navbar />
            <div class="main-container">
                {/* Breadcrumbs */}
                <Breadcrumbs />

                {/* Container */}
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-xl-10">
                            <Header />
                            <Nav />
                            <Dropwdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
