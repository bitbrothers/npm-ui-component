import React from 'react';
import Aux from '../hoc/Aux'

function Checklist() {
    return (
        <Aux>
            <form className="checklist">
                <div className="row justify-content-between">
                    <div className="form-group col-md-auto">
                        <span className="checklist-reorder">
                            <i className="material-icons">reorder</i>
                        </span>
                        <div className="custom-control custom-checkbox col-md-auto">
                            <input type="checkbox" className="custom-control-input" id="..." />
                            <label className="custom-control-label" for="..."></label>
                            <span contenteditable="true">Checklist text</span>
                            <div className="checklist-strikethrough"></div>
                        </div>
                    </div> end of form group
                </div> end of individual checklist item
            </form>
            <div className="drop-to-delete">
                <div className="drag-to-delete-title">
                    <i className="material-icons">delete</i>
                </div>
            </div>
        </Aux>
    )
}

export default Checklist
