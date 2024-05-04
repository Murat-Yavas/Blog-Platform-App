import { NavLink } from "react-router-dom";
import { textTruncate } from "../../helpers/textTruncate";
import styles from "./HomeTextItem.module.css";
import { useState } from "react";

interface TextProps {
  blog: {
    id: number;
    authorName: string;
    title: string;
    createDate: Date;
    content: string;
    topic: string;
  };
}

const HomeTextItem = ({ blog }: TextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}
    >
      <div className={`bg-white mb-4 ${styles.author}`}>
        <span className="bg-white mr-2">
          <NavLink className={`${styles.avatar}`} to="/">
            {blog?.authorName?.charAt(0).toUpperCase()}
          </NavLink>
        </span>
        <span className="bg-white">{blog?.authorName}</span>
      </div>
      <div
        className={`bg-white ${styles.article}`}
        onClick={() => handleOpen()}
      >
        <div className={`bg-white ${styles["article-info"]}`}>
          <h5 className="bg-white mb-1- text-2xl font-bold tracking-tight text-black dark:text-white">
            {blog.title}
          </h5>

          <span className="ml-6 flex items-center text-gray-700 bg-white text-sm">
            Published: {blog.createDate.toString().split("T")[0]}
          </span>
        </div>
        <div className="bg-white text-gray-500 mb-4">
          <span className={`${styles.topic}`}>{blog.topic}</span>
        </div>
        <p className="bg-white mb-3 font-normal text-gray-700 dark:text-gray-400">
          {isOpen ? blog.content : textTruncate(blog.content, 100)}
        </p>
      </div>
    </div>
  );
};

export default HomeTextItem;
