import { blogActions } from "../blog-slice";

export const fetchAllBlogs = async (dispatch: any) => {
  const response = await fetch("http://localhost:8080/blogs");
  const result = await response.json();
  dispatch(blogActions.getBlogs(result));
};

export const createOneBlog = async (
  dispatch: any,
  body: { title: string; topic: string; content: string; userId: number }
) => {
  const response = await fetch("http://localhost:8080/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  dispatch(blogActions.addOneBlog(result));
};
