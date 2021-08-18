import React from 'react'
import CardList from '../Custom/CardList'
import ContentHeader from './TasksHeader'

function Tasks() {
    return (
            <div className="tab-pane fade active show" id="tasks" role="tabpanel" data-filter-list="card-list-body">
                <ContentHeader />
                <div className="content-list-body">
                    <CardList />
                </div>
            </div>
        
    )
}

export default Tasks


