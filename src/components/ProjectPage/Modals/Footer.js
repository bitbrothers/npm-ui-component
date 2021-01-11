import React from 'react'

function Footer({content}) {
    return (
        <div class="modal-footer">
            <button role="button" class="btn btn-primary" type="submit">
            {content}
            </button>
        </div>
    )
}

export default Footer
