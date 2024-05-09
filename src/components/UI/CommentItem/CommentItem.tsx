import { NavLink } from "react-router-dom";
import styles from "./CommentItem.module.css";

interface CommentProps {
  text: string;
  username: string;
  createDate: Date;
}

const CommentItem = ({ text, username, createDate }: CommentProps) => {
  return (
    <div className={`bg-white ${styles["comment-item"]}`}>
      <div className={`bg-white mb-4 ${styles["user-info"]}`}>
        <span className="bg-white mr-2">
          <NavLink className={`${styles.avatar}`} to="/">
            {username?.charAt(0).toUpperCase()}
          </NavLink>
        </span>
        <span className="bg-white">{username}</span>
        <span className="bg-white">{createDate.toString().split("T")[0]}</span>
      </div>
      <div className={`bg-white ml-8 text-gray-500 ${styles["comment-text"]}`}>
        {text}
      </div>
    </div>
  );
};

export default CommentItem;
