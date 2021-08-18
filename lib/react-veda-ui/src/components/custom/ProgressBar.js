import React from 'react'

function ProgressBar({style, value}) {
    return (
        <div className="progress">
            <div className={`progress-bar ${style}`} role="progressbar" style={{width: "25%"}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}

export default ProgressBar
