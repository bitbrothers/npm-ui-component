import React from 'react'
import AvatarChecklist from './AvatarChecklist'
import data from '../../data'; 
import Footer from './Footer';
import AvatarList from '../Custom/AvatarList';


function TaskModal() {
    return (
        <form class="modal fade" id="task-add-modal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">New Task</h5>
                      <button type="button" class="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i class="material-icons">close</i>
                      </button>
                    </div>
                    
                    <ul class="nav nav-tabs nav-fill" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="task-add-details-tab" data-toggle="tab" href="#task-add-details" role="tab" aria-controls="task-add-details" aria-selected="true">Details</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="task-add-members-tab" data-toggle="tab" href="#task-add-members" role="tab" aria-controls="task-add-members" aria-selected="false">Members</a>
                      </li>
                    </ul>
                    <div class="modal-body">
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="task-add-details" role="tabpanel">
                          <h6>General Details</h6>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Name</label>
                            <input class="form-control col" type="text" placeholder="Task name" name="task-name"/>
                          </div>
                          <div class="form-group row">
                            <label class="col-3">Description</label>
                            <textarea class="form-control col" rows="3" placeholder="Task description" name="task-description"></textarea>
                          </div>
                          <hr />
                          <h6>Timeline</h6>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Start Date</label>
                            <input class="form-control col flatpickr-input" type="hidden" name="task-start" placeholder="Select a date" data-flatpickr="" data-default-date="2021-04-21" data-alt-input="true" value="2021-04-21"/><input class="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>
                          </div>
                          <div class="form-group row align-items-center">
                            <label class="col-3">Due Date</label>
                            <input class="form-control col flatpickr-input" type="hidden" name="task-due" placeholder="Select a date" data-flatpickr="" data-default-date="2021-09-15" data-alt-input="true" value="2021-09-15"/><input class="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>

                          </div>
                          <div class="alert alert-warning text-small" role="alert">
                            <span>You can change due dates at any time.</span>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="task-add-members" role="tabpanel">
                          <div class="users-manage" data-filter-list="form-group-users">
                            <div class="mb-3">
                              <AvatarList 
                              source={data.pages.projectpage.tasks.activeusers}
                              style="text-center"/>

                            </div>
                            <div class="input-group input-group-round">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="material-icons">filter_list</i>
                                </span>
                              </div>
                              <input type="search" class="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members"/>
                            </div>
                            <div class="form-group-users filter-list-1610357232685">
                          <AvatarChecklist 
                          users={data.common.users}/>
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
