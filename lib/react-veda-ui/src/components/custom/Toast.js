import React from 'react'

function Toast({source, title, time, message,}) {
    return (
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                <div className="toast-header">
                    <img src="..." className="rounded mr-2" alt="..." />
                    <strong className="mr-auto">{title}</strong>
                    <small>{time}</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
    )
}

export default Toast
