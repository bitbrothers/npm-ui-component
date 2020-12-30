import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
    return(
        <div class="main-menu-container" id="sidebar-menu">
            <ul class="main-menu">
                <li class="main-menu__item js-menu-item">
                    <Link class="main-menu__link js-menulink">
                        Overview
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><Link class="main-menu__link"></Link></li>
                        </ul>
                    </Link>
                </li>
                <li class="main-menu__item js-menu-item">
                    <Link class="main-menu__link js-menulink">
                        Pages
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><Link class="main-menu__link"></Link></li>
                        </ul>
                    </Link>
                </li>
                <li class="main-menu__item js-menu-item">
                    <Link class="main-menu__link js-menulink">
                        Components
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><Link class="main-menu__link"></Link></li>
                        </ul>
                    </Link>
                </li>
                <li class="main-menu__item js-menu-item">
                    <Link class="main-menu__link js-menulink">
                        Documentation
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><Link class="main-menu__link"></Link></li>
                        </ul>
                    </Link>
                </li>
                <li class="main-menu__item js-menu-item">
                    <Link class="main-menu__link js-menulink">
                        Changelog
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><Link class="main-menu__link"></Link></li>
                        </ul>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Main;
