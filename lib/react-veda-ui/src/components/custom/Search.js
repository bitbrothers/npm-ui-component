import React from 'react'

function Search() {
    return (
        <form>
            <div className="input-group input-group-dark input-group-round">
                <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="material-icons">search</i>
                </span>
                </div>
                <input type="search" className="form-control form-control-dark" placeholder="Search" aria-label="Search app" />
            </div>
        </form>
    )
}

export default Search
