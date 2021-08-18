import React from 'react'
import AvatarChecklist from './AvatarChecklist'
import Footer from './Footer';
import AvatarList from '../Custom/AvatarList';

function ProjectModal({users,activeusers}) {
    return (
        <form className="modal fade" id="project-edit-modal" tabindex="-1" style={{display: "none"}} aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Project</h5>
                      <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                    </div>
               
                    <ul className="nav nav-tabs nav-fill" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="project-edit-details-tab" data-toggle="tab" href="#project-edit-details" role="tab" aria-controls="project-edit-details" aria-selected="true">Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="project-edit-members-tab" data-toggle="tab" href="#project-edit-members" role="tab" aria-controls="project-edit-members" aria-selected="false">Members</a>
                      </li>
                    </ul>
                    <div className="modal-body">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="project-edit-details" role="tabpanel">
                          <h6>General Details</h6>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Name</label>
                            <input className="form-control col" type="text" value="Brand Concept and Design" name="project-name"/>
                          </div>
                          <div className="form-group row">
                            <label className="col-3">Description</label>
                            <textarea className="form-control col" rows="3" placeholder="Project description" name="project-description">Research, ideate and present brand concepts for client consideration</textarea>
                          </div>
                          <hr/>
                          <h6>Timeline</h6>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Start Date</label>
                            <input className="form-control col flatpickr-input" type="hidden" name="project-start" placeholder="Select a date" data-flatpickr="" data-default-date="2021-04-21" data-alt-input="true" value="2021-04-21"/><input className="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>
                          </div>
                          <div className="form-group row align-items-center">
                            <label className="col-3">Due Date</label>
                            <input className="form-control col flatpickr-input" type="hidden" name="project-due" placeholder="Select a date" data-flatpickr="" data-default-date="2021-09-15" data-alt-input="true" value="2021-09-15"/><input className="form-control col flatpickr-input form-control input" placeholder="Select a date" tabindex="0" type="text" readonly="readonly"/>
                          </div>
                          <div className="alert alert-warning text-small" role="alert">
                            <span>You can change due dates at any time.</span>
                          </div>
                          <hr/>
                          <h6>Visibility</h6>
                          <div className="row">
                            <div className="col">
                              <div className="custom-control custom-radio">
                                <input type="radio" id="visibility-everyone" name="visibility" className="custom-control-input" checked=""/>
                                <label className="custom-control-label" for="visibility-everyone">Everyone</label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="custom-control custom-radio">
                                <input type="radio" id="visibility-members" name="visibility" className="custom-control-input"/>
                                <label className="custom-control-label" for="visibility-members">Members</label>
                              </div>
                            </div>
                            <div className="col">
                              <div className="custom-control custom-radio">
                                <input type="radio" id="visibility-me" name="visibility" className="custom-control-input"/>
                                <label className="custom-control-label" for="visibility-me">Just me</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="project-edit-members" role="tabpanel">
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
                            <div className="form-group-users filter-list-1610357232687">
                              <AvatarChecklist 
                              users={users}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
 
                    <Footer 
                    content="Save"/>
                  </div>
                </div>
              </form>
    )
}

export default ProjectModal
