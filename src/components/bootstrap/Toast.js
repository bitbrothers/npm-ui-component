import React from 'react'

function Toast({source, title, time, message,}) {
    return (
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                <div class="toast-header">
                    <img src="..." class="rounded mr-2" alt="..." />
                    <strong class="mr-auto">{title}</strong>
                    <small>{time}</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    {message}
                </div>
            </div>
    )
}

export default Toast
