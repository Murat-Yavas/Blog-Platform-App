import { NavLink } from "react-router-dom";
import styles from "./CommentItem.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  deleteOneComment,
  fetchCommentsByBlog,
} from "../../../redux/api/CommentApiCall";
import { useEffect } from "react";
import { ImCross } from "react-icons/im";
import Spinner from "../../Spinner/Spinner";
import { reverseCommentArray } from "../../../helpers/reverseArray";

export interface CommentProps {
  blogId: number;
  userId: number;
}

const CommentItem = ({ blogId, userId }: CommentProps) => {
  const dispatch = useAppDispatch();
  const { comments, isCommentLoading, isCommentError } = useAppSelector(
    (state) => state.comment
  );

  useEffect(() => {
    fetchCommentsByBlog(dispatch, blogId);
  }, [dispatch]);

  const handleDeleteComment = (commentId: number) => {
    deleteOneComment(dispatch, commentId);
  };

  const reversedArray = reverseCommentArray(comments);

  if (isCommentLoading) {
    return <Spinner />;
  } else if (isCommentError) {
    return <div>Something went wrong!</div>;
  } else
    return (
      <div className="bg-white">
        {reversedArray.map((comment) => (
          <div
            key={comment.id}
            className={`bg-white ${styles["comment-item"]}`}
          >
            <div className={`bg-white ${styles["comment-top-section"]}`}>
              <div className={`bg-white flex mb-4 ${styles["user-info"]}`}>
                <span className="bg-white mr-2">
                  <NavLink
                    className={`${styles.avatar} avatar-round`}
                    to={`/users/${userId}`}
                  >
                    {comment?.username?.charAt(0).toUpperCase()}
                  </NavLink>
                </span>
                <span className="bg-white text-xl">{comment?.username}</span>
                <span
                  className={`bg-white flex items-center text-gray-500 ${styles["comment-date"]}`}
                >
                  {comment?.createDate?.toString().split("T")[0]}
                </span>
              </div>

              {+localStorage.getItem("currentUser")! === userId ||
              +localStorage.getItem("currentUser")! === comment.userId ? (
                <ImCross
                  className={`bg-white text-custom-blue ${styles["delete-icon"]}`}
                  onClick={() => handleDeleteComment(comment.id)}
                />
              ) : null}
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
