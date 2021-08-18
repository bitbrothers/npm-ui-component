import React from "react";
import ActivityHeader from "./ActivityHeader";
import ActivityComponent from "../custom/Activity";

function Activity() {
  return (
    <div
      className="tab-pane fade"
      id="activity"
      role="tabpanel"
      data-filter-list="list-group-activity"
    >
      <div className="content-list">
        <ActivityHeader />
      </div>
      <div className="content-list-body">
        <ActivityComponent />
      </div>
    </div>
  );
}

export default Activity;
