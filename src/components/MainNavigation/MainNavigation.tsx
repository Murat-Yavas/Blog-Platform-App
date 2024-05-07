import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FaHome } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hooks";
import { blogActions } from "../../redux/blog-slice";

const MainNavigation = () => {
  const dispatch = useAppDispatch();

  const handleBlogModal = () => {
    dispatch(blogActions.toggleBlogCreateModal(true));
  };

  return (
    <div className={`${styles.navigation}`}>
      <div className={`${styles["nav-section"]}`}>
        <p className="mr-8 text-xl text-custom-blue">Arcticle</p>

        <NavLink to="/" className={`${styles["nav-icon"]}`}>
          <FaHome />
        </NavLink>

        <p onClick={handleBlogModal} className={`${styles["nav-icon"]}`}>
          <RiArticleFill />
        </p>
      </div>

      <div className={`${styles["nav-section"]}`}>
        <NavLink to="/auth">Login/Signup</NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
