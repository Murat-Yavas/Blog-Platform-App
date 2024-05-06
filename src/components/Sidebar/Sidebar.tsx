import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className={`bg-white mt-0 ${styles.sidebar}`}>
      <div className={`bg-white ${styles["sidebar-container"]}`}>
        <p className="bg-white mt-4 ml-2">TOPICS</p>
        {SidebarData.map((data, index) => (
          <NavLink
            to={`/topic/${data}`}
            className={`bg-white mb-4 ${styles["sidebar-item"]}`}
            key={index}
          >
            {data.charAt(0).toUpperCase() + data.slice(1)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
