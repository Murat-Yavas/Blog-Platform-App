import { blogActions } from "../blog-slice";
import { commentActions } from "../comment-slice";

export const fetchCommentsByBlog = async (dispatch: any, id: number) => {
  dispatch(commentActions.toggleIsLoading(true));
  try {
    const response = await fetch(`http://localhost:8080/comments/${id}`, {
      method: "GET",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
    });
    if (!response.ok) throw new Error("Failed to fetch comments");
    const result = await response.json();
    dispatch(commentActions.getCommentsByBlog(result));
    dispatch(commentActions.toggleIsLoading(false));
    dispatch(commentActions.toggleIsError(false));
  } catch (error) {
    dispatch(commentActions.toggleIsLoading(false));
    dispatch(commentActions.toggleIsError(true));
  }
};

export const createOneComment = async (
  dispatch: any,
  body: {
    userId: number;
    blogId: number;
    commentText: string;
    username: string;
  }
) => {
  dispatch(commentActions.toggleIsLoading(true));
  try {
    const response = await fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    if (!response.ok) throw new Error("Failed to add a new comment");
    const userComment = {
      ...result,
      username: body.username,
      userId: body.userId,
    };
    dispatch(blogActions.updateBlogAfterComment(userComment));
    dispatch(commentActions.addOneComment(userComment));
    dispatch(commentActions.toggleIsLoading(false));
    dispatch(commentActions.toggleIsError(false));
  } catch (error) {
    dispatch(commentActions.toggleIsLoading(false));
    dispatch(commentActions.toggleIsError(true));
  }
};

export const deleteOneComment = async (dispatch: any, commentId: number) => {
  const response = await fetch(`http://localhost:8080/comments/${commentId}`, {
    method: "DELETE",
    headers: <any>{
      Authorization: localStorage.getItem("tokenKey"),
    },
  });

  dispatch(commentActions.removeOneComment(commentId));
};
