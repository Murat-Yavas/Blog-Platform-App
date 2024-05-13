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

  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("username");
    window.location.reload();
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
        {localStorage.getItem("currentUser") === null ? (
          <NavLink to="/auth">Login/Signup</NavLink>
        ) : (
          <>
            <p className="mr-4" onClick={() => handleLogout()}>
              Logout
            </p>
            <NavLink to={`/users/${localStorage.getItem("currentUser")}`}>
              Profile
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
