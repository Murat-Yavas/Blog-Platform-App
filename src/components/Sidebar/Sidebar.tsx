import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className={`mt-2 ${styles.sidebar}`}>
      <div className={`${styles["sidebar-container"]}`}>
        <p className="mt-4 ml-2">TOPICS</p>
        {SidebarData.map((data, index) => (
          <NavLink
            className={`mb-4 ${styles["sidebar-item"]}`}
            to="/"
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
