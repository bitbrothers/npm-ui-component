import React from 'react';
import Aux from '../hoc/Aux'

function Checklist() {
    return (
        <Aux>
            <form class="checklist">
                <div class="row justify-content-between">
                    <div class="form-group col-md-auto">
                        <span class="checklist-reorder">
                            <i class="material-icons">reorder</i>
                        </span>
                        <div class="custom-control custom-checkbox col-md-auto">
                            <input type="checkbox" class="custom-control-input" id="..." />
                            <label class="custom-control-label" for="..."></label>
                            <span contenteditable="true">Checklist text</span>
                            <div class="checklist-strikethrough"></div>
                        </div>
                    </div> end of form group
                </div> end of individual checklist item
            </form>
            <div class="drop-to-delete">
                <div class="drag-to-delete-title">
                    <i class="material-icons">delete</i>
                </div>
            </div>
        </Aux>
    )
}

export default Checklist
