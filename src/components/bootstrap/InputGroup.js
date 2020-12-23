import React from 'react'

function InputGroup() {
    return (
        <div class="input-group input-group-round">
            <div class="input-group-prepend">
                <span class="input-group-text">
                <i class="material-icons">email</i>
                </span>
            </div>
            <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
        </div>
    )
}

export default InputGroup;
