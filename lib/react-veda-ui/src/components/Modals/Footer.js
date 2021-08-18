import React from 'react'

function Footer({content}) {
    return (
        <div className="modal-footer">
            <button role="button" className="btn btn-primary" type="submit">
            {content}
            </button>
        </div>
    )
}

export default Footer
