import React from "react";
import { Link } from 'react-router-dom';
import { BiHome, BiTask, BiSolidReport, BiStats, BiMessage, BiHelpCircle } from "react-icons/bi";
import '../Styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <BiHome className="logo-icon" />
        <h2>InnoTech</h2>
      </div>
      <div className="menu--list">
        <Link to="/" className="item active">
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link to="/assignment" className="item">
          <BiTask className="icon" />
          Assignment
        </Link>
        <Link to="/reports" className="item">
          <BiSolidReport className="icon" />
          Report
        </Link>
        <Link to="/stats" className="item">
          <BiStats className="icon" />
          Stats
        </Link>
        <Link to="/message" className="item">
          <BiMessage className="icon" />
          Message
        </Link>
        <Link to="/help" className="item">
          <BiHelpCircle className="icon" />
          Help
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
