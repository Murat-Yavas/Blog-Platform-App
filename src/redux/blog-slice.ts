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

interface BlogState {
  blogs: Blog[];
  userBlogs: Blog[];
  isModalOpen: boolean;
}

const initialState: BlogState = {
  blogs: [],
  userBlogs: [],
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

    removeOneBlog: (state, action: PayloadAction<number>) => {
      const newBlogs = state.blogs.filter((blog) => blog.id !== action.payload);
      state.blogs = newBlogs;
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
