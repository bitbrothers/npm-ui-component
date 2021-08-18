import React from 'react'
import AvatarChecklist from './AvatarChecklist'
import Footer from './Footer';
import AvatarList from '../Custom/AvatarList';


function TaskModal({users, activeusers}) {
    return (
        <form className="modal fade" id="task-add-modal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">New Task</h5>
                      <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                    </div>
                    
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="task-add-details-tab" data-toggle="tab" href="#task-add-details" role="tab" aria-controls="task-add-details" aria-selected="true">Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="task-add-members-tab" data-toggle="tab" href="#task-add-members" role="tab" aria-controls="task-add-members" aria-selected="false">Members</a>
                      </li>
                    </ul>
                    <div className="modal-body">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="task-add-details" role="tabpanel">
                          <h6>General Details</h6>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Name</label>
                            <input className="form-control col" type="text" placeholder="Task name" name="task-name"/>
                          </div>
                          <div className="form-group row">
                            <label className="col-3">Description</label>
                            <textarea className="form-control col" rows="3" placeholder="Task description" name="task-description"></textarea>
                          </div>
                          <hr />
                          <h6>Timeline</h6>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Start Date</label>
                            <input className="form-control col flatpickr-input" type="hidden" name="task-start" placeholder="Select a date" data-flatpickr="" data-default-date="2021-04-21" data-alt-input="true" value="2021-04-21"/><input className="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>
                          </div>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Due Date</label>
                            <input className="form-control col flatpickr-input" type="hidden" name="task-due" placeholder="Select a date" data-flatpickr="" data-default-date="2021-09-15" data-alt-input="true" value="2021-09-15"/><input className="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>

                          </div>
                          <div className="alert alert-warning text-small" role="alert">
                            <span>You can change due dates at any time.</span>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="task-add-members" role="tabpanel">
                          <div className="users-manage" data-filter-list="form-group-users">
                            <div className="mb-3">
                              <AvatarList
                              source={activeusers}
                              style="text-center"/>

                            </div>
                            <div className="input-group input-group-round">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" className="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members"/>
                            </div>
                            <div className="form-group-users filter-list-1610357232685">
                          <AvatarChecklist 
                          users={users}/>
                        </div>

                          </div>
                        </div>
                      </div>
                    </div>
    
                    <Footer 
                    content="Create Task"/>
                  </div>
                </div>
              </form>
    )
}

export default TaskModal
