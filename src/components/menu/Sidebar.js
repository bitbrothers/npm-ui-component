import React from 'react'
import Main from './Main';
import {Link} from 'react-router-dom';
import QuickLinks from './QuickLinks';
import Search from './Search';

function Sidebar({logo, userPhoto, quicklinks,mainmenu}) {
    return (
        <aside class="left-sidebar" id="js-sidebar">
            <div class="logo"><a class="logo__link" href="#">
                    <h1><img src={logo} alt="logo-main" /></h1>
                </a></div>
                
            <div class="d-mobile"><button class="btn--collaspe js-btn-collaspe"><span class="btn--collaspe__icon"></span></button>
                <div class="user-profile js-dropdown">
                    <div class="user-profile__avatar js-dropdown-toggle"><img class="img-fluid" src="images/avatar-male-1.jpg" alt="user-avatar" /></div>
                    <div class="user-profile__setting js-dropdown-list">
                        <ul class="list-setting">
                            <li class="list-setting__item"><Link class="list-setting__link" to="/">Profile</Link></li>
                            <li class="list-setting__item"><Link class="list-setting__link"to="/">Account Setting</Link></li>
                            <li class="list-setting__item"><Link class="list-setting__link" to="/">Log out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="left-sidebar__collapse js-sidebar-collapse">
                
                <Main 
                items={mainmenu}/>

                <QuickLinks 
                items={quicklinks} />
                
                <Search />

                <div class="dropdown js-dropdown"><button class="btn--toggle js-dropdown-toggle">Add New</button>
                    <ul class="dropdown__list js-dropdown-list">
                        <li class="dropdown__item"><Link class="dropdown__link" to="/">Team</Link></li>
                        <li class="dropdown__item"><Link class="dropdown__link" to="/">Project</Link></li>
                        <li class="dropdown__item"><Link class="dropdown__link" to="/">Task</Link></li>
                    </ul>
                </div>

            </div>

            <div class="user-profile js-dropdown">
                <div class="user-profile__avatar js-dropdown-toggle"><img class="img-fluid" src={userPhoto} alt="user-avatar" /></div>
                <div class="user-profile__setting js-dropdown-list">
                    <ul class="list-setting">
                            <li class="list-setting__item"><Link class="list-setting__link" to="/">Profile</Link></li>
                            <li class="list-setting__item"><Link class="list-setting__link"to="/">Account Setting</Link></li>
                            <li class="list-setting__item"><Link class="list-setting__link" to="/">Log out</Link></li>
                    </ul>
                </div>
            </div>
            
        </aside>
    )
}

export default Sidebar
