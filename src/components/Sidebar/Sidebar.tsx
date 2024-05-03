import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar}`}>
      {SidebarData.map((data) => (
        <NavLink className={`mb-4 mt-2 ${styles["sidebar-item"]}`} to="/">
          {data}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
