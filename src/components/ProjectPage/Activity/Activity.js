import React from 'react'
import ContentHeader from '../ContentHeader'
import ActivityComponent from '../../pipeline/Activity'

function Activity() {
    return (
        <div class="tab-pane fade" id="activity" role="tabpanel" data-filter-list="list-group-activity">
                <div class="content-list">
                    <ContentHeader />
                </div>
                <div class="content-list-body">
                    <ActivityComponent />
                </div>
                </div>
    )
}

export default Activity
