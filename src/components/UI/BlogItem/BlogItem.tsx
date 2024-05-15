import { Blog } from "../../../redux/blog-slice";
import styles from "./BlogItem.module.css";
import { FaComment } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { textTruncate } from "../../../helpers/textTruncate";
import CommentItem from "../CommentItem/CommentItem";
import CommentInput from "../CommentInput/CommentInput";
import { ImCross } from "react-icons/im";
import { deleteOneBlog } from "../../../redux/api/BlogApiCall";
import { useAppDispatch } from "../../../redux/hooks";

interface BlogProps {
  blog: Blog;
}

const BlogItem = ({ blog }: BlogProps) => {
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setIsContentOpen(!isContentOpen);
  };

  const handleDeleteBlog = (blogId: number) => {
    alert("This blog will be deleted. Are you sure?");
    deleteOneBlog(dispatch, blogId);
  };

  return (
    <div
      key={blog.id}
      className={`p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}
    >
      <div className={`bg-white ${styles["top-section"]}`}>
        <div className={`bg-white flex mb-4 ${styles.author}`}>
          <span className="bg-white mr-2">
            <NavLink
              className={`text-xl ${styles.avatar} avatar-round`}
              to={`/users/${blog.userId}`}
            >
              {blog?.username?.charAt(0).toUpperCase()}
            </NavLink>
          </span>
          <span className="bg-white flex items-center ">{blog?.username}</span>
        </div>

        {+localStorage.getItem("currentUser")! === blog.userId ? (
          <ImCross
            className={`bg-white text-custom-blue ${styles["delete-icon"]}`}
            onClick={() => handleDeleteBlog(blog.id)}
          />
        ) : (
          ""
        )}
      </div>
      <div
        className={`bg-white ${styles?.article}`}
        onClick={() => handleOpen()}
      >
        <div className={`bg-white ${styles["article-info"]}`}>
          <h5 className="bg-white mb-1- text-2xl font-bold tracking-tight text-black dark:text-white">
            {blog.title}
          </h5>

          <span className="ml-6 flex items-center text-gray-700 bg-white text-sm">
            {blog?.createDate.toString().split("T")[0]}
          </span>
        </div>
        <div className="bg-white text-gray-500 mb-4 ">
          <span className={`bg-custom-blue ${styles.topic}`}>
            {blog?.topic?.charAt(0).toUpperCase() + blog?.topic?.slice(1)}
          </span>
        </div>
        <p className="bg-white mb-3 font-normal text-gray-700 dark:text-gray-400">
          {isContentOpen ? blog?.content : textTruncate(blog?.content, 100)}
        </p>
      </div>
      <div className={`bg-white ${styles.comment}`}>
        <FaComment
          className={`my-4 bg-white text-custom-blue ${styles["comment-icon"]}`}
          onClick={() => setIsCommentOpen(!isCommentOpen)}
        />
      </div>

      {isCommentOpen ? (
        <>
          <CommentInput
            blogId={blog.id}
            userId={+localStorage.getItem("currentUser")!}
            username={localStorage.getItem("username")!}
          />

          <CommentItem key={blog.title} blogId={blog.id} userId={blog.userId} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogItem;
