import React from 'react'
import ActivityHeader from './ActivityHeader'
import ActivityComponent from '../custom/Activity'

function Activity() {
    return (
        <div class="tab-pane fade" id="activity" role="tabpanel" data-filter-list="list-group-activity">
                <div class="content-list">
                    <ActivityHeader />
                </div>
                <div class="content-list-body">
                    <ActivityComponent />
                </div>
                </div>
    )
}

export default Activity
