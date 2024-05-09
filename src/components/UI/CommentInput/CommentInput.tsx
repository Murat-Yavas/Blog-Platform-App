import { useState } from "react";
import { createOneComment } from "../../../redux/api/CommentApiCall";
import { useAppDispatch } from "../../../redux/hooks";
import { blogComments } from "../../../redux/blog-slice";

interface CommentInputProps {
  blogId: number;
  userId: number;
}

const CommentInput = ({ blogId, userId }: CommentInputProps) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useAppDispatch();

  const handleAddComment = () => {
    const body = { commentText, blogId, userId };
    createOneComment(dispatch, body);
    setCommentText("");
    // blog.comment.push(body)
  };

  return (
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="text"
        className="relative m-0  -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
        placeholder="Add a comment"
        aria-label="User's comment"
        aria-describedby="button-addon2"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
      />

      <div className="bg-white ">
        <button
          onClick={() => handleAddComment()}
          className="ml-2 bg-custom-blue hover:bg-blue-300 duration-200 text-white font-bold py-2 px-4 rounded-full"
        >
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
