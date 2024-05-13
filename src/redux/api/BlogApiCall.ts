import { blogActions } from "../blog-slice";

export const fetchAllBlogs = async (dispatch: any) => {
  const response = await fetch("http://localhost:8080/blogs", {
    method: "GET",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: JSON.stringify(localStorage.getItem("tokenKey")),
    },
  });
  const result = await response.json();
  dispatch(blogActions.getBlogs(result));
};

export const fetchAllBlogsByUser = async (dispatch: any, userId: number) => {
  const response = await fetch(`http://localhost:8080/blogs/users/${userId}`, {
    method: "GET",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  });
  const result = await response.json();
  dispatch(blogActions.getBlogsByUser(result));
};

export const createOneBlog = async (
  dispatch: any,
  body: { title: string; topic: string; content: string; userId: number }
) => {
  const response = await fetch("http://localhost:8080/blogs", {
    method: "POST",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  dispatch(blogActions.addOneBlog(result));
};

export const deleteOneBlog = async (dispatch: any, blogId: number) => {
  const response = await fetch(`http://localhost:8080/blogs/${blogId}`, {
    method: "DELETE",
    headers: <any>{
      Authorization: localStorage.getItem("tokenKey"),
    },
  });
  dispatch(blogActions.removeOneBlog(blogId));
};
