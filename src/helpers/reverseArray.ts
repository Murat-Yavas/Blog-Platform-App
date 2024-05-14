import { Blog } from "../redux/blog-slice";

export const reverseArray = (array: Blog[]) => {
  const reversedBlogsArray = array.map(
    (blog, index) => array[array.length - 1 - index]
  );

  return reversedBlogsArray;
};
