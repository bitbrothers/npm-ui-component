import React from 'react'
import AvatarChecklist from './AvatarChecklist'
import AvatarList from '../Custom/AvatarList'
import Footer from './Footer';

function UserModal({users,activeusers}) {
    return (
        <form className="modal fade" id="user-manage-modal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Manage Users</h5>
                      <button type="button" className="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                    </div>
            
                    <div className="modal-body">
                      <div className="users-manage" data-filter-list="form-group-users">
                        <div className="mb-3">
                          {/* Avatar */}
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
                        <div className="form-group-users filter-list-1610357232689">
                          <AvatarChecklist 
                          users={users}/>
                        </div>
                      </div>
                    </div>
             
                    <Footer 
                    content="Done"/>

                  </div>
                </div>
              </form>
    )
}

export default UserModal
