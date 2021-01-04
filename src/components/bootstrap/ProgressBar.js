import React from 'react'

function ProgressBar() {
    return (
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}

export default ProgressBar
