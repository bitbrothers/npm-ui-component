import React from 'react'

function Search() {
    return (
        <form>
            <div class="input-group input-group-dark input-group-round">
                <div class="input-group-prepend">
                <span class="input-group-text">
                    <i class="material-icons">search</i>
                </span>
                </div>
                <input type="search" class="form-control form-control-dark" placeholder="Search" aria-label="Search app" />
            </div>
        </form>
    )
}

export default Search
