import { NavLink } from "react-router-dom";
import { textTruncate } from "../../helpers/textTruncate";
import styles from "./HomeTextItem.module.css";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { blogActions, blogComments } from "../../redux/blog-slice";
import { FaComment } from "react-icons/fa";
import { fetchCommentsByBlog } from "../../redux/api/CommentApiCall";
import Comment from "../Comment/Comment";
import BlogItem from "../UI/BlogItem/BlogItem";

interface TextProps {
  blogs: {
    id: number;
    username: string;
    title: string;
    createDate: Date;
    content: string;
    topic: string;
    comment: blogComments[];
  }[];
}

const HomeTextItem = ({ blogs }: TextProps) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(blogActions.toggleBlogCreateModal(true));
  };

  const reversedBlogsArray = blogs.map(
    (blog, index) => blogs[blogs.length - 1 - index]
  );

  return (
    <div>
      {blogs.length === 0 ? (
        <h1 className="text-center">
          No posts on this topic yet.{" "}
          <span
            className="text-blue-300 cursor-pointer"
            onClick={handleOpenModal}
          >
            Create one!
          </span>
        </h1>
      ) : (
        reversedBlogsArray.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      )}
    </div>
  );
};

export default HomeTextItem;
