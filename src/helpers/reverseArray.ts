import { Blog } from "../redux/blog-slice";
import { Comment } from "../redux/comment-slice";

export const reverseBlogArray = (array: Blog[]) => {
  const reversedBlogsArray = array.map(
    (blog, index) => array[array.length - 1 - index]
  );

  return reversedBlogsArray;
};

export const reverseCommentArray = (array: Comment[]) => {
  const reversedCommentsArray = array.map(
    (comment, index) => array[array.length - 1 - index]
  );

  return reversedCommentsArray;
};
