import { Blog } from "../../../redux/blog-slice";
import styles from "./BlogItem.module.css";
import { FaComment } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { textTruncate } from "../../../helpers/textTruncate";
import CommentItem from "../CommentItem/CommentItem";
import CommentInput from "../CommentInput/CommentInput";

interface BlogProps {
  blog: Blog;
}

const BlogItem = ({ blog }: BlogProps) => {
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleOpen = () => {
    setIsContentOpen(!isContentOpen);
  };

  return (
    <div
      key={blog.id}
      className={`p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}
    >
      <div className={`bg-white mb-4 ${styles.author}`}>
        <span className="bg-white mr-2">
          <NavLink className={`${styles.avatar}`} to={`/users/${blog.userId}`}>
            {blog?.username?.charAt(0).toUpperCase()}
          </NavLink>
        </span>
        <span className="bg-white">{blog?.username}</span>
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
            Published: {blog?.createDate.toString().split("T")[0]}
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
          <CommentInput blogId={blog.id} userId={4} />
          {/* <div className="bg-white">
            {blog?.comment.map((com) => (
              <CommentItem
                key={com.id}
                text={com?.commentText}
                username={com?.username}
                createDate={com.createDate}
                blogId={com.blogId}
              />
            ))}
          </div> */}
          <CommentItem blogId={blog.id} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogItem;
