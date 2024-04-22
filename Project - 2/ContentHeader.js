import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";



function AssignmentHeader() {
  return (
    <div className="content-header">
      <h1 className="header-title">Dashboard</h1>
      <div className="header-activity">
        <div className="searchbox">
          <input type="text" placeholder="Search anything here..." />
          <BiSearch className="icon"/>
        </div>
        <div className="notify">
          <BiNotification/>
        </div>
      </div>
    </div>
  );
}

export default AssignmentHeader;
