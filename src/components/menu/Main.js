import React from 'react'

function Main() {
    return (
        <div class="main-menu-container" id="sidebar-menu">
            <ul class="main-menu">
                <li class="main-menu__item js-menu-item"><a class="main-menu__link js-menulink">
                        <ul class="sub-menu js-submenu">
                            <li class="main-menu__item js-sub-item"><a class="main-menu__link"></a></li>
                        </ul>
                    </a></li>
            </ul>
        </div>
    )
}

export default Main
