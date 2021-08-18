import React from 'react'
import FilesHeader from './FilesHeader'
import Drop from './Drop'
import Upload from './Upload'
import FilesContent from './FilesContent'

function Files() {
    return (
            <div className="tab-pane fade" id="files" role="tabpanel" data-filter-list="dropzone-previews">
                  <div className="content-list">
                      <FilesHeader />
                      <div className="row content-list-body">
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

export default Files
