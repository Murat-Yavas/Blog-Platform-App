import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface blogComments {
  blogId: number;
  commentText: string;
  createDate: Date;
  id: number;
  userId: number;
  username: string;
}

interface Blog {
  content: string;
  createDate: Date;
  id: number;
  title: string;
  updateDate: string | Date;
  username: string;
  topic: string;
  comment: blogComments[];
}

interface BlogState {
  blogs: Blog[];
  isModalOpen: boolean;
}

const initialState: BlogState = {
  blogs: [],
  isModalOpen: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },

    toggleBlogCreateModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    addOneBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },

    addComment: (state, action: PayloadAction<string>) => {},
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
