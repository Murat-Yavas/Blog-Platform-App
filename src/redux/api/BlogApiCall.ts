import { blogActions } from "../blog-slice";

export const fetchAllBlogs = async (dispatch: any) => {
  const response = await fetch("http://localhost:8080/blogs");
  const result = await response.json();
  dispatch(blogActions.addBlogs(result));
};
