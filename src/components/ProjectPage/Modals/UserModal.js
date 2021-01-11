import React from 'react'
import AvatarChecklist from './AvatarChecklist'
import data from '../../../Data'; 
import Footer from './Footer';

function UserModal() {
    return (
        <form class="modal fade" id="user-manage-modal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Manage Users</h5>
                      <button type="button" class="close btn btn-round" data-dismiss="modal" aria-label="Close">
                        <i class="material-icons">close</i>
                      </button>
                    </div>
            
                    <div class="modal-body">
                      <div class="users-manage" data-filter-list="form-group-users">
                        <div class="mb-3">
                          {/* Avatar */}
                          <ul class="avatars text-center">

                            <li>
                              <img alt="Claire Connors" src="assets/img/avatar-female-1.jpg" class="avatar" data-toggle="tooltip" data-title="Claire Connors" />
                            </li>

                            <li>
                              <img alt="Marcus Simmons" src="assets/img/avatar-male-1.jpg" class="avatar" data-toggle="tooltip" data-title="Marcus Simmons" />
                            </li>

                            <li>
                              <img alt="Peggy Brown" src="assets/img/avatar-female-2.jpg" class="avatar" data-toggle="tooltip" data-title="Peggy Brown" />
                            </li>

                            <li>
                              <img alt="Harry Xai" src="assets/img/avatar-male-2.jpg" class="avatar" data-toggle="tooltip" data-title="Harry Xai" />
                            </li>

                          </ul>
                        </div>
                        <div class="input-group input-group-round">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="material-icons">filter_list</i>
                            </span>
                          </div>
                          <input type="search" class="form-control filter-list-input" placeholder="Filter members" aria-label="Filter Members"/>
                        </div>
                        <div class="form-group-users filter-list-1610357232689">
                          <AvatarChecklist 
                          users={data.common.users}/>
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
