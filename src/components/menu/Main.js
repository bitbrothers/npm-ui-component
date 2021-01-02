import React from 'react'
import {Link} from 'react-router-dom'

function Main(mainmenu) {
    return(
        <div class="main-menu-container" id="sidebar-menu">
            <ul class="main-menu">
                {   
                    mainmenu.items.map(item => {
                        //Active with Sub Menu
                        if(item.active && item.submenu){
                            return <li class="main-menu__item js-menu-item main-menu--has-children main-menu__item--active">
                            <Link class="main-menu__link js-menulink nav-link drop-link" to='/'>
                                {item.title}
                            </Link>
                            <ul class="sub-menu js-submenu">
                                    {
                                        item.submenu.map(sub=>{
                                        return <li class="main-menu__item js-sub-item main-menu__item--has-children"><Link class="main-menu__link" to='/'>{sub.title}</Link></li>
                                        })
                                    }
                            </ul>
                        </li>
                        }
                        // Active only
                        else if(item.active){
                            return <li class="main-menu__item js-menu-item main-menu__item--active">
                            <Link class="main-menu__link js-menulink nav-link" to='/'>
                                {item.title}    
                            </Link>
                        </li>
                        }
                        // Sub Menu only
                        else if(item.submenu){
                            return <li class="main-menu__item js-menu-item main-menu--has-children">
                            <Link class="main-menu__link js-menulink nav-link drop-link" to='/'>
                                {item.title}
                            </Link>
                            <ul class="sub-menu js-submenu">
                                    {
                                        item.submenu.map(sub=>{
                                        return <li class="main-menu__item js-sub-item main-menu__item--has-children"><Link class="main-menu__link" to='/'>{sub.title}</Link></li>
                                        })
                                    }
                            </ul>
                        </li>
                        }
                        // Default
                        else{
                            return <li class="main-menu__item js-menu-item">
                            <Link class="main-menu__link js-menulink nav-link" to='/'>
                                {item.title}
                            </Link>
                        </li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Main;
