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

  useEffect(() => {
    fetchOneUser(dispatch, parseInt(param.userId!));
  }, [dispatch]);

  useEffect(() => {
    fetchAllBlogsByUser(dispatch, parseInt(param.userId!));
  }, []);

  const handleUserBlogs = () => {
    setIsOpenUserBlogs(true);
  };

  const param = useParams();
  return (
    <div className={`${styles.user}`}>
      <div className={`mb-4 ${styles["user-credentials"]}`}>
        <div>
          <span className={`bg-custom-blue mr-2 ${styles.avatar}`}>
            {user?.username?.charAt(0).toUpperCase()}
          </span>
          <span className={`${styles.username}`}>{user?.username}</span>
        </div>
        <div className={`mt-4 ${styles["user-action"]}`}>
          <p>Blogs: {user.blog.length}</p>
          <p>Comments: {user.comment.length}</p>
        </div>
      </div>

      <button onClick={() => handleUserBlogs()}>See blogs</button>
      {isOpenUserBlogs ? (
        <div className={`mb-4 ${styles["user-blogs"]}`}>
          {userBlogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
