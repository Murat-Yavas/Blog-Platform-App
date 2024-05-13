import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: number;
  userId: number;
  blogId: number;
  commentText: string;
  createDate: Date;
  username: string;
}

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = { comments: [] };

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentsByBlog: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },

    addOneComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },

    removeOneComment: (state, action: PayloadAction<number>) => {
      const newComments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments = newComments;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
