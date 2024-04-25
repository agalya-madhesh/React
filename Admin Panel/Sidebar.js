import React, { useState } from "react";
import "./Siderbar.css";
import Logo from "../../img/img1.png";
import { SidebarData } from "../../Data/Data";

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Code<span>Hub</span>
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            className={`menuItem ${activeItem === index ? "active" : ""}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <div className="iconContainer">
              <item.icon />
            </div>
            <span className="itemName">{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;