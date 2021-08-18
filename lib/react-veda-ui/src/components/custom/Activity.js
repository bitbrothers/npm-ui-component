import React from 'react'

function ActivityComponent({icon, author, date, source}) {
    return (
        <ol className="list-group list-group-activity">
            <li className="list-group-item">
                <div className="media align-items-center">
                <ul className="avatars">
                    <li>
                    <div className="avatar bg-primary">
                        <i className="material-icons">{icon}</i>
                    </div>
                    </li>
                    <li>
                    <img alt={author} src={source} className="avatar" />
                    </li>
                </ul>
                <div className="media-body">
                    <div>
                    <span className="h6">{author} </span><span>performed action </span><a href="#">In item</a>
                    </div>
                    <span className="text-small">{date}</span>
                </div>
                </div>
            </li>

            <li className="list-group-item">
                <div className="media align-items-center">
                <ul className="avatars">
                    <li>
                    <div className="avatar bg-primary">
                        <i className="material-icons">{icon}</i>
                    </div>
                    </li>
                    <li>
                    <img alt={author} src={source} className="avatar" />
                    </li>
                </ul>
                <div className="media-body">
                    <div>
                    <span className="h6">{author} </span><span>performed action </span><a href="#">In item</a>
                    </div>
                    <span className="text-small">{date}</span>
                </div>
                </div>
            </li>
        </ol>
    )
}

export default ActivityComponent;
