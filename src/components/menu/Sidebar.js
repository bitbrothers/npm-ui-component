import React from 'react'

function Sidebar({logo}) {
    return (
        <aside class="left-sidebar" id="js-sidebar">
            <div class="logo"><a class="logo__link" href="#">
                    <h1><img src="images/logo.svg" alt="logo-main" /></h1>
                </a></div>
            <div class="d-mobile"><button class="btn--collaspe js-btn-collaspe"><span class="btn--collaspe__icon"></span></button>
                <div class="user-profile js-dropdown">
                    <div class="user-profile__avatar js-dropdown-toggle"><img class="img-fluid" src="images/avatar-male-1.jpg" alt="user-avatar" /></div>
                    <div class="user-profile__setting js-dropdown-list">
                        <ul class="list-setting">
                            <li class="list-setting__item"><a class="list-setting__link" href="#">Profile</a></li>
                            <li class="list-setting__item"><a class="list-setting__link" href="#">Account Setting</a></li>
                            <li class="list-setting__item"><a class="list-setting__link" href="#">Log out</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="left-sidebar__collapse js-sidebar-collapse">

                <div class="quick-links"><span class="quick-links__title">Quick Links</span>
                    <ul class="quick-links__list">
                        <li class="quick-links__item"> <a class="quick-links__link">Team Overview</a></li>
                        <li class="quick-links__item"> <a class="quick-links__link">Project</a></li>
                        <li class="quick-links__item"> <a class="quick-links__link">Single Task</a></li>
                        <li class="quick-links__item"> <a class="quick-links__link">Kanban Board</a></li>
                    </ul>
                </div>
                <form class="search-form"> <span class="search-form__icon"> <i class="fas fa-search"></i></span><input class="search-form__field" type="text" placeholder="Search" /></form>
                <div class="dropdown js-dropdown"><button class="btn--toggle js-dropdown-toggle">Add New</button>
                    <ul class="dropdown__list js-dropdown-list">
                        <li class="dropdown__item"><a class="dropdown__link" href="#">Team</a></li>
                        <li class="dropdown__item"><a class="dropdown__link" href="#">Project</a></li>
                        <li class="dropdown__item"><a class="dropdown__link" href="#">Task</a></li>
                    </ul>
                </div>
            </div>

            <div class="user-profile js-dropdown">
                <div class="user-profile__avatar js-dropdown-toggle"><img class="img-fluid" src="images/avatar-male-1.jpg" alt="user-avatar" /></div>
                <div class="user-profile__setting js-dropdown-list">
                    <ul class="list-setting">
                        <li class="list-setting__item"><a class="list-setting__link" href="#">Profile</a></li>
                        <li class="list-setting__item"><a class="list-setting__link" href="#">Account Setting</a></li>
                        <li class="list-setting__item"><a class="list-setting__link" href="#">Log out</a></li>
                    </ul>
                </div>
            </div>
            
        </aside>
    )
}

export default Sidebar
