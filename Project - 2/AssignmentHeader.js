import React from 'react';
import { BiNotification, BiSearch } from "react-icons/bi";
import '../Styles/Assignment.css'; 

function AssignmentHeader() {
  return (
    <div className="assignment-header">
      <h1 className="assignment-title">Assignments</h1>
      <div className="assignment-activity">
        <div className="searchbox">
          <input type="text" placeholder="Search anything here..." />
          <BiSearch className="icon"/>
        </div>
        <div className="notify">
          <BiNotification className="icon"/>
        </div>
      </div>
    </div>
  );
}

export default AssignmentHeader;
