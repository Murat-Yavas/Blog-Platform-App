import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "./comment-slice";

export interface Blog {
  content: string;
  createDate: string;
  id: number;
  title: string;
  username: string;
  topic: string;
  userId: number;
  comment: Comment[] | null;
}

interface BlogState {
  blogs: Blog[];
  userBlogs: Blog[];
  isModalOpen: boolean;
  searchedBlogs: Blog[];
  searchTerm: string;
  isBlogLoading: boolean;
  isBlogError: boolean;
}

const initialState: BlogState = {
  blogs: [],
  userBlogs: [],
  isModalOpen: false,
  searchedBlogs: [],
  searchTerm: "",
  isBlogLoading: false,
  isBlogError: false,
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

    addSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

    searchBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.searchedBlogs = action.payload;
      // state.blogs = action.payload;
    },

    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isBlogLoading = action.payload;
    },

    toggleIsError: (state, action: PayloadAction<boolean>) => {
      state.isBlogError = action.payload;
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
