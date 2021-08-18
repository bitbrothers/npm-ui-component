import React from 'react';
import TaskCard from './TaskCard';

function CardList({icon, title}) {
    return (
        <div className="card-list">
            <div className="card-list-head">
                <h6>{title}</h6>
                <div className="dropdown">
                <button className="btn-options" type="button" id="..." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">{icon}</i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    ...
                </div>
                </div>
            </div>
            <TaskCard />
            <TaskCard />
        </div>
    )
}

export default CardList
