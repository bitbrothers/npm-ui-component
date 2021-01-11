import React from 'react'
import CardList from '../Custom/CardList'
import ContentHeader from './TasksHeader'

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


