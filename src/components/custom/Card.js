import React from 'react'

function Card({title, message, link, linkText}) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{message}</p>
                <a href={link} class="btn btn-primary">{linkText}</a>
            </div>
        </div>
    )
}

export default Card
