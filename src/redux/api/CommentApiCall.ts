import { commentActions } from "../comment-slice";

export const fetchCommentsByBlog = async (dispatch: any, id: number) => {
  const response = await fetch(`http://localhost:8080/comments/${id}`);
  const result = await response.json();
  dispatch(commentActions.getCommentsByBlog(result));
};

export const createOneComment = async (
  dispatch: any,
  body: { commentText: string; blogId: number; userId: number }
) => {
  const response = await fetch("http://localhost:8080/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  // console.log(result);
  // console.log(body);
  dispatch(commentActions.addOneComment(result));
};
