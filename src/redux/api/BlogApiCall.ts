import { blogActions } from "../blog-slice";

export const fetchAllBlogs = async (dispatch: any) => {
  dispatch(blogActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/blogs", {
      method: "GET",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: JSON.stringify(localStorage.getItem("tokenKey")),
      },
    });

    if (!response.ok) throw new Error("Failed to fetch blogs");
    const result = await response.json();
    dispatch(blogActions.getBlogs(result));
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(false));
  } catch (error) {
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(true));
  }
};

export const fetchAllBlogsByUser = async (dispatch: any, userId: number) => {
  dispatch(blogActions.toggleIsLoading(true));
  try {
    const response = await fetch(
      `http://localhost:8080/blogs/users/${userId}`,
      {
        method: "GET",
        headers: <any>{
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("tokenKey"),
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const result = await response.json();
    dispatch(blogActions.getBlogsByUser(result));
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(false));
  } catch (error) {
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(true));
  }
};

export const createOneBlog = async (
  dispatch: any,
  body: {
    title: string;
    topic: string;
    content: string;
    userId: number;
    comment: null;
    username: string;
    createDate: string;
  }
) => {
  const response = await fetch("http://localhost:8080/blogs", {
    method: "POST",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
    body: JSON.stringify(body),
  });

  dispatch(blogActions.toggleIsLoading(true));
  try {
    const result = await response.json();
    if (!response.ok) throw new Error("Failed to add a new blog");
    const addedBlog = { ...body, id: result.id };

    dispatch(blogActions.addOneBlog(addedBlog));
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(false));
  } catch (error) {
    dispatch(blogActions.toggleIsLoading(false));
    dispatch(blogActions.toggleIsError(true));
  }
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
