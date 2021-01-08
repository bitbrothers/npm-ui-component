import React from 'react'
import CardList from '../../pipeline/CardList'
import ContentHeader from '../ContentHeader'

function Tasks() {
    return (
            <div class="tab-pane fade active show" id="tasks" role="tabpanel" data-filter-list="card-list-body">
                <ContentHeader />
                <div class="content-list-body">
                    <CardList />
                </div>
            </div>
        
    )
}

export default Tasks


