import React, {useState} from 'react';

import Breadcrumbs from './custom/Breadcrumbs';
import Navbar from './custom/Navbar';
import Header from './Header/Header'
import Nav from './custom/Nav';
import Tasks from './Tasks/Tasks'
import Files from './Files/Files';
import Activity from './Activity/Activity'

import data from '../data'
import UserModal from './Modals/UserModal'
import TaskModal from './Modals/TaskModal';
import ProjectModal from './Modals/ProjectModal';


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
                            users={initial.pages.projectpage.activeusers}/>
                            <Nav 
                            titles={initial.pages.projectpage.nav}/>
                            <div class="tab-content">
                                <Tasks />
                                <Files />
                                <Activity />
                            </div>
                            <UserModal />
                            <ProjectModal />
                            <TaskModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
