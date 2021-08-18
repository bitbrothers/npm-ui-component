import React from 'react'

function Card({title, message, link, linkText}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{message}</p>
                <a href={link} className="btn btn-primary">{linkText}</a>
            </div>
        </div>
    )
}

export default Card
