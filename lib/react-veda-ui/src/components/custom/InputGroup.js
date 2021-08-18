import React from 'react'

function InputGroup() {
    return (
        <div className="input-group input-group-round">
            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="material-icons">email</i>
                </span>
            </div>
            <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" />
        </div>
    )
}

export default InputGroup;
