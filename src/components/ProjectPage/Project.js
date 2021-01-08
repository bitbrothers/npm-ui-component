import React, {useState} from 'react';


import Breadcrumbs from '../bootstrap/Breadcrumbs';
import Navbar from '../bootstrap/Navbar';
import Header from './Header'
import Nav from '../bootstrap/Nav';
import Tasks from './Tasks/Tasks'
import Files from './Files/Files';
import Activity from './Activity/Activity'

import data from '../../Data'


function Project() {

    const [initial, setState] = useState(data);

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
                            <Header 
                            users={initial.pages.projectpage.users}/>
                            <Nav 
                            titles={initial.pages.projectpage.nav}/>
                            <div class="tab-content">
                                <Tasks />
                                <Files />
                                <Activity />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
