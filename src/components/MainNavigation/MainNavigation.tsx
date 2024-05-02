import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FaHome } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";

const MainNavigation = () => {
  return (
    <div className={`${styles.navigation}`}>
      <div className={`${styles["nav-section"]}`}>
        <p className="mr-8 text-xl">Arcticle</p>

        <NavLink to="/" className={`${styles["nav-icon"]}`}>
          <FaHome />
        </NavLink>

        <NavLink to="/" className={`${styles["nav-icon"]}`}>
          <RiArticleFill />
        </NavLink>
      </div>

      <div className={`${styles["nav-section"]}`}>
        <NavLink to="/">Login/Signup</NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
