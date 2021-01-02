import React from 'react'
import {Link} from 'react-router-dom'

function Main(mainmenu) {

    return(
        <div class="main-menu-container" id="sidebar-menu">
            <ul class="main-menu">
                {
                    mainmenu.items.map(item=>{
                return <li class="main-menu__item js-menu-item">
                            <Link class="main-menu__link js-menulink nav-link">
                                {item.title}
                                <ul class="sub-menu js-submenu">
                                    {item.submenu ? 
                                        item.submenu.map(sub=>{
                                        return <li class="main-menu__item js-sub-item"><Link class="main-menu__link">{sub.title}</Link></li>
                                        })
                                    : null}
                                </ul>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main;
