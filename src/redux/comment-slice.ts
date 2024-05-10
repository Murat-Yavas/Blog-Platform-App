import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: number;
  userId: number;
  commentText: string;
  createDate: Date;
  username: string;
  blogId: number;
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
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
