import React from 'react'

function Drop() {
    return (
            <form className="dropzone dz-clickable" action="https://mediumra.re/dropzone/upload.php">
                    <span className="dz-message">Drop files here or click here to upload</span>
            </form>
    )
}

export default Drop
