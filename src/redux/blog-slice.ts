import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "./comment-slice";

export interface Blog {
  content: string;
  createDate: Date;
  id: number;
  title: string;
  username: string;
  topic: string;
  userId: number;
  comment: Comment[];
}

// interface NewComment {
//   commentText: string;
//   blogId: number;
//   userId: number;
// }

interface BlogState {
  blogs: Blog[];
  userBlogs: Blog[];
  // newBlogComment: NewComment | null;
  isModalOpen: boolean;
}

const initialState: BlogState = {
  blogs: [],
  userBlogs: [],
  // newBlogComment: null,
  isModalOpen: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },

    getBlogsByUser: (state, action: PayloadAction<Blog[]>) => {
      state.userBlogs = action.payload;
    },

    toggleBlogCreateModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    addOneBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },

    // addComment: (state, action: PayloadAction<NewComment>) => {
    //   state.newBlogComment = action.payload;
    // },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
