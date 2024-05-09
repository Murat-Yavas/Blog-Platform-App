import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  username: string;
  userId: number;
  commentText: string;
  createDate: Date;
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
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
