import React from "react";
import { useAppSelector } from "../../redux/hooks";

const Comment = () => {
  const { comments } = useAppSelector((state) => state.comment);
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.commentText}</div>
      ))}
    </div>
  );
};

export default Comment;
