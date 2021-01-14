import React, {useState} from 'react';


import Breadcrumbs from '../Custom/Breadcrumbs';
import Navbar from '../Custom/Navbar';
import Header from '../Header/Header'
import Nav from '../Custom/Nav';
import Tasks from '../Tasks/Tasks'
import Files from '../Files/Files';
import Activity from '../Activity/Activity';

import UserModal from '../Modals/UserModal';
import TaskModal from '../Modals/TaskModal';
import ProjectModal from '../Modals/ProjectModal';


function Project({data}) {

    return (
        <div class="layout layout-nav-side">
            <Navbar 
            logo={data.common.logo}
            user={data.common.fuser1}/>
            <div class="main-container">
                {/* Breadcrumbs */}
                <Breadcrumbs />

                {/* Container */}
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-xl-10">
                            <Header 
                            users={data.pages.projectpage.activeusers}/>
                            <Nav 
                            titles={data.pages.projectpage.nav}/>
                            <div class="tab-content">
                                <Tasks />
                                <Files />
                                <Activity />
                            </div>
                            
                            <UserModal 
                            users={data.common.users}
                            activeusers={data.pages.projectpage.tasks.activeusers}/>

                            <ProjectModal 
                            users={data.common.users}
                            activeusers={data.pages.projectpage.activeusers}/>

                            <TaskModal 
                            users={data.common.users}
                            activeusers={data.pages.projectpage.tasks.activeusers}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
