import { useParams } from "react-router-dom";
import styles from "./UserProfile.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { fetchOneUser } from "../../redux/api/UserApiCall";
import BlogItem from "../UI/BlogItem/BlogItem";
import { fetchAllBlogsByUser } from "../../redux/api/BlogApiCall";

const UserProfile = () => {
  const [isOpenUserBlogs, setIsOpenUserBlogs] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { userBlogs } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  const param = useParams();

  useEffect(() => {
    fetchOneUser(dispatch, parseInt(param.userId!));
  }, [dispatch]);

  useEffect(() => {
    fetchAllBlogsByUser(dispatch, parseInt(param.userId!));
  }, [dispatch]);

  const handleUserBlogs = () => {
    setIsOpenUserBlogs(!isOpenUserBlogs);
  };

  return localStorage.getItem("currentUser") !== null ? (
    <div className={`${styles.user}`}>
      <div className={`mb-4 ${styles["user-section"]}`}>
        <div className={`${styles["user-info"]}`}>
          <span className={`mr-2 ${styles.avatar} avatar-round`}>
            {user?.username?.charAt(0).toUpperCase()}
          </span>
          <span className={`flex items-center ${styles.username}`}>
            {user?.username}
          </span>
        </div>
        <div className={`mt-4 ${styles["user-action"]}`}>
          <p>Blogs: {user.blog.length}</p>
          <p>Comments: {user.comment.length}</p>
        </div>
      </div>

      <div className={`${styles["show-blog-btn"]}`}>
        <button onClick={() => handleUserBlogs()}>
          {!isOpenUserBlogs ? "Show " : "Hide "} Blogs
        </button>
      </div>
      {isOpenUserBlogs ? (
        <div className={`mb-4 ${styles["user-blogs"]}`}>
          {userBlogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </div>
      ) : null}
    </div>
  ) : (
    <p className={`${styles["profile-message"]}`}>
      Login/Signup to view the profile
    </p>
  );
};

export default UserProfile;
