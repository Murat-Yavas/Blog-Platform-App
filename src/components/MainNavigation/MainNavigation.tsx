import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FaHome } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { blogActions } from "../../redux/blog-slice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { SidebarData } from "../Sidebar/SidebarData";
import { IoIosArrowDown } from "react-icons/io";
import SearchBlogInput from "../SearchBlogInput/SearchBlogInput";

const MainNavigation = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenTopicList, setIsOpenTopicList] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  console.log(user);

  const handleBlogModal = () => {
    dispatch(blogActions.toggleBlogCreateModal(true));
  };

  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("username");
    window.location.reload();
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navigation}`}>
      <div className="block md:hidden ">
        {isMenuOpen ? (
          <ul className={`${styles["hamburger-menu"]}`}>
            <div>
              <NavLink className={`${styles.text}`} to="/">
                Home
              </NavLink>
            </div>
            <div>
              <p onClick={handleBlogModal}>Post a blog</p>
            </div>

            <div>
              {user.id === null ? (
                <NavLink to="/auth">Login/Signup</NavLink>
              ) : (
                <>
                  <p className="mr-4 mb-4" onClick={() => handleLogout()}>
                    Logout
                  </p>
                  <NavLink to={`/users/${localStorage.getItem("currentUser")}`}>
                    Profile
                  </NavLink>
                </>
              )}
            </div>
            <div>
              <p
                onClick={() => setIsOpenTopicList(!isOpenTopicList)}
                className="flex"
              >
                Topics
                <span className={`${styles["topic-arrow"]}`}>
                  {isOpenTopicList ? (
                    <IoIosArrowDown className="rotate-180 duration-500" />
                  ) : (
                    <IoIosArrowDown className="duration-500" />
                  )}
                </span>
              </p>
              {isOpenTopicList ? (
                <div className={`${styles["topic-list"]}`}>
                  {SidebarData.map((data, index) => (
                    <NavLink
                      to={`/topic/${data.topic}`}
                      className={` mb-4 ${styles["topic-list-item"]}`}
                      key={index}
                    >
                      {data.topic.charAt(0).toUpperCase() + data.topic.slice(1)}
                    </NavLink>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className={`${styles["nav-section"]}`}>
        <p className="mr-8 text-xl text-custom-blue">Arcticle</p>
        <NavLink to="/" className={`${styles["nav-icon"]}`}>
          <FaHome />
        </NavLink>

        <p onClick={handleBlogModal} className={`${styles["nav-icon"]}`}>
          <RiArticleFill />
        </p>
      </div>

      <div>
        <SearchBlogInput />
      </div>

      <div className={`${styles["nav-section"]}`}>
        {localStorage.getItem("currentUser") === null ? (
          <NavLink to="/auth">Login/Sign in</NavLink>
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

      <p className={`${styles["menu"]} ml-4`}>
        <GiHamburgerMenu
          onClick={handleOpenMenu}
          className={`${styles["menu-item"]}`}
        />
      </p>
    </div>
  );
};

export default MainNavigation;
