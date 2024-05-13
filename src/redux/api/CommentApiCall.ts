import { commentActions } from "../comment-slice";

export const fetchCommentsByBlog = async (dispatch: any, id: number) => {
  const response = await fetch(`http://localhost:8080/comments/${id}`, {
    method: "GET",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  });
  const result = await response.json();
  dispatch(commentActions.getCommentsByBlog(result));
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
  const response = await fetch("http://localhost:8080/comments", {
    method: "POST",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  const userComment = { ...result, username: body.username };
  dispatch(commentActions.addOneComment(userComment));
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
