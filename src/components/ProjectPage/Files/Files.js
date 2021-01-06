import React from 'react'
import ContentHeader from "../ContentHeader"
import Drop from './Drop'
import Upload from './Upload'
import FilesContent from './FilesContent'

function Activity() {
    return (
            <div class="tab-pane fade" id="files" role="tabpanel" data-filter-list="dropzone-previews">
                  <div class="content-list">
                      <ContentHeader />
                      <div class="row content-list-body">
                          <div className="col">
                              <Upload />
                              <Drop />
                              <FilesContent />
                          </div>
                      </div>
                    </div>
            </div>
    )
}

export default Activity
