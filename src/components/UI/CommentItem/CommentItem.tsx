import { NavLink } from "react-router-dom";
import styles from "./CommentItem.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchCommentsByBlog } from "../../../redux/api/CommentApiCall";
import { useEffect } from "react";

export interface CommentProps {
  // text: string;
  // username: string;
  // createDate: Date;
  blogId: number;
}

const CommentItem = ({ blogId }: CommentProps) => {
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector((state) => state.comment);
  console.log(comments);

  useEffect(() => {
    fetchCommentsByBlog(dispatch, blogId);
  }, []);

  return (
    <div className="bg-white">
      {comments.map((comment) => (
        <div key={comment.id} className={`bg-white ${styles["comment-item"]}`}>
          <div className={`bg-white mb-4 ${styles["user-info"]}`}>
            <span className="bg-white mr-2">
              <NavLink className={`${styles.avatar}`} to="/">
                {comment?.username?.charAt(0).toUpperCase()}
              </NavLink>
            </span>
            <span className="bg-white">{comment?.username}</span>
            <span className="bg-white">
              {comment?.createDate?.toString().split("T")[0]}
            </span>
          </div>
          <div
            className={`bg-white ml-8 text-gray-500 ${styles["comment-text"]}`}
          >
            {comment?.commentText}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentItem;
