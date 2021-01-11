import React from 'react'

function ActivityComponent({icon, author, date, source}) {
    return (
        <ol class="list-group list-group-activity">
            <li class="list-group-item">
                <div class="media align-items-center">
                <ul class="avatars">
                    <li>
                    <div class="avatar bg-primary">
                        <i class="material-icons">{icon}</i>
                    </div>
                    </li>
                    <li>
                    <img alt={author} src={source} class="avatar" />
                    </li>
                </ul>
                <div class="media-body">
                    <div>
                    <span class="h6">{author} </span><span>performed action </span><a href="#">In item</a>
                    </div>
                    <span class="text-small">{date}</span>
                </div>
                </div>
            </li>

            <li class="list-group-item">
                <div class="media align-items-center">
                <ul class="avatars">
                    <li>
                    <div class="avatar bg-primary">
                        <i class="material-icons">{icon}</i>
                    </div>
                    </li>
                    <li>
                    <img alt={author} src={source} class="avatar" />
                    </li>
                </ul>
                <div class="media-body">
                    <div>
                    <span class="h6">{author} </span><span>performed action </span><a href="#">In item</a>
                    </div>
                    <span class="text-small">{date}</span>
                </div>
                </div>
            </li>
        </ol>
    )
}

export default ActivityComponent;
