import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";
import { FaA } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className={`bg-white mt-0 ${styles.sidebar}`}>
      <div className={`bg-white ${styles["sidebar-container"]}`}>
        <div className={`bg-white ${styles["sidebar-title"]}`}>
          <FaA className={` ${styles["sidebar-title-icon"]}`} />
          <p className="bg-white">TOPICS</p>
        </div>
        {SidebarData.map((data, index) => (
          <NavLink
            to={`/topic/${data}`}
            className={`bg-white mb-4 ${styles["sidebar-item"]}`}
            key={index}
          >
            {data.icon}
            {data.topic.charAt(0).toUpperCase() + data.topic.slice(1)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
