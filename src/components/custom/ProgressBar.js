import React from 'react'

function ProgressBar({style, value}) {
    return (
        <div class="progress">
            <div class={`progress-bar ${style}`} role="progressbar" style={{width: "25%"}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}

export default ProgressBar