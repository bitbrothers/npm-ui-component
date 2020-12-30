import React from 'react'
import {Link} from 'react-router-dom';

function QuickLinks(linkitems) {
    return (
            <div class="quick-links"><span class="quick-links__title">Quick Links</span>
                    <ul class="quick-links__list">
                        {linkitems.items.map(item => {
                            return <li class="quick-links__item"><Link class="quick-links__link" to={item.linkto}>{item.title}</Link></li>
                        })} 
                    </ul>
            </div>
    )
}

export default QuickLinks;
